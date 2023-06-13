function getResponse(name, status) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve("hello " + name);
      reject("error from api");
    }, 3000);
  });
}

console.log(
  getResponse("sagar",false)
    .then((data) => console.log({ data }))
    .catch((error) => {
      console.log(error);
    })
);
