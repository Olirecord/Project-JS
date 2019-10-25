// functions to make forms visible

function addGame(){
// window.open('calc.html');
var refsho = document.getElementById("showall");
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
	var refsho = document.getElementById("showall");
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
	var refsho = document.getElementById("showall");
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
	var refdel= document.getElementById("delform");
	var refadd= document.getElementById("addform");
	var addt1 = document.getElementById("t1");
	var addt2 = document.getElementById("t2");
	var addt3 = document.getElementById("t3");
	var addt4 = document.getElementById("t4");
	var addt5 = document.getElementById("t5");
	var delt1 = document.getElementById("t6");
	var upt1 = document.getElementById("t7");
	var upt2 = document.getElementById("t8");
	if(delt1.value==""){
	
		alert ("Please enter title");
		refdel.style.visibility="visible";
		return false
	}
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
			return addnewgame();
			location.reload(true);}
}










//pull records from DB





  $(document).ready(function() {

    setTimeout(function() {

        getRecords();

  }, 100);

})


function getRecords() {

	

    $.ajax({

    	type: "GET",

        

        url : "http://localhost:6969/gameapp/displayall",

        success : function(jsondata) {
        	
            var list = $('<ul class="list-group"></ul>');

            $('p').append(list);
            
            

            $.each(jsondata, function(index, displayall) {

                list.append('<li class="list-group-item">' + displayall.game

          				 + "  " + displayall.platform + "  " + displayall.releaseD + "  " + displayall.price + "  " + displayall.rank + '</li>')
                		
            });

        }

    });

}


//adding a game 

function addnewgame() {

    var game = document.getElementById('t1').value;
    var platform = document.getElementById('t2').value;
    var releaseD = document.getElementById('t3').value;
    var price = document.getElementById('t4').value;
    var grank = document.getElementById('t5').value;

    var gamedata = new Object();

    gamedata.game = game;
    gamedata.platform = platform;
    gamedata.releaseD = releaseD;
    gamedata.price= price;
    gamedata.grank = grank;

    

    var gameJSON = JSON.stringify(gamedata);
    console.log(gamedata)

    $.ajax({

        type : "POST",

        url : "http://localhost:6969/gameapp/addGame",

        contentType : "application/json",

        data : gameJSON,

        success : function(gamedata) {

            console.log(gamedata);

        },

        error : function(gamedata) {

            console.log(gamedata);


        },

        dataType : 'json'

    });
    location.reload(true);
}