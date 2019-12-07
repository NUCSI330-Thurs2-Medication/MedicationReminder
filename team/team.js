// Javascript for team function
// P7

function init(){
  retrieveData();
  // document.getElementById("demo").innerHTML = checkRequest;
  if (friendAmy == "") friendAmy = '0';
  if (checkStatus == "") checkStatus = '0';
  if (checkRequest == "") checkRequest = '0';
  if(justSentRequest =="")justSentRequest = '0';

  if(zhangDel=="")zhangDel='0';
  if(eliDel=="")eliDel = '0';
  if(amyDel=="")amyDel = '0';

  if(zhangDel=="1" && document.getElementById("zhang")){
    document.getElementById("zhang").style.display = "none";
  }
  if(eliDel=="1" && document.getElementById("eli")){
    document.getElementById("eli").style.display = "none";
  }
  if(amyDel=="1" && document.getElementById("Amy")){
    document.getElementById("Amy").style.display = "none";
  }
  
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

var zhangStatus = '1';
var eliStatus = '1';
var justSentRequest = '0';

var zhangDel = '0';
var eliDel ='0';
var amyDel ='0';
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

function friendRequestSent(){
  justSentRequest = '1';
  saveStatus();
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
   localStorage.setItem('eliStatus',eliStatus);
  localStorage.setItem('zhangStatus',zhangStatus);
  localStorage.setItem('justSentRequest',justSentRequest);

  //for delete friends
  localStorage.setItem('zhangDel',zhangDel);
  localStorage.setItem('amyDel',amyDel);
  localStorage.setItem('eliDel',eliDel);
}

function retrieveData() {
  // Retrieve the object from storage
  friendAmy = localStorage.getItem('friendAmy')?localStorage.getItem('friendAmy'):'0';
  checkStatus = localStorage.getItem('checkStatus')?localStorage.getItem('checkStatus'):'0';
  checkRequest = localStorage.getItem('checkRequest')?localStorage.getItem('checkRequest'):'0';

  //other status 
  zhangStatus = localStorage.getItem('zhangStatus')?localStorage.getItem('zhangStatus'):'1';
  eliStatus = localStorage.getItem('eliStatus')?localStorage.getItem('eliStatus'):'1';
  justSentRequest = localStorage.getItem('justSentRequest')?localStorage.getItem('justSentRequest'):'0';
  // document.getElementById("demo").innerHTML = checkStatus;
  //for delete friends
  zhangDel = localStorage.getItem('zhangDel')?localStorage.getItem('zhangDel'):'0';
  amyDel = localStorage.getItem('amyDel')?localStorage.getItem('amyDel'):'0';
  eliDel = localStorage.getItem('eliDel')?localStorage.getItem('eliDel'):'0';
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
// document.getElementById("demo").innerHTML = checkStatus;

if (document.getElementById("Amy") && document.getElementById("teamRequest")) {
  if (checkRequest == '1' && friendAmy == '1'&&amyDel=="0"){
      document.getElementById("Amy").style.display = "block";
      document.getElementById("teamRequest").style.display = "none";
  }
  else if((checkRequest =='1' && friendAmy == '0')||amyDel=="1"){
    document.getElementById("Amy").style.display = "none";
    document.getElementById("teamRequest").style.display = "none"; 
  }else{
    document.getElementById("teamRequest").style.display = "block";   
    document.getElementById("Amy").style.display = "none";
  }
}

//Friend request feedback

if(document.getElementById("friendRequest")){
  if(justSentRequest=='1'){
  document.getElementById("friendRequest").style.display = "block";

  var i = 3;
  setTimeout(function(){document.getElementById("friendRequest").style.display = "none";},3000);
  
  justSentRequest = '0';
  saveStatus();
  }else{
    document.getElementById("friendRequest").style.display = "none";
  }
}




if(document.getElementById("share-info-checkbox") && document.getElementById("share-info-text")){
  var iconEle = document.getElementById("share-info-checkbox");
  var username = iconEle.name;

  if(username=='eli'){
    userStatus = eliStatus; 
  }else if(username=='zhang'){
    userStatus = zhangStatus;
  }else{
    userStatus = checkStatus;
  }

  if(userStatus == '1'){
    document.getElementById("share-info-checkbox").src = "../images/yes.svg";
    document.getElementById("share-info-text").innerHTML = "Sharing my medication infomation.";
  }
  else{
    document.getElementById("share-info-checkbox").src = "../images/no.svg";
    document.getElementById("share-info-text").innerHTML = "Not sharing my medication infomation.";
  }
}

function switchInfoShareIcon(e, username){
  var iconEle = document.getElementById("share-info-checkbox");
  var username = iconEle.name;

  if(username=='eli'){
    userStatus = eliStatus; 
    eliStatus = (eliStatus=="0"?"1":"0");
  }else if(username=='zhang'){
    userStatus = zhangStatus;
    zhangStatus = (zhangStatus=="0"?"1":"0");
  }else{
    userStatus = checkStatus;
    checkStatus = (checkStatus=="0"?"1":"0");
  }
  if(userStatus == '0'){
    document.getElementById("share-info-checkbox").src = "../images/yes.svg";
    document.getElementById("share-info-text").innerHTML = "Sharing my medication infomation.";
  }
  else{
    document.getElementById("share-info-checkbox").src = "../images/no.svg";
    document.getElementById("share-info-text").innerHTML = "Not sharing my medication infomation.";
  }
  saveStatus();
}

function editFriend(fName){

}

confirmDelete = document.getElementById("confirmDelete");
cancelDelete = document.getElementById("cancelDelete");
if(confirmDelete&&cancelDelete){
  confirmDelete.onclick = function(){
      if(deleteName=='zhang'){
      zhangDel = '1';
      saveStatus();
    }else if (deleteName=='eli'){
      eliDel = '1';
      saveStatus();
    }else if (deleteName=='amy'){
      amyDel = '1';
      saveStatus();
    }else{
      console.log('User not found');
    }
    document.getElementById("confirmDeleteModal").style.display = "none";
    window.location.href = "team.html";
  }
  cancelDelete.onclick = function(){
    document.getElementById("confirmDeleteModal").style.display = "none";
  }
}
var deleteName;

function deleteFriend(fName){
  deleteName = fName;
  document.getElementById("confirmDeleteModal").style.display = "block";

}


