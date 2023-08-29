window.say = something => {
  const utterance = new SpeechSynthesisUtterance(something);

  speechSynthesis.speak(utterance);
}
