<<<<<<< HEAD
var animatePoints = function() {
=======
>>>>>>> c45ea5029bd90835444426f5052abadebf8d6e62

var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
   var revealPoint = function(index) {
     points[index].style.opacity = 1;
     points[index].style.transform = "scaleX(1) translateY(0)";
     points[index].style.msTransform = "scaleX(1) translateY(0)";
     points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
   };

   for (var i = 0; i < points.length; i++ ) {
     revealPoint(i);
   }
 };
   window.onload = function() {
     if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

<<<<<<< HEAD
    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateY(0)";
        points[2].style.msTransform = "scaleX(1) translateY(0)";
        points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    revealFirstPoint();
    revealSecondPoint();
    revealThirdPoint();
  };
=======
     window.addEventListener("scroll", function(event) {
       if (pointsArray[0].getBoundingClientRect().top <= 500) {
         animatePoints(pointsArray);
       }
     });
   }
>>>>>>> c45ea5029bd90835444426f5052abadebf8d6e62
