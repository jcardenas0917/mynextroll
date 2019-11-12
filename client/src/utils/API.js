import axios from "axios";

export default {
    //Get Profile API
    getProfiles: function () {
        return axios.get("/api/profile");
    },
    //Get specific profile by email
    getProfile: function (email) {
        return axios.get("/api/profile/email/" + email);
    },
    getProfileByNickName: function (nickname) {
        console.log(nickname)
        return axios.get("/api/profile/nickname/" + nickname);
    },
    //Delete Profile not being used
    deleteProfile: function (email) {
        return axios.delete("/api/profile/email" + email);
    },
    //Create new profile API
    saveProfile: function (profileData) {
        return axios.post("/api/profile", profileData);
    },
    //Edit Profile API
    updateProfile: function (email, profileData) {
        return axios.put("/api/profile/email/" + email, profileData)
    },
    //Get Journal by User API
    getJournal: function (user) {
        return axios.get("/api/journal/user/" + user);
    },
    //Get Journal By ID API used to edit later on 
    getJournalById: function (id) {
        return axios.get("/api/journal/id/" + id);
    },
    //creates a new use journal
    saveJournal: function (journalData) {
        return axios.post("/api/journal", journalData);
    },
    //removes journal from DB
    deleteJournal: function (id) {
        return axios.delete("/api/journal/id/" + id);
    },
    //update user journal
    updateJournal: function (id, journalData) {
        return axios.put("/api/journal/id/" + id, journalData)
    },
    //Creates a new post in the community forum
    savePost: function (forumData) {
        return axios.post("/api/forum", forumData);
    },
    //gets all posts from the DB
    getPosts: function () {
        return axios.get("/api/forum");
    },
    //Save commets to db
    saveComment: function (id, commentData) {
        return axios.put('/api/forum/' + id, commentData)
    },
    //get comments only...currently not being used
    getComments: function (id) {
        return axios.get("/api/forum/" + id);
    },
};
