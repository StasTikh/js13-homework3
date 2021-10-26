function innCalc() {
  let inn = innInput.value;
  let innCheckArray = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
  let checkSum = 0;

  if (inn.length < 10){
    innHelp.innerHTML = "Your INN must contain at least 10 digits";
  } else {
    innHelp.innerHTML = " ";
    for (let i = 0; i < inn.length -1; i++) {
      checkSum = checkSum + (inn[i] * innCheckArray[i]);
    }
    let control = checkSum - (11 * (Math.floor(checkSum / 11)));
    if (control >= 10) {
    control = 0;
    }
    console.log(inn[9], control);

    if (control != inn[9]) {
      innHelp.innerHTML = "Wrong INN";
      infoTable.style.display = "none";
    } else {
      infoTable.style.display = "block";
      let birthCheck = +inn.substring(0, 5);
      let date = new Date(1900, 0, 0);
      date.setDate(date.getDate() + (birthCheck));
    
      let now = new Date(); 
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
      let dateOfBirth = new Date(date);
      var dobnow = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate()); //ДР в текущем году
      let fullAge;
      fullAge = today.getFullYear() - dateOfBirth.getFullYear();
      if (today < dobnow) {
        fullAge = fullAge-1;
      }
      let allDate = [];
      allDate.push(date.getDate(), ' ' + (date.getMonth()+1), ' '+ date.getFullYear());  
      console.log(`Birthday date is: ${allDate}; full age is ${fullAge}`);
    
      if(inn[inn.length-2] % 2 != 0) {
        gender.innerHTML = 'Male';
      } else {
        gender.innerHTML = 'Female';
      }

      dOb.innerHTML = allDate;
      years.innerHTML = fullAge;
    }
  }    
}