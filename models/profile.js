const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    email: { type: String },
    name: { type: String },
    belt: { type: String },
    stripes: { type: Number },
    academy: { type: String },
    city: { type: String },
    profession: { type: String },
    sub: { type: String },
    instructor: { type: String },
    image: { type: String, required: false },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
