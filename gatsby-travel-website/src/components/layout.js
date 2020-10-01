import React from "react"
import PropTypes from "prop-types"

// import Header from "./header"
import "./layout.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
