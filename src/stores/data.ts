import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface Quote {
  _id: Number;
  quoteText: String;
  quoteAuthor: String;
  quoteGenre: String;
  __v: Number;
}

export interface Pagination {
  currentPage: Number;
  nextPage: Number;
  totalPages: Number;
}

export interface DataStore {
  statusCode: Number;
  message: String;
  pagination: Pagination;
  totalQuotes: Number;
  data: Quote[];
}

export interface SearchData {
  author: String;
  dataLoading: Boolean;
  quoteData: DataStore;
}

export const myStore = defineStore({
  id: "searchData",
  state: (): SearchData => ({
    author: "Bill Gates",
    dataLoading: false,
    quoteData: {} as DataStore,
  }),
  getters: {},
  actions: {
    async getRandomQuote() {
      const randomPage = Math.floor(Math.random() * 7267) + 1;
      const response = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?page=${randomPage}`
      );
      const jsonData = await response.json();
      this.quoteData = jsonData;
      this.dataLoading = true;
      this.author = this.quoteData.data[0].quoteAuthor;
    },
  },
});
