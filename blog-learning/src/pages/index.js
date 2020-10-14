import React from "react";
// import { Link } from 'gatsby';
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import SEO from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "title" })}
      />
      <h1>{intl.formatMessage({ id: "title" })}</h1>
      <h3>I'm full-stack developer</h3>
      <p>Need a developer? <Link to='/contact'><FormattedMessage id="contact_me" /></Link></p>
    </Layout>
  )
}

export default IndexPage