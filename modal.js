"use strict";

(function() {
  var modalTrigger = document.querySelector(".order");
  var modalWrapper = document.querySelector(".modal");
  var modalClose = modalWrapper.querySelector(".modal-close");

  if (modalTrigger && modalWrapper) {
    modalTrigger.addEventListener("click", function(evt) {
      evt.preventDefault();
      if (modalWrapper.classList.contains("hidden")) {
        modalWrapper.classList.remove("hidden");
      }
    });

    modalClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalWrapper.classList.add("hidden");
      });
  }

  document.addEventListener("keydown", function(evt) {
    if (
      modalWrapper &&
      evt.key === "Escape" &&
      !modalWrapper.classList.contains(".hidden")
    ) {
      modalWrapper.classList.add("hidden");
    }
  });
})();
