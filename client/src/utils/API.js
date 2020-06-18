import axios from "axios";


const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
      },
    getQuotes: function() {
        return axios.get("/api/quotes");
    },
    getQuote: function(id) {
        return axios.get("/api/quotes" + id);
    },
    deleteQuotes: function(id) {
        return axios.delete("/api/quotes" + id);     
    },
    saveQuote: function(quoteData) {
        return axios.post("/api/quotes" , quoteData);
    }
};