var falling = true;
var number;
var sum;
var test_num;
var total = number;
var death_number = 0;
var data;


window.localStorage.clear();

    function buttonClick(){

  
    	
    

        //death_count = document.getElementById('inc').value;
        //addBlossom(death_count);

    // death_number = 5;




}  





     function addBlossom(death_count){

     	

     //console.log(document.getElementById('inc').value);

     //console.log(death_number);



//var total = 30;
var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;



TweenLite.set("#container",{perspective:600})
TweenLite.set("#container",{width: "20%", height:"40%"})




   //TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});

    for (i=0; i<death_count; i++){ 

    	Div = document.createElement('div');

      TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});

   container.appendChild(Div);
   animm(Div);

}




 //}
 
 function animm(elm){   
   //TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
      TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});

   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   //TweenMax.to(elm,R(5,6),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});

   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};


     }

//ajax not working since api disabled cors in May 2021


/*var request = new XMLHttpRequest();

request.open('GET', 'https://api.covidtracking.com/v1/states/ca/current.json', true);
request.onload = function () {


  data = JSON.parse(this.response);
  death_number = data.deathIncrease;
  document.getElementById("deaths_number").textContent = data.deathIncrease;
  document.getElementById("deaths").textContent = "COVID-19 DEATHS";
  
   document.getElementById("date_title").textContent = "DATE REPORTED";
   document.getElementById("state_reported").textContent = data.state;
      document.getElementById("state_title").textContent = "STATE";
            document.getElementById("source_title").textContent = "DATA SOURCE";


var str = data.dateModified;
if(str.length > 10) str = str.substring(0,10);

 document.getElementById("date_reported").textContent = str;

      addBlossom(death_number);

  if (request.status >= 200 && request.status < 400) {




  } else {
    
  }
}*/




// request.send();

  addBlossom(258);
  document.getElementById("deaths").textContent = "COVID-19 DEATHS";
  document.getElementById("deaths_number").textContent = 258;
   document.getElementById("date_title").textContent = "DATE REPORTED";
    document.getElementById("date_reported").textContent = "2021-03-07";

   document.getElementById("state_reported").textContent = "CA";
      document.getElementById("state_title").textContent = "STATE";
        document.getElementById("source_title").textContent = "DATA SOURCE";


setInterval(myFunction, 5400000);


function myFunction(){


           window.location.reload(true);


}


