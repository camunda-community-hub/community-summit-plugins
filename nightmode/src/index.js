let active = false;

export default {
  id: "cockpit.nightmode",
  pluginPoint: "cockpit.navigation",
  priority: 9002,
  render: (container) => {
    container.innerHTML = "<button>🌙</button>";

    container.querySelector("button").addEventListener("click", () => {
      active = !active;

      if (active) {
        document.body.style.filter = "invert(1)";
      } else {
        document.body.style.filter = "invert(0)";
      }
    });
  },
};
