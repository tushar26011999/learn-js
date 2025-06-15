const url = "https://dummyjson.com/products";

async function req() {
  const response = await (await fetch(url)).json();
  //   return response;
  console.log(response);
  //   request
  //     .then((res) => res.json().then((data) => console.log(data)))
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
}

req();
// console.log(req());
