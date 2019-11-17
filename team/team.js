// Javascript for team function
// P7

function init(){
  retrieveData();
  if (friendAmy == 1){
    document.getElementById("Amy").style.display = "block";
  }
  else{
    document.getElementById("Amy").style.display = "none";
  }
}

// team.html


// team-request.html

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("modal_image");
var captionText = document.getElementById("caption");
if (img) {
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      //captionText.innerHTML = this.alt;
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
}

var checked='../images/check.png';
var unchecked='../images/uncheck.png';
var checkStatus = 0; // share medication information with Amy
// change check box
function changeCheckBox(x) {
    if (checkStatus == 1) {
        x.src = unchecked;
        checkStatus = 0;
    } 
    else{
        x.src = checked;
        checkStatus = 1;
    }
}


var friendAmy = 0;
function saveData() {
  // Put the object into storage
  localStorage.setItem('friendAmy', friendAmy);
  localStorage.setItem('shareAmy', checkStatus);
}

function retrieveData() {
  // Retrieve the object from storage
  friendAmy=localStorage.getItem('friendAmy')?localStorage.getItem('friendAmy'):"00000";
  checkStatus = localStorage.getItem('shareAmy')?localStorage.getItem('shareAmy'):0;
}

function confirmFriend(){
  friendAmy = 1;
  saveData();
}

function refuseFriend(){
  friendAmy = 0;
  saveData();
}

init()