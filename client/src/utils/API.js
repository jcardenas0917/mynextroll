import axios from "axios";

export default {
    // Gets all profiles
    getProfiles: function () {
        return axios.get("/api/profile")
    },
    // Gets the profile with the given email
    getProfile: function (email) {
        let test = "hello"
        console.log(test);
        return axios.get("/api/profile/email/" + email);
    },
    // Deletes the profile with the given email
    deleteProfile: function (id) {
        return axios.delete("/api/profile/" + id);
    },
    // Saves a profile to the database
    saveProfile: function (profileData) {
        return axios.post("/api/profile", profileData);
    },
};
