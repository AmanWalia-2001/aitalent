import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderSix style_2={true}/>
      <main>
        <BreadcrumbSeven/>
        <Portfolio style={{ marginBottom: '8px' }} />
      </main>
      <FooterFive style_contact={true} style_team={true} style={{ marginTop: '2px' }} />
    </>
  );
};

export default Project;