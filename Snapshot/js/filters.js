let filter_list=document.querySelectorAll('button');
filter_list=[...filter_list].slice(1);

filter_list.forEach(button=>{
    button.addEventListener('click', ()=>{
        document.querySelector('.secondary').classList.add('primary');
        document.querySelector('.secondary').classList.remove('secondary');

        if(button.className==='primary'){
            button.classList.remove('primary');
            button.classList.add('secondary');
        }

        document.getElementById('images-div').innerHTML="";

        if(filter_list.indexOf(button)>0){filter(filter_list.indexOf(button));}
        else{
            for(let i=1; i<=12; ++i){

                let div=document.createElement("DIV");
                div.classList.add('image');
                let image=document.createElement("IMG");

                if(i<10){image.src=`./images/thumbs/0${i}.jpg`;}
                else{image.src=`./images/thumbs/${i}.jpg`;}

                div.appendChild(image);
                document.getElementById('images-div').appendChild(div);
            }
        }

    });
});

function filter(button){
    for(let i=1; i<=4; ++i){
        let div=document.createElement("DIV");
        div.classList.add('image');
        let image=document.createElement("IMG");

        if((4*(button-1))+i<10){image.src=`./images/thumbs/0${(4*(button-1))+i}.jpg`;}
        else{image.src=`./images/thumbs/${(4*(button-1))+i}.jpg`;}
        
        div.appendChild(image);
        document.getElementById('images-div').appendChild(div);
    }
} 
// console.log(filter_list);