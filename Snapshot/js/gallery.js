let images_list=document.querySelectorAll('.image');
images_list.forEach(image=>{
    image.addEventListener('click', ()=>{
        let source=image.firstChild.src.split('/');
        source[source.length-2]="fulls";
        source=source.join('/');

        var img=document.createElement('IMG');
        img.src=source;
        document.getElementById('close').after(img);
        // console.log(source);
        document.getElementById('image-popup').style.visibility="visible";

        document.getElementById('close').addEventListener('click', ()=>{
            document.getElementById('image-popup').style.visibility="hidden";
            document.getElementById('popup-menu').removeChild(img);
        });

    });
});