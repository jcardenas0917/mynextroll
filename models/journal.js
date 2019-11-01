
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let JournalSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }

});

let Journal = mongoose.model("Journal", JournalSchema);

module.exports = Journal;