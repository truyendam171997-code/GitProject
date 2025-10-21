

    function numbers(){
        let numbera = +(document.getElementById("numberA").value);
        let numberb = +(document.getElementById("numberB").value);
        return { numbera, numberb };
    }
    function addition (){
        const {numbera , numberb} = numbers();
        document.getElementById("result").innerHTML = "result: "+(numbera + numberb);
    }
    function subchaction (){
        const {numbera , numberb} = numbers();
        document.getElementById("result").innerHTML = "result: "+(numbera - numberb);
    }
    function multiplication (){
        const {numbera , numberb} = numbers();
        document.getElementById("result").innerHTML = "result: "+(numbera * numberb);
    }
    function division (){
        const {numbera , numberb} = numbers();
        let isNumber0 = numberb === 0;
        isNumber0 ? document.getElementById("result").innerHTML = " number can't division 0": document.getElementById("result").innerHTML = "result: "+ (numbera/numberb);
    }
    let add= document.getElementById("addition");
    add.addEventListener("click", addition);
    let sub= document.getElementById("subtraction");
    sub.addEventListener("click",subchaction);
    let multi= document.getElementById("multiplication");
    multi.addEventListener("click", multiplication);
    let divi= document.getElementById("division");
    divi.addEventListener("click", division);