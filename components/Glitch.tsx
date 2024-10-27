"use client";

import React, {useRef, useEffect} from "react";
import gsap, {Sine} from 'gsap';

function Glitch() {
  let loading_screen = useRef(null);
  let logo_1 = useRef(null);
  let logo_2 = useRef(null);
  let logo_3 = useRef(null);
  let logo_4 = useRef(null);
  let logo_5 = useRef(null);
  let logo_6 = useRef(null);
  const timeline = gsap.timeline();
  useEffect(() => {
    timeline.from(logo_1, {
      opacity: 0,
      duration: 0.5,
      skewX: 10,
      y: -200,
      ease: Sine.easeInOut,
    });
    timeline.from(
      logo_2,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      logo_3,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      logo_4,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: -200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      logo_5,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: -200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      logo_6,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 200,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(logo_2, {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      ease: Sine.easeInOut,
      x: -200,
    });
    timeline.to(
      logo_5,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );
    timeline.to(
      logo_3,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -300,
      },
      "-=.2"
    );
    timeline.to(
      logo_6,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 300,
      },
      "-=.2"
    );
    timeline.to(
      logo_4,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -300,
      },
      "-=.2"
    );
    timeline.to(logo_1, {
      fontSize: "2vmax",
      ease: Sine.easeInOut,
    });
  });
}