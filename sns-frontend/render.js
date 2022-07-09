let amount = '300';

let logoAmount = '14';

for (let n = 1; n < logoAmount; n++) {
  $('.logo').append('<span class="depth">SNS</span>');
  $(document).ready(function(){
    $('.depth:nth-of-type('+n+')').css({
      'transform': 'translate3d(-50%, -50%, '+((1 * n) * -1)+'px)',
      'color': 'hsl(260,100,'+(60 - (10 * n))+')'
    });
  });
}


for (let i = 1; i < amount; i++) {
  let $theta = (i / amount) * 452;
  let $pi = (i / amount) * Math.PI;
  let $x = 300 * Math.sin($pi) * Math.cos($theta);
  let $y = 300 * Math.sin($pi) * Math.sin($theta);
  let $z = 300 * Math.cos($pi);
  
  $('.neptun').append('<span class="elem"></span>');
  $(document).ready(function(){
    $('.elem:nth-of-type('+i+')').css({
      'transform': 'translate3d('+$x+'px, '+$y+'px, '+$z+'px)',
    });
  });
}