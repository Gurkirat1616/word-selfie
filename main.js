var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition;
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
    speak();
    }
}
function speak(){
    var synt=window.speechSynthesis;
    speakdata="Taking Selfie In 5 Seconds";
    var utterThis=new SpeechSynthesisUtterance(speakdata);
    synt.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:200
}); 
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='tato_is_irritated' src='"+data_uri+"'>";
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("tato_is_irritated").src;
    link.href=image;
    link.click();
}