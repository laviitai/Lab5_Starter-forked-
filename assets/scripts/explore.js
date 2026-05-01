// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const faceImage = document.querySelector('#explore img');
  const talkButton = document.querySelector('#explore button');
  const normalFace = 'assets/images/smiling.png';
  const talkingFace = 'assets/images/smiling-open.png';
  let currentUtterance = null;

  function populateVoices() {
    const voices = synth.getVoices();

    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  function speakText() {
    const text = textArea.value.trim();

    if (!text) {
      return;
    }

    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const selectedVoice = voices[voiceSelect.value];
    currentUtterance = utterance;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      faceImage.src = talkingFace;
    };

    utterance.onend = () => {
      if (currentUtterance === utterance) {
        faceImage.src = normalFace;
        currentUtterance = null;
      }
    };

    utterance.onerror = () => {
      if (currentUtterance === utterance) {
        faceImage.src = normalFace;
        currentUtterance = null;
      }
    };

    synth.speak(utterance);
  }

  populateVoices();
  synth.onvoiceschanged = populateVoices;
  talkButton.addEventListener('click', speakText);
}
