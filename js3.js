/* 1er ligne: var name(je crée la variable nom) prompt veut dire que j'invite les personnes à indiquer leur nom*/
var name = prompt('Votre nom :', 'Entrez ici votre nom');
// je crée la variable regexName qui indique que je ne prends en compte que les minuscules et les majuscules pour la variable name
var regexName = /^[a-zA-Z]+$/;
// si le nom repond bien au regexName après le test la réponse sera...
if(regexName.test(name))
{
  // réponse: bonjour + le nom
    alert('Bonjour ' + name);
}
// sinon la réponse sera: ce n'est pas un prénom
else {
  alert('Ce n\'est pas un prénom');
}
