let main = document.getElementById("main-content");
let input = document.getElementById("search-input");
let button = document.getElementById("search");

button.addEventListener("click", function () {
  let valueofInput = input.value;
  console.log(valueofInput);
  fetch(
    https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={b9d953322207fece1bc53ade8cb88e7f}
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let list = data.articles;
      let result = list.map(function (listing) {
        return `<p> <span class ="title">  ${listing.title} <span> </p>
            <p class = "author"> ${listing.author} </p>
            <p class = "description" >${listing.description}</p>`;
      });
      main.innerHTML = result;
    });
});
