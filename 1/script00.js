var imgarr = [
['img1.jpg','img2.jpg','img3.jpg','img4.png'],
['img5.png','img6.png','img7.png','img8.png'],
['img5.png','img6.png','img7.png','img8.png','img7.png','img8.png']
];

var imgindex=0;
var prebtn = function(th){
	
	var getimg = document.getElementById('img');
	getimg.setAttribute("src", imgarr[th][moveimg(th,-1)]);

}

var nxtbtn = function(th){

	 var getimg = document.getElementById('img');
	getimg.setAttribute("src", imgarr[th][moveimg(th,1)]);
}

var prebtn2 = function(th){
	
	var getimg = document.getElementById('img2');
	getimg.setAttribute("src", imgarr[th][moveimg(th,-1)]);

}

var nxtbtn2 = function(th){

	 var getimg = document.getElementById('img2');
	getimg.setAttribute("src", imgarr[th][moveimg(th,1)]);
}




var moveimg = function(th,d){
	console.log("d: " + d);
	console.log( "type of d:  " + typeof d);
	console.log( "index:  " + imgindex);
	imgindex = imgindex + d;
	console.log( "index + d:  " + imgindex);
	if(imgindex>=imgarr[th].length){
		imgindex = 0;
	}else if(imgindex < 0){
		imgindex=imgarr[th].length-1;
	}
	return imgindex

}