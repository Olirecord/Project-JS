// functions to make forms visible

var idUP;



function addGame(){


var refsho = document.getElementById("mainDiv");

	refsho.style="opacity:0.3";	

var refadd= document.getElementById("addform");

refadd.style.visibility="visible";

var refupd= document.getElementById("updform");

refupd.style.visibility="hidden";

refadd.style="width:275px;height:260px;border-radius: 25px;position: absolute;background-image: url(menu.jpg);background-repeat: no-repeat;background-size: 200%;top: 50%;left: 50%;margin-top: -100px;margin-left: -100px";

}

// function delGame(){

// 	var refsho = document.getElementById("maintable");

// 	refsho.style="opacity:0.3";	

// var refdel= document.getElementById("delform");

// refdel.style.visibility="visible";

// var refadd= document.getElementById("addform");

// refadd.style.visibility="hidden";

// var refupd= document.getElementById("updform");

// refupd.style.visibility="hidden";

// refdel.style="width:275px;height:150px;border-radius: 25px;position: absolute;background-image: url(menu.jpg);background-repeat: no-repeat;background-size: 200%;top: 50%;left: 50%;margin-top: -100px;margin-left: -100px";

// }

function updGame(){

		
	var refsho = document.getElementById("mainDiv");

	refsho.style="opacity:0.3";	

var refupd= document.getElementById("updform");

refupd.style.visibility="visible";


var refadd= document.getElementById("addform");

refadd.style.visibility="hidden";

refupd.style="width:275px;height:200px;border-radius: 25px;position: absolute;background-image: url(menu.jpg);background-repeat: no-repeat;background-size: 200%;top: 50%;left: 50%;margin-top: -100px;margin-left: -100px";


}



// function to clear text



function cleartext(reftxt){

reftxt.value="";

}



// functions to close forms and check for null values

function cancel(){

	var MenuAdd= document.getElementById("addform");

	var MenuUpd= document.getElementById("updform");

	MenuAdd.style.visibility="hidden";

	MenuUpd.style.visibility="hidden";
	
	var menu = document.getElementById("mainDiv");
			menu.style.opacity="0.9";
			location.reload(true);

}



function closeMenu(){

	var MenuAdd= document.getElementById("addform");

	var MenuUpd= document.getElementById("updform");

	MenuAdd.style.visibility="hidden";

	MenuUpd.style.visibility="hidden";

	return checkvaluesdel();

	

}



function checkvaluesdel(){

	

	var refadd= document.getElementById("addform");
	var refupd= document.getElementById("updform");

	var addt1 = document.getElementById("t1");

	var addt2 = document.getElementById("t2");

	var addt3 = document.getElementById("t3");

	var addt4 = document.getElementById("t4");

	var addt5 = document.getElementById("t5");

	var upt8 = document.getElementById("t8");


	

	if(addt1.value==""){

	

		alert ("Please enter a title");

		refadd.style.visibility="visible";

		return false

	}

	if(addt2.value==""){

	

		alert ("Please enter a platform");

		refadd.style.visibility="visible";

		return false

	}

	if(addt3.value==""){

	

		alert ("Please enter a release date");

		refadd.style.visibility="visible";

		return false

	}

	if(addt4.value==""){

	

		alert ("Please enter a price");

		refadd.style.visibility="visible";

		return false

	}

	if(addt5.value==""){

	

		alert ("Please enter a rank");

		refadd.style.visibility="visible";

		return false

	}
	if(upt8.value==""){
		alert ("Please enter a new value");

		refupd.style.visibility="visible";

		return false
	}

	else {alert ("Submission confirmed");

			
			var menu = document.getElementById("mainDiv");
			menu.style.opacity="0.9";

			}

}




//getting existing records




function getexistingrecs(){

const Http = new XMLHttpRequest();
const url='http://'+location.host+':6969/gameapp/displayall';
Http.open("GET", url);
Http.onreadystatechange = function(e){
    if (Http.readyState==4){
        var maintable = document.getElementById("tableBody");
        maintable.innerHTML="";
    data=JSON.parse(Http.responseText);
    data.forEach(function(item){
        var game=document.createElement("td");
        var platform=document.createElement("td");
        var releaseD=document.createElement("td");
        var price=document.createElement("td");
        var rank=document.createElement("td");
        var buttonDel = document.createElement("td");
        var buttonUpd = document.createElement("td");
        game.innerHTML=item.game;
        platform.innerHTML=item.platform;
        releaseD.innerHTML=item.releaseD;
        price.innerHTML= "£"+item.price;
        rank.innerHTML=item.rank;

        let button = document.createElement("button");
        button.innerHTML= "x";
        button.type="button";
        button.className = "btn tableDel"
        button.addEventListener("click", function() {
        	deleteData(item.id);
        });
        let buttonU = document.createElement("button");
        buttonU.innerHTML= "u";
        buttonU.type="button";
        buttonU.className = "btn tableDel"
        buttonU.addEventListener("click", function() {
        	updGame();
        	idUP=item.id;
        });
        buttonDel.appendChild(button);
        buttonUpd.appendChild(buttonU)

        var mainRow=document.createElement("tr");
        
        mainRow.appendChild(game);
        mainRow.appendChild(platform);
        mainRow.appendChild(releaseD);
       mainRow.appendChild(price);
        mainRow.appendChild(rank);
         mainRow.appendChild(buttonDel);
         mainRow.appendChild(buttonUpd);
        maintable.appendChild(mainRow);

    });
}
}
Http.send();
}

