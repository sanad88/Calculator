var box = document.getElementById('result');
function toResult(x){
  box.value +=x; // insert the numbers 
  var o = ["+","-","/","*",""]; // operations 
  var decimal = x.includes("."); // decimal number
  var len = o.length;
  var i = 0;
  var rand = 0;
  var count = 0;
  var decValid = false;
  var randValid = false;
  var displayEnable = false;      

    while(count < len){
    if(decimal>1){
      return false;   
    }
    if(x==o[count]){
      randValid = true; 
    }
  count++; 
  }
  //locate instances where string has more than one decimal, iterate your enum
  if(x==='C'){
    box.value='';
  }
 }

function plusMinus(){
  x=box.value
  var result = x-(2*x);
  box.value = result;
    
}

function inverse()
{
    if(box.value!= 0){
        x= box.value;
        var inversevalue = 1/x;
        box.value = inversevalue;
    } 
    else{
        alert("error: invalid operation");
    }
}

function answer()
{
  x=box.value;
  x=eval(x);
  box.value = x;
}

