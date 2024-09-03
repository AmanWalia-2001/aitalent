import React, { useState } from 'react';
import Image from 'next/image';

const BreadcrumbSeven = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [industry, setIndustry] = useState('');
  const [otherIndustry, setOtherIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [sendVerificationEmail, setSendVerificationEmail] = useState(false);
  const [sendOfferEmail, setSendOfferEmail] = useState(false);
  const [sendNewsletter, setSendNewsletter] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your server or API
    console.log('Form submitted:', {
      name,
      businessName,
      businessType,
      industry,
      otherIndustry,
      location,
      contactNumber,
      email,
      sendVerificationEmail,
      sendOfferEmail,
      sendNewsletter,
      captchaToken,
    });
  };

  return (
    <>
      <div className="breadcrumb__area breadcrumb-height-2 breadcrumb-overlay p-relative fix"
        style={{ backgroundImage: `url(/assets/img/project/project-brdcrmb-bg.jpg)` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content z-index-3 text-center">
                <div style={{ backgroundColor: '#e8f0fe', border: '1px solid #e8f0fe', borderRadius: '15px', padding: '30px', }}>
                  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <button style={{ backgroundColor: '#c9e4ed', border: '1px solid #c9e4ed', borderRadius: '15px', padding: '10px', color: 'blue' }}>$3,00,000</button>
                    <h6>Your $3,00,000 USD in Websites and Apps Credit is Ready to be claimed.</h6>
                    <button 
                      style={{ backgroundColor: '#c9e4ed', border: '1px solid #c9e4ed', borderRadius: '5px', padding: '10px', color: 'blue' }}
                      onClick={() => setModalVisible(true)}
                    >Claim Now</button>
                  </div>
                  <p>Valid for Three Year, Redeem coupon at nearest store and online.</p>
                  <a href="https://example.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', ':visited': { color: 'darkblue', }, }}>Terms and Conditions Applied</a>

                  {modalVisible && (
                    <div style={{ position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                      <div style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <button 
                            style={{ backgroundColor: 'transparent', border: 'none', padding: '5px', cursor: 'pointer' }}
                            onClick={() => setModalVisible(false)}
                          >&times;</button>
                        </div>
                        <h2>Claim Your Credit</h2>
                        <p>Enter your details to claim your $3,00,000 USD credit.</p>
                        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label for="name" style={{ display: 'block', marginBottom: '10px' }}>Name:</label>
    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label for="businessName" style={{ display: 'block', marginBottom: '10px' }}>Business Name:</label>
    <input type="text" id="businessName" value={businessName} onChange={(event) => setBusinessName(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label for="businessType" style={{ display: 'block', marginBottom: '10px' }}>Business Type:</label>
    <select id="businessType" value={businessType} onChange={(event) => setBusinessType(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <option value="">Select Business Type</option>
      <option value="Sole Proprietorship">Sole Proprietorship</option>
      <option value="Partnership">Partnership</option>
      <option value="Private Limited Company">Private Limited Company</option>
      <option value="Public Limited Company">Public Limited Company</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label for="industry" style={{ display: 'block', marginBottom: '10px' }}>Industry:</label>
    <select id="industry" value={industry} onChange={(event) => setIndustry(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <option value="">Select Industry</option>
      <option value="Technology">Technology</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Finance">Finance</option>
      <option value="E-commerce">E-commerce</option>
      <option value="Other">Other</option>
    </select>
  </div>
  {industry === 'Other' && (
    <div className="form-group" style={{ marginBottom: '20px' }}>
      <label for="otherIndustry" style={{ display: 'block', marginBottom: '10px' }}>Other Industry:</label>
      <input type="text" id="otherIndustry" value={otherIndustry} onChange={(event) => setOtherIndustry(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
  )}
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label for="location" style={{ display: 'block', marginBottom: '10px' }}>Location:</label>
    <input type="text" id="location" value={location} onChange={(event) => setLocation(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
  </div>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label for="contactNumber" style={{ display: 'block', marginBottom: '10px' }}>Contact Number:</label>
    <input type="tel" id="contactNumber" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}/>
      </div>
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label for="email" style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
      </div>
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label>
          <input type="checkbox" id="sendVerificationEmail" checked={sendVerificationEmail} onChange={(event) => setSendVerificationEmail(event.target.checked)} />
          Send Verification Email
        </label>
      </div>
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label>
          <input type="checkbox" id="sendOfferEmail" checked={sendOfferEmail} onChange={(event) => setSendOfferEmail(event.target.checked)} />
          Send Offer Email
        </label>
      </div>
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label>
          <input type="checkbox" id="sendNewsletter" checked={sendNewsletter} onChange={(event) => setSendNewsletter(event.target.checked)} />
          Send Newsletter
        </label>
      </div>
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label for="captchaToken" style={{ display: 'block', marginBottom: '10px' }}>Captcha Token:</label>
        <input type="text" id="captchaToken" value={captchaToken} onChange={(event) => setCaptchaToken(event.target.value)} required style={{ width: '100%', height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '40px', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#337ab7', color: '#fff', cursor: 'pointer' }}>Claim Now</button>
    </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbSeven;