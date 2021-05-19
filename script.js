const audio=document.querySelector("audio");
const alarmSound = document.querySelector(".alarm-sound")

const secondHand=document.querySelector(".second-hand");
const minHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand");
const button =document.querySelector(".btnSound");

const alarmText= document.querySelector(".alarm-text");

const alarmButton = document.querySelector(".btnAlarm");
var counter=0;

const hourField=document.querySelector(".hour");
const minField=document.querySelector(".min");
const secondField=document.querySelector(".second");

function setDate(){
    const now =new Date();
    const second =now.getSeconds();
    const secondDegrees=((second/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDegrees}deg)`
   
    audio.currentTime=0;

    const mins =now.getMinutes();
    const minsDegrees=((mins/60)*360)+90;
    minHand.style.transform=`rotate(${minsDegrees}deg)`


    const hour =now.getHours();
    const hourDegrees=((hour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`
}

window.addEventListener("transitionend",removeClass);

function removeClass(){
    button.classList.remove("btnClicked");
    alarmButton.classList.remove("alarmClicked");
}

alarmButton.addEventListener("click",function(){
    alarmText.innerHTML=" Saat : "+Math.abs( hourField.value%24)+" Dakika : "+Math.abs( minField.value%60)+" Saniye : "+Math.abs( secondField.value%60);
    localStorage.setItem("hour",Math.abs( hourField.value%24));
    localStorage.setItem("min",Math.abs( minField.value%60));
    localStorage.setItem("second",Math.abs( secondField.value%60));
    alarmButton.classList.add("alarmClicked");
})

button.addEventListener("click",function(){
    button.classList.add("btnClicked");
    if(counter%2==0){
        audio.play();
        button.innerHTML="Sesi Kapat"
    }
        
    if(counter%2==1){
        audio.pause();
        button.innerHTML="Sesi Aç"
    }
        

        counter=counter+1;
});

function alarm(){
  
    const hour = localStorage.getItem("hour");
    const min = localStorage.getItem("min");
    const second=localStorage.getItem("second");


    const now = new Date();
    const realHour=now.getHours();
    const realMin=now.getMinutes();
    const realSecond=now.getSeconds();

    if(realHour==hour && realMin==min&& realSecond==second){
        
        alarmSound.play();
    }
    
    
}
setInterval(alarm,1000);
setInterval(setDate,1000)