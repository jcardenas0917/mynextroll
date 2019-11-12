const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    email: { type: String, required: true },
    nickname: { type: String, required: true },
    name: { type: String, required: true },
    belt: { type: String, required: true },
    stripes: { type: String, required: true },
    academy: { type: String, required: true },
    city: { type: String, required: true },
    profession: { type: String, required: true },
    sub: { type: String, required: true },
    instructor: { type: String, required: true },
    image: { type: String, required: false },

});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
