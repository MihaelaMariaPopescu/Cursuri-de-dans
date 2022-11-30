var id;


function fetchstiluri(){
    let content=document.getElementById("content");
    let body=document.getElementsByTagName("body")[0];
    let p=document.createElement("p");
    let text=document.createElement("p");
    p.innerText="Loading...";
    p.setAttribute("id","loading");
    body.appendChild(p);
    fetch('http://localhost:3000/cursuri', {method:'get'}).then(function(response)
    {
        response.json().then((data)=>{
            console.log(data);
            if(data.length){
                body.removeChild(p);}
            for(let i=0;i<data.length;i++)
            {
                let h1 =document.createElement("h1");
                h1.innerText=data[i].name;
                h1.style.textAlign='center';
                h1.style.backgroundColor='white';
                content.appendChild(h1);
               
                var div = document.createElement("div");
                div.style = "width:100%; text-align:center";
                let image=document.createElement("img");
                image.setAttribute("src",data[i].img);   
                image.width=400;           
                div.appendChild(image);
                content.appendChild(div);

                
                let text=document.createElement("p");
                text.innerText=data[i].text;
                text.style.textAlign='center';
                text.style.fontSize='x-large';
                text.style.fontFamily='Lato';
                text.style.fontWeight='bold';
                content.appendChild(text);
                
            }
        })
    })

}

fetchstiluri();