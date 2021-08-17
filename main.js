Webcam.set ({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_ClXMP6pg/model.json',modelLoaded);
function modelLoaded()
{
    console.log("modelLoaded");
}

function check()
{
    img=document.getElementById('picture');
    classifier.classify(img,gotresult);
}

function gotresult(error, results)
{
    if(error){
        console.log(error);
    }
    else
    {
       document.getElementById("object-name").innerHTML=results[0].label;
       document.getElementById("object-accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}