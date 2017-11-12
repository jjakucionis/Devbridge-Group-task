// --------------- responsive menu ---------------

document.getElementById("burger_button").onclick = function() {responsiveMenu()};

function responsiveMenu() {
    var x = document.getElementById("bottom_menu_list");
    if (x.className === "menu_list") {
        x.className = "responsive_menu_list";
    } else {
        x.className = "menu_list";
    }
}

// ---------------- form validation ----------------


function formValidation() {    
    var nam = document.getElementById("name").value; 
    var lastNam = document.getElementById("last_name").value;
    var msg = document.getElementById("text_area").value;          
    if(nam.length === 0) {
        document.getElementById('span_name').innerText = "Enter your full name";
        return false;        
    } else if (lastNam.length === 0) {
        document.getElementById('span_name').innerText = "";        
        document.getElementById('span_last_name').innerText = "Enter your full last name";
        return false;
    } else if (msg.length < 10) {
        document.getElementById('span_name').innerText = "";        
        document.getElementById('span_last_name').innerText = "";
        document.getElementById('span_message').innerText = "Your message is too short";
        return false;
    } else {
        return true;
    }
}