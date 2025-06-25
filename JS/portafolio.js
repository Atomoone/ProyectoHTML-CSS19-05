const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-item img");

// Verifica que todos los elementos existen antes de continuar
if (modal && modalImg && closeBtn && galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      document.body.style.overflow = "hidden"; // Desactiva scroll
    });
  });

  closeBtn.addEventListener("click", cerrarModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      cerrarModal();
    }
  });

  function cerrarModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Reactiva scroll
    modalImg.src = "";
    modalImg.alt = "";
  }
}

