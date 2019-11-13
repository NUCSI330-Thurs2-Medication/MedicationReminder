var medList="";
var checked='<img src="https://img.icons8.com/ios/39/000000/checked-checkbox.svg">'
var unchecked='<img src="https://img.icons8.com/ios/39/000000/unchecked-checkbox.svg">'
var medName="";

function saveData() {
    // Put the object into storage
    localStorage.setItem('medList', medList);
    // document.getElementById("demo").innerHTML=localStorage.getItem('medList')?localStorage.getItem('medList'):"123";
}

function retrieveData() {
    // Retrieve the object from storage
    medList=localStorage.getItem('medList')?localStorage.getItem('medList'):"00000";
}

function init() {

    retrieveData();
    if (medList=="") medList="00000";
    var i;
    for (i=0; i<medList.length; i++) {
        if (medList[i]=='1') {
            var medId="med"+i.toString();
            document.getElementById(medId).innerHTML=checked;
        }
    }
};

function changeCheckBox(x) {
    var id=parseInt(x.id[3]);

    var tempStr;
    if (x.innerHTML == checked) {
        x.innerHTML = unchecked;
        tempStr=medList.substr(0, id) + '0' + medList.substr(id + 1);
        medList=tempStr;
    } else {
        x.innerHTML = checked;
        tempStr=medList.substr(0, id) + '1' + medList.substr(id + 1);
        medList=tempStr;
        // document.getElementById("demo").innerHTML=medList;
    }
    saveData();
    // document.getElementById("demo").innerHTML='medList';
}

function updateMedList() {

    var id;
    var name=document.getElementById("infoName").innerHTML;
    var tm=document.getElementById("infoTime").innerHTML.substring(0,2);
    // document.getElementById("demo").innerHTML=name+tm;
    if ((name+tm)=='Headache Formula08') id=0;
    else if ((name+tm)=='Headache Formula12') id=2;
    else if ((name+tm)=='Vitamin A08') id=1;
    else if ((name+tm)=='Vitamin A12') id=4;
    else if (name=='Calan Tablets') id=3;

    retrieveData();
    tempStr=medList.substr(0, id) + '1' + medList.substr(id + 1);
    medList=tempStr;
    saveData();
}

init();
