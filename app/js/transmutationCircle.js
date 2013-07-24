/*global $:true, console:true Path:true, Point:true, Color:true, Group:true, Shape:true*/

/*  GLYPH COORDINATES SYSTEM

       0   1   2
       _________

0  |       A        A(0): [1,0]
   |     / | \      
1  |   B - C - D    B(1): [0,1]   C(2): [1,1]   D(3): [2,1]
   |   | \ | / |    
2  |   E - F - G    E(4): [0,2]   F(5): [1,2]   G(6): [2,2]
   |   | / | \ |    
3  |   H - I - J    H(7): [0,3]   I(8): [1,3]   J(9): [2,3]
   |     \ | /      
4  |       K        K(10):[1,4] */

(function (){
  'use strict';

  var circleColor = '000';
  var dotsColor = '000';
  var glyphsColor = '000';
  var circleFillColor = "FFF";

  // all glyph coordinates
  var glyphPoints = [[1,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [1,4]];

  var radius = 300;

  var center = [300, 300];

  function transmutationCircle_1 (x, y) {
    var center = new Point(x, y);

    var circle_1 = new Path.Circle(center, (440 / 540 * radius));
    circle_1.style = {
      strokeColor: circleColor,
      strokeWidth: (2 / 540 * radius),
      dashArray: [6, 6]
    };

    var circle_2 = new Path.Circle(center, (340 / 540 * radius));

    var circle_3 = new Path.Circle(center + [0, (340 / 540 * radius)], (80 / 540 * radius));

    var circle_4 = new Path.Circle(center + [0, (340 / 540 * radius)], (80 / 540 * radius));
    circle_4.rotate(120, center);

    var circle_5 = new Path.Circle(center + [0, (340 / 540 * radius)], (80 / 540 * radius));
    circle_5.rotate(240, center);

    var circle_6 = new Path.Circle(center, (170 / 540 * radius));
    circle_6.style = {
      strokeColor: circleColor,
      strokeWidth: (2 / 540 * radius),
      dashArray: [6, 6]
    };

    var hexagon_1 = new Path.RegularPolygon(center, 6, (340 / 540 * radius));

    var triangle_1 = new Path.RegularPolygon(center, 3, (340 / 540 * radius));
    triangle_1.rotate(180, center);

    var style_1 = new Group(circle_2, hexagon_1, triangle_1);
    style_1.style = {
      strokeColor: circleColor,
      strokeWidth: (6 / 540 * radius),
      strokeJoin: 'round'
    };

    var style_2 = new Group(circle_3, circle_4, circle_5);
    style_2.style = {
      strokeColor: circleColor,
      fillColor: circleFillColor,
      strokeWidth: (10 / 540 * radius)
    }; 
  }

  function transmutationCircle_2 (x, y) {
    var center = new Point(x, y);

    var circle_1 = new Path.Circle(center, (440 / 540 * radius));
    circle_1.style = {
      strokeColor: circleColor,
      strokeWidth: (2 / 540 * radius),
      dashArray: [6, 6]
    };

    var circle_2 = new Path.Circle(center, (340 / 540 * radius));

    var pentagon_1 = new Path.RegularPolygon(center, 5, (340 / 540 * radius));
    pentagon_1.rotate(180, center);

    var style_1 = new Group(circle_2, pentagon_1);
    style_1.style = {
      strokeColor: circleColor,
      strokeWidth: (6 / 540 * radius),
      strokeJoin: 'round'
    };

    for (var j = 0 ; j < 5; j++) {
      var point = new Point(center + [0, (340 / 540 * radius)]).rotate( j * 72, center);
      var point_2 = new Point(center + [0, (140 / 540 * radius)]).rotate( j * 72, center);

      var path = new Path.Line(
        point_2,
        point
      );
      path.rotate(32, point);


      path.style = {
        strokeColor: circleColor,
        strokeWidth: (6 / 540 * radius)
      };
    }

    for (var i = 0 ; i < 5; i++) {
      var circle_3 = new Path.Circle(center + [0, (340 / 540 * radius)], (60 / 540 * radius));
      circle_3.rotate(i * 72, center);

      circle_3.style = {
        strokeColor: circleColor,
        fillColor: circleFillColor,
        strokeWidth: (10 / 540 * radius)
      };
    }

    for (var k = 0 ; k < 5; k++) {
      var circle_4 = new Path.Circle(center + [0, (190 / 540 * radius)], (40 / 540 * radius));
      circle_4.rotate(k * 72 + 36, center);

      circle_4.style = {
        strokeColor: circleColor,
        fillColor: circleFillColor,
        strokeWidth: (10 / 540 * radius)
      };
    }

    var circle_6 = new Path.Circle(center, (130 / 540 * radius));
    circle_6.style = {
      strokeColor: circleColor,
      strokeWidth: (2 / 540 * radius),
      dashArray: [6, 6]
    };
  }

  function transmutationCircle_3 (x, y) {
    var center = new Point(x, y);

    var circle_1 = new Path.Circle(center, (440 / 540 * radius));
    circle_1.style = {
      strokeColor: circleColor,
      strokeWidth: (2 / 540 * radius),
      dashArray: [6, 6]
    };

    var circle_2 = new Path.Circle(center, (344 / 540 * radius));

    var triangle_1 = new Path.RegularPolygon(center + [0, 56], 3, (300 / 540 * radius));
    triangle_1.rotate(180, center);

    var triangle_2 = new Path.RegularPolygon(center + [0, 56], 3, (300 / 540 * radius));

    var style_1 = new Group(circle_2, triangle_1, triangle_2);
    style_1.style = {
      strokeColor: circleColor,
      strokeWidth: (6 / 540 * radius),
      strokeJoin: 'round'
    };

    var circle_3 = new Path.Circle(center + [0, (165 / 400 * radius)], (60 / 540 * radius));
    var circle_4 = new Path.Circle(center + [0, (-165 / 400 * radius)], (60 / 540 * radius));
    var circle_5 = new Path.Circle(center + [(95 / 400 * radius), 0], (60 / 540 * radius));
    var circle_6 = new Path.Circle(center + [(-95 / 400 * radius), 0], (60 / 540 * radius));

    var style_2 = new Group(circle_3, circle_4, circle_5, circle_6);
    style_2.style = {
      strokeColor: circleColor,
      fillColor: circleFillColor,
      strokeWidth: (10 / 540 * radius),
      strokeJoin: 'round'
    };

    for (var k = 0 ; k < 4; k++) {
      var circle_7 = new Path.Circle(center + [0, (344 / 540 * radius)], (40 / 540 * radius));
      circle_7.rotate(k * 90 + 45, center);

      circle_7.style = {
        strokeColor: circleColor,
        fillColor: circleFillColor,
        strokeWidth: (10 / 540 * radius)
      };
    }
  }


  function drawDots (x, y, scale, position, angle, stroke) {
    var tmpPoints = [[], [], [], [], [], [], [], [], [], [], []];

    for (var j = glyphPoints.length - 1; j >= 0; j--) {
      tmpPoints[j][0] = glyphPoints[j][0] * scale;
      tmpPoints[j][1] = glyphPoints[j][1] * scale;
    }

    for (var i = glyphPoints.length - 1; i >= 0; i--) {
      // create a circle for each glyphPoint
      var dot = new Shape.Circle(new Point(tmpPoints[i][0] + (x - scale), tmpPoints[i][1] + (y - scale * 2 - position)), stroke * 2);
      
      // group and style dots   
      var dots = new Group(dot);
      dots.fillColor = dotsColor;
      dots.rotate(angle, [x, y]);
    }
  }

  function drawGlyph (x, y, scale, position, angle, stroke) {
    var tmpPoints = [[], [], [], [], [], [], [], [], [], [], []];

    for (var j = glyphPoints.length - 1; j >= 0; j--) {
      tmpPoints[j][0] = glyphPoints[j][0] * scale;
      tmpPoints[j][1] = glyphPoints[j][1] * scale;
    }

    // get a random point
    function randPoint () {
      var i = tmpPoints[Math.floor(Math.random() * tmpPoints.length)];

      return [i[0] + (x - scale), i[1] + (y - scale * 2 - position)];
    }

    // initalize glyph
    var glyph = new Path();

    // set glyph styles
    glyph.style = {
      strokeColor: glyphsColor,
      strokeWidth: stroke,
      strokeCap: 'round',
      strokeJoin: 'round'
    };

    // conect some random points
    glyph.add(randPoint(), randPoint(), randPoint(), randPoint(), randPoint(), randPoint());

    glyph.rotate(angle, [x, y]);
  }

  function drawBoth (x, y, scale, position, angle, stroke) {
    drawDots(x, y, scale, position, angle, stroke / 8);
    drawGlyph(x, y, scale, position, angle, stroke);    
  }

  function drawGlyphs_1 (x, y) {
    for (var i = 0 ; i < 3; i++) {
      drawBoth(x, y, (26 / 540 * radius), (340  / 540 * radius), i * 120 - 60, (8 / 540 * radius));
    }

    for (var j = 0 ; j < 3; j++) {
      drawBoth(x, y, (20 / 540 * radius), (250 / 540 * radius), j * 120 - 120, (8 / 540 * radius));
    }

    for (var k = 0 ; k < 36; k++) {
      drawBoth(x, y, (14 / 540 * radius), (390 / 540 * radius), k * 10 - 80, (6 / 540 * radius));

      if (k % 12 === 0) {
        k = k + 3;
      }
    }

    drawBoth(x, y, (50 / 540 * radius), 0, 0, (20 / 540 * radius));
  }

  function drawGlyphs_2 (x, y) {
    for (var i = 0 ; i < 5; i++) {
      drawBoth(x, y, (18 / 540 * radius), (340  / 540 * radius), i * 72 + 36, (8 / 540 * radius));
    }

    for (var j = 0 ; j < 5; j++) {
      drawBoth(x, y, (12 / 540 * radius), (190 / 540 * radius), j * 72, (6 / 540 * radius));
    }

    for (var k = 0 ; k < 20; k++) {
      drawBoth(x, y, (14 / 540 * radius), (390 / 540 * radius), k * 18 + 18, (6 / 540 * radius));

      if (k % 4 === 0) {
        k = k + 1;
      }
    }

    drawBoth(x, y, (40 / 540 * radius), 0, 0, (18 / 540 * radius));
  }

  function drawGlyphs_3 (x, y) {
    for (var i = 0 ; i < 4; i++) {
      drawBoth(x, y, (10 / 540 * radius), (344  / 540 * radius), i * 90 + 45, (6 / 540 * radius));
    }

    for (var j = 0 ; j < 2; j++) {
      drawBoth(x, y, (16 / 540 * radius), (224  / 540 * radius), j * 180, (8 / 540 * radius));
    }

    for (var k = 0 ; k < 2; k++) {
      drawBoth(x, y, (16 / 540 * radius), (130  / 540 * radius), k * 180 + 90, (8 / 540 * radius));
    }

    for (var l = 0 ; l < 36; l++) {
      drawBoth(x, y, (14 / 540 * radius), (392 / 540 * radius), l * 10 + 30, (6 / 540 * radius));

      if (l % 9 === 0) {
        l = l + 2;
      }
    }

    drawBoth(x, y, (40 / 540 * radius), 0, 0, (18 / 540 * radius));
    drawBoth(x + (190 / 400 * radius), y, (26 / 540 * radius), 0, 0, (10 / 540 * radius));
    drawBoth(x - (190 / 400 * radius), y, (26 / 540 * radius), 0, 0, (10 / 540 * radius));

  }

  function drawAll_1 () {
    transmutationCircle_1(center);
    drawGlyphs_1(center[0], center[1]);
  }

  function drawAll_2 () {
    transmutationCircle_2(center);
    drawGlyphs_2(center[0], center[1]);
  }

  function drawAll_3 () {
    transmutationCircle_3(center);
    drawGlyphs_3(center[0], center[1]);
  }

  function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function randomCircle() {
    var func = [drawAll_1, drawAll_2, drawAll_3];
    var randFunc = func[Math.floor(Math.random()*func.length)];
    (randFunc)();
  }

  $('.go').click(function(){
    randomCircle();
    $('canvas').hide().fadeIn(2000);
    $('.instructions').hide();
    $('.name').append($('input').val());
  });

})();