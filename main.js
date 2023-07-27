Webcam.set({
    width:300,
    height:218,
    image_format:"png"
})
var div=document.getElementById("div")
Webcam.attach(div)
function clickea(){
    Webcam.snap(function(e){
        document.getElementById("div1").innerHTML="<img src="+e+" id='id1'>"
    })
}
var id=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o6_RqOhNc/model.json",hola1)
function hola1(){
    console.log("cargado")
}
function clickea2(){
     var imge=document.getElementById("id1")
     id.classify(imge,va)
}
function va(error,resultaditos){
     
     if (error) {
          console.log(error)
     } else {
        console.log(resultaditos)
        var prediccion1=resultaditos[0].label  
        console.log(prediccion1)
        var prediccion2=resultaditos[1].label
        console.log(prediccion2)
        document.getElementById("h31").innerHTML=prediccion1
        document.getElementById("h32").innerHTML=prediccion2
     }    
}