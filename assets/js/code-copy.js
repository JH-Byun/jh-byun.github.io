(function () {
  "use strict";

  document.querySelectorAll(".page__content pre > code").forEach(function (code) {
    var pre = code.parentNode;
    var wrapper = document.createElement("div");
    wrapper.className = "copyable-code";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var highlight = wrapper.closest("div.highlighter-rouge, figure.highlight");
    if (highlight) highlight.classList.add("has-code-copy");

    var button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy-button";
    button.setAttribute("aria-label", "Copy code");
    button.innerHTML = '<i class="fa fa-copy" aria-hidden="true"></i> <span aria-live="polite">Copy</span>';
    wrapper.appendChild(button);

    button.addEventListener("click", async function () {
      var label = button.querySelector("span");
      try {
        await navigator.clipboard.writeText(code.textContent.replace(/\n$/, ""));
        label.textContent = "Copied!";
      } catch (error) {
        label.textContent = "Copy failed";
      }
      window.clearTimeout(button.resetTimer);
      button.resetTimer = window.setTimeout(function () {
        label.textContent = "Copy";
      }, 2000);
    });
  });
})();
