window.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-btn");
  const nav = document.querySelector(".nav");

  function handleSelect(target) {
    document.querySelectorAll(".cont").forEach((cont) => {
      cont.classList.remove("select");
    });

    const parentCont = target.closest(".cont");
    if (parentCont) {
      parentCont.classList.add("select");
    }
  }

  function handleSelectClick(target) {
    document.querySelectorAll(".cont").forEach((cont) => {
      cont.classList.remove("select");
      cont.classList.remove("jsop");
    });

    const parentCont = target.closest(".cont");
    if (parentCont) {
      parentCont.classList.add("jsop");
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => handleSelectClick(button));
    button.addEventListener("mouseenter", () => handleSelect(button));
  });

  // ✅ Remove select when mouse leaves the whole nav area
  nav.addEventListener("mouseleave", () => {
    document.querySelectorAll(".cont").forEach((cont) => {
      cont.classList.remove("select");
    });
  });
});
