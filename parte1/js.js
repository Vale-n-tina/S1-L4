const postIt = document.getElementsByClassName("postIt");

const sotto = function () {
  for (let i = 0; i < postIt.length; i++) {
    setTimeout(() => {
      postIt[i].classList.toggle("postIt2");}, i * 200);}};
sotto();


