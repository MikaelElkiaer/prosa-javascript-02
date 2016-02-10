var point = 200;

$(document).ready(function () {
  $('#playButton').click(() => {
    gameF();
  });
});

function gameF() {
  var syms = Array.apply(null, Array(3)).map(x => {
    return Math.ceil(Math.random(parseInt(new Date().toString(2)))*3);
  });

  syms.forEach((x,i) => {
    var img = `url(grafik/step${x}.png)`;
    $(`#symbol${i+1}`).css('background-image', img);
  });
}
