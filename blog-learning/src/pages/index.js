import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Gatsby JS Test</h1>
      <h3>I'm full-stack developer</h3>
      <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage