function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
    xhr.addEventListener("error", () => {
      reject(new Error("Network error"));
    });
  });

  xhr.open(method, url);
  xhr.send();

  return promise;
}

makeHttpRequest("GET", "https://dummyjsonl.com/users")
  .then((data) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/post/user/${data.users[4].id}`
    );
  })
  .then((data) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/comments/post/${data.posts[0].id}`
    );
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
//   .finally(() => {
//     console.log("Request completed");
//   });
