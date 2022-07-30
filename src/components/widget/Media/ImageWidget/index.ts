import { defineAsyncComponent } from 'vue'
import icon from './icon.png'
export type WidgetProps = {
    url:string
    alt:string
    objectFit:'fill'|'contain'|'cover'|'none'|'scale-down'
    style?: import("vue").CSSProperties;
}

interface Schema extends Editor.Widget {
    schema: {
        url: Widget.SchemaType,
        alt:Widget.SchemaType,
        objectFit: Widget.SchemaType,
    }
}
export default {
    id: '',
    label: '图片组件',
    name: 'Schema',
    component: defineAsyncComponent(() => import('./Image.vue')),
    icon: '',
    brief: '这是一个基础的图片组件',
    type:'media',
    typeName:'媒体',
    cover: icon,
    schema: {
        url:{
            label:'图片地址',
            type:'string',
            value:icon
        },
        alt:{
            label:'alt',
            type:'string',
            value:''
        },
        objectFit:{
            label:'缩放模式',
            type:'select',
            value:'cover',
            options:[
                {
                    value:'fill',
                    label:'填充'
                },
                {
                    value:'contain',
                    label:'等比缩放'
                },
                {
                    value:'cover',
                    label:'等比填充'
                },
                {
                    value:'none',
                    label:'默认'
                },
                {
                    value:'scale-down',
                    label:'短边填充'
                },
            ]
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
    h: 4,
} as Schema 