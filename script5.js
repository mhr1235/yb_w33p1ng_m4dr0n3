/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
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


//const app = document.getElementById('root');

/*const logo = document.createElement('img');
logo.src = 'logo.tif';*/

//const container2 = document.createElement('div');
//container2.setAttribute('class', 'container2');

//app.appendChild(logo);
//app.appendChild(container2);

var request = new XMLHttpRequest();

//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
//request.open('GET', 'https://data.sfgov.org/resource/tvq9-ec9w.json', true);
request.open('GET', 'https://api.covidtracking.com/v1/states/ca/current.json', true);
request.onload = function () {


  // Begin accessing JSON data here
  data = JSON.parse(this.response);
  //var lastEntry = data[0].case_count;
  death_number = data.deathIncrease;
  document.getElementById("deaths_number").textContent = data.deathIncrease;
  document.getElementById("deaths").textContent = "COVID-19 DEATHS";
  
   document.getElementById("date_title").textContent = "DATE REPORTED";
   document.getElementById("state_reported").textContent = data.state;
      document.getElementById("state_title").textContent = "STATE";
            document.getElementById("source_title").textContent = "DATA SOURCE";
      //document.getElementById("update_title").textContent = "TIME TO UPDATE";


var str = data.dateModified;
if(str.length > 10) str = str.substring(0,10);

 document.getElementById("date_reported").textContent = str;

  //console.log(death_number);
  //console.log(data[1]);

   //document.getElementById('inc').value = death_number;

      addBlossom(death_number);

  if (request.status >= 200 && request.status < 400) {


/*
    data.forEach(entry => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      //h1.textContent = movie.title;
      h1.textContent = entry.specimen_collection_date;
      //h1.textContent = movie.case_disposition;

      const p = document.createElement('p');
      entry.case_disposition = entry.case_disposition.substring(0, 300);
      entry.case_count = entry.case_count.substring(0, 300);

      p.textContent = `${entry.case_disposition} ${entry.case_count}...`;

      container2.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });*/


  } else {
    /*const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);*/
  }
}




request.send();

setInterval(myFunction, 7200000);


function myFunction(){


           window.location.reload(true);


}


/*if (today >= 7 && today <= 19) {

}*/


/*var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 5, 2, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
}
setTimeout(function(){

  //alert("It's 10am!")
  window.location.reload();

}, millisTill10);*/






//setInterval(myFunction, 3000);

//function myFunction() {
   //request.open('GET', 'https://data.sfgov.org/resource/tvq9-ec9w.json', true);

   //request.send();

    //death_number = 12;

    //death_number = data[1].case_count;
    //document.getElementById('inc').value = death_number;
  //window.location.reload();



    //document.getElementById('inc').value = death_number;

     //addBlossom(death_number);
//}

  


















/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */















/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
