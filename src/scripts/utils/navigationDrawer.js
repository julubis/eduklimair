const listItemArticles = document.querySelectorAll('.listItemArticles');
const childListItemArticles = document.querySelectorAll('.childListItemArticles');
const listItemArticles2 = document.querySelectorAll('.listItemArticles2');
const childListItemArticles2 = document.querySelectorAll('.childListItemArticles2');
const dropDownArticle2 = document.getElementById('dropDownArticle2');
const hamburgerButton = document.getElementById('hamburgerButton');
const nav2 = document.getElementById('nav2');
const logo = document.getElementById('logo');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const listArticle2 = document.getElementById('listArticle2');
let i = 0;
let j = 0;
let k = 0;
let l = 0;

listItemArticles[0].addEventListener('click', () => {
  i += 1;
  if (i % 2 === 0) {
    childListItemArticles[0].style.display = 'none';
  } else {
    childListItemArticles[0].style.display = 'block';
  }
  console.log(`i= ${i}`);
});
listItemArticles[1].addEventListener('click', () => {
  j += 1;
  if (j % 2 === 0) {
    childListItemArticles[1].style.display = 'none';
  } else {
    childListItemArticles[1].style.display = 'block';
  }
  console.log(`j = ${j}`);
});
listItemArticles[2].addEventListener('click', () => {
  k += 1;
  if (k % 2 === 0) {
    childListItemArticles[2].style.display = 'none';
  } else {
    childListItemArticles[2].style.display = 'block';
  }
  console.log(`k = ${k}`);
});

const navigasiBuka = (event) => {
  nav2.style.left = '50%';
  event.preventDefault();
};
const navigasiTutup = (event) => {
  nav2.style.left = '100%';
  event.preventDefault();
};
hamburgerButton.addEventListener('click', navigasiBuka);
logo.addEventListener('click', navigasiTutup);
main.addEventListener('click', navigasiTutup);
footer.addEventListener('click', navigasiTutup);

listArticle2.addEventListener('click', () => {
  l += 1;
  if (l % 2 === 0) {
    dropDownArticle2.style.display = 'none';
  } else {
    dropDownArticle2.style.display = 'block';
  }
  console.log(`l= ${l}`);
});

listItemArticles2[0].addEventListener('click', () => {
  i += 1;
  if (i % 2 === 0) {
    childListItemArticles2[0].style.display = 'none';
  } else {
    childListItemArticles2[0].style.display = 'block';
  }
  console.log(`i= ${i}`);
});
listItemArticles2[1].addEventListener('click', () => {
  j += 1;
  if (j % 2 === 0) {
    childListItemArticles2[1].style.display = 'none';
  } else {
    childListItemArticles2[1].style.display = 'block';
  }
  console.log(`j = ${j}`);
});
listItemArticles2[2].addEventListener('click', () => {
  k += 1;
  if (k % 2 === 0) {
    childListItemArticles2[2].style.display = 'none';
  } else {
    childListItemArticles2[2].style.display = 'block';
  }
  console.log(`k = ${k}`);
});

logo.addEventListener('mouseover', () => {
  i = 0;
  j = 0;
  k = 0;
  l = 0;
  dropDownArticle2.style.display = 'none';
  childListItemArticles2[0].style.display = 'none';
  childListItemArticles2[1].style.display = 'none';
  childListItemArticles2[2].style.display = 'none';
});
