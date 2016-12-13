/* only let door open if it's today's date */
function printnum(x){
 var today = Date()
 var day = today.substring(7,10)
 var daytoday = day - 8
 var doornumhtml = x.children[0].innerHTML
 var doornum = doornumhtml.substring(8,10)
 console.log(doornum)
 if (parseInt(doornum) == 2) {
   x.children[2].style.background = "url('http://i.giphy.com/HHrzy4JepQbL2.gif')";
   x.children[2].style.backgroundSize = "12em 12em";
 }
 else {
   x.children[2].style.background = "url('./notyet2.png')";
   x.children[2].style.backgroundSize = "12em 12em";
 }
}

var backgroundGifs =
[
 "url('http://i.giphy.com/HHrzy4JepQbL2.gif')",
 "url('http://i.giphy.com/Bm2qMzWeqHW2k.gif')",
 "url('http://i.giphy.com/2fspIhJjn48Ok.gif')",
 "url('http://i.giphy.com/11ZmPqA01I2GIw.gif')",
 "url('http://i.giphy.com/3o6ZtjqdcQfuno2WPK.gif')",
 "url('http://i.giphy.com/FrfvK9FJUynFC.gif')",
 "url('http://i.giphy.com/3oz8xALpV1X2BPo7cI.gif')",
 "url('http://i.giphy.com/dSbiCM0hplxQs.gif')",
 "url('http://i.giphy.com/xTk9ZQpZCx0Tikn8EE.gif')",
 "url('http://i.giphy.com/3oriO0NZ3cRzwjRHeE.gif')",
 "url('http://i.giphy.com/KSdxi673tZdew.gif')",
 "url('http://i.giphy.com/5KuPVqoVRvQcg.gif')",
 "url('http://i.giphy.com/11EEXw1EIEoHaE.gif')",
 "url('http://i.giphy.com/C9o0hV1zdqHwQ.gif')",
 "url('http://i.giphy.com/R7AW255ijTdV6.gif')",
 "url('http://i.giphy.com/3o8dpbZRKpIjdNgQHm.gif')",
 "url('http://i.giphy.com/ivsZjx2zTTSo0.gif')",
 "url('http://i.giphy.com/WQR5odAFxSegE.gif')",
 "url('http://i.giphy.com/xTk9ZX3rmzz3lQNBxm.gif')",
 "url('http://i.giphy.com/hFIq9i5y2H10Q.gif')",
 "url('http://i.giphy.com/3XWucGOlZH3Yk.gif')",
 "url('http://i.giphy.com/VUhjXnCIIHqE0.gif')",
 "url('http://i.giphy.com/3oz8xHK8npq52fjH8c.gif')",
 "url('http://i.giphy.com/6tgOZxok7PSCs.gif')",
]

function setbackgrounds(){
 var today = Date()
 var day = today.substring(7,10)
 console.log("day: " + day);
 // var daytoday = day - 26
 document.getElementById("demo").innerHTML = today;
 for(i=1;i<25; i++){
   /*if date <= current date do this*/
   /* if the current date is equal to or greater than the date, show the image    */
   if(day >= i) {
     var article = document.createElement("article");
     article.id = i;
     console.log(article);
     article.innerHTML = '<div class="box"><h2>' + i + '<br/>dec</h2></div><div class="present"><div class="bauble">?</div></div>';
     document.body.appendChild(article);
    //  var door = document.getElementById((i).toString());
    //  console.log("door: " + door);
    //  console.log(door.children[0]);
     article.children[1].style.background = backgroundGifs[i];
     article.children[1].style.backgroundSize = "12em 12em";
     /*set z val of bauble to -1 */

   }
  }
  /*else set background to black */
  // append the snow to this element (by ID or direct DOM node reference)
  snowStorm.targetElement = 'snow-target';
  //snowStorm.flakesMaxActive = 96;    // show more snow on screen at once
  //snowStorm.useTwinkleEffect = true;
  // for(var i=1;i<25; i++){
  //   var article = document.createElement("article");
  //   article.id = i;
  //   console.log(article);
  //   document.body.appendChild(article);

  }
