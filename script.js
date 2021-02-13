var info;
var sorters;
if(localStorage.getItem("info") === null)
    info = new Array();
else
    info = JSON.parse(localStorage.getItem("info"));

if(localStorage.getItem("sorters") === null)
    sorters = new Array();
else
    sorters = JSON.parse(localStorage.getItem("sorters"));

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
        + "<br><b>Race:</b> " + document.getElementById("race").value + " <b>Height:</b> " + document.getElementById("height").value + "in <b>Weight:</b> " + document.getElementById("weight").value + " lbs"
        + "<br><b>Address:</b> " + document.getElementById("address").value + ", " + document.getElementById("city").value + ", " + document.getElementById("state").value + " " + document.getElementById("zip").value
        + "<br><b>Email:</b> " + document.getElementById("email").value + " <b>Cellphone:</b> " + document.getElementById("cell").value + "</p>" + "<p class = \"innerP\"><b>Patient Notes:</b> " + document.getElementById("notes").value + "</p></div>";
    
        info.push(curr);
        sorters.push(document.getElementById("last").value + " * " + document.getElementById("pid").value);
        localStorage.setItem("sorters", JSON.stringify(sorters));
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
    bubbleSort(info, sorting, true);
    printPatientInfo();
}

function printPatientInfo(){
    var info;
    if(localStorage.getItem("info") != null){
        info = JSON.parse(localStorage.getItem("info"));
        for(var i = 0; i < info.length; i++)
            document.getElementById("homePage").innerHTML += info[i];
    }
}

function bubbleSort(arr, arr2, last) 
{
    for(var i = 1; i < arr.length; i++)
    {
        for(var j = arr.length; j < 1; j--)
        {
            if(last)
            {
                var arrSplit = arr2[i-1].split(" * ");
                var arrSplit2 = arr2[i].split(" * ");
                if(arrSplit[0] < arrSplit2[0])
                {
                    var temp = arr[i-1];
                    arr[i-1] = arr[i];
                    arr[i] = temp;

                    var temp = arr2[i-1];
                    arr2[i-1] = arr2[i];
                    arr2[i] = temp;
                }
            }
            else{
                if(arrSplit[1] < arrSplit2[1])
                {
                    var temp = arr[i-1];
                    arr[i-1] = arr[i];
                    arr[i] = temp;

                    var temp = arr2[i-1];
                    arr2[i-1] = arr2[i];
                    arr2[i] = temp;
                }
            }
        }
    }
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