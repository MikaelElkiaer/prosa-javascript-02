var points = 2000;

$(document).ready(function () {
  $('#playButton').click(() => {
    gameF();
  });
});

function gameF() {
  points -= 100;

  var syms = Array.apply(null, Array(3)).map(x => {
    return Math.ceil(Math.random(parseInt(new Date().toString(2)))*3);
  });

  syms.forEach((x,i) => {
    var img = `url(grafik/step${x}.png)`;
    $(`#symbol${i+1}`).css('background-image', img);
  });

  var result = syms.reduce((prev, cur, i) => {
    return prev + cur;
  }, "");

  switch (result) {
    case "111":
      points += 400;
      break;
    case "222":
      points += 800;
      break;
    case "333":
      points += 1200;
      break;
  }

  $('#points').html(points);
}
