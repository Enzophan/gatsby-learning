import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import footerStyles from './footer.module.scss';


const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `);

  return (
    // <footer className={footerStyles.footer}>
    //   <p>Create by {data.site.siteMetadata.author}, © 2020</p>
    // </footer>

    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerSocial} >
        <Row >
          <Col sm={8}>
            <div>

            </div>
          </Col>

          <Col sm={4}>

            {/* <a class="fb-ic">
                <i class="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram white-text"> </i>
              </a> */}

          </Col>

        </Row>
      </div>



      {/* Footer Link */}

      <div className={footerStyles.footerLink}>
        <Row className={footerStyles.footerLinkRow}>
          <Col xs={12} md={4} className={footerStyles.footerLinkColImage}>
            <h6 className="">Image</h6>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="holder.js/64x64"
              alt="Generic placeholder"
            />
          </Col>

          <Col xs={12} md={8}>
            <Row className={footerStyles.footerLinkRow}>
              <Col sm={3}>
                <h5 className="">Company</h5>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>About Us</Link>
                </p>
              </Col>

              <Col sm={3}>
                <h5 className="">Driver</h5>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Be a GOJO driver</Link>
                </p>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>How it works</Link>
                </p>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Driver Safety</Link>
                </p>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>GOJO Driver Cente</Link>
                </p>
              </Col>

              <Col sm={3}>
                <h5 className="">Rider</h5>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Services</Link>
                </p>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Why GOJO?</Link>
                </p>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Book a ride</Link>
                </p>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Rider Safety</Link>
                </p>
              </Col>

              <Col sm={3}>
                <h5 className="">Help</h5>
                <p>
                  <Link className={footerStyles.footerItem} activeClassName={footerStyles.activeFooterItem} to='#!'>Help Centre</Link>
                </p>

              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className={footerStyles.footerAuth}>
        <span>Create by {data.site.siteMetadata.author}, © 2020</span>
      </div>

    </footer>
  )
}

export default Footer