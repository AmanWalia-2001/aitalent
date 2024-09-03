const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Home",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/", title: "Data analytics" },
      
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "About us",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Service Details" },
      { link: "/team", title: "Team" },
      { link: "/team-details", title: "Team Details" },
      { link: "/career", title: "Career" },
      { link: "/career-details", title: "Career Details" },
      { link: "/integrations", title: "Integrations" },
      { link: "/price", title: "Price" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Signin" },
      { link: "/404", title: "404" }, 
    ],
  },
  
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "For-Businesses",
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Start Hiring" },
      { link: "/project-details", title: "Project Details" }, 
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Find-Work",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "For students" },
      { link: "/blog-list", title: "Freelancers" },
      { link: "/blog-details", title: "Experience Candidate" },
    ],
  },
  
  // {
  //   id: 5,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Contact",
  //   link: "/contact",
  //   active: "",
  // },
  

];
export default menu_data;
