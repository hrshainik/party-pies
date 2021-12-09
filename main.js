document.addEventListener("DOMContentLoaded", () => {
  const controller = new ScrollMagic.Controller();

  const timeline = new TimelineMax();
  timeline
    .from(".ing-img-1", 4, {
      x: -150,
      y: -100,
      ease: Power3.easeInOut,
    })
    .from(
      ".ing-img-2",
      4,
      {
        x: -100,
        y: 80,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-3",
      4,
      {
        x: -250,
        y: -150,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-4",
      4,
      {
        x: -150,
        y: -80,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-5",
      4,
      {
        x: -300,
        y: 150,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-6",
      4,
      {
        x: -100,
        y: 100,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-7",
      4,
      {
        x: -200,
        y: 50,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-8",
      4,
      {
        x: -150,
        y: -20,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".ing-img-9",
      4,
      {
        x: -120,
        y: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    );

  const scene = new ScrollMagic.Scene({
    triggerElement: ".one",
    duration: "100%",
    triggerHook: 0,
    offset: 150,
  })
    .setTween(timeline)
    .setPin(".one")
    .addTo(controller);

  const timeline2 = new TimelineMax();
  timeline2.to(".top .img-container", 4, {
    height: 0,
  });

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".two",
    duration: "100%",
    triggerHook: 0,
    offset: 150,
  })
    .setTween(timeline2)
    .setPin(".two")
    .addTo(controller);

  const timeline3 = new TimelineMax();
  timeline3
    .to(".pie-6", 4, {
      y: 220,
      ease: Power3.easeInOut,
    })
    .to(
      ".pie-5",
      4,
      {
        y: 100,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".pie-4",
      4,
      {
        y: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".pie-3",
      4,
      {
        y: -50,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".pie-2",
      4,
      {
        y: -100,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".pie-1",
      4,
      {
        y: -200,
        ease: Power3.easeInOut,
      },
      "-=4"
    );

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".three",
    duration: "100%",
    triggerHook: 0,
    offset: 150,
  })
    .setTween(timeline3)
    .setPin(".three")
    .addTo(controller);

  const timeline4 = new TimelineMax();
  timeline4
    .to(".pizza-4", 4, {
      autoAlpha: 0,
    })
    .from(
      ".pizza-3",
      4,
      {
        autoAlpha: 0,
      },
      "-=4"
    )
    .from(".pizza-2", 4, {
      autoAlpha: 0,
    })
    .from(".pizza-1", 4, {
      autoAlpha: 0,
    });

  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".four",
    duration: "100%",
    triggerHook: 0,
    offset: 100,
  })
    .setTween(timeline4)
    .setPin(".four")
    .addTo(controller);

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    document.write(
      "<h2 style='text-align: center; color: #20303c; font-family: Helvetica, sans-serif; width: 80%; margin: 5rem auto;'>Please view with laptop or desktop for better experience.</h2>"
    );
    document.body.style.backgroundColor = "#d3eefe";
  }
});
