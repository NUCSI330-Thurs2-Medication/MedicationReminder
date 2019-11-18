// Javascript for team function
// P7

function init(){
  retrieveData();
  document.getElementById("demo").innerHTML = checkRequest;
  if (friendAmy == "") friendAmy = '0';
  if (checkStatus == "") checkStatus = '0';
  if (checkRequest == "") checkRequest = '0';
  
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("modal_image");
if (img) {
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
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
var checkStatus = '0'; // share medication information with Amy
// change check box
function changeCheckBox(x) {
    if (checkStatus == '1') {
        x.src = unchecked;
        checkStatus = '0';
    } 
    else{
        x.src = checked;
        checkStatus = '1';
    }
    saveStatus();
}

var checkA = '0';
function checkAdd(x){
  if (checkA == '1') {
    x.src = unchecked;
    checkA = '0';
  } 
  else{
      x.src = checked;
      checkA = '1';
  }
}


var friendAmy = '0';
var checkRequest = '0';
function saveData() {
  // Put the object into storage
  localStorage.setItem('friendAmy', friendAmy);
  localStorage.setItem('checkRequest', checkRequest);
}

function saveStatus(){
  localStorage.setItem('checkStatus', checkStatus);
  document.getElementById("demo").innerHTML = checkStatus;
}

function retrieveData() {
  // Retrieve the object from storage
  friendAmy = localStorage.getItem('friendAmy')?localStorage.getItem('friendAmy'):'0';
  checkStatus = localStorage.getItem('checkStatus')?localStorage.getItem('checkStatus'):'0';
  checkRequest = localStorage.getItem('checkRequest')?localStorage.getItem('checkRequest'):'0';
  document.getElementById("demo").innerHTML = checkStatus;
}

function clearShortage(){
  localStorage.clear();
}

function confirmFriend(){
  friendAmy = '1';
  checkRequest = '1';
  saveData();
}

function refuseFriend(){
  friendAmy = '0';
  checkRequest = '1';
  saveData();
}



// team-request.html

init();
document.getElementById("demo").innerHTML = checkStatus;

if (document.getElementById("Amy") && document.getElementById("teamRequest")) {
  if (checkRequest == '1' && friendAmy == '1'){
      document.getElementById("Amy").style.display = "block";
      document.getElementById("teamRequest").style.display = "none";
  }
  else if(checkRequest =='1' && friendAmy == '0'){
    document.getElementById("Amy").style.display = "none";
    document.getElementById("teamRequest").style.display = "none"; 
  }
  else{
    document.getElementById("teamRequest").style.display = "block";   
    document.getElementById("Amy").style.display = "none";
  }
}


if(document.getElementById("AmyShare") && document.getElementById("AmyText")){
  if(checkStatus == '1'){
    document.getElementById("AmyShare").src = "../images/yes.svg";
    document.getElementById("AmyText").innerHTML = "Sharing my medication infomation.";
  }
  else{
    document.getElementById("AmyShare").src = "../images/no.svg";
    document.getElementById("AmyText").innerHTML = "Not sharing my medication infomation.";
  }
}


