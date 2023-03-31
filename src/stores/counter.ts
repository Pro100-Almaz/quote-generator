import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface Quote {
  _id: Number;
  quoteText: String;
  quoteAuthor: String;
  quoteGenre: String;
  __v: Number;
}

interface Pagination {
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

export const ListOfQuotes = defineStore({
  id: "quoteData",
  state: (): DataStore => ({
    statusCode: 0,
    message: "",
    pagination: {
      currentPage: 0,
      nextPage: 0,
      totalPages: 0,
    },
    totalQuotes: 0,
    data: [],
  }),
  actions: {},
  getters: {},
});
