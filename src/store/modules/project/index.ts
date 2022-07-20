import { defineStore } from "pinia";
type State = {
    projectList
}
export const useProjectStore = defineStore({
    id: 'projectStore',
    state: () => ({
        projectList:[],
        preview:[]
    }),
    actions: {

    },
    getters: {
        
    }
})