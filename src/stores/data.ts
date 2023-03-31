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
}

export const myStore = defineStore({
  id: "searchData",
  state: (): SearchData => ({
    author: "Bill Gates",
  }),
  getters: {},
  actions: {},
});
