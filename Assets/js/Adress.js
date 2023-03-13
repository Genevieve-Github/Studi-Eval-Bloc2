/* Mise en écoute du champ adresse dès le début de la saisie du texte */
window.onload = function() {
    document.getElementById("adresse").addEventListener("input", autocompleteAdresse, false);
};
/* vérifie d’abord si l’utilisateur a bien saisi quelque chose. Si ce n’est pas le cas, je cache la div de sélection,
sinon j’appelle l’API et je passe le résultat à une autre méthode. */
function autocompleteAdresse() {

    var inputValue = document.getElementById("adresse").value;
    if (inputValue) {
        fetch(setQuery(inputValue))
            .then(function (response) {
                response.json().then(function (data) {
                    displaySelection(data);
                });
            });
    } else {
        select.style.display = "none";
    }
};
/*Ici, je récupère l’objet « response » renvoyé par l’API, je vérifie s’il contient
 des données pour ensuite construire ma liste de choix d’adresses.*/
function displaySelection(response) {
    if (Object.keys(response.features).length > 0) {
        select.style.display = "block";
        select.removeChild(select.firstChild);
        var ul = document.createElement('ul');
        select.appendChild(ul);
        response.features.forEach(function (element) {
            var li = document.createElement('li');
            var ligneAdresse = document.createElement('span');
            var infosAdresse = document.createTextNode(element.properties.postcode + ' ' + element.properties.city);
            ligneAdresse.innerHTML = element.properties.name;
            li.onclick = function () { selectAdresse(element); };
            li.appendChild(ligneAdresse);
            li.appendChild(infosAdresse);
            ul.appendChild(li);
        });
    } else {
        select.style.display = "none";
    }
}
/* Cette méthode n’a rien de très compliqué et permet juste de récupérer les différents éléments de l’adresse sélectionnée.

On affiche dans le champ de saisie l’intégralité de l’adresse, les différents éléments dans
les trois autres champs et on fait disparaitre la liste de sélection. */
function selectAdresse(element) {
    document.getElementById("adresse").value = element.properties.name + "\r\n" + element.properties.postcode + " " + element.properties.city;
    select.style.display = "none";
    document.getElementById("resAdresse").value = element.properties.name;
    document.getElementById("CP").value = element.properties.postcode;
    document.getElementById("Ville").value = element.properties.city;
}