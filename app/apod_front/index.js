const image = document.getElementById("myImage");
const dis = document.getElementById("dis");
const Title = document.getElementById("title");

let UpdateDate = 0;
let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let fullDate = UpdateDate ? UpdateDate : `${year}-${month}-${date}`;

document.getElementById("calendar").setAttribute("value", fullDate);

(function apiCall() {
  let fetchRes = fetch(`http://localhost:8080/api/apods?date=${fullDate}`);

  fetchRes
    .then((res) => res.json())
    .then((data) => {
      image.src = `http://localhost:8080/${data.url}.png`;
      dis.innerText = data.explanation;
      Title.innerText = data.title;
      console.log("onLoad");
    });
})();

document.getElementById("calendar").onchange = function (e) {
  temp = e.target.value;
  UpdateDate = temp;
  console.log(UpdateDate);
  let fetchRes = fetch(`http://localhost:8080/api/apods?date=${UpdateDate}`);
  fetchRes
    .then((res) => res.json())
    .then((data) => {
      image.src = `http://localhost:8080/${data.url}.png`;
      dis.innerText = data.explanation;
      Title.innerText = data.title;
    })
    .catch((err) => {
      console.log(err);
    });
};
