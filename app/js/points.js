/*global $:true, console:true Path:true, Point:true, Color:true */
(function (){
  'use strict';

	// points coordinates
	var a = new Point(200, 100);
	var b = new Point(100, 200);
	var c = new Point(200, 200);
	var d = new Point(300, 200);
	var e = new Point(100, 300);
	var f = new Point(200, 300);
	var g = new Point(300, 300);
	var h = new Point(100, 400);
	var i = new Point(200, 400);
	var j = new Point(300, 400);
	var k = new Point(200, 500);

	// all points array
	var allPoints = [a, b, c, d, e, f, g, h, i, j, k];

	// get a random point
	function randPoint () {
		return allPoints[Math.floor(Math.random() * allPoints.length)];
	}

	// guide path setup
	var guide = new Path();
	guide.style = {
		strokeColor: '00DDFF',
		strokeWidth: 1
	};

	var guideTwo = new Path();
	guideTwo.style = {
		strokeColor: '00DDFF',
		strokeWidth: 1
	};

	// draw guides
	guide.moveTo(a);
	guide.lineTo(d);
	guide.lineTo(h);
	guide.lineTo(k);
	guide.lineTo(j);
	guide.lineTo(h);
	guide.lineTo(b);
	guide.lineTo(d);
	guide.lineTo(j);
	guide.lineTo(b);
	guide.lineTo(a);
	guide.lineTo(k);

	guideTwo.moveTo(e);
	guideTwo.lineTo(g);

	// path setup
	var path = new Path();
	path.style = {
		strokeColor: new Color(0, 0.80),
		strokeWidth: 32,
		strokeCap: 'round',
		strokeJoin: 'round'
	};

	// draw a line between some random points
	path.moveTo(randPoint());
	path.lineTo(randPoint());
	path.lineTo(randPoint());
	path.lineTo(randPoint());
	path.lineTo(randPoint());
	path.lineTo(randPoint());

})();