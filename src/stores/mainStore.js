import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        nome: "",
        dia: "",
        horas: "",
        welcome: ""
    })
})