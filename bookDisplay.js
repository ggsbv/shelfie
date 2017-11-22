// get all books to display on the home screen
$.ajax({
  type : "GET",
url : 'https://shelfie-api.herokuapp.com/api/books'
dataType : "json",
success : function (books) {
  console.log(books);
  //data that is grabbed from the database
  self.books = ko.observable([
    {"title" : books.title, "author" : books.author}
  ]
  );

}
});

$.ajax({
  type: "GET",
url: /*still to be added*/
dataType: "json",
success: function (books) {
  console.log(books);
myFunction();
}
});

$.ajax({
  type : "POST",
url : /*still to be added*/
dataType : "json"
success : function(books) {
  console.log(arguments);

ko.observable({
  /*book count on that specific book will decrease*/
})

  var initDocument = $.extend(true, {}, document);
}
})
