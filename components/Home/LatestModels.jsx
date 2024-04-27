import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";

const LatestModels = () => {
  return (
    <section className="portfolio ">
      <Container>
        <Row className="mb-3 mb-md-5">
          <div className="col-12">
            <h3>Latest Models</h3>
          </div>
        </Row>

        <div className="row shuffle-wrapper portfolio-gallery home">
          <div
            className="col-lg-4 col-md-6 col-12 mb-4 shuffle-item"
            data-groups='["design","illustration"]'
          >
            <div className="position-relative inner-box">
              <div className="image position-relative ">
                <a
                  className="overlay-content"
                  aria-label="Best quality Refurbished Laptops in Gujarat"
                  href="portfolio-detail.html"
                >
                  <Image
                    src="/portfolio/DELL-LATITUDE-E7480.webp"
                    loading="lazy"
                    height="350"
                    width="350"
                    alt="Why Choose Our Refurbished Laptops in Rajkot?"
                    className="img-fluid w-100 d-block"
                  />
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <h5 className="mb-0">DELL LATITUDE E7480</h5>
                      <p>Intel Core i5 6TH GEN</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestModels;
