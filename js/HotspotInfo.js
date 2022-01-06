function setInfo(hotspot){

  
	switch (hotspot){
		case 1:
      var modal = document.getElementById("myModal1");
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

    case 2:
      var modal = document.getElementById("myModal2");
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
      var modal = document.getElementById("myModal3");
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
      var modal = document.getElementById("myModal4");
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
      var modal = document.getElementById("myModal5");
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
      var modal = document.getElementById("myModal6");
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


