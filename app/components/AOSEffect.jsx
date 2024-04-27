'use client'
import Aos from "aos";
import React, { useEffect } from "react";

const AOSEffect = ({ children }) => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return <>{children}</>;
};

export default AOSEffect;
