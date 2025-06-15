const apiCall = fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Product",
    price: 99.99,
    description: "This is a new product",
    category: "electronics",
  }),
}).then((res) => {
  res.json().then((data) => console.log(data));
});

// console.log(apiCall);
