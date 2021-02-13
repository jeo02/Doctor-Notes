var info;
if(localStorage.getItem("info") === null)
    info = new Array();
else
    info = JSON.parse(localStorage.getItem("info"));

function updateArray(){
    var curr = "<p>" + "<b>Name:</b> " + document.getElementById("last").value + ", " + document.getElementById("first").value + " <b>DOB:</b> " + document.getElementById("dob").value
    + " <b>Patient ID:</b> " + document.getElementById("pid").value + "<br><b>Gender:</b> " + document.getElementById("gender").value + " <b>Ethnicity:<b> " + document.getElementById("ethnicity").value;
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
