let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let PostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;