window.onload = getexistingrecs();





function postData(form){
	
		var body= {};
		for(var inputty of form){
			if(inputty.name){
				body [inputty.name]= inputty.value;
			}
		
		}

		var data = JSON.stringify(body);

		var Http= new XMLHttpRequest();
		Http.open("POST", 'http://'+location.host+':6969/gameapp/addGame');
		Http.setRequestHeader("Content-Type", "application/json");
		Http.onload= function(){
			console.log(data);
			getexistingrecs();
		}
			
		
		Http.send(data);
		console.log(data);
		return false;

	}




//deleting a record

function deleteData(id){
		
		var Http= new XMLHttpRequest();
		Http.open("DELETE", 'http://'+location.host+':6969/gameapp//deleteEntry/' + id);
		Http.setRequestHeader("Content-Type", "application/json");

		Http.onload= function(){
			getexistingrecs();
		}
		
		Http.send();
		return false;

	}


//filter options

function filterTable(){

	var url ;
	if(document.getElementById("filterD").value=="Price H-L"){
		console.log("h-l");
		url="http://"+location.host+":6969/gameapp/filterTopPrice";
		
	}
	if(document.getElementById("filterD").value=="Price L-H"){
		console.log("L");
		url="http://"+location.host+":6969/gameapp/filterLowPrice";
		
	}
	if(document.getElementById("filterD").value=="Release Date"){
		console.log("d");
		url="http://"+location.host+":6969/gameapp/filterReleaseD";
		
	}
	if (document.getElementById("filterD").value=="Platform"){
		console.log("P");
		url="http://"+location.host+":6969/gameapp/filterPlatform";
		
	}
	if (document.getElementById("filterD").value==""){
		getexistingrecs();
	}

const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.onreadystatechange = function(e){

    if (Http.readyState==4){
        var maintable = document.getElementById("tableBody");
        maintable.innerHTML="";
    data=JSON.parse(Http.responseText);
    data.forEach(function(item){
        var game=document.createElement("td");
        var platform=document.createElement("td");
        var releaseD=document.createElement("td");
        var price=document.createElement("td");
        var rank=document.createElement("td");
        var buttonDel = document.createElement("td");
        game.innerHTML=item.game;
        platform.innerHTML=item.platform;
        releaseD.innerHTML=item.releaseD;
        price.innerHTML= "£"+item.price;
        rank.innerHTML=item.rank;

        let button = document.createElement("button");
        button.innerHTML= "x";
        button.type="button";
        button.className = "btn tableDel"
        button.addEventListener("click", function() {
        	deleteData(item.id);
        });
        buttonDel.appendChild(button);

        var mainRow=document.createElement("tr");
        
        mainRow.appendChild(game);
        mainRow.appendChild(platform);
        mainRow.appendChild(releaseD);
       mainRow.appendChild(price);
        mainRow.appendChild(rank);
        mainRow.appendChild(buttonDel);
        maintable.appendChild(mainRow);

    });
}
}
Http.send();
return false
}


//updating records


function updateRecs(){
	
	
	var url ;
	var upD;

if(document.getElementById("updateF").value=="Game"){
		upD=document.getElementById("t8").value;
		url="http://"+location.host+":6969/gameapp/UpdateGame/"+idUP+"/"+upD;
		
	}
	if(document.getElementById("updateF").value=="Platform"){
		upD=document.getElementById("t8").value;
		url="http://"+location.host+":6969/gameapp/UpdatePlatform/"+idUP+"/"+upD;
		
	}
	if(document.getElementById("updateF").value=="ReleaseD"){
		upD=document.getElementById("t8").value;
		url="http://"+location.host+":6969/gameapp/UpdateDate/"+idUP+"/"+upD;
		
	}
	if (document.getElementById("updateF").value=="Price"){
		upD=document.getElementById("t8").value;
		url="http://"+location.host+":6969/gameapp/UpdatePrice/"+idUP+"/"+upD;
		
	}
	if (document.getElementById("updateF").value=="Rank"){
		upD=document.getElementById("t8").value;
		url="http://"+location.host+":6969/gameapp/UpdateRank/"+idUP+"/"+upD;
		
	}
	
	var Http = new XMLHttpRequest();
		Http.open("PUT", url);
		Http.setRequestHeader("Content-Type", "application/json");
		Http.onload= function(){
			getexistingrecs();
		}
		Http.send();
		return false;

}










