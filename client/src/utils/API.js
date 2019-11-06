import axios from "axios";

export default {

    getProfiles: function () {
        return axios.get("/api/profile");
    },

    getProfile: function (email) {
        return axios.get("/api/profile/email/" + email);
    },

    deleteProfile: function (email) {
        return axios.delete("/api/profile/email" + email);
    },

    saveProfile: function (profileData) {
        return axios.post("/api/profile", profileData);
    },

    updateProfile: function (email, profileData) {
        return axios.put("/api/profile/email/" + email, profileData)
    },

    getJournal: function (user) {
        return axios.get("/api/journal/user/" + user);
    },
    saveJournal: function (journalData) {
        return axios.post("/api/journal", journalData);
    },

    deleteJournal: function (id) {
        return axios.delete("/api/journal/id/" + id);
    },

    savePost: function (forumData) {
        return axios.post("/api/forum", forumData);
    },

    getPosts: function () {
        return axios.get("/api/forum");
    },

    saveComment: function (id, commentData) {
        return axios.post('/api/comment/' + id, commentData)
    },

    getComments: function (id) {
        console.log(id);
        return axios.get("/api/forum/id/" + id);
    },
};
