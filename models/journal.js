
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let JournalSchema = new Schema({
    user: { type: String },
    title: { type: String },
    body: { type: String },
    category: { type: String },
    createdAt: { type: Date, default: Date.now }
});

let Journal = mongoose.model("Journal", JournalSchema);

module.exports = Journal;