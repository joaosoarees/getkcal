const body = document.querySelector("body");

const checkbox = document.querySelector("input[name=theme]");

function getStyle(element, style) {
  return window.getComputedStyle(element).getPropertyValue(style);
};


const initialColors = {
  bodyText: getStyle(body, "--body-text"),
  bodyBg: getStyle(body, "--body-bg"),
};

const lightMode = {
  bodyText: "#282828",
  bodyBg: "#fcfcf5",
};

const transformKey = key => 
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

function changeColors(colors) {
  Object.keys(colors).map(key => {
    body.style.setProperty(transformKey(key), colors[key])
  })
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(lightMode) : changeColors(initialColors);
});

