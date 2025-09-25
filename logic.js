let time=new Date();
let hours=document.getElementById("hours");
let mins=document.getElementById("mins");
let secs=document.getElementById("secs");
hours.innerHTML=time.getHours();
mins.innerHTML=time.getMinutes();
secs.innerHTML=time.getSeconds();
setInterval(()=>{
let time=new Date();
let hours=document.getElementById("hours");
let mins=document.getElementById("mins");
let secs=document.getElementById("secs");
hours.innerHTML=(time.getHours()<10?"0":" ")+time.getHours();
mins.innerHTML=(time.getMinutes()<10?"0":" ")+time.getMinutes();
secs.innerHTML=(time.getSeconds()<10?"0":" ")+time.getSeconds();
},1000)
let alarms=[];
function Remove(btn){
    let alarmDiv = btn.parentElement.parentElement;
    let time = alarmDiv.dataset.time;
    let text = alarmDiv.dataset.text;
       alarmDiv.remove(); 
    alarms = alarms.filter(alarm => !(alarm.time === time && alarm.text === text));
}
function setAlarm(){
let myTime=document.getElementById("time").value;
let myDes=document.getElementById("des").value;
if(myTime && myDes){
alarms.push({ time: myTime, text: myDes });
let newDiv=document.createElement("div");
newDiv.className="myAlarm"
newDiv.dataset.time = myTime;
newDiv.dataset.text = myDes;
newDiv.innerHTML= `<span id="D">📝 <br> ${myDes}</span> <br> <span id="T">⏰ <br> ${myTime}</span> <div> <button onclick="Remove(this)">🗑️</button> <br> <hr style="border: 1px solid;"> </div>`
document.getElementById("AlarmsList").appendChild(newDiv)
document.getElementById("time").value="";
document.getElementById("des").value="";
}
}
setInterval(() => {
  let now = new Date();
  let currentTime = 
    (now.getHours() < 10 ? "0" : "") + now.getHours() + ":" +
    (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

  alarms.forEach((alarm, index) => {
    if (alarm.time === currentTime) {
      Show(alarm.text);
      alarms.splice(index, 1);
    }
  });
}, 1000);
function Show(message) {
  document.getElementById("content").innerText = message
  document.getElementById("popUp").style.display = "flex";
  let sound = document.getElementById("alarmSound");
  sound.currentTime = 0;
sound.play();
}

function Close() {
  document.getElementById("popUp").style.display = "none";
  let sound = document.getElementById("alarmSound");
  sound.pause();
  sound.currentTime = 0;
}
