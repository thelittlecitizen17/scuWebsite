var flute = {
    "description":"חליל יפה",
    "id":4,
    "imagePath":"img\\flute.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":1,
       "name":"נשיפה"
    },
    "name":"flute",
    "price":50,
    "typeId":1
 };

 var clarinet = {
    "description":"קלרינט יפה",
    "id":4,
    "imagePath":"img\\clarinet.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":1,
       "name":"נשיפה"
    },
    "name":"clarinet",
    "price":50,
    "typeId":1
 };
 var harmonica = {
    "description":"מפוחית יפה",
    "id":4,
    "imagePath":"img\\harmonica.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":1,
       "name":"נשיפה"
    },
    "name":"harmonica",
    "price":50,
    "typeId":1
 };
 var trombone = {
    "description":"טרומבון קטן",
    "id":4,
    "imagePath":"img\\trombone.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":1,
       "name":"נשיפה"
    },
    "name":"trombone",
    "price":50,
    "typeId":1
 };
 var trumpet = {
    "description":"חצוצרה ארוכה",
    "id":4,
    "imagePath":"img\\trumpet.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":1,
       "name":"נשיפה"
    },
    "name":"trumpet",
    "price":50,
    "typeId":1
 };
 var violin = {
    "description":"כינור קטן",
    "id":4,
    "imagePath":"img\\violin.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":2,
       "name":"נגינה"
    },
    "name":"violin",
    "price":50,
    "typeId":1
 };

var musicalInstruments = [flute,clarinet,harmonica,trombone,trumpet,violin]


var card1 = '<img src='+trumpet.imagePath+' class="card-img-top" alt=trumpet width="100" height="200">'+
            '<div class="card-body">'+
            '<h5 class="card-title">'+trumpet.name+'</h5>'+
            '<p class="card-text">'+trumpet.description+'</p>'+
            '<a href="#" class="btn btn-primary">הוספה לעגלה</a>'+
            '</div>';

var card2 = '<img src='+harmonica.imagePath+' class="card-img-top" alt="..." width="100" height="200">'+
            '<div class="card-body">'+
            '<h5 class="card-title">'+harmonica.name+'</h5>'+
            '<p class="card-text">'+harmonica.description+'</p>'+
            '<a href="#" class="btn btn-primary">הוספה לעגלה</a>'+
            '</div>';

var card3 = '<img src='+flute.imagePath+' class="card-img-top" alt="..." width="100" height="200">'+
'<div class="card-body">'+
  '<h5 class="card-title">'+flute.name+'</h5>'+
  '<p class="card-text">'+flute.description+'</p>'+
  '<a href="#" class="btn btn-primary">הוספה לעגלה</a>'+
'</div>';

var card4 = '<img src='+violin.imagePath+' class="card-img-top" alt="..." width="100" height="200">'+
'<div class="card-body">'+
  '<h5 class="card-title">'+violin.name+'</h5>'+
  '<p class="card-text">'+violin.description+'</p>'+
  '<a href="#" class="btn btn-primary">הוספה לעגלה</a>'+
'</div>';

var card5 = '<img src='+clarinet.imagePath+' class="card-img-top" alt="..." width="100" height="200">'+
'<div class="card-body">'+
  '<h5 class="card-title">'+clarinet.name+'</h5>'+
  '<p class="card-text">'+clarinet.description+'</p>'+
  '<a href="#" class="btn btn-primary">הוספה לעגלה</a>'+
'</div>';

var card6 = '<img src='+trombone.imagePath+' class="card-img-top" alt="..." width="100" height="200">'+
'<div class="card-body">'+
  '<h5 class="card-title">'+trombone.name+'</h5>'+
  '<p class="card-text">'+trombone.description+'</p>'+
  '<a href="#" class="btn btn-primary">הוספה לעגלה</a>'+
'</div>';

var cards = [card1,card2,card3,card4,card5,card6];



document.getElementById("card1").innerHTML=card1;
document.getElementById("card2").innerHTML=card2;
document.getElementById("card3").innerHTML=card3;
document.getElementById("card4").innerHTML=card4;
document.getElementById("card5").innerHTML=card5;
document.getElementById("card6").innerHTML=card6;

var c1 = document.getElementById("card1");
var c2 = document.getElementById("card2");
var c3 = document.getElementById("card3");
var c4 = document.getElementById("card4");
var c5 = document.getElementById("card5");
var c6 = document.getElementById("card6");

var cardsObject = [c1,c2,c3,c4,c5,c6];

var b;

function showAll()
{
   for(i=0;i<cardsObject.length;i++)
   {
      cardsObject[i].style.display='block';
   }
}

function search(clicked_id)
{
   b = musicalInstruments.find(x=>x.name===clicked_id);

    for(i=0;i<cards.length;i++)
    {
      var c = cards[i].search(b.name);
      if(c===-1)
      {
         cardsObject[i].style.display='none';
  
      }
      else
      {
         cardsObject[i].style.display='block';
      }
      console.log(c);
    }

}


