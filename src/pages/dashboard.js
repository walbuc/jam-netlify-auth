import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";
import PrivateRoute from "../components/private-route";
import Profile from "../components/profile";
import IdentityModal from "react-netlify-identity-widget";
import { Router } from "@reach/router";
import "react-netlify-identity-widget/styles.css";

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const showModal = () => setVisibility(true);
  const closeModal = () => setVisibility(false);
  return (
    <Layout>
      <p>toooo doooo</p>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={closeModal} />
    </Layout>
  );
};

export default Dashboard;
