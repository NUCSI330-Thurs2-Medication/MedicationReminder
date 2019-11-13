var medList="00000";
var checked='<img src="https://img.icons8.com/ios/39/000000/checked-checkbox.svg">'
var unchecked='<img src="https://img.icons8.com/ios/39/000000/unchecked-checkbox.svg">'
var medName="";

// function setCookie(cname, cvalue) {
//   document.cookie = cname + "=" + cvalue + ";";
// }
//
// function getCookie(cname) {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for(var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

function init() {
    // document.getElementById("demo").innerHTML= 'bbbb';
    // medName=getCookie("medName");
    // document.getElementById("demo").innerHTML= medName;
    // var list = getCookie("medList");
    // if (list != "") {
    //     medList=list;
    // } else {
    //     medList="00100";
    // }

    var i;
    // document.getElementById("demo").innerHTML=medName;
    for (i=0; i<medList.length; i++) {
        if (medList[i]=='1') {
            var medId="med"+i.toString();
            document.getElementById(medId).innerHTML=checked;
        }
    }
};

function changeCheckBox(x) {
    var id=parseInt(x.id[3]);
    // document.getElementById("demo").innerHTML= id;


    if (x.innerHTML == checked) {
        x.innerHTML = unchecked;
        medList[id]=0;
        // document.getElementById("demo").innerHTML=x.src;
    } else {
        x.innerHTML = checked;
        medList[id]=1;
    }

}


/* For modal Pictures */
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("modal_image");
var captionText = document.getElementById("caption");
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

var confirmModal = document.getElementById("confirmModal");

var dismissButton = document.getElementById("dismissButton");
dismissButton.onclick = function(){
	confirmModal.style.display = "block";
}

var confirmDismiss = document.getElementById("confirmDismiss");
var cancelDismiss = document.getElementById("cancelDismiss");
confirmDismiss.onclick = function(){
	confirmModal.style.display = "none";
}
cancelDismiss.onclick = function(){
	confirmModal.style.display = "none";
}
init();
