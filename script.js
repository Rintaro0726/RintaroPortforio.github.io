const animation = document.querySelectorAll('.js-trigger');
const options = {
  root: null,
  rootMargin: "-30% 0px",
  threshold: 0
};
animation.forEach((target) => this.onIntersect(target, options));

function onIntersect(target, options = {}) {
  const observer = new IntersectionObserver(this.addShowClass, options)
  observer.observe(target)
};

function addShowClass(entries) {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("is-show")
    }
  }
};

