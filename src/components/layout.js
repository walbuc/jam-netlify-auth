import React from "react";
import { Link } from "gatsby";
import "./layout.css";
import { IdentityContextProvider } from "react-netlify-identity-widget";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-walter-auth.netlify.app">
    <header>
      <Link to="/">JAMSTack APP</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
