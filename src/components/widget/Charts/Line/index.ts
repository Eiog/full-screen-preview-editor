import { defineAsyncComponent } from 'vue'
import {ECOption} from '@/hooks'
import icon from './icon.png'
import defauleData from './default.json'
export type WidgetProps = {
    static?:boolean
    staticData?:File
    requestApi?:string
    requestType:'get'|'post'
    requestInterval?:number
    dark?:boolean
    theme:'default'|'primary'|'info'|'success'|'warning'|'error'
}
interface TextWidget extends Editor.Widget {
    schema: {
        static:Widget.SchemaType
        staticData?:Widget.SchemaType
        requestApi?:Widget.SchemaType
        requestType?:Widget.SchemaType
        requestInterval?:Widget.SchemaType
        dark?:Widget.SchemaType
        theme?:Widget.SchemaType
    }
}
export default {
    id: '',
    label: '折线图组件',
    name: 'LineWidget',
    component: defineAsyncComponent(() => import('./Line.vue')),
    icon: '',
    brief: '这是一个基础的折线图组件',
    type: 'charts',
    typeName: '图表',
    cover: icon,
    schema: {
        static:{
            label:'静态数据',
            type:'switch',
            value:false
        },
        staticData:{
            label:'上传数据',
            type:'upload',
            value:null,
            accept:'application/json'
        },
        requestApi:{
            label:'接口地址',
            type:'string',
            value:''
        },
        requestType:{
            label:'请求类型',
            type:'select',
            value:'get',
            options:[
                {
                    label:'GET',
                    value:'get'
                },
                {
                    label:'POST',
                    value:'post'
                },
            ]
        },
        requestInterval:{
            label:'请求间隔ms',
            type:'number',
            value:500,
            step:100
        },
        dark:{
            label:'暗黑模式',
            type:'switch',
            value:false,
        }
    },
    props: {
    },
    width: 400,
    height: 100,
    i: '',
    x: 0,
    y: 0,
    w: 6,
    h: 4,
} as TextWidget 