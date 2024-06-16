// First Porgram 
function firstProgram() {
    var num_value = parseInt(document.getElementById("numberValue").value);
    switch (num_value) {
        case 1:
            document.getElementById("result").innerHTML = "One";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Two";
            break;
        case 3:
            document.getElementById("result").innerHTML = "Three";
            break;
        case 4:
            document.getElementById("result").innerHTML = "Four";
            break;
        default:
            alert("Enter the value Betwee 1 to 4")
            break;
    }
}

// Second Porgram 
function SecondProgram() {
    var num_value = parseInt(document.getElementById("numberValue1").value);
    switch (num_value) {
        case 1:
        case 10:
            document.getElementById("result1").innerHTML = "One or Ten";
            break;
        case 2:
            document.getElementById("result1").innerHTML = "Two";
            break;
        case 3:
            document.getElementById("result1").innerHTML = "Three";
            break;
        case 4:
            document.getElementById("result1").innerHTML = "Four";
            break;
        default:
            alert("Enter the value Between 1 to 4")
            break;
    }
}