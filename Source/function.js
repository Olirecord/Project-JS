// functions to make forms visible



function addGame(){


var refsho = document.getElementById("maintable");

	refsho.style="opacity:0.3";	

var refadd= document.getElementById("addform");

refadd.style.visibility="visible";

var refdel= document.getElementById("delform");

refdel.style.visibility="hidden";

var refupd= document.getElementById("updform");

refupd.style.visibility="hidden";

refadd.style="width:275px;height:250px;border-radius: 25px;position: absolute;background-image: url(menu.jpg);background-repeat: no-repeat;background-size: 200%;top: 50%;left: 50%;margin-top: -100px;margin-left: -100px";

}

function delGame(){

	var refsho = document.getElementById("maintable");

	refsho.style="opacity:0.3";	

var refdel= document.getElementById("delform");

refdel.style.visibility="visible";

var refadd= document.getElementById("addform");

refadd.style.visibility="hidden";

var refupd= document.getElementById("updform");

refupd.style.visibility="hidden";

refdel.style="width:275px;height:150px;border-radius: 25px;position: absolute;background-image: url(menu.jpg);background-repeat: no-repeat;background-size: 200%;top: 50%;left: 50%;margin-top: -100px;margin-left: -100px";

}

function updGame(){

	var refsho = document.getElementById("maintable");

	refsho.style="opacity:0.3";	

var refupd= document.getElementById("updform");

refupd.style.visibility="visible";

var refdel= document.getElementById("delform");

refdel.style.visibility="hidden";

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

	var MenuDel= document.getElementById("delform");

	var MenuUpd= document.getElementById("updform");

	MenuAdd.style.visibility="hidden";

	MenuDel.style.visibility="hidden";

	MenuUpd.style.visibility="hidden";

}



function closeMenu(){

	var MenuAdd= document.getElementById("addform");

	var MenuDel= document.getElementById("delform");

	var MenuUpd= document.getElementById("updform");

	MenuAdd.style.visibility="hidden";

	MenuDel.style.visibility="hidden";

	MenuUpd.style.visibility="hidden";

	return checkvaluesdel();

	

}



function checkvaluesdel(){

	var refupd= document.getElementById("updform");

	var refadd= document.getElementById("addform");

	var addt1 = document.getElementById("t1");

	var addt2 = document.getElementById("t2");

	var addt3 = document.getElementById("t3");

	var addt4 = document.getElementById("t4");

	var addt5 = document.getElementById("t5");

	var upt1 = document.getElementById("t7");

	var upt2 = document.getElementById("t8");

	

	if(upt1.value==""){

	

		alert ("Please enter title");

		refupd.style.visibility="visible";

		return false

	}

	if(upt2.value==""){

	

		alert ("Missing update parameters");

		refupd.style.visibility="visible";

		return false

	}

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

	else {alert ("Submission confirmed");

			location.reload(true);
			console.log("pre function");

			}

}




//getting existing records




function getexistingdinos(){

const Http = new XMLHttpRequest();
const url='http://localhost:6969/gameapp/displayall';
Http.open("GET", url);
Http.onreadystatechange = function(e){
    if (Http.readyState==4){
    data=JSON.parse(Http.responseText);
    data.forEach(function(item){
        var game=document.createElement("td");
        var platform=document.createElement("td");
        var releaseD=document.createElement("td");
        var price=document.createElement("td");
        var rank=document.createElement("td");
        game.innerHTML=item.game;
        platform.innerHTML=item.platform;
        releaseD.innerHTML=item.releaseD;
        price.innerHTML= "£"+item.price;
        rank.innerHTML=item.rank;
        var maintable = document.getElementById("maintable");
        var mainRow=document.createElement("tr");
        
        mainRow.appendChild(game);
        mainRow.appendChild(platform);
        mainRow.appendChild(releaseD);
       mainRow.appendChild(price);
        mainRow.appendChild(rank);
        maintable.appendChild(mainRow);

    });
}
}
Http.send();
}

window.onload = getexistingdinos();





function postData(form){
	
		var body= {};
		for(var inputty of form){
			if(inputty.name){

				body [inputty.name]= inputty.value;

				
			}
		
		}

		var data = JSON.stringify(body);

		var Http= new XMLHttpRequest();
		Http.open("POST", 'http://localhost:6969/gameapp/addGame');
		Http.setRequestHeader("Content-Type", "application/json");

		Http.onreadystatechange= function(){
			if(Http.readyState==4){
				console.log(data);
			}
		}
			
		
		Http.send(data);
		console.log(data);
		return false;

	}




//deleting a record

// function closeMenudelete(){

// 	var MenuDel= document.getElementById("delform");

// 	MenuDel.style.visibility="hidden";
// 	console.log("hi");




// 	return checkvaluesdelete();

	

// }

// function checkvaluesdelete(){

// 	var del = document.getElementById("t6");
// 	var refdel= document.getElementById("delform");

// 	if(del.value==""){

	

// 		alert ("Please enter title");

// 		refdel.style.visibility="visible";

// 		return false

// 	}
// 	else {alert ("Submission confirmed");

// 			return deletegame();
// 			console.log("pre function");

// 			}
// }




// function deletegame() {}











