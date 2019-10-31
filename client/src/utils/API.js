import axios from "axios";

export default {
    // Gets all profiles
    getProfiles: function () {
        return axios.get("/api/profile")
    },
    // Gets the profile with the given email
    getProfile: function (email) {
        return axios.get("/api/profile/email/" + email);
    },
    // Deletes the profile with the given email
    deleteProfile: function (email) {
        return axios.delete("/api/profile/email" + email);
    },
    // Saves a profile to the database
    saveProfile: function (profileData) {
        return axios.post("/api/profile", profileData);
    },

    updateProfile: function (email, profileData) {
        return axios.put("/api/profile/email/" + email, profileData)
    }
};
