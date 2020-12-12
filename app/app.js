const comments = [
  {
    name: "John smith",
    picture: `./img/assel-askhatova-zlLqW8YTX84-unsplash.jpg`,
    comment: `lorem to all the world and beyound all that is and all that is earned , we were born we live and we shall die to the dirt be belong
        try to deniel that there is a beyound but it will unravel before our eyes in the end and we shall screem like hell because we'd be going to hell anyways`,
  },
  {
    name: "hassan Ibrahim",
    picture: `./img/albert-dera-ILip77SbmOE-unsplash.jpg`,
    comment: `i sure can come up with alot of bullshit.. beyound all that is and all that is earned , we were born we live and we shall die to the dirt be belong
        try to deniel that there is a beyound but it will unravel before our eyes in the end and we shall screem like hell because we'd be going to hell anyways`,
  },
  {
    name: "Jonas schemedelles",
    picture: `./img/ali-morshedlou-WMD64tMfc4k-unsplash.jpg`,
    comment: `thought me alot about how javascript works behind the scene beyound all that is and all that is earned , we were born we live and we shall die to the dirt be belong
        try to deniel that there is a beyound but it will unravel before our eyes in the end and we shall screem like hell because we'd be going to hell anyways`,
  },
];

let form, closeBtn, toForm, image, customerValue, next__btn, prev__btn;

const domStrings = {
  closeBtn: document.querySelector(".close__btn"),
  form: document.querySelector(".form"),
  toForm: document.querySelectorAll(".btn__toForm"),
  prevBtn: document.querySelector(".prev__btn"),
  nextBtn: document.querySelector(".next__btn"),
  commentParent: document.querySelector(".comment__container"),
  pagenation: document.querySelector(".pagenation"),
};

//  on docload add the first comment in the array

const commentSettup = () => {
  // generate comment markup
  const commentMarkUp = () => {
    let markup = comments.map((person) => {
      const { name, picture, comment } = person;
      const personMarkup = document.createElement("article");
      personMarkup.className = "person";
      personMarkup.innerHTML = `
      <span class="quote">
      <i class="fas fa-quote-left"></i>
      </span>
      <figure>
      <div class="customer__image--box">
      <img src="${picture}" alt="${name}" class="customer__image">
      </div>
      <figcaption class="customer__name">${name}</figcaption>
      </figure>
      <p class="customer__review">
      ${comment}
      </p>
      <span class="quote">
      <i class="fas fa-quote-right"></i>
      </span>
      </article>
      `;
      return personMarkup;
    });
    return markup;
  };
  let commentPosition = 0;

  const removeClassFrom = (element, cssClass) => {
    element.classList.remove(cssClass);
  };
  const addClassTo = (element, cssClass) => {
    element.classList.add(cssClass);
  };
  const isClassInElement = (element, cssClass) => {
    return element.classList.contains(cssClass);
  };
  function checkPosition(position) {
    const nextCss = "nextSlide";
    const prevCss = "prevSlide";
    const activeCss = "activeSlide";
    // let targetCss = nextCss;
    peoplesComment.forEach((element, elementIndex) => {
      if (elementIndex === commentPosition) {
        isClassInElement(element, nextCss) && removeClassFrom(element, nextCss);
        isClassInElement(element, prevCss) && removeClassFrom(element, prevCss);
        // targetCss = activeCss;
        addClassTo(element, activeCss);
        return;
      }
      if (elementIndex <= 0 && commentPosition >= comments.length - 1) {
        isClassInElement(element, activeCss) &&
          removeClassFrom(element, activeCss);
        isClassInElement(element, prevCss) && removeClassFrom(element, prevCss);
        addClassTo(element, nextCss);
        return;
      }
      if (elementIndex >= comments.length - 1 && commentPosition === 0) {
        isClassInElement(element, activeCss) &&
          removeClassFrom(element, activeCss);
        isClassInElement(element, nextCss) && removeClassFrom(element, nextCss);
        addClassTo(element, prevCss);
        return;
      }

      if (elementIndex > commentPosition) {
        isClassInElement(element, activeCss) &&
          removeClassFrom(element, activeCss);
        isClassInElement(element, prevCss) && removeClassFrom(element, prevCss);
        addClassTo(element, nextCss);
        return;
      }

      if (elementIndex < commentPosition) {
        isClassInElement(element, activeCss) &&
          removeClassFrom(element, activeCss);
        isClassInElement(element, nextCss) && removeClassFrom(element, nextCss);
        addClassTo(element, prevCss);
        return;
      }
    });
  }

  const peoplesComment = commentMarkUp();
  window.addEventListener("load", function () {
    checkPosition(commentPosition);
    peoplesComment.map((person, index) => {
      domStrings.commentParent.appendChild(person);
    });
  });
  const nextButtonClick = () => {
    commentPosition += 1;
    // console.log(commentPosition);

    if (commentPosition === comments.length) commentPosition = 0;
    checkPosition(commentPosition);
  };

  const previousButtonClick = () => {
    commentPosition -= 1;
    // console.log(commentPosition);

    if (commentPosition < 0) {
      commentPosition = comments.length - 1;
    }
    checkPosition(commentPosition);
  };

  // domStrings.pagenation.addEventListener("click", (e) => {
  //   // console.log(e.target.dataset);
  //   if (e.target.dataset.pos || e.target.parentNode.dataset.pos) {
  //     let value = e.target.dataset.pos || e.target.parentNode.dataset.pos;

  //   }
  // });
  domStrings.nextBtn.addEventListener("click", nextButtonClick);
  domStrings.prevBtn.addEventListener("click", previousButtonClick);
};

// close btn for form
domStrings.closeBtn.addEventListener("click", function () {
  styles(domStrings.form, "-22", "hidden", "none");
});

Array.from(domStrings.toForm).forEach((el) =>
  el.addEventListener("click", function () {
    styles(domStrings.form, "200", "visible", "block");
  })
);

function styles(element, ...values) {
  element.style.zIndex = values[0];
  element.style.visibilty = values[1];
  element.style.display = values[2];
}

const init = () => {
  commentSettup();
};

init();
