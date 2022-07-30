import { defineStore } from "pinia";
import { darkTheme, useOsTheme } from 'naive-ui';
type State = {
    darkMode: boolean
    language: 'cn' | 'en'
    editorKeepAlive: boolean
    isLogin: boolean,
    user?: App.User
    auth?: AuthRoute.Role
    token?: string
}
export const useAppStore = defineStore({
    id: 'appStore',
    persist: {
        key: 'UNLIT__TOKEN',
        paths: ['token']
    },
    state: (): State => ({
        darkMode: false,
        language: 'cn',
        editorKeepAlive: false,
        isLogin: false,
        user: undefined,
        auth: undefined,
        token: undefined
    }),
    actions: {
        logout(){
            this.isLogin = false
            this.token = undefined
            this.user = undefined
        }
    },
    getters: {
        naiveDarkMode(state): any {
            this.darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
            return this.darkMode ? darkTheme : undefined
        }
    }
})