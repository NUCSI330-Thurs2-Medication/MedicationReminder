var medAddList= [];
var added="0";
// var checked='<img src="../images/check.png">'
// var unchecked='<img src="../images/uncheck.png">'
// var cancel='<img src="../images/no.svg">'
var defImgSrc = "../images/calan.png";
var daysIDs = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];


class Medication{
    constructor(dailySchedules, start,end,days,imgsrc,instruction){
        this.dailySchedules = dailySchedules;
        this.start = start;
        this.end = end;
        this.days = days;
        this.imgsrc=imgsrc;
        this.instruction=instruction;
    }
}
class DailySchedule{
    constructor(time,dose){
        this.time = time;
        this.dose = dose;
    }
}


function saveData() {
    // Put the object into storage
    localStorage.setItem('medAddList', JSON.stringify(medAddList));
    localStorage.setItem('added',added);
}

function retrieveData() {
    // Retrieve the object from storage
    medAddListStr = localStorage.getItem('medAddList')?localStorage.getItem('medAddList'):"";
    added = localStorage.getItem('added')?localStorage.getItem('added'):"0";
    if(medAddListStr)
        medAddList = JSON.parse(medAddListStr);
}
function clearStorage(){
  localStorage.clear();
}

function init() {
 
    retrieveData();

    var medListView = document.getElementById("medication-body");

    // Simple realization
    if(medListView){
        if(added=="1"){
           document.getElementById("newly-added").style.display="auto";
        }else{
            document.getElementById("newly-added").style.display="none";
        }
    }

    // if(medListView){
    //   console.log(medAddList);
    // for(var i = 0;i < medAddList.length;i++){
    //     medListView.innerHTML+=`
    //         <a href="Calan-Tablets.html">
    //             <div class="team-item">
    //                   <div><img id="thumbnail" src="../images/calan.png" alt="calan tablets"></div>
    //                   <h3><b><u>Calan Tablets</u></b></h3>
    //             </div>
    //         </a>
    //     `;
    //     }     
    // }
        

    //Initialize remind time if on add a medication page
    if(document.getElementById("remind1"))
        document.getElementById("remind1").style.display = "flex";

};



//Deal with Interval selection box onchange event
function intervalOnChange(){
    var s = document.getElementById("ReminderInterval").value;
    var r1 = document.getElementById("remind1");
    var r2 = document.getElementById("remind2");
    var r3 = document.getElementById("remind3");

    switch(s){

        case "once":
        r1.style.display= "flex";
        r2.style.display= "none";
        r3.style.display= "none";
        break;

        case "twice":
        r1.style.display = "flex";
        r2.style.display = "flex";
        r3.style.display = "none";
        break;

        case "threeTimes":
        r1.style.display = "flex";
        r2.style.display = "flex";
        r3.style.display = "flex";
        break;

        default:
        break;
    }
}

//Add medication to the list
function addAMedication(){
    var meetRequirement = true;
    // get times and dosages
    var ri = document.getElementById("ReminderInterval");
    var r1 = document.getElementById("remind1");
    var r2 = document.getElementById("remind2");
    var r3 = document.getElementById("remind3");
    var t1 = document.getElementById("time1");
    var t2 = document.getElementById("time2");
    var t3 = document.getElementById("time3");
    var d1 = document.getElementById("dose1");
    var d2 = document.getElementById("dose2");
    var d3 = document.getElementById("dose3");
    var dss = [];

    switch(ri.value){
        case "once":
        if(t1.value&&d1.value){
            dss.push(new DailySchedule(t1.value,d1.value));
        }else{
            meetRequirement = false;
        }             
        break;

        case "twice":
        if(t1.value&&d1.value&&t2.value&&d2.value){
            dss.push(new DailySchedule(t1.value,d1.value));
            dss.push(new DailySchedule(t2.value,d2.value));
        }else{
            meetRequirement = false;
        }
        break;

        case "threeTimes":
        if(t1.value&&d1.value&&t2.value&&d2.value&&t3.value&&d3.value){
            dss.push(new DailySchedule(t1.value,d1.value));
            dss.push(new DailySchedule(t2.value,d2.value));
            dss.push(new DailySchedule(t3.value,d3.value));
        }else{
            meetRequirement = false;
        }
        break;

        default:
        break;
    }

    //get dates
    var startDate = document.getElementById("start").value;
    var endDate = document.getElementById("end").value;

    if(!(startDate&&endDate))
        meetRequirement = false;

    //get days

    var days = [];

    for(i = 0; i < daysIDs.length;i++){
        var day = document.getElementById(daysIDs[i]);
        if (day.checked)
            days.push(daysIDs[i]) ;
    }

    if(days.length==0)
        meetRequirement = false;

    //get instructions

    var instructions = document.getElementById("instext").value;


    //check if meet requirement, and save
    if(meetRequirement){
        var newMed = new Medication(dss,startDate,endDate,days,defImgSrc,instructions);
        medAddList.push(newMed);
        added="1";
        saveData();  
        return true;
    }else{
        return false;
    }


    //get image

    //get instruction

    //save

}



//define onclick event for add button


/* For modal Pictures */
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
    if(span){
        span.onclick = function() {
          modal.style.display = "none";
        }
    }
}

var missingRequiredFieldsModal = document.getElementById("missingRequiredFieldsModal");
var addButton = document.getElementById("add");
var OKButton = document.getElementById("OKButton");

if(addButton&&missingRequiredFieldsModal){
	addButton.onclick = function(){
        if(!addAMedication()){
		  missingRequiredFieldsModal.style.display = "block";
        }else{
            window.location.href = "medication.html";
        }
	}
}

if(OKButton&&missingRequiredFieldsModal){
	OKButton.onclick = function(){
		missingRequiredFieldsModal.style.display = "none";
	}
}

// For Medication Info Pages
var playAudioButton = document.getElementById("playAudioButton");
var audioAnimationModal = document.getElementById("audioAnimationModal");
if(playAudioButton&&audioAnimationModal){
    playAudioButton.onclick = function(){
        audioAnimationModal.style.display = "block";
        setTimeout(function(){ audioAnimationModal.style.display = "none";},5000);
    }

    audioAnimationModal.onclick = function(){
        audioAnimationModal.style.display = "none";
    }
}


init();
