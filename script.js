window.onload = function() {
        
    var textSus = document.querySelector(".text-sus");
    var textJos = document.querySelector(".text-jos");
    var casute = document.getElementsByClassName("casuta");
    var contor = 0;
    var sfarsitDeJoc = 0;
    var resetare= 0;
    for ( let casuta of casute )
    {
        casuta.addEventListener( "click", function() {
            if( contor%2 === 0 && sfarsitDeJoc === 0 )
            {
                if ( randulluiO( casuta ) )
                {
                contor++;           
                }
                sfarsitDeJoc = verificare(casute, contor);
            }
            else if ( contor%2 === 1 && sfarsitDeJoc === 0)
            {
                if ( randulluiX( casuta ) )
                {
                contor++;
                }
                sfarsitDeJoc = verificare(casute,contor);
            }
            console.log(sfarsitDeJoc,contor);
            if ( resetare )
            {
                restareJoc( casute);
                sfarsitDeJoc = 0;
                resetare = 0;
            }
            if ( sfarsitDeJoc || contor==9)
            {
                console.log( sfarsitDeJoc,contor);
                declarareCastigator( casute, sfarsitDeJoc);
                sfarsitDeJoc = 1;
                contor=0;
                resetare=1;
            }            
        })
    }
function randulluiO ( casuta ) {
    if(casuta.innerText == "")
    { 
    casuta.innerText ="O" ;
    textSus.innerText="Acum e randul lui X";
    return 1;
    }     
    return 0;
}
function randulluiX ( casuta ) {
    if(casuta.innerText == "")
    {
    casuta.innerText = "X";
    textSus.innerText="Acum e randul lui O";
    return 1;
    }
    return 0;
}
function verificare ( casute , contor) {
    if(contor < 5) return 0;
    else {
    if ( casute[0].innerText == casute[1].innerText && casute[1].innerText == casute[2].innerText && casute[1].innerText) return  210;
    if ( casute[3].innerText == casute[4].innerText && casute[4].innerText == casute[5].innerText && casute[3].innerText) return  543;
    if ( casute[6].innerText == casute[7].innerText && casute[7].innerText == casute[8].innerText && casute[6].innerText) return  876;
    if ( casute[0].innerText == casute[3].innerText && casute[3].innerText == casute[6].innerText && casute[0].innerText) return  630;
    if ( casute[1].innerText == casute[4].innerText && casute[4].innerText == casute[7].innerText && casute[1].innerText) return  741;
    if ( casute[2].innerText == casute[5].innerText && casute[5].innerText == casute[8].innerText && casute[2].innerText) return  852;
    if ( casute[0].innerText == casute[4].innerText && casute[4].innerText == casute[8].innerText && casute[0].innerText) return  840;
    if ( casute[2].innerText == casute[4].innerText && casute[4].innerText == casute[6].innerText && casute[2].innerText) return  642;
    else return 0;
    }
}
function declarareCastigator ( casute, sfarsitDeJoc) {
    
    if ( sfarsitDeJoc == 0)
    {
        textSus.innerText = "Apasa pe orice casuta pentru a reseta";
        textJos.innerText = "Remiza!";
    }
    else {
        var u = sfarsitDeJoc % 10;
        var z = Math.floor( sfarsitDeJoc/10) % 10;
        var s = Math.floor( sfarsitDeJoc/100) % 10;        
        casute[u].classList.add("red");
        casute[s].classList.add("red");
        casute[z].classList.add("red");    
        textSus.innerText = "Apasa pe orice casuta pentru a reseta";
        textJos.innerText =  casute[u].innerText + " a castigat!";
    }
}
function restareJoc ( casute ) {
    for (let casuta of casute)
    {
        casuta.innerText="";
        casuta.classList.remove("red");
        
    }
    textSus.innerText="O incepe!";
    textJos.innerText="";
}
}

