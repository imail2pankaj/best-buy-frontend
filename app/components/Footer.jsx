import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer">
      <Container className="container">
        <Row className="row ">
          <div className="col-lg-6">
            <p className="mb-0">
              Copyrights © 2024. Designed & Developed by{" "}
              <a
                href="https://www.scenicitsolutions.com"
                target="_blank"
                className="text-white"
              >
                Scenic IT Solutions
              </a>
            </p>
          </div>
          <div className="col-lg-6">
            <div className="widget footer-widget text-lg-end mt-5 mt-lg-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    rel="noreferrer"
                    aria-label="Refurbished Lenovo ThinkPad Laptop in Rajkot - Facebook"
                    href="https://www.facebook.com/people/Best-Buy-Laptop/61558034800529/"
                    target="_blank"
                  >
                    <i className="ti ti-facebook me-3"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/best-buy-laptops/"
                    aria-label="Your Destination for Refurbished Laptops in Rajkot - Linkedin"
                    target="_blank"
                  >
                    <i className="ti ti-linkedin me-3"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    rel="noreferrer"
                    aria-label="Pre-owned laptops Rajkot - Instagram"
                    href="https://www.instagram.com/bestbuyyourdeal/"
                    target="_blank"
                  >
                    <i className="ti ti-instagram me-3"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    rel="noreferrer"
                    aria-label="Refurbished computer store Rajkot - Twitter"
                    href="#"
                    target="_blank"
                  >
                    <i className="ti ti-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
