    // FUNCTION TO SET UP BOOTSTRAP MODALS FOR hOTSPOTS / ANNOTATIONS IN THE 3DHOP VIEWER
    // CODE WAS COPIED FROM https://github.com/IroMp/3dhop-threejs-demo/blob/master/js/hotspotsinfo.js AND MODIFIED
    // EACH CASE REPRESENTS A HOTSPOT, THAT CAN BE CLICKED IN THE 3D VIEWER
    // IT WILL INVOKE A BOOTSTRAP MODAL TO SHOW THE INFORMATION FOR THIS SPECIFIC HOTSPOT


function setInfo(hotspot){

  
	switch (hotspot){
		case 1:
      var modal = document.getElementById("Grabeingang");
    modal.style.display = "block";
    
    //close modal, when leftclick on modal
    modal.onclick = function() {
        modal.style.display = "none"; 
    }
    
    //close modal when leftclick somewhere in window
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 2:
      var modal = document.getElementById("Bodenpflaster");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 3:
      var modal = document.getElementById("Steinkranz");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 4:
      var modal = document.getElementById("Zwischenmauer");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 5:
      var modal = document.getElementById("Erdbau");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 6:
      var modal = document.getElementById("entrance");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 7:
      var modal = document.getElementById("floor");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 8:
      var modal = document.getElementById("oval");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 9:
      var modal = document.getElementById("between");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 10:
      var modal = document.getElementById("dirt");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 11:
      var modal = document.getElementById("linienheute1932");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 12:
      var modal = document.getElementById("positionsteine");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 13:
      var modal = document.getElementById("wireframenetz");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 14:
      var modal = document.getElementById("linetoday1932");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 15:
      var modal = document.getElementById("positionstones");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 16:
      var modal = document.getElementById("wireframes");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 17:
      onclick="presenter.animateToTrackballPosition([180.0, 40.0, 3.0]);"
      var modal = document.getElementById("messen");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 18:
      var modal = document.getElementById("steineheute");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 19:
      var modal = document.getElementById("betonklotz");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 20:
      var modal = document.getElementById("measurestick");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 21:
      var modal = document.getElementById("stonestoday");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 22:
      var modal = document.getElementById("betonbase");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 23:
      var modal = document.getElementById("gewissheit");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;

    case 24:
      var modal = document.getElementById("certainty");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
		break;



    default:
      modal.style.display = "none";
        break;
	}

  
}


