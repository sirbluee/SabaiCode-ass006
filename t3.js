let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise
    .then(result => {
      console.log(result);  // 1
      return result * 2;
    })
    .then(result => {
      console.log(result);  // 2
      return result * 2;
    })
    .then(result => {
      console.log(result);  // 4
    })
    .catch(error => {
      console.log(error);
    });
  