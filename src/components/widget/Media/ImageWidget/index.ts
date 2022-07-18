import { defineAsyncComponent } from 'vue'
import icon from './icon.png'
export type WidgetProps = {
    url:string
    alt:string
    objectFit:'fill'|'contain'|'cover'|'none'|'scale-down'
    style?: import("vue").CSSProperties;
}

interface ImageWidget extends Editor.Widget {
    schema: {
        url: Widget.SchemaType,
        alt:Widget.SchemaType,
        objectFit: Widget.SchemaType,
        style?: Widget.SchemaType
    }
}
export default {
    id: '',
    label: '图片组件',
    name: 'ImageWidget',
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
            type:'string',
            value:'cover'
        },
        style:{
            label:'样式',
            type:'string',
            value:''
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
} as ImageWidget 