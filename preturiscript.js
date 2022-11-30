window.onload=function(){
    for( var i=0;i<5;i++)
    {
        var div=document.createElement("div");
        div.className="preturi";
        div.innerHTML=i+1;
        div.style.textAlign="center";
        
        div.style.fontSize="xx-large";
        div.style.backgroundColor="white";

        document.body.appendChild(div);


        var text=document.createElement("p");
        text.className="detalii";
        text.style.textAlign="center";
        text.style.color="rgb(255, 33, 85)";
        text.style.fontSize="x-large";
        document.body.appendChild(text);
    }

    var divuri=document.getElementsByClassName("preturi");

    divuri[0].innerHTML="200 RON - Abonament 8 sedinte";
    divuri[1].innerHTML="160 RON - Abonament 4 sedinte";
    divuri[2].innerHTML="350 RON - Abonament family";
    divuri[3].innerHTML="40 RON - Sedinta";
    divuri[4].innerHTML="200 RON - Sedinta privata";

    var par=document.getElementsByClassName("detalii");
    par[0].innerHTML="Include 2 sedinte/saptamana la orice curs de dans ales";
    par[1].innerHTML="Include 1 sedinta/saptamana la orice curs de dans ales";
    par[2].innerHTML="Vino cu cei 2 copii ai tai si beneficiezi de o reducere de 12,5% alegand abonamentul family";
    par[3].innerHTML="Pretul standard al unei sedinte la orice curs de dans";
    par[4].innerHTML="Include o sedinta privata cu unii dintre cei mai buni instructori de dans din tara";



    var f=document.createElement("footer");
    f.className="footer";
    f.innerHTML="Designed by DominoDance 2022";

    document.body.appendChild(f);


}