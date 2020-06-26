function find() {
var book = document.getElementById('book').value;
if (book == "") {
alert("please enter a valid book or info")

}else{

  fetch("https://www.googleapis.com/books/v1/volumes?q="+book)

  .then(function (res) {

   return res.json();

  })

  .then(function (result) {

    

  var html = '<p>'; 

   for (var i =0 ; i < result.items.length; i++) {

 

    title = result.items[i].volumeInfo.title;

    description = result.items[i].volumeInfo.description;

    authors = result.items[i].volumeInfo.authors

    html += 'Book Title : ' + title + '<br><br>' +'Book Description : ' + description + '<br><br>' +'Author(s) : ' + authors +'<hr>';

    

   }

  html += '<p>';

  document.getElementById('books').innerHTML = html;

  }),

  function (error) {

   console.log(error);

   };

  }

}