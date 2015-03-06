
/*  set global varibles   */
    var clnamt = 0.00;
    var crate = 0.000;
  
    var theYY = 0;
    var newMM = 0;
    var mmpaymnt = 0;
    var princpl = 0;
    var newrate = 0.0000000000;


function CalcLoanPymt() {
    var temp01 = 0.0000000000000;
    
    var menuchoice = document.getElementById("menu").value;
    clnamt = document.getElementById("ilnamt").value;
    var displaylnamt = document.getElementById("olnamt");
    displaylnamt.innerHTML = "<h3>Loan Amount: $"+ clnamt+ "</h3>";
    
    crate = document.getElementById("irate").value;
    newrate = (crate/1200);
    var displayrate = document.getElementById("orate");
    displayrate.innerHTML = "<h3>Interest Rate: " + crate + "% or "+ newrate.toFixed(10) + " </h3>";
    
    theYY = document.getElementById("itrmyy").value;
    newMM = document.getElementById("itrmmm").value;
    newMM = (theYY * 12);
    var displaytheYY = document.getElementById("otrmyy");
    displaytheYY.innerHTML = "<h3>Loan Terms: " + theYY + " " + menuchoice + "</h3>";
    
    temp01 = (newrate/(Math.pow((1+newrate), newMM)-1));
 /*   mmpaymnt = (newrate + (newrate/(Math.pow((1+newrate), newMM)-1)) * clnamt);    */
    mmpaymnt = (newrate + temp01) * clnamt;
    var displaypayamnt = document.getElementById("opaymnts");
    displaypayamnt.innerHTML = "<h3>Loan Payment: $" + mmpaymnt.toFixed(2) + "</h3>";
    
    

}

function CalcMonths() {
    calcYY = 0;
    calcMM = 0;
    calcYY = document.getElementById("itrmyy").value;
    calcMM = document.getElementById("itrmmm").value;
    calcMM = (calcYY * 12);
    itrmmm.setAttribute("value", +calcMM);
    
}

function CalcYears() {
    var theMM = 0;
    var newYY = 0.00;
     
    theMM = document.getElementById("itrmmm").value;
    newYY = document.getElementById("itrmyy").value;
    newYY = (theMM / 12);
    itrmyy.setAttribute("value", +newYY);
    
}

function CalcLoanSched() {
    var count = 0;
    var tlnamount = 0.00;
    var tpayment = 0.00;
    var tprinciple = 0.00;
    var tinterest = 0.00 ;
    var tbalance = 0.00;
    var tnewrate = 0.000000;
    
    
    var results = " ";
    
    tlnamount = clnamt;
    tbalance = clnamt;
    tpayment = mmpaymnt.toFixed(2);
    
    tnewrate = newrate;
     
 
    for (count=0; count < newMM; count++) {
        tinterest = (tbalance * tnewrate);
         
        tprinciple = (tpayment - tinterest);
        
        tbalance = (tbalance - tprinciple);
 
        results += "<tr><td>" + (count + 1) + "</td><td> $" + tlnamount + "</td><td> $" + tpayment +"</td><td> $" + tprinciple.toFixed(2) + "</td><td> $" + tinterest.toFixed(2) + "</td><td> $" + tbalance.toFixed(2) + "</td></tr>";  

     
    }
    
     
    document.getElementById("displayschedule").innerHTML = results;  
    
}