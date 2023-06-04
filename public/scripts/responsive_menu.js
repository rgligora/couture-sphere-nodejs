const dropDownButton = document.getElementById('drop-down-button')
dropDownButton.addEventListener('click', function() {
    if(document.getElementById('left-menu').style.display == "flex"){
      document.getElementById('left-menu').style.display="none";
    }else{
      document.getElementById('left-menu').style.display="flex";
    }
      
});