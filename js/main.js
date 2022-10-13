const activeLinks = document.querySelectorAll(".active--link");
const activeBox = document.querySelector(".active--box");

activeLinks.forEach((activeLink) => {
  activeLink.addEventListener("click", () => {
    let { x, y, width, height } = activeLink.getBoundingClientRect();
    let { scrollX, scrollY } = this;
    window.addEventListener("resize", () => {
      let { x, y, width, height } = activeLink.getBoundingClientRect();
      let { scrollX, scrollY } = this;
      cords(activeBox, x, y, width, height, scrollX, scrollY);
    });
    cords(activeBox, x, y, width, height, scrollX, scrollY);
    const element = document.elementFromPoint(x, y);
    element.style.cssText = `
    z-index: 324234;
    position:relative;
    `;
  });
});

function cords(activeBox, x, y, width, height, scrollX, scrollY) {
  activeBox.style.cssText = `
    left: ${x+scrollX}px;
    top: ${y+scrollY}px;
    width: ${width}px;
    height: ${height}px;
`;
}
