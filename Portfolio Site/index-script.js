"strict mode";

//////////////////////////////////////
//PROJECT FOCUS////////////////////
////////////////////////////////////

const project = document.querySelectorAll(`.project`);

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`current-project`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.8,
  }
);

project.forEach((project) => {
  projectObserver.observe(project);
});

//////////////////////////////////////
//BACKGROUND FOCUS////////////////////
////////////////////////////////////

const card = document.querySelectorAll(`.cards`);

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(`current-card`, entry.isIntersecting);
    });
  },
  {
    threshold: 0.8,
  }
);

card.forEach((card) => {
  cardObserver.observe(card);
});
