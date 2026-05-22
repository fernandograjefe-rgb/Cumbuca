// Wrap every letter in a span
var textWrapper = document.querySelector('.hero-copy');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.hero-copy .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.hero-copy',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });