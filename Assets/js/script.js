function retourPageConnexion()
{
    /*
    const link = document.querySelector('a');
    link.textContent = "Mozilla Developer Network";
    */
/*
    const link = document.querySelector('a');
    link.href = "index.html"
   
    element.style.color = color;
 */
    alert('Hello world!')

}

function appelFormulaireCookies() {
  /*  document.getElementById('Cookies').innerHTML
    Element.innerHTML='mentionsLégales' */
}
function validateEmail(input) {
    var valiRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (input.value.match(valiRegex)) {
        alert("Alerte e-mail valide");
        /* document.form1.text.focus(); */
        return true;
    } else {
        alert("Adresse e-mail non valide");
        /* document.form1.text.focus(); */
        return false;
    }
}
