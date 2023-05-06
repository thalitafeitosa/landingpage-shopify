var acc = document.getElementsByClassName("frase1");
var menos = document.getElementsByClassName("material-icons");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      $("#oi").hide();
    }
  });
}

desaparecer.forEach(element => {
  
});