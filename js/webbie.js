function outcome(){

    var x=Number(document.getElementById("fnum").value);
    var y=Number(document.getElementById("Snum").value);
    var z= 0; 
    
    if(document.getElementById("box1").checked){
        z  = x + y;
    }
    
    else if(document.getElementById("box2").checked){
        z = x - y;
    }
    
    else if(document.getElementById("box3").checked){
        z=x*y;
    }
    
    else {
        z=x/y;
    }
    
    document.getElementById("resultArea").innerHTML="REsult:"+String(z);

}