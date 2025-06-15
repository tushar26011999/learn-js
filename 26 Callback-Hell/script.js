function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });
  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest("GET", "https://dummyjson.com/users", (data) => {
  makeHttpRequest(
    "GET",
    `https://dummyjson.com/post/user/${data.users[4].id}`,
    (data) => {
      makeHttpRequest(
        "GET",
        `https://dummyjson.com/comments/post/${data.posts[0].id}`,
        (data) => {
          console.log(data);
        }
      );
    }
  );
});
