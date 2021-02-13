var info;
if(localStorage.getItem("info") === null)
    info = new Array();
else
    info = JSON.parse(localStorage.getItem("info"));

function updateArray(){
    var valid = true;
    var form = document.getElementsByClassName("required");
    for(var i = 0; i < form.length; i++)
    {
        if(form[i].value == ""){
            valid = false;
        }
    }

    if(valid){    
        var curr = "<div class = \"innerPage\"><p>" + "<b>Name:</b> " + document.getElementById("last").value + ", " + document.getElementById("first").value + " <b>DOB:</b> " + document.getElementById("dob").value
        + " <b>Patient ID:</b> " + document.getElementById("pid").value + "<br><b>Gender:</b> " + document.getElementById("gender").value + " <b>Ethnicity:</b> " + document.getElementById("ethnicity").value 
        + "<br><b>Race:</b> " + document.getElementById("race").value + " <b>Height:</b> " + document.getElementById("height").value + "ft <b>Weight:</b> " + document.getElementById("weight").value + " lbs"
        + "<br><b>Address:</b> " + document.getElementById("address").value + ", " + document.getElementById("city").value + ", " + document.getElementById("state").value + " " + document.getElementById("zip").value
        + "<br><b>Email:</b> " + document.getElementById("email").value + " <b>Cellphone:</b> " + document.getElementById("cell").value + "</p>" + "<p class = \"innerP\"><b>Patient Notes:</b> " + document.getElementById("notes").value + "</p></div>";
    
        info.push(curr);
        localStorage.setItem("info", JSON.stringify(info));
        alert("Succesfully submited!");
        document.getElementById("form").reset();
    }
    else{
        alert("Please enter all the required* fields.");
    }
}
//Sorts patients by last name
function sortLastName() {
    var sortedLast = new Array();
    info = mergeSort(info);
}

function merge(left, right){
    let arr = [];

    //if one of the sides is empty you exit the loop
    while(left.length && right.length){
        //get the smallest
        if(left[0] < right[0]){
            arr.push(left.shift())
        }
        else{
            arr.push(right.shift())
        }
    }

    //concatenating leftover elements in case it didnt fully go through left or right
    return[...arr, ...left, ...right];
}

function mergeSort(array)
{
    const half = array.length/2;

    //base case
    if(array.length < 2)
        return array;
    
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

//Sorts patients by ID
function sortID() {

}


function resetList(){
    localStorage.clear();
    location.reload();
}

function cancel()
{
    document.getElementById("form").reset();
}

//Makes navbar sticky (stays at top)
var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}