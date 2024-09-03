import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from "@/assets/img/aitalent/image1.jpg";
import image2 from "@/assets/img/aitalent/image2.jpg";
import image3 from "@/assets/img/aitalent/image3.jpg";
import image4 from "@/assets/img/aitalent/image4.jpg";
import image5 from "@/assets/img/aitalent/image5.jpg";
import image6 from "@/assets/img/aitalent/image6.jpg";
import image7 from "@/assets/img/aitalent/image7.jpg";
import image8 from "@/assets/img/aitalent/image8.jpg";
import image9 from "@/assets/img/aitalent/image9.jpg";
import image10 from "@/assets/img/aitalent/image10.jpg";
import image11 from "@/assets/img/aitalent/image11.jpg";
import image12 from "@/assets/img/aitalent/image12.jpg";
import image13 from "@/assets/img/aitalent/image13.jpg";
import image14 from "@/assets/img/aitalent/image14.jpg";
const Portfolio = () => {
  const [text, setText] = useState('Drive sales');
  const [image, setImage] = useState(image1);
  const [animate, setAnimate] = useState(true);
  const [playPause, setPlayPause] = useState(false);
  const texts = ['Drive sales', 'Stand out', 'Be found', 'Show up'];
  const images = [image1, image2, image3, image4];


  const [isChecked, setIsChecked] = useState([false, false, false]);
  const info = [
    'Spend ₹20000 with Google Ads in the first 60 days to unlock the credit.',
    'Spend ₹60000 with Google Ads in the first 60 days to unlock the credit.',
    'Spend ₹60000 with Google Ads in the first 60 days to unlock the credit.'
  ];
  const handleCheckboxChange = (index) => {
    const newIsChecked = Array(3).fill(false);
    newIsChecked[index] = !isChecked[index];
    setIsChecked(newIsChecked);
  };
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  useEffect(() => {
    if (animate) {
      const intervalId = setInterval(() => {
        const currentIndex = texts.indexOf(text);
        const nextIndex = (currentIndex + 1) % texts.length;
        setText(texts[nextIndex]);
        setImage(images[nextIndex]);
      }, 2000);
      return () => clearInterval(intervalId);
    }
  }, [animate, texts, images]);

  const handlePlayPause = () => {
    setPlayPause(!playPause);
    setAnimate(!animate);
  };

  return (
    <div
      style={{
        top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(236 216 249)', border: '1px solid #e8f0fe',
      }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: '50px' }}>
        <span
          style={{
            marginRight: 10, fontSize: 60, transform: animate ? 'translateY(-100px)' : 'translateY(0)', transition: 'transform 0.5s ease-in-out',
          }}
        >
          {text}
        </span>
        <div
          style={{
            width: 300, height: 300, borderRadius: '20%', overflow: 'hidden', border: '1px solid #ddd',
          }}
        >
          <Image src={image} alt="Image" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '50px', justifyContent: 'center', }}>
        <h1 style={{ fontSize: '100px' }}>with google ads</h1>
        {playPause ? (
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlePlayPause}
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#1C274C" />

          </svg>
        ) : (
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlePlayPause}
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z" fill="#1C274C" />
          </svg>
        )}
      </div>
      <div style={{ fontSize: '50px', marginTop: '50px' }}>
        AITQ helps you many ways
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '30vh', marginTop: '80px', marginLeft: '68px' }}>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: 'white', color: 'black', padding: '10px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15vh'}}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: '10px' }}
            >
              <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Search
          </button>
          <button style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: 'white', color: 'black', padding: '10px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15vh' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="20px"
              height="20px"
              role="presentation"
              class="glue-icon facet-icon"
              style={{ marginRight: '10px' }}
            >
              <path d="M19.5 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16h-14V5h14v14Zm-8-3.28 3-3.72 4 5h-12l3-4 2 2.72Z"></path>
            </svg>
            Display
          </button>
          <button style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: 'white', color: 'black', padding: '10px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15vh' }}>
            <svg
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              aria-hidden="true"
              role="presentation"
              class="glue-icon facet-icon"
              style={{ marginRight: '5px' }}
            >
              <path d="M18.997 2h-5.87c-.8 0-1.56.32-2.12.88l-8.13 8.13a3 3 0 0 0 0 4.24l5.87 5.87c.59.59 1.36.88 2.12.88s1.54-.29 2.12-.88l8.13-8.12c.56-.56.88-1.33.88-2.12V5c0-1.66-1.34-3-3-3Zm1 8.88c0 .27-.1.52-.29.71l-8.13 8.12a.96.96 0 0 1-.71.29c-.16 0-.45-.04-.71-.29l-5.87-5.87a1.017 1.017 0 0 1 0-1.42l8.13-8.13c.19-.19.45-.29.71-.29h5.87c.55 0 1 .45 1 1v5.88Z"></path>
              <path d="M16.497 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            </svg>
            Shopping
          </button>
          <button style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: 'white', color: 'black', padding: '10px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15vh' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="20px"
              height="20px"
              role="presentation"
              class="glue-icon facet-icon"
              style={{ marginRight: '10px' }}
            >
              <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3z"></path>
            </svg>
            Video
          </button>
          <button style={{ border: '1px solid black', borderRadius: '20px', backgroundColor: '#202124', color: 'black', padding: '10px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15vh' }}>
            <svg
              viewBox="-4 -4 24 24"
              aria-hidden="true"
              width="20px"
              height="20px"
              role="presentation"
              class="glue-icon facet-icon"
              style={{ marginRight: '20px' }}
            >
              <path d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm6 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-4-2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm-2-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm8-2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm2-6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm4 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm2 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Z"></path></svg>
            App
          </button>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: 200,
              height: 400,
              backgroundColor: '#fff',
              borderRadius: 30,
              overflow: 'visible',
              boxShadow: 'rgb(22 23 26 / 7%) 0px 3px 10px',
              perspective: 1000,
            }}
          >
            <Image
              src={image11}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: 'translateZ(50px)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: '18vh' }}>
          <h1>Promote your app</h1>
          <p style={{ marginTop: '5vh', wordBreak: 'break-all' }}>Reach people who are interested in apps like yours to drive installations, or choose to re-engage current users to drive more in-app actions.</p>
        </div>
      </div>
      <div style={{ width: '100%', height: '100%', backgroundColor: 'white', marginTop: '10vh' }}>
        <p style={{ fontSize: '35px', color: '#10e310' }} className="mt-150 text-center">Achieve all your goals in one place with walking Store.</p>
        <button style={{ border: '1px solid black', padding: '10px', marginTop: '20px', marginLeft: '92vh', borderRadius: '5px', color: 'blue' }}>Learn More</button>
        <div style={{
          maxWidth: 600,
          margin: '40px auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}></div>

        <div style={{ maxWidth: '100%', margin: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', float: 'inline-start' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, gap: '250px' }}>
            <div style={{ width: '33.33%', marginRight: 20 }}>
              <div style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}>
                <Image src={image5} alt="Image 1" style={{ width: '50%', height: '80%', objectFit: 'cover', borderRadius: 10, marginLeft: '50px' }} />
              </div>
              <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>Maximise leads and conversions
                Get better quality leads and enhance conversions.</div>
            </div>
            <div style={{ width: '33.33%', marginRight: 20 }}>
              <div style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}>
                <Image src={image6} alt="Image 2" style={{ width: '50%', height: '80%', objectFit: 'cover', borderRadius: 10, marginLeft: '50px' }} />
              </div>
              <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>Increase online sales
                Show up where shoppers are and increase site traffic and sales.</div>
            </div>
            <div style={{ width: '33.33%', marginRight: 0 }}>
              <div style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}>
                <Image src={image7} alt="Image 3" style={{ width: '50%', height: '80%', objectFit: 'cover', borderRadius: 10, marginLeft: '50px' }} />
              </div>
              <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>Drive in-store foot traffic
                Bring people through your doors and increase offline sales.</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, gap: '250px' }}>
            <div style={{ width: '50%', marginRight: 20 }}>
              <div style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}>
                <Image src={image8} alt="Image 4" style={{ width: '25%', height: '80%', objectFit: 'cover', borderRadius: 10, marginLeft: '300px' }} />
              </div>
              <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 20, marginLeft: '200px' }}>Show your brand to more people
                Put your brand out there to increase reach and engagement.</div>
            </div>
            <div style={{ width: '50%', marginRight: 0 }}>
              <div style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }}>
                <Image src={image9} alt="Image 5" style={{ width: '25%', height: '80%', objectFit: 'cover', borderRadius: 10, marginLeft: '100px' }} />
              </div>
              <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 20, marginRight: '200px' }}>Market your app to new users
                Put your app in front of the right users to drive downloads and engagement.</div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#e8f0fe', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', width: '80%', marginTop: '50px', marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

              <Image src={image10} alt="Image 5" style={{ display: 'inline-block' }} />
            </div>
            <br />
            <div style={{ width: '80%', margin: '0 auto', textAlign: 'center', lineHeight: '1.5', fontSize: '35px', fontWeight: 'bold' }}>
              Choose a sign-up offer to jumpstart your first campaign
            </div>
            <div style={{ width: '80%', margin: '20px auto', textAlign: 'center', lineHeight: '1.5' }}>Select an offer that fits your monthly budget and sign up when ready. You’ll receive your account credit once you meet the minimum spend requirement for the offer you selected. <a href="https://www.example.com" style={{ textDecoration: 'none', color: '#007bff', ':visited': { color: '#03055b' } }}>Terms and conditions apply.</a></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  style={{
                    width: '300px',
                    height: '250px',
                    border: isChecked[index] ? '1px solid blue' : '1px solid #ddd',
                    borderRadius: '10px',
                    padding: '20px',
                    margin: '20px',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '80%',
                      border: '1px solid #ccc',
                      backgroundColor: '#fff',
                      cursor: 'pointer'
                    }}

                  />
                  <button style={{ backgroundColor: '#e8f0fe', display: 'block', margin: '0 auto', padding: '4px', border: '1px solid #e8f0fe', borderRadius: '20px' }}>
                    Click me
                  </button>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>Line 1</p>
                    <p style={{ textAlign: 'center' }}>Line 2</p>
                  </div>
                  <p style={{ fontSize: '16px', color: '#333', textAlign: 'center' }}>
                    {info[index]}
                  </p>
                </div>
              ))}

            </div>
            <div style={{
              textAlign: 'center',
              marginTop: '20px',
              display: 'flex',
              justifyContent: "space-between",
              backgroundColor: isChecked.some((checked) => checked) ? '#b5a9a9' : '#ccc',
              padding: '30px',
              borderRadius: '20px',
              margin: '0 50px 50px',
              opacity: isChecked.some((checked) => checked) ? 1 : 0.5,
              pointerEvents: isChecked.some((checked) => checked) ? 'auto' : 'none'
            }}>
              <p style={{ color: isChecked.some((checked) => checked) ? '#333' : '#999', textAlign: 'left' }}>
                <span style={{ fontWeight: 'bold', fontSize: '22px' }}>{isChecked.some((checked) => checked) ? 'How to claim your offer' : 'Please select a card'}</span>
                <br />
                {isChecked.some((checked) => checked) ? 'Sign up and complete payment setup to apply the offer to your account.' : ''}
              </p>
              <button
                style={{
                  backgroundColor: isChecked.some((checked) => checked) ? '#1a73e8' : '#ccc',
                  color: 'white',
                  padding: '18px',
                  width: '150px',
                  border: '1px solid #e8f0fe',
                  borderRadius: '10px',
                  cursor: isChecked.some((checked) => checked) ? 'pointer' : 'not-allowed'
                }}
                onClick={handleButtonClick}
                disabled={!isChecked.some((checked) => checked)}
              >
                Click me
              </button>
            </div>

            

                 

            </div>
            
          </div>
          <div >
              <div style={{
                width: 'auto',
                fontSize: '30px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginLeft: '45vh',
                marginRight: '45vh',
                marginTop:'10vh',
                color:'black'
              }}>
                The power of Walking Store, One Stop Solution for your business.
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '20px',
                  wordWrapWrap: 'wrap',
                  width: '60%'
                }}>
                  <div style={{
                    width: '150vh',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: '20px'
                  }}>
                    <Image src={image12} alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                    <h5 style={{ lineHeight: '1.4', letterSpacing: 'normal' }}>Reach customers wherever they are</h5>
                    <p>Show up at the right time and place across the vast Google Ads ecosystem. Let Google’s AI find your best performing ad formats across Youtube, Discover, Search, and more to maximise conversions.</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '20px',
                  wordWrapWrap: 'wrap',
                  width: '60%'
                }}>
                  <div style={{
                    width: '150vh',
                    height: '200px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: '20px'
                  }}>
                    <Image src={image13} alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>

                    <h5 style={{ lineHeight: '1.4', letterSpacing: 'normal' }}>Track, learn, and optimise for ROI</h5>
                    <p>Track conversions to get unmatched audience insights. Google’s budget-optimising automation helps you capture new customer opportunities with the highest ROI.</p>
                  </div>

                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '20px',
                  wordWrapWrap: 'wrap',
                  width: '60%'
                }}>
                  <div style={{
                    width: '150vh',
                    height: '200px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: '20px'
                  }}>
                    <Image src={image14} alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>

                    <h5 style={{ lineHeight: '1.4', letterSpacing: 'normal' }}>Stay in full control of your budget</h5>
                    <p>Get recommendations, decide your monthly budget, and adjust at any time. Google technology helps you measure results and make the most of your ad spend.</p>
                  </div>
                </div>
              </div>



              <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#f8f9fa',
          width: '180vh',
          height: '50vh',
          margin:'20vh 50px',
          borderRadius:'5vh'
        }}
      >
        <h1 style={{textAlign:'center',marginTop:'10vh'}}>Let us help.</h1>
        <p style={{textAlign:'center',lineHeight:'5.5'}}>Get started with our free-of-charge, personalised support. Create your custom ads plan with a Google Ads Expert.</p>
        <div style={{
  textAlign: 'center'
}}>
  <button
    style={{
      backgroundColor: 'white',
      color: 'blue',
      border: '1px solid grey',
      borderRadius:'5px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#bef0f3';
      e.target.style.borderColor = 'blue';
    }}
    onMouseLeave={(e)=>{
      e.target.style.backgroundColor='white';
      e.target.style.borderColor = 'grey';
    }}
  >
    Schedule a meeting
  </button>
</div>
        
      </div>
    </div>


        </div>
      </div>
    </div>
  );
};

export default Portfolio;






