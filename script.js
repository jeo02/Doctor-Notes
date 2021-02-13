var info;
if(localStorage.getItem("info") === null)
    info = new Array();
else
    info = JSON.parse(localStorage.getItem("info"));

function updateArray(){
    var curr = "<p>" + document.getElementById("first").value + "</p>" + "<p>" + document.getElementById("last").value + "</p>" + "<p>" + document.getElementById("dob").value + "</p>";
    info.push(curr);
    localStorage.setItem("info", JSON.stringify(info));
    alert("Succesfully submited!");
    document.getElementById("form").reset();
}

function resetList(){
    localStorage.clear();
    location.reload();
}

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}
