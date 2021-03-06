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

window.onscroll=function(){
  if(window.pageYOffset>300){
    document.getElementById("top-btn").style.opacity="1";
  }
  else{
    document.getElementById("top-btn").style.opacity="0";
  }
  document.getElementById("top-btn").style.transition="all 0.3s ease";
};

document.getElementById('top-btn').addEventListener('click',function(){smoothScroll('#top',2000);});
