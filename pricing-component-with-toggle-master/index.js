var checkbox = document.getElementById("chk")
var basicPrice = document.getElementById("basicPrice")
var proPrice = document.getElementById("proPrice")
var masterPrice = document.getElementById("masterPrice")

checkbox.addEventListener('change', function() {
  if (this.checked) {
      basicPrice.innerHTML="&dollar;19.99"
      proPrice.innerHTML= "&dollar;24.99"
      masterPrice.innerHTML="&dollar;39.99"
  } else {
    basicPrice.innerHTML="&dollar;199.99"
    proPrice.innerHTML= "&dollar;249.99"
    masterPrice.innerHTML="&dollar;399.99"
  }
});