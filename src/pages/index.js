import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/profile";

export default () => (
  <Layout>
    <Profile />
    <h1>This App Rules</h1>
    <Link to="/dashboard">Go to the dashboard</Link>
  </Layout>
);
