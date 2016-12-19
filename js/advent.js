function setbackgrounds() {
  var formattedDay = moment().format('dddd, Do MMMM YYYY');
  document.getElementById("demo").innerHTML = "Ho ho ho! Today is " + formattedDay + ".";
  var today = Date().substring(7,10);
  generateAllArticleElements(today);
}

function generateAllArticleElements(today) {
  for(i=1;i<25; i++) {
    var article = document.createElement("article");
    article.id = i;
    if(i <= today) {
      makeArticleWithGiphy(article, i);
    }
    else {
      makeMysteryArticle(article, i);
    }
    document.getElementById("main").appendChild(article);
  }
}

function makeArticleWithGiphy(article, i) {
  article.innerHTML = '<div class="box"><h2>' + i + '<br/>dec</h2></div><div class="present"><div></div></div>';
  article.children[1].style.background = backgroundGifs[i];
  article.children[1].style.backgroundSize = "12em 12em";
}

function makeMysteryArticle(article, i) {
  article.innerHTML = '<div class="box"><h2>' + i + '<br/>dec</h2></div><div class="present"><div class="bauble">?</div></div>';
}

var backgroundGifs =
["day zero",
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
