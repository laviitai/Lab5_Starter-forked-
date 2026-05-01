// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti();

  const hornMap = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3',
      alt: 'Air Horn'
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3',
      alt: 'Car Horn'
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3',
      alt: 'Party Horn'
    }
  };
  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornMap[hornSelect.value];
    hornImage.src = selectedHorn.image;
    hornImage.alt = selectedHorn.alt;
    audio.src = selectedHorn.audio;
  });
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
