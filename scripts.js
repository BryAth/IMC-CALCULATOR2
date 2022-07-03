var ajd = new Date();
document.querySelector('.date').innerHTML= ajd.toLocaleDateString("fr") ;









function CalculPoids() { 

   
let poidsAjd= Number (document.getElementById('poidsAjd').value);

let tailleUser = Number (document.getElementById("tailleUser").value);

let resultatUser = document.getElementById("resultatUser");


let resultImc  = poidsAjd / (tailleUser*tailleUser) .toFixed(2);

document.getElementById("reponse").innerHTML=`Votre imc est de ${resultImc}`

  
if(resultImc<=18.5){
   document.getElementById("resultatUser").innerHTML = "Vous êtes un peu trop maigre.";
   resultatUser.classList.add('bluesky'); // true
}

else if(resultImc >=18.6 &&   resultImc <= 25 ){
   document.getElementById("resultatUser").innerHTML = "Vous êtes normal."
   resultatUser.classList.add('green'); // true
}

else if(resultImc >=25.1 &&  resultImc <= 30){
   document.getElementById("resultatUser").innerHTML = "Vous êtes en surpoids."
   resultatUser.classList.add('orange'); // true
}

else if(resultImc >=30.1 &&  resultImc <=  40){
   document.getElementById("resultatUser").innerHTML = "Vous êtes  obèse."
   resultatUser.classList.add('orangedark'); // true
}

else if(resultImc >=40){
   document.getElementById("resultatUser").innerHTML = "Vous êtes en obésité sevère."
   resultatUser.classList.add('red'); // true
}

else{
   document.getElementById("resultatUser").innerHTML = "Vous avez fais une erreur dans vos données.."
}

 
}
