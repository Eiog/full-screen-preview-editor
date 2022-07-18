import { defineStore } from "pinia";
import { darkTheme,useOsTheme } from 'naive-ui';
export const useAppStore = defineStore({
    id: 'appStore',
    state: () => ({
        darkMode:false,
        language:'cn'
    }),
    actions: {

    },
    getters: {
        naiveDarkMode(state):any{
            this.darkMode?document.body.classList.add('dark'):document.body.classList.remove('dark')
            return this.darkMode?darkTheme:undefined
        }
    }
})