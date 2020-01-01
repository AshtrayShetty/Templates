function smoothScroll(target, duration){
    var target=document.querySelector(target);
    var targetPosition=target.getBoundingClientRect().top; //gives how far the target variable is from the top of the window rectangle
    var startPosition=window.pageYOffset; // gives how much the window has scrolled down to (wrt Y axis)
    var distance=targetPosition-startPosition;
    var startTime=null;

    function animation(currentTime){
        if(startTime===null){startTime=currentTime;}
        var timeElapsed=currentTime-startTime;
        var run=ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed<duration){requestAnimationFrame(animation);}
    }

    //function to calculate how far the page has to scroll to get to that portion of the page
    function ease(timeElapsed,startPosition,distance,duration){
        timeElapsed/=duration/2;
        if(timeElapsed<1){return distance/2*timeElapsed*timeElapsed+startPosition;}
        timeElapsed--;
        return -distance/2*(timeElapsed*(timeElapsed-2)-1)+startPosition;
    }

    //used for smooth animation 
    requestAnimationFrame(animation);
}

var mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
    mybutton.style.transition="2s all ease-in";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById('top-btn').addEventListener('click',function(){smoothScroll('#top',1000);});