import React, { useState } from 'react';

const Sub = () => {

  const [isVisible, setIsVisible] = useState(false);
 

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  

  let button;
  

        if(isVisible ){
     button= <button onClick={handleToggle}>Hide</button>
        }
        
        
          
      else{
          button= <button onClick={handleToggle}>Show</button>
      }
      let paragraph;

      if(isVisible){
        paragraph= <p><b>The button variable is set based on the value of isVisible. If it's true, the "Unsubscribe" button is rendered, and if it's false, the "Subscribe" button is rendered.

        Similarly, the paragraph variable is set based on the value of isVisible. If it's true, the paragraph is rendered, and if it's false, the paragraph is not rendered.
        
        Please note that in this approach, the paragraph is not hidden when isVisible is false; </b></p>
      }
     
     
    
     return<div>
      {button}
      {paragraph}
      </div> 
     
     
    
  
};

export default Sub;
