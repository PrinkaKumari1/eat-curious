import React, { useEffect, useRef } from "react";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import AboutSection4 from "./AboutSection4";
import EmptySection from "./EmptySection";


import "./AboutSection.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const aboutRefs = useRef([]);

  useEffect(() => {
    const panels = aboutRefs.current;
    gsap.utils.toArray(panels).forEach((panel) => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: "top top", 
          pin: true,
          pinSpacing: false,
        },
      });
    });
  }, []);

  const handleSection1Ref = (ref) => {
    aboutRefs.current[0] = ref;
  };

  const handleSection2Ref = (ref) => {
    aboutRefs.current[1] = ref;
  };

  const handleSection3Ref = (ref) => {
    aboutRefs.current[2] = ref;
  };

  const handleSection4Ref = (ref) => {
    aboutRefs.current[3] = ref;
  };

  return (
    <div className="main-about-section">
      <AboutSection1 handleSection1Ref={handleSection1Ref} />
      <AboutSection2 handleSection2Ref={handleSection2Ref} />
      <AboutSection3 handleSection3Ref={handleSection3Ref} />
      <AboutSection4 handleSection4Ref={handleSection4Ref} />
      <EmptySection/>
    </div>
  );
}

export default AboutSection;