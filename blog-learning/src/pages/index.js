import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Gatsby JS Test</h1>
      <h3>I'm full-stack developer</h3>
      <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage