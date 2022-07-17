import { defineStore } from "pinia";
type State = {
    canvas:Editor.Canvas
    canvasWidgetList:Editor.Widget[]
}
export const useEditorStore = defineStore({
    id: 'editorStore',
    state: ():State => ({
        canvas:{
            width:1920,
            height:1080,
            zoom:50,
            row:20,
            col:24,
            background:'#fff'
        },
        canvasWidgetList:[

        ]
    }),
    actions: {
        dragIn(widget:Editor.Widget){
            this.canvasWidgetList.push(widget)
        }
    },
    getters: {
        canvasWidth():number{
            return this.canvas.width*(this.canvas.zoom/100)
        },
        canvasHeight():number{
            return this.canvas.height*(this.canvas.zoom/100)
        },
        gridRowHeight():number{
            return this.canvasHeight/this.canvas.row
        }
    }
})