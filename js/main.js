// Divs

const today = document.querySelector('.today');

const tomorrow = document.querySelector('.tomorrow');

const NextDay = document.querySelector('.NextDay');

const expandabletoday = document.querySelector('.todayExpandable');

const expandabletomorrow = document.querySelector('.tomorrowExpandable');

const expandablenextday = document.querySelector('.NextDayExpandable');

const themeToggle_icon = document.querySelector('.theme_icon');

const themeToggle = document.querySelector('.theme');

const body = document.querySelector('body');

const unit = document.querySelector('.unit');

const unitHead = document.querySelector('.unit_head');

// Arrows

const arrowExpanded = document.querySelector('.arrow');

const arrowSecondExpanded = document.querySelector('.arrowSecond');

const arrowThirdExpanded = document.querySelector('.arrowThird');

// event listeners
const darkModeCheck = localStorage.getItem('darkMode');
const unitcheck = localStorage.getItem('unit');

if (unitcheck === null) {
  localStorage.setItem('unit', 'c');
}

if (unitcheck === 'c') {
  unitHead.innerHTML = '&degF';
}

if (unitcheck === 'f') {
  unitHead.innerHTML = '&degC';
}

if (darkModeCheck === 'enabled') {
  body.classList.add('DarkMode');
  themeToggle_icon.innerHTML = `<svg width="35" height="35" viewBox="0 0 449 449" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M345.63 224C345.63 291.176 291.173 345.63 224 345.63C156.827 345.63 102.37 291.173 102.37 224C102.37 156.827 156.827 102.37 224 102.37C291.173 102.37 345.63 156.827 345.63 224Z" fill="#FFFEEE"/>
  <path d="M214.09 0H233.969V60.312H214.09V0Z" fill="#FFFEEE"/>
  <path d="M58.5901 72.6298L72.6491 58.5708L115.297 101.219L101.238 115.278L58.5901 72.6298Z" fill="#FFFEEE"/>
  <path d="M0 214.09H60.312V233.969H0V214.09Z" fill="#FFFEEE"/>
  <path d="M58.5801 375.35L101.228 332.702L115.287 346.761L72.6391 389.409L58.5801 375.35Z" fill="#FFFEEE"/>
  <path d="M214.09 387.69H233.969V448.002H214.09V387.69Z" fill="#FFFEEE"/>
  <path d="M332.7 346.77L346.759 332.711L389.407 375.359L375.348 389.418L332.7 346.77Z" fill="#FFFEEE"/>
  <path d="M387.69 214.09H448.002V233.969H387.69V214.09Z" fill="#FFFEEE"/>
  <path d="M332.71 101.24L375.358 58.5918L389.417 72.6508L346.769 115.299L332.71 101.24Z" fill="#FFFEEE"/>
  </svg>
  `;
  localStorage.setItem('darkMode', 'enabled');
}

if (darkModeCheck === 'disabled') {
  themeToggle_icon.innerHTML = `<i class="fas fa-moon"></i>`;
  localStorage.setItem('darkMode', 'disabled');
}

today.addEventListener('click', () => {
  expandabletoday.classList.toggle('expanded');
  arrowExpanded.classList.toggle('arrowexpanded');
});

tomorrow.addEventListener('click', () => {
  expandabletomorrow.classList.toggle('expanded');
  arrowSecondExpanded.classList.toggle('arrowexpanded');
});

NextDay.addEventListener('click', () => {
  expandablenextday.classList.toggle('expanded');
  arrowThirdExpanded.classList.toggle('arrowexpanded');
});

themeToggle.addEventListener('click', () => {
  if (themeToggle_icon.innerHTML.includes('moon')) {
    themeToggle_icon.innerHTML = `<svg width="35" class="theme_icon_rotate" height="35" viewBox="0 0 449 449" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M345.63 224C345.63 291.176 291.173 345.63 224 345.63C156.827 345.63 102.37 291.173 102.37 224C102.37 156.827 156.827 102.37 224 102.37C291.173 102.37 345.63 156.827 345.63 224Z" fill="#FFFEEE"/>
    <path d="M214.09 0H233.969V60.312H214.09V0Z" fill="#FFFEEE"/>
    <path d="M58.5901 72.6298L72.6491 58.5708L115.297 101.219L101.238 115.278L58.5901 72.6298Z" fill="#FFFEEE"/>
    <path d="M0 214.09H60.312V233.969H0V214.09Z" fill="#FFFEEE"/>
    <path d="M58.5801 375.35L101.228 332.702L115.287 346.761L72.6391 389.409L58.5801 375.35Z" fill="#FFFEEE"/>
    <path d="M214.09 387.69H233.969V448.002H214.09V387.69Z" fill="#FFFEEE"/>
    <path d="M332.7 346.77L346.759 332.711L389.407 375.359L375.348 389.418L332.7 346.77Z" fill="#FFFEEE"/>
    <path d="M387.69 214.09H448.002V233.969H387.69V214.09Z" fill="#FFFEEE"/>
    <path d="M332.71 101.24L375.358 58.5918L389.417 72.6508L346.769 115.299L332.71 101.24Z" fill="#FFFEEE"/>
    </svg>
    `;
    localStorage.setItem('darkMode', 'enabled');
  } else {
    themeToggle_icon.innerHTML = `<i class="fas fa-moon theme_icon_rotate"></i>`;
    localStorage.setItem('darkMode', 'disabled');
  }

  body.classList.toggle('DarkMode');
});

unit.addEventListener('click', () => {
  if (unitHead.innerHTML.includes('C')) {
    unitHead.innerHTML = '&degF';
    localStorage.setItem('unit', 'c');
  } else {
    unitHead.innerHTML = '&degC';
    localStorage.setItem('unit', 'f');
  }

  if (document.querySelector('.location').innerHTML === '') {
    return;
  }

  weather
    .getWeather()
    .then((results) => {
      ui.paint(results, false);
    })
    .catch((err) => {
      console.log(err);
      ui.paint({}, false, true);
    });
});
