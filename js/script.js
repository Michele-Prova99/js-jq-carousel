// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire qual è l’immagine attuale da visualizzare nello slider

$(document).ready(function(){

// 1) Quando clicco sul pulsante "prev" richiamo la funzione "prevImage"

  $(".prev").click(function(){
    prevImage();
  });

// 2) Quando clicco sul pulsante "next" richiamo la funzione "nextImage"

  $(".next").click(function(){
    nextImage();
  });

//***** BONUS *****//

// 3) Quando clicco i pallini richiamo l'immagine nella posizione di quel pallino

  $(".nav i").click(function(){

// 4) Tovo la posizione del pallino cliccato

  var posizione = $(this).index();

// 5) Rimuovo la classe "active" all'immagine

  $(".images img").removeClass("active");

// 6) Attribuisco la classe "active" all'immagine con l'indice trovato

  $(".images img").eq(posizione).addClass("active");

// 7) Rimuovo la classe "active" ai pallini.

  $(".nav i").removeClass("active");

// 8) Attribuisco la classe "active" al pallino con l'indice trovato 

  $(".nav i").eq(posizione).addClass("active");

 });


//***** FUNZIONI *****//


// FUNZIONE "nextImage"

function nextImage(){

  var activeImage = $(".images img.active");
  var cerchioAttivo = $(".nav i.active");

  activeImage.removeClass("active");
  cerchioAttivo.removeClass("active");

  if (activeImage.hasClass("last")){

    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else {
      activeImage.next().addClass("active");
      cerchioAttivo.next().addClass("active");
    }

  };

// FUNZIONE "prevImage"

function prevImage(){

  var activeImage = $(".images img.active");
  var cerchioAttivo = $(".nav i.active");

  activeImage.removeClass("active");
  cerchioAttivo.removeClass("active");

  if (activeImage.hasClass("first")){

    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else {
      activeImage.prev().addClass("active");
      cerchioAttivo.prev().addClass("active");
    }

  };


});
