let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let xhrBtn = document.querySelector("#xhr");
let fetchBtn = document.querySelector("#fetch");
let jqueryBtn = document.querySelector("#jquery");
let axiosBtn = document.querySelector("#axios");
let quoteDisp = document.querySelector("#quote");


// XHR 
xhrBtn.addEventListener("click", function() {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      let quote = JSON.parse(XHR.responseText)[0];
      quoteDisp.innerText = quote;
  }
}
  
  XHR.open("GET", url);
  XHR.send();
});

// Fetch
fetchBtn.addEventListener("click", function() {
  fetch(url)
  .then(function(req) {
    req.json().then(function(data) {
    quoteDisp.innerText = data[0];
    })                                 
  })
  .catch(function() {
    alert("Error!");
  })
});

// JQuery

$('#jquery').click(function() {
  $.getJSON(url)
  .done(function(data) {
    $('#quote').text(data[0]);
  })
})

// Axios

axiosBtn.addEventListener("click", function() {
    axios.get(url)
    .then(function(res) {
      quoteDisp.innerText = res.data[0];
    })
  .catch(function() {
      alert("ERROR!");
    })
});