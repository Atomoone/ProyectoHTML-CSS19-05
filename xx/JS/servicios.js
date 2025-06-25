document.addEventListener("DOMContentLoaded", function () {
  const servicios = document.querySelectorAll(".service-item");

  servicios.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("expanded");
    });
  });
});
