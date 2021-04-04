const video = document.querySelector('video');
const card = document.querySelector('#card');

const badge = document.querySelector('#badge');

card.addEventListener('mouseenter', () => {
  video.play();
  badge.classList.add('hidden');
});
card.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0;
  badge.classList.remove('hidden');
});
