//file::keyboard.js
var final;
function getInput(value)
{
 var tb=document.getElementById("tb1");
	 final=tb.innerHTML;
	var backUp=final+value;
	
	final=final+String.fromCharCode(parseInt(value,16));

  
   tb.innerHTML=final;
//var hex=parseInt(final.charCodeAt(final.length-1),16);
  //console.log(final);
}


function reset()
{
var tb=document.getElementById("tb1");
tb.innerHTML=null;
final=null;
}

function createButtons()
{
alert("create buttons called");
}

function backSpace()
{

var tb=document.getElementById("tb1").value;
	
	document.getElementById("tb1").innerHTML = tb.substring(0, tb.length-1);
	final=tb.substring(0, tb.length-1);
	//console.log(final);
return;
	
}

