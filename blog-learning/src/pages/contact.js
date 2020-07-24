import React from "react";
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Address: </p>
      <p>Phone:</p>
      <p>Email: <a href="https://fb.com" target="_blank" rel="noreferrer">nhan.phan@qupworld.com</a></p>
    </Layout>
  )
}

export default ContactPage