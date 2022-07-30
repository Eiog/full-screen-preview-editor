import { defineStore } from "pinia";
type State = {
    id:string
    name:string
    author:string
    canvas: Editor.Canvas
    canvasWidgetList: Editor.Widget[]
    editWidgetId: string
    canvasEditing: boolean
    previewData:Editor.Widget[]
    newCanvas:boolean
}
export const useEditorStore = defineStore({
    id: 'editorStore',
    state: (): State => ({
        id:'',
        name:'',
        author:'',
        canvas: {
            width: 1920,
            height: 1080,
            zoom: 65,
            row: 20,
            col: 24,
            background: '#fff',
            backgroundImage: '',
            backgroundOjectfit: 'cover',
            backgroundRepeat: false,
            backgroundOjectfitOptions: [
                {
                    value: 'contain',
                    label: '填充'
                },
                {
                    value: 'cover',
                    label: '等比填充'
                }
            ],
        },
        canvasWidgetList: [

        ],
        editWidgetId: '',
        canvasEditing: false,
        previewData:[],
        newCanvas:true
    }),
    actions: {
        dragIn(widget: Editor.Widget) {
            this.canvasWidgetList.push(widget)
        },
        removeWidget(id: string) {
            let index = this.canvasWidgetList.findIndex(item => item.id === id)
            if (index > -1) {
                this.canvasWidgetList.splice(index, 1)
                this.editWidgetId = ''
            }
        },
        loadCanvas(data:Editor.ProjectList){
            this.id = data.id
            this.name = data.name
            this.author = data.author
            this.canvas = data.canvas
            this.canvasWidgetList = data.canvasWidgetList
            this.editWidgetId = data.editWidgetId
        }
    },
    getters: {
        canvasWidth(): number {
            return this.canvas.width * (this.canvas.zoom / 100)
        },
        canvasHeight(): number {
            return this.canvas.height * (this.canvas.zoom / 100)
        },
        gridRowHeight(): number {
            return this.canvasHeight / this.canvas.row
        },
        editWidgetIndex(): number {
            let editId = this.editWidgetId
            return this.canvasWidgetList.findIndex(item => item.id === editId)
        },
        editItem(): Editor.Widget {
            return this.canvasWidgetList[this.editWidgetIndex]
        },
        preview(): Editor.Preview {
            let canvas = this.canvas
            let widget = this.canvasWidgetList
            return {
                canvas,widget
            }
        }
    }
})