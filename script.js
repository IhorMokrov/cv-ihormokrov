(() => {
  const button = document.querySelector('.change-language');

  button.addEventListener('click', function () {
    const ukTextElements = document.querySelectorAll('.uk');
    const enTextElements = document.querySelectorAll('.en');

    if (button.dataset.toggle === 'en') {
      for (const elem of enTextElements) {
        elem.style.display = 'none';
      }
      for (const elem of ukTextElements) {
        elem.style.display = 'block';
      }

      button.dataset.toggle = 'uk';
    } else {
      for (const elem of ukTextElements) {
        elem.style.display = 'none';
      }
      for (const elem of enTextElements) {
        elem.style.display = 'block';
      }

      button.dataset.toggle = 'en';
    }
  });
})();
