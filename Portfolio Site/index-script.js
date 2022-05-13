"strict mode";

const project = document.querySelectorAll(`.project`);

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`current-project`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

project.forEach((project) => {
  projectObserver.observe(project);
});

const card = document.querySelectorAll(`.cards`);

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`current-card`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

card.forEach((card) => {
  cardObserver.observe(card);
});
