var flute = {
    "description":"חליל יפה",
    "id":4,
    "imagePath":"img\\flute.jpg",
    "instrumentOrders":null,
    "instrumentType":{
       "id":1,
       "name":"נשיפה"
    },
    "name":"חליל",
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
    "name":"קלרינט",
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
    "name":"מפוחית",
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
    "name":"טרומבון",
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
    "name":"חצוצרה",
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
    "name":"כינור",
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


document.getElementById("card1").innerHTML=card1;
document.getElementById("card2").innerHTML=card2;
document.getElementById("card3").innerHTML=card3;
document.getElementById("card4").innerHTML=card4;
document.getElementById("card5").innerHTML=card5;
document.getElementById("card6").innerHTML=card6;
