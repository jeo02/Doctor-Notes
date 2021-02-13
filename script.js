var info;
if(localStorage.getItem("info") === null)
    info = new Array();
else
    info = JSON.parse(localStorage.getItem("info"));

function updateArray(){
    var curr = "<p>" + document.getElementById("first") + "</p>" + "<p>" + document.getElementById("last") + "</p>" + "<p>" + document.getElementById("dob") + "</p>";
    info.push(curr);
    location.reload();
    alert("Succesfully submited!");
}