"use client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="section banner">
      <Container>
        <Row className="row">
          <div className="col-lg-11">
            <h1 className="cd-headline clip is-full-width mb-4 ">
              We Sale <br />
              <TypeAnimation
                preRenderFirstString={true}
                className="text-color"
                wrapper="span"
                sequence={[
                  "Laptops",
                  1000,
                  "Desktops",
                  1000,
                  "Computer Accessories",
                  1000,
                  "Repairing & Services",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <br />
            <p>
              Welcome to BestBuy! Since 2012, we&apos;ve been your go-to spot
              for all things tech. We&apos;re passionate about giving you the
              best products and service around. Whether you&apos;re a tech
              expert or just getting started, we&apos;re here to make your
              experience easy and enjoyable. <br />
              With a wide selection of products and expert advice, we strive to
              be your trusted partner in all your tech needs. Come visit us
              today and see why we&apos;re the best in the business!
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
