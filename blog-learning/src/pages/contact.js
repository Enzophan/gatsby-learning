import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = ({ intl }) => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>{intl.formatMessage({ id: "contact.ADDRESS" })}: 271 Nguyen Van Linh, Danang, Vietnam</p>
      <p>{intl.formatMessage({ id: "contact.PHONE" })}: +84 904 777 447</p>
      <p>{intl.formatMessage({ id: "contact.EMAIL" })}: <a href="https://fb.com" target="_blank" rel="noreferrer">nhan.phan@qupworld.com</a></p>
      <p><Link to='/'><FormattedMessage id="go_back" /></Link></p>
    </Layout>
  )
}

export default injectIntl(ContactPage)
