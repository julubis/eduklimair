const overflowArticles = document.getElementById('overflowArticles');
const tombolLatest = document.querySelectorAll('.tombolLatest2');
tombolLatest[0].addEventListener('click', () => {
  console.log('tombol mundur ditekan');
  overflowArticles.scrollLeft -= 220;
  overflowArticles.style.transition = 'transform 0.3s ease 0s';
});
tombolLatest[1].addEventListener('click', () => {
  console.log('tombol maju ditekan');
  overflowArticles.scrollLeft += 220;
});
