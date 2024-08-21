function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b;
  
      if(sum <= 5){
        resolve("Let's go!!")
      } else {
        reject('Oops!.. Number must be less than 5')
      }
    })
  
    return customPromise
  }
  
  // consuming the promise
  getSumNum(1, 6).then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })