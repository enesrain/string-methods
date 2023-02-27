let metin =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eum! Ut, eligendi labore quae voluptatibus quia magnam error amet, rerum velit sit hic omnis explicabo perspiciatis asperiores dolores doloribus quod!";

let result = document.querySelector(".result");
result.innerHTML = "sonuc";

let upper = document.querySelector(".upper");
let lower = document.querySelector(".lower");
let ayir = document.querySelector(".ayir");
let replace = document.querySelector(".replace");
let split = document.querySelector(".split");
let start = document.querySelector(".start");
let end = document.querySelector(".end");

upper.addEventListener("click", function () {
  let big = metin.toUpperCase();
  result.innerHTML = big;
});

lower.addEventListener("click", function () {
  let small = metin.toLowerCase();
  result.innerHTML = small;
});

ayir.addEventListener("click", function () {
  let cikar = metin.slice(7, 13);
  cikar = metin.substring(7, 13); // aynı sonuç
  result.innerHTML = cikar;
});

replace.addEventListener("click", function () {
  let change = metin.replace("Lorem", "Başlangıç");
  result.innerHTML = change;
});

split.addEventListener("click", function () {
  let yeniMetin = metin.split(" ");
  result.innerHTML = yeniMetin;
});

start.addEventListener("click", function () {
  let sonuc = metin.startsWith("Lorem");
  result.innerHTML = sonuc + ": çünkü metin Lorem ile başlıyor";
});

end.addEventListener("click", function () {
  let sonuc = metin.endsWith("?");
  result.innerHTML = sonuc + " : çünkü metnin sonunda ? bulunmuyor";
});
