window.email = (email) => {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(email);
  
  }
  
  window.password = (password) => {
    passwordRegex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/i;;
      return passwordRegex.test(password);
  
  }