document.getElementById("cardForm").addEventListener('submit', dataCollect);

function nameFt(){
    var name = document.getElementById("cardHolder").value;
    document.getElementById("nombre").innerHTML = name;
}

function numberFt(){
    var number = document.getElementById("cardNumber").value;

    document.getElementById("numero").innerHTML = number;
}

function monFt(){
    var month = document.getElementById("month").value;
    document.getElementById("moo").innerHTML = month;
}

function yearFt(){
    var year = document.getElementById("year").value;
    document.getElementById("yes").innerHTML = year;
}

function cvcFt(){
    var cvc = document.getElementById("cvcnum").value;
    document.getElementById("threed").innerHTML = cvc;
}






function dataCollect(event){
    event.preventDefault();

    var name = document.getElementById("cardHolder").value;
    var number = document.getElementById("cardNumber").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var cvc = document.getElementById("cvcnum").value;


    if(name == ''){
        document.getElementById("uno").innerHTML = "Please enter your name";
        document.getElementById("cardHolder").focus();
    }else if(number == ''){
        document.getElementById("dos").innerHTML = "Please enter your card number";
        document.getElementById("cardNumber").focus();
    }else if(month == '' || year == ''){
        document.getElementById("tres").innerHTML = "Can't be blank";
    }else if(cvc == ''){
        document.getElementById("four").innerHTML = "Can't be blank";
        document.getElementById("cvcnum").focus();
    }else if(cvc.length != 3){
        document.getElementById("four").innerHTML = "Please enter three digits";
    }
    else{

        document.querySelector(".myformdiv").style.display = "none";
        document.querySelector(".thanks").style.display = "flex";
        // document.getElementById("name").innerHTML = "<img src='/images/icon-complete.svg' alt='complete'>";
        // document.getElementById("number").innerHTML = "Thank you!";
        // document.getElementById("dateandnumber").innerHTML = "We've added your card details";
        // document.querySelector(".dateandnumber").style.justifyContent = "center";
        // document.getElementById("submission").innerText = "Continue";

    }
    

}

