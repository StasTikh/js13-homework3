function isNumber() {
    let answer = +innInput.value;
      
    if(Number.isNaN(answer)){
      innHelp.innerHTML = "Only numbers"    
    } 
  }
  