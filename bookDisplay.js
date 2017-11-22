// get all books to display on the home screen
$.ajax({
  type : "GET",
url : 'https://shelfie-books.herokuapp.com/api/books'
dataType : "json",
success : function (books) {
  console.log(books);
  ko.observable({
    //data that is grabbed from the database


  });
}
});

$.ajax({
  type: "GET",
url: /*still to be added*/
dataType: "json",
success: function (books) {
  console.log(books);
  ko.observable({
    //books that meet search bar specs
  });
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
