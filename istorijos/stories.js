let currentIndex = 0;
let currentStoryImages = [];

function openStory(story, index) {
  const storyElement = document.querySelector(`[data-story="${story}"]`);
  const images = JSON.parse(storyElement.getAttribute('data-images'));
  
  currentStoryImages = images;
  currentIndex = index;

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = currentStoryImages[currentIndex];
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + currentStoryImages.length) % currentStoryImages.length;
  document.getElementById("modalImage").src = currentStoryImages[currentIndex];
}

// Close modal when clicking outside the modal image
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
  }
};
