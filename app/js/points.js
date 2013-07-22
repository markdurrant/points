/*global $:true, console:true Path:true, Point:true, Color:true */

/*  GLYPH COORDINATES SYSTEM

       0   1   2
       _________

0  |       A        A: [1,0]
   |     / | \      
1  |   B - C - D    B: [0,1]  C: [1,1]  D: [2,1]
   |   | \ | / |    
2  |   E - F - G    E: [0,2]  F: [1,2]  G: [2,2]
   |   | / | \ |    
3  |   H - I - J    H: [0,3]  I: [1,3]  J: [2,3]
   |     \ | /      
4  |       K        K: [1,4] */

(function (){
	'use strict';

	// all glyph coordinates
	var glyphPoints = [[1,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [1,4]];

	// set scale of glyph points
	var glyphScale = 100;

	// scale all glyph points
	for (var i = glyphPoints.length - 1; i >= 0; i--) {
		glyphPoints[i][0] *= glyphScale;
		glyphPoints[i][1] *= glyphScale;
	}

	// var path = new Path();
	// path.strokeColor = 'black';

	// path.moveTo(glyphPoints[0]);
	// path.lineTo(glyphPoints[1]);

})();