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
            return new Promise((resolve, reject): void => {
                const index = this.projectList?.findIndex(item=>item.id===data.id)
                if(index!>-1){
                    this.projectList![index!] = data
                    return resolve('ok')
                }
                this.projectList?.push(data)
                if (this.projectList?.some(item => item.id === data.id)) return resolve('ok')
                return reject()
            })

        },
        remove(id: string) {
            return new Promise((resolve, reject): void => {
                const index = this.projectList?.findIndex(item => item.id === id)
                if (index! > -1) {
                    this.projectList?.splice(index!, 1)
                    return resolve('ok')
                }
                return reject()
            })
        }
    },
    getters: {

    }
})