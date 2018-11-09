function newListing(data) {
  console.log(data);
  fetch('/new/listing', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"},
    // console.log(data);
  }).then(function(res) {
    window.location.href= "/"
    console.log(4);
  })
  console.log(data);

}
