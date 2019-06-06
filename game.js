function makelijk() {
  var ant = Math.floor(Math.random() * 6) + 1;
  //alert(ant)
  alert("pas op je heb 2 pogingen");
  var start = 0;
  var end = 2;

  for(start; start < end; start++){
    var gok = prompt("Ik denk aan een getal tussen 1 & 5 wat gok je dat het is?");
    if (gok == ant) {
      alert("JAA JE BENT GESLAAGD VOOR DE WIZARD TOELATINGS TEST.");
      break;
    }
    alert("helaas, probeer opnieuw");
  }
  if(gok != ant){
  alert("je magie is te zwak,  YOU SHALL NOT PASS!!!");
}
}

function antwoord() {
  var ant = Math.floor(Math.random() * 11) + 1;
  //alert(ant)
  alert("pas op je heb 3 pogingen");
  var start = 0;
  var end = 3;

  for(start; start < end; start++){
    var gok = prompt("Ik denk aan een getal tussen 1 & 10 wat gok je dat het is?");
    if (gok == ant) {
      alert("JAA JE BENT GESLAAGD VOOR DE WIZARD TOELATINGS TEST.");
      break;
    }
    alert("helaas, probeer opnieuw");
  }
  if(gok != ant){
  alert("je magie is te zwak,  YOU SHALL NOT PASS!!!");
}
}



function hard() {
  var score;
  var ant = Math.floor(Math.random() * 101) + 1;
  //alert(ant);
  alert("pas op je heb 5 pogingen");
  var start = 0;
  var end = 5;

  for(start; start < end; start++){
    var gok = prompt("Ik denk aan een getal tussen 1 & 100 wat gok je dat het is?");
    if (gok == ant) {
      alert("JAA JE BENT GESLAAGD VOOR DE WIZARD TOELATINGS TEST.");
      break;
    }
    alert("helaas, probeer opnieuw");
  }
  if(gok != ant){
  alert("je magie is te zwak,  YOU SHALL NOT PASS!!!");
}
}
