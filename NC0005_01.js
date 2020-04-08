// C05
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var voca01 = Paper.image('img/voca01.png', 0, 0, 130, 120).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#FAF1C9'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('NC0005.html');
}

topBox.text(180, 30, 'C05').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('NC0005_02.html');
}

// 상단
var topArea = Paper.g();

voca01.use().transform('t113, 95').click(playAud01).appendTo(topArea).attr({
  'cursor': 'pointer'
});

var t1 = topArea.text(180, 300, ['かいだん', '계단 (階段)']).click(playAud01).attr({
  'font-size': 40,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});
t1.selectAll('tspan')[1].attr({
  x: 180,
  y: 350,
  'font-size': 25,
  'fill': 'gray',
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/voca01.wav');
  audio1.play();
}

// 하단
var bottomArea = Paper.g();

bottomArea.rect(20, 430, 320, 170, 6).attr({
  'fill': '#FBF8E1'
});

bottomArea.text(180, 462, '계단은 깨끗했습니다.').attr({
  'font-size': 18,
  'text-anchor': 'middle'
});

bottomArea.rect(30, 480, 300, 100, 6).click(handler).attr({
  'fill': 'white',
  'cursor': 'pointer'
});

var t2 = bottomArea.text(180, 545, '?').click(handler).attr({
  'font-size': 30,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

function handler() {
  t2.attr({
    'fill': 'none'
  });

  var t3 = bottomArea.text(185, 540, ['かいだん', 'は', ' きれい', 'でした。']).attr({
    'font-size': 25,
    'fill': 'gray',
    'text-anchor': 'middle'
  });
  t3.selectAll('tspan')[1].attr({
    'fill': 'blue'
  });
  t3.selectAll('tspan')[2].attr({
    'fill': 'gray'
  });
  t3.selectAll('tspan')[3].attr({
    'fill': 'blue'
  });

  var audio2 = new Audio('aud/sen01.wav');
  audio2.play();
}
