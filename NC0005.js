// C03
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 270, 38).toDefs();
var start = Paper.image('img/start.png', 0, 0, 105, 65).toDefs();
var bubble = Paper.image('img/bubble.png', 0, 0, 295, 165).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

bi.use().transform('t45, 40').appendTo(topArea);

topArea.text(180, 145, '문형 카드').attr({
  'font-size': 35,
  'text-anchor': 'middle'
});

bubble.use().transform('t35, 250').appendTo(topArea);
start.use().transform('t130, 190').appendTo(topArea);

var t1 = topArea.text(70, 297, ['< C05 >', '~は …でした / でしたか。', '(~은 …했습니다. / 했습니까?)']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 70,
  y: 337,
  'font-size': 23
});
t1.selectAll('tspan')[2].attr({
  x: 70,
  y: 375,
  'font-size': 18,
  'fill': 'gray'
});

var r1 = topArea.rect(50, 490, 260, 50, 5).attr({
  'fill': '#FAF1C9'
});
var t1 = topArea.text(180, 525, '시 작').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('NC0005_01.html');
}
