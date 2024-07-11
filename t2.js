let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved") || reject("Promise rejected");
    },2000);
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
