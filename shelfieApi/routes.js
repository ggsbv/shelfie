"use strict";

module.exports = function (models) {

    const allBooks = function (req, res, next) {
        models.Book
            .find({})
            .then(function (books) {
                res.json(books);
            })
            .catch(function (err) {
                return next(err);
            });
    };

    const addBook = function (req, res, next) {
        var newBook = new models.Book(req.body);

        newBook.save()
            .then(function (book) {
                res.status(201)
                res.json(book);
            })
            .catch(function (err) {
                if (err) return next(err);
            });
    };

    return {
        allBooks,
        addBook
    }
};
