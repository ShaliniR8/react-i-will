import React from 'react';
import './Button.css';


var animateButton = function(e) {

    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
 
function Button(props){
    
    var bubblyButtons = document.getElementsByClassName("bubbly-button");
    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }
  
    
    return( <div>
        <button className="bubbly-button" onClick={()=>props.saveItems()}>&uarr;</button>
    </div>
    )}

  export default Button;