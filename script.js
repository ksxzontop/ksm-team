const enterScreen = document.getElementById("enterScreen");
const music = document.getElementById("bgMusic");

enterScreen.onclick = () => {
  enterScreen.classList.add("fade-out");
  music.play().catch(()=>{});
};

/* SCROLL REVEAL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
