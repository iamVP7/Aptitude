/* generating random number */
function check()
{
   function arrayShuffle () {
       var i = this.length, j, temp;
       if ( i === 0 ) return false;
       while ( --i ) {
          j = Math.floor( Math.random() * ( i + 1 ) );
          temp = this[i];
          this[i] = this[j]; 
          this[j] = temp;
       }
    }

Array.prototype.shuffle =arrayShuffle;
    
var start = 1;
var end = 20;
var numbers = new Array(); 
for (var i = start; i <= end; i++) {
    numbers.push(i);
}
numbers.shuffle();
var num= new Array();
for(i=0;i<10;i++)
num[i] =numbers.pop();

return num;
}

/* getting the numbers and passing to another function */

function loadnum()
{
var numbers = new Array(10);
numbers=check();
return numbers;
}


// timer
var myVar=setInterval(function(){myTimer()},1000); // telling myTimer function to reload 1sec once

t=600;
function myTimer()
{
m=Math.floor(t/60);
s=t%60;
document.getElementById("min").innerHTML=m;
document.getElementById("sec").innerHTML=s;
t=t-1;
if(t==0)
		{
		 finish();
		}

}

//finish

function finish()
{
 
alert("your score is" + score );
window.open('../index.html','_top');
}

