import { defineStore } from "pinia";

type State = {
    projectList?: Editor.ProjectList[]
}
export const useProjectStore = defineStore({
    id: 'projectStore',
    persist: {
        key: '__PROJECT__',
        paths: ['projectList']
    },
    state: (): State => ({
        projectList: [],
    }),
    actions: {
        set(data: Editor.ProjectList) {
            console.log(data);
            
            this.projectList?.push(data)
        }
    },
    getters: {

    }
})