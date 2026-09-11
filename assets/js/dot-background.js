(() => {
  const root = document.documentElement;
  const body = document.body;
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerQuery = window.matchMedia("(hover: hover)");

  if (motionQuery.matches || !pointerQuery.matches) return;

  let frame = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;

  const updateBackground = () => {
    frame = 0;
    root.style.setProperty("--dot-cursor-x", `${pointerX}px`);
    root.style.setProperty("--dot-cursor-y", `${pointerY}px`);
  };

  const handlePointerMove = (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (!frame) frame = window.requestAnimationFrame(updateBackground);
    body.classList.add("dot-background-active");
  };

  const handlePointerLeave = () => {
    body.classList.remove("dot-background-active");
  };

  window.addEventListener("pointermove", handlePointerMove, { passive: true });
  document.documentElement.addEventListener("mouseleave", handlePointerLeave);
})();
