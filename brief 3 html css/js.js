function validation() {

        let uNom =document.getElementById('nom');
        let uPrenom =document.getElementById('pren');
        let uTel =document.getElementById('tel');
{
if (vnom(uNom)){
if (vprenom (uPrenom)){

 if(vtele(uTel)){
  alert('Message envoyé avec succes ! ');
 }   

}
}
}
return false; 
    }

 function vnom(uNom){
      let caractere = /^[A-Za-z]/;
      if (uNom.value.match(caractere)){
          return true
      } else {
        alert('Votre Nom est invalide ! ');
        return false;
      }
 }
 function vprenom(uPrenom){
      let caractere = /^[A-Za-z]/;
      if (uPrenom.value.match(caractere)){
          return true
      } else {
        alert('Votre Prenom est invalide ! ');
        return false;
      }
 }

 function vtele (uTel){
     let telecaractere = /^[0-9]/;
     if(uTel.value.match(telecaractere)){
         return true;
     }else{
         alert('Votre numero de téléphone est invalide');
         return false;
     }

 }

 function validation1() {

        let uNom =document.getElementById('nm');
        let uPrenom =document.getElementById('pn');
        let uTel =document.getElementById('tel');
{
if (vnom(uNom)){
if (vprenom (uPrenom)){

 if(vtele(uTel)){

  alert('Votre devis est prét !')
 }   

}
}
}
return false; 
    }

 function vnom(uNom){
      let caractere = /^[A-Za-z]/;
      if (uNom.value.match(caractere)){
          return true
      } else {
        alert('Votre Nom est invalide ! ');
        return false;
      }
 }
 function vprenom(uPrenom){
      let caractere = /^[A-Za-z]/;
      if (uPrenom.value.match(caractere)){
          return true
      } else {
        alert('Votre Prenom est invalide ! ');
        return false;
      }
 }

 function vtele (uTel){
     let telecaractere = /^[0-9]/;
     if(uTel.value.match(telecaractere)){
         return true;
     }else{
         alert('Votre numero de téléphone est invalide');
         return false;
     }

 }

