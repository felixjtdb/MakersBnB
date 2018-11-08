var arr
console.log('oqiwueoiqwueoqiwe');
fetch('/listings').then(function(res) {
  return res.json()
})
.then(function (res) {
  var listingNames = res.listings.map(function(item, index) {
    return item["name"]
  })
  arr = listingNames
}).then(function () {
  console.log('weouroiweuroiw');
 console.log(arr);

  var el = document.getElementById('listingNames')

  for (var i = 0; i < arr.length; i++) {
    content = `<h6>${arr[i]}</h6>`
    el.insertAdjacentHTML('afterbegin', content)
  }



})
