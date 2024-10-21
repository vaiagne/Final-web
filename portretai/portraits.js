let currentIndex = 0;

function openModal(index) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const images = document.querySelectorAll(".gallery-item img");
  currentIndex = index;
  modalImage.src = images[currentIndex].src;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
  const images = document.querySelectorAll(".gallery-item img");
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentIndex].src;
}

window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
  }
};
