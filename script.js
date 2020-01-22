// mettre le contenu du menu dans la sidebar
var content = document.querySelector("burger-content");
// afficher le contenu du menu dans le body
var sidebarBody = document.querySelector("burger-body");
var button = document.querySelector ("#burger-button");
var over = document.querySelector ("#burger-over");
var activatedClass = "burger-activated";

 // contenu de la sidebar sera le contenu du menu
sidebarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e){
    e-proventDefaut();
    console.log(this.parentNode);

    this.parentNode.classList.add(activatedClass);

});

over.addEventListener('click',function(e){
    e.proventDefault();

    this.parentNode.classList.remove(activatedClass);
}

