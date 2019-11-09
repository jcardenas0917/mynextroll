const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.Profile
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.Profile
            .findOne({ email: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Profile
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Profile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Profile
            .findOneAndUpdate({ email: req.params.email }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Profile
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createJournal: function (req, res) {
        db.Journal
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findOneJournal: function (req, res) {
        db.Journal
            .find({ user: req.params.user })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findOneJournalById: function (req, res) {
        db.Journal
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },


    findAllJournals: function (req, res) {
        db.Journal
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updateJournal: function (req, res) {
        db.Journal
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    removeJournal: function (req, res) {
        db.Journal
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createPost: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    showAllPosts: function (req, res) {
        db.Post
            .find(req.query)
            .populate("comment")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createComment: function (req, res) {
        db.Comment.create(req.body)
            .then(function (dbComment) {
                db.Post.findByIdAndUpdate({ _id: req.params.id }, { $push: { comment: dbComment._id } }, { new: true })

                    // })
                    .then(function (dbPost) {
                        res.json(dbPost);
                    });
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    getComments: function (req, res) {
        db.Post.findOne({ _id: req.params.id })
            .populate("comment")
            .then(function (dbPost) {
                res.json(dbPost);
            })
            .catch(function (err) {
                res.json(err);
            });
    }

};
