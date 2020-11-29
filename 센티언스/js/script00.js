var hw = document.getElementById('hw');
hw.addEventListener('click', function(){
	var cid = document.getElementById('cid').value;
	
	getApi(cid);
	refresh(cid);

})

var searchEnter = function(){
	var cid = document.getElementById('cid').value;
	getApi(cid);
	refresh(cid);

}

var todayDate = function(){
	var today = new Date();
	var date = today.getFullYear() +''+ (today.getMonth()+1)+ ''+today.getDate() +'14';
	return date;
}

var getApi = function(id){

	var xhr = new XMLHttpRequest();
	var url = 'http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst'; /*URL*/
	var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'Pz4e4tvSbQQ%2BqiNYE8496ExmbBBT%2FzdlTdpdiDrGNOK%2BsjP4l0e%2FTUP9hHPWjYT1jR7XE%2B57EjwgrRJmOlxm4g%3D%3D'; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
	queryParams += '&' + encodeURIComponent('CURRENT_DATE') + '=' + encodeURIComponent(todayDate()); /**/
	queryParams += '&' + encodeURIComponent('HOUR') + '=' + encodeURIComponent('0'); /**/
	queryParams += '&' + encodeURIComponent('COURSE_ID') + '=' + encodeURIComponent(id); /**/
	const endUrl = url + queryParams;


		fetch(endUrl)
		.then(res => res.json())
		.then(resdata =>{

			document.getElementById("data").style.display="block";


			var cc = (resdata.response['body'].items.item[0]['courseName']);
			
			console.log(resdata);
			document.getElementById('data').innerText = cc;
			document.getElementById("dataTable").style.display="block";
			newBtn(cc,id);
			buildTable(resdata, getSky(resdata));



		})	
		

}

var getSky = function(data){

	var arr = new Array(data.response['body'].items.item);
	var arrLength = arr[0].length;
	var arrSky = new Array();
	
	for (var i = 0; i<arrLength; i++) {
		var skytext = (data.response['body'].items.item[i]['sky']);

		switch(skytext){
			case 1:
				skytext = "맑음";
				break;
			case 2:
				skytext = "구름조금";
				break;
			case 3:
				skytext = "구름많음";
				break;
			case 4:
				skytext = "흐림";
				break;
			case 5:
				skytext = "비";
				break;
			case 6:
				skytext = "비눈";
				break;
			case 7:
				skytext = "눈비";
				break;
			case 8:
				skytext = "눈";
				break;


		}

		arrSky.push(skytext)
		
	}

	return arrSky;

}

var buildTable = function(data,arrSky){

	var table = document.getElementById('myTable');


	for (var i = 0; i<12; i++) {

		var row = `<tr class="creRow"> 
					<td>${data.response['body'].items.item[i]['courseId']}</td>
					<td>${data.response['body'].items.item[i]['courseName']}</td>
					<td>${data.response['body'].items.item[i]['thema']}</td>
					<td>${data.response['body'].items.item[i]['spotName']}</td>
					<td>${data.response['body'].items.item[i]['courseAreaName']}</td>
					<td>${data.response['body'].items.item[i]['spotAreaName']}</td>
					<td>${data.response['body'].items.item[i]['pop']}</td>
					<td>${data.response['body'].items.item[i]['rhm']}</td>
					<td>${arrSky[i]}</td>
					<td>${data.response['body'].items.item[i]['th3']}</td>
					<td>${data.response['body'].items.item[i]['tm']}</td>
					<td>${data.response['body'].items.item[i]['wd']}</td>
				
					</tr>`
		table.innerHTML += row; 
	

	}	



}

var sky = function(){
	var findSky = document.getElementsByClassName("sky");

}


var refresh = function(cid){
	var findTable = document.getElementsByClassName("creRow");

	if(findTable){

		var Table = document.getElementById("myTable");
		Table.innerHTML = "";

	}else{

			getApi(cid);
	}
	
}



var newBtn = function(cc,id){


	var hisWrap = document.getElementById('hisBtn');

	var hisBtn = `<button id="remBtn" name= "${id}" onclick="newBtnclicked(name)">${cc}</button>`
	hisWrap.innerHTML += hisBtn;

}

var newBtnclicked = function(cid){
	allRefresh();
	btnGetApi(cid);

}

var allRefresh = function(){
	var findTable = document.getElementsByClassName("creRow");
	var Table = document.getElementById("myTable");
	Table.innerHTML = "";
}

var btnGetApi = function(id){

	var xhr = new XMLHttpRequest();
	var url = 'http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst'; /*URL*/
	var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'Pz4e4tvSbQQ%2BqiNYE8496ExmbBBT%2FzdlTdpdiDrGNOK%2BsjP4l0e%2FTUP9hHPWjYT1jR7XE%2B57EjwgrRJmOlxm4g%3D%3D'; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
	queryParams += '&' + encodeURIComponent('CURRENT_DATE') + '=' + encodeURIComponent(todayDate()); /**/
	queryParams += '&' + encodeURIComponent('HOUR') + '=' + encodeURIComponent('0'); /**/
	queryParams += '&' + encodeURIComponent('COURSE_ID') + '=' + encodeURIComponent(id); /**/
	const endUrl = url + queryParams;
	

		fetch(endUrl)
		.then(res => res.json())
		.then(resdata =>{

			
			document.getElementById("data").style.display="block";

			var cc = (resdata.response['body'].items.item[0]['courseName']);
			document.getElementById('data').innerText = cc;
			document.getElementById("dataTable").style.display="block";
			buildTable(resdata, getSky(resdata));


		})	
		

}




var hw2 = document.getElementById('hw2');
hw2.addEventListener('click', function(){
var cid2 = document.getElementById('cid2').value;
var cDate = document.getElementById('date2').value + document.getElementById('time2').value;

	getApi2(cid2,cDate);
	refresh2(cid2,cDate);

})

var searchEnter2 = function(){
	var cid2 = document.getElementById('cid2').value;
	var cDate =  document.getElementById('date2').value + document.getElementById('time2').value;
	getApi2(cid2,cDate,);
	refresh2(cid2,cDate);

}


var getApi2 = function(id,inDate){

	var xhr = new XMLHttpRequest();
	var url = 'http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst'; /*URL*/
	var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'Pz4e4tvSbQQ%2BqiNYE8496ExmbBBT%2FzdlTdpdiDrGNOK%2BsjP4l0e%2FTUP9hHPWjYT1jR7XE%2B57EjwgrRJmOlxm4g%3D%3D'; /*Service Key*/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
	queryParams += '&' + encodeURIComponent('CURRENT_DATE') + '=' + encodeURIComponent(inDate); /**/
	queryParams += '&' + encodeURIComponent('HOUR') + '=' + encodeURIComponent('0'); /**/
	queryParams += '&' + encodeURIComponent('COURSE_ID') + '=' + encodeURIComponent(id); /**/
	const endUrl = url + queryParams;


		fetch(endUrl)
		.then(res => res.json())
		.then(resdata =>{

			
			document.getElementById("data").style.display="block";


			var cc = (resdata.response['body'].items.item[0]['courseName']);
			
			console.log(resdata);
			document.getElementById('data').innerText = cc;
			document.getElementById("dataTable").style.display="block";
			newBtn(cc,id);
			buildTable(resdata, getSky(resdata));



		})	
		


}

var refresh2 = function(cid,inDate){
	var findTable = document.getElementsByClassName("creRow");

	if(findTable){

		var Table = document.getElementById("myTable");
		Table.innerHTML = "";

	}else{

			getApi2(cid,inDate);
	}
	
}
