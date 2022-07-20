import { defineStore } from "pinia";
import { darkTheme,useOsTheme } from 'naive-ui';
type State = {
    darkMode:boolean
    language:'cn'|'en'
    editorKeepAlive:boolean
}
export const useAppStore = defineStore({
    id: 'appStore',
    state: ():State => ({
        darkMode:false,
        language:'cn',
        editorKeepAlive:false
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