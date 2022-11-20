$(document).ready(function () {
  renderCurrentTime();
  renderQuote();
});


function renderCurrentTime() {
  let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  fetch(url)
    .then(res => res.json()).then((data) => {
      let days = data['datetime'].substr(0, 10);
      let times = data['datetime'].substr(11, 5);
      $('.time').text(`${days} / ${times}`);
    });
}


function renderQuote() {
  let url = `https://api.quotable.io/random`;
  fetch(url)
    .then(res => res.json()).then((data) => {
      let content = `" ${data['content']} "`;
      let author = `- ${data['author']} -`;
      $('.content').text(content);
      $('.author').text(author);
    });
}

// function renderQuote() {
//   const quotable = `./quotable.json`;
//   let random = Math.floor(Math.random() * quotable.length);
//   fetch(random)
//       .then(res => res.json()).then((data) => {
//           let content = `" ${data['content']} "`;
//           let author = `- ${data['author']} -`;
//           $('.content').text(content);
//           $('.author').text(author);
//       });
// }