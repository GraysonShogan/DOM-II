import "./less/index.less";

// Your code goes here!

//  EVT 1 - LOAD
window.onload = function (evt) {
  const heading = document.querySelector("h1");
  heading.textContent = "Ready to Go!";

  // EVT 2 - COPY

  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      heading.textContent += text;
    });
  });
  // EVT 3 - CLICK

  document.body.addEventListener("click", (evt) => {
    evt.target.classList.toggle("mirror");
  });

  //   EVT 4 - DOUBLE CLICK

  document.body.addEventListener("dblclick", (evt) => {
    evt.target.innerHTML = "";
  });

  //   EVT 5 - KEYDOWN

  window.addEventListener("keydown", (evt) => {
    if (evt.key == 6) {
      document.body.innerHTML = "<h1>YOU RAN ORDER 66</h1>";
    }
  });

  //   EVT 6 - MOUSEMOVE
  document.body.addEventListener("mousemove", (evt) => {
    const { clientX, clientY } = evt;
    // console.log(`mouse is at ${clientX}, ${clientY}`);
  });

  //   EVT 7 - MOUSEENTER
  //   EVT 8 - MOUSELEAVE

  const destinations = document.querySelectorAll(".destination");
  //   console.log(destinations);
  for (let destination of destinations) {
    destination.addEventListener("mouseenter", (evt) => {
      destination.style.fontWeight = "bold";
    });
    destination.addEventListener("mouseleave", (evt) => {
      setTimeout(() => {
        destination.style.fontWeight = "initial";
      }, 500);
    });
  }
};
