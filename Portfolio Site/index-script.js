"strict mode";

// //////////////////////////////////////
// //PROJECT FOCUS////////////////////
// ////////////////////////////////////

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
//////////////////////////////////////

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

///////////////////////////////////////
//TIMELINE OBSERVER////////////////////
///////////////////////////////////////

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`timeline-animation`, entry.isIntersecting);
        return;
      }
      entry.target.classList.remove(`timeline-animation`);
    });
  },
  {
    threshold: 0.8,
  }
);

timelineObserver.observe(document.querySelector(`.timeline-line`));

///////////////////////////////////////
//JOB OBSERVERS////////////////////////
///////////////////////////////////////

const job1Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`job-1-animation`, entry.isIntersecting);
        return;
      }
      entry.target.classList.remove(`job-1-animation`);
    });
  },
  {
    threshold: 0.8,
  }
);

job1Observer.observe(document.getElementById(`job-1`));

/////////

const job2Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`job-2-animation`, entry.isIntersecting);
        return;
      }
      entry.target.classList.remove(`job-2-animation`);
    });
  },
  {
    threshold: 0.8,
  }
);

job2Observer.observe(document.getElementById(`job-2`));

/////////

const job3Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`job-3-animation`, entry.isIntersecting);
        return;
      }
      entry.target.classList.remove(`job-3-animation`);
    });
  },
  {
    threshold: 0.8,
  }
);

job3Observer.observe(document.getElementById(`job-3`));

///////////////////////////////////////
//WEBSITE SECTION UNDERLINE ///////////
///////////////////////////////////////

const home = document.getElementById(`home`);
const projects = document.getElementById(`projects`);
const employment = document.getElementById(`employment`);
const about = document.getElementById(`about`);
const contact = document.getElementById(`contact`);
/////////
const projectsTitle = document.getElementById(`projects-title`);
const employmentTitle = document.getElementById(`employment-title`);
const aboutTitle = document.getElementById(`about-title`);
const contactTitle = document.getElementById(`contact-title`);

const section = document.querySelectorAll(`section`);
const linkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let currentSection = entry.target.id;
        if (currentSection === `home-section`) {
          home.classList.add(`section-active`);
        } else {
          home.classList.remove(`section-active`);
        }
        if (currentSection === `projects-section`) {
          projects.classList.add(`section-active`);
          projectsTitle.classList.add(`title-animation`);
        } else {
          projects.classList.remove(`section-active`);
          // projectsTitle.classList.remove(`title-animation`);
        }
        if (currentSection === `employment-section`) {
          employment.classList.add(`section-active`);
          employmentTitle.classList.add(`title-animation`);
        } else {
          employment.classList.remove(`section-active`);
          // employmentTitle.classList.remove(`title-animation`);
        }
        if (currentSection === `about-section`) {
          about.classList.add(`section-active`);
          aboutTitle.classList.add(`title-animation`);
        } else {
          about.classList.remove(`section-active`);
        }
        if (currentSection === `contact-section`) {
          contact.classList.add(`section-active`);
          contactTitle.classList.add(`title-animation`);
        } else {
          contact.classList.remove(`section-active`);
        }
      }
    });
  },
  {
    threshold: 0.3,
  }
);

section.forEach((section) => {
  linkObserver.observe(section);
});

//////////////////////////////////////
//TOOLKIT BUTTON ANIMATION ///////////
//////////////////////////////////////

const toolkitBtn = document.querySelector(`.btn-current-toolkit`);
const hideBtn = document.querySelector(`.btn-hide-toolkit`);
const techContainer = document.querySelector(`.tech-container`);
const techIcons = document.querySelectorAll(`.tech-icon`);

toolkitBtn.addEventListener(`click`, () => {
  techIcons.forEach((icon) => {
    icon.style.opacity = 0;
  });
  toolkitBtn.style.display = `none`;
  hideBtn.style.display = `block`;
  techContainer.classList.remove(`tech-hide-animation`);
  techContainer.classList.toggle(`tech-show-animation`);
  // techContainer.style.borderBottom = `solid 0.4rem #c27ecc67`;
});

hideBtn.addEventListener(`click`, () => {
  techIcons.forEach((icon) => {
    icon.style.opacity = 1;
  });
  toolkitBtn.style.display = `block`;
  hideBtn.style.display = `none`;
  techContainer.classList.toggle(`tech-show-animation`);
  techContainer.classList.add(`tech-hide-animation`);
  // techContainer.style.borderBottom = `solid 0.4rem transparent`;
});
