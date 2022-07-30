import { defineAsyncComponent } from 'vue'
import icon from './icon.png'
export type WidgetProps = {
    size:number
    weight:string
    color:string
}
interface Schema extends Editor.Widget {
    schema: {
        size:Widget.SchemaType
        weight:Widget.SchemaType
        color:Widget.SchemaType
    }
}
export default {
    id: '',
    label: '时间组件',
    name: 'TimeWidget',
    component: defineAsyncComponent(() => import('./Time.vue')),
    icon: '',
    brief: '这是一个基础的时间组件',
    type: 'common',
    typeName: '公共',
    cover: icon,
    schema: {
        size:{
            label:'字体',
            type:'number',
            value:32,
            step:2
        },
        weight:{
            label:'粗细',
            type:'select',
            value:'normal',
            options:[
                {
                    label:'lighter',
                    value:'lighter'
                },
                {
                    label:'normal',
                    value:'normal'
                },
                {
                    label:'bold',
                    value:'bold'
                },

            ]
        },
        color:{
            label:'颜色',
            type:'color',
            value:'#000'
        }
    },
    props: {
    },
    width: 400,
    height: 100,
    i: '',
    x: 0,
    y: 0,
    w: 4,
    h: 2,
} as Schema 