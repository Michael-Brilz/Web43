var extras = [];
var price = [];
$arrextras = explode(',', $extras);
$arrprice = explode(',', $price);
document.getElementById("extralist").innerHTML = extras;
document.getElementById("pricelist").innerHTML = price;



//Funktion um übergebene Parameter in das Array zu schreiben.
function pushIntoArray(n) {
  var one = n.getAttribute('data-name'),
    two = n.getAttribute('data-price');
  var x = parseFloat(two);
  extras.push(one);
  price.push(x);
  document.getElementById("extralist").innerHTML = extras.join("<br>");
  document.getElementById("pricelist").innerHTML = price.join("<br>");
  saveLocalStorage();
  countPrice();
  saveTotal();
}
//Funktion um den Gesamtpreis der Zutaten zu berechnen.
function countPrice() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var r = price.reduce(reducer);
  document.getElementById("gesamtpreis").innerHTML = r.toFixed(2) + "&nbspEuro";
}
//Funktion um den Gesamtpreis der Zutaten zu berechnen.
function saveTotal() {
  var n = document.getElementsByTagName("h4")[0].innerText;
  localStorage.setItem("gesamt", JSON.stringify(n));
}
//Funktion um den Gesamtpreis der Zutaten zu berechnen.
function saveExtraRequest(){
var extraRequest = document.getElementById("exampleFormControlTextarea1").value;
localStorage.setItem("request", JSON.stringify(extraRequest));

}
//Funktion um den Preis und die Zutaten im Local Storage zu speichern.
function saveLocalStorage() {
  localStorage.setItem("price", JSON.stringify(price));
  localStorage.setItem("extras", JSON.stringify(extras));
}
//In der Funktion wird überpüft ob das Array leer ist und nach 1.5 sek wird der Benutzer weitergeleitet.
function invoice() {
  if(extras.length === 0){
    alert("Bitte fügen eine Zutat hinzu")
  }else{
  setTimeout(function () {
    window.location.href = 'rechnung.php'
  }, 1500);
}
}
//Funktion um den alle Keys aus dem Local Storage zu laden.
function listItems() {
  document.getElementById("setExtras").innerHTML = JSON.parse(localStorage.getItem("extras")).join("<br>");
  document.getElementById("setPrice").innerHTML = JSON.parse(localStorage.getItem("price")).join("<br>");
  document.getElementById("setWish").innerHTML = JSON.parse(localStorage.getItem("request"));
  document.getElementById("nettoPrice").innerHTML = JSON.parse(localStorage.getItem("gesamt"));
  getTax();
  getTotal();
  
}
//Funktion um die Mehrwertsteuer zu berechnen.
function getTax() {
  let x = JSON.parse(localStorage.getItem("gesamt"));
  let y = parseFloat(x) * 19 / 100;
  document.getElementById("tax").innerHTML = y.toFixed(2) + "&nbspEuro";
}
//Funktion um den Gesamtpreis zu berechnen.
function getTotal() {
  let z = JSON.parse(localStorage.getItem("gesamt"));
  let b = parseFloat(z) * 19 / 100;
  let t = b + parseFloat(z);
    document.getElementById("totalPrice").innerHTML = t.toFixed(2) + "&nbspEuro";
}
//Funktion um das Array in der Bestellung zu leeren.
function deleteArr(){
  extras.splice(0,extras.length);
  price.splice(0,price.length);
  document.getElementById("pricelist").innerHTML = price.join("<br>");
  document.getElementById("extralist").innerHTML = extras.join("<br>");
  document.getElementById("gesamtpreis").innerHTML = "0.00"
}

