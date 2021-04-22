let active = false;

export default {
  id: "cockpit.nightmode",
  pluginPoint: "cockpit.navigation",
  priority: 9002,
  render: (container) => {
    container.innerHTML = "<button>🌙</button>";
    container.style.position = "absolute";
    container.style.right = "155px";
    container.style.top = "6px";

    const btn = container.querySelector("button");
    btn.style.borderRadius = "50%";
    btn.style.width = "30px";
    btn.style.height = "30px";
    btn.style.fontSize = "17px";
    btn.style.borderColor = "transparent";
    btn.style.padding = "0";
    btn.style.textAlign = "center";
    btn.style.backgroundColor = "#333";

    document.body.style.transition = "filter 0.5s";

    btn.addEventListener("click", () => {
      active = !active;

      if (active) {
        document.body.style.filter = "invert(1)";
      } else {
        document.body.style.filter = "invert(0)";
      }
    });
  },
};
