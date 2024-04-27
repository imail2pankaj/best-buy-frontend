'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="main-nav " id="navbar">
      <Container>
        <Link
          className="navbar-brand"
          href="/"
          aria-label="Shop High-Quality Refurbished Laptops in Rajkot"
        >
          <Image
            height={67}
            width={220}
            src="/logo.png"
            alt="Welcome to BestBuy - Your Destination for Refurbished Laptops in Rajkot"
            className="img-fluid"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Image
            alt="Hello"
            height="20"
            width="20"
            src="https://unpkg.com/@icon/themify-icons/icons/align-justify.svg"
          />
        </Navbar.Toggle>

        <Navbar.Collapse className="collapse navbar-collapse" id="navbarsExample09">
          <Nav className="ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
