import axios from "axios";

export default {
    // Gets all profiles
    getProfiles: function () {
        return axios.get("/api/user");
    },
    // Gets the book with the given id
    getProfile: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Deletes the book with the given id
    deleteProfile: function (id) {
        return axios.delete("/api/user/" + id);
    },
    // Saves a book to the database
    saveProfile: function (userData) {
        return axios.post("/api/user", userData);
    }
};
