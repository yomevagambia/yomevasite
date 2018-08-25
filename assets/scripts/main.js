
var i = 0;
var time = 6000;
var quotes =[

]

quotes[0] = {
  quote:"Peace cannot be kept by force; it can be achieved by understanding",
  author: "Albert Einstine",
};

quotes[1] = {
  quote:"To Forgive is the highest, most beautiful form of love. In Return you will receive untold peace and happiness",
  author:"Robert Muller"
};

quotes[2] = {
    quote:"Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world",
    author: "Desmond Tutu"
}



   function displayQuotes(){
     document.querySelector(".quote").innerHTML = quotes[i].quote;
      document.querySelector(".author").innerHTML = quotes[i].author;

      if(i < quotes.length -1){
           i++;
      }
      else{
          i = 0;
      }

      setTimeout("displayQuotes()", time);
  }

  window.onload = displayQuotes();






function opennav() {
    document.querySelector(".menu-button").style.display = "none";
    document.querySelector(".nav").style.width = "100%";
    document.querySelector(".close").style.display="block";
}

function closenav() {
    document.querySelector(".nav").style.width = "0";
    document.querySelector(".menu-button").style.display = "block";
}



$(document).ready(function(){
$('.slider').bxSlider({
 auto:true,
 preloadImages: 'all',
 captions: true,
 // slideWidth: 900


 
});

});

