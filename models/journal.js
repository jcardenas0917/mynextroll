
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let JournalSchema = new Schema({
    user: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

let Journal = mongoose.model("Journal", JournalSchema);

module.exports = Journal;