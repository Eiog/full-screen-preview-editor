import { defineAsyncComponent } from 'vue'
import icon from './icon.png'
export type WidgetProps = {
    url:string
    autoplay:boolean
    loop:boolean
    muted:boolean //静音
    controls:boolean //控制面板
    show:boolean
}
interface Schema extends Editor.Widget {
    schema: {
        url: Widget.SchemaType,
        autoplay: Widget.SchemaType,
        loop: Widget.SchemaType,
        muted: Widget.SchemaType,
        controls: Widget.SchemaType,
        show: Widget.SchemaType,
        
    }
}
export default {
    id: '',
    label: '音频组件',
    name: 'AudioWidget',
    component: defineAsyncComponent(() => import('./Audio.vue')),
    icon: '',
    brief: '这是一个基础的音频组件',
    type:'media',
    typeName:'媒体',
    cover: icon,
    schema: {
        url:{
            label:'视频地址地址',
            type:'string',
            value:'https://unlit.oss-cn-beijing.aliyuncs.com/%E6%BE%A4%E9%87%8E%E5%BC%98%E4%B9%8B%20mizuki%20-%20aLIEz.flac'
        },
        autoplay:{
            label:'自动播放',
            type:'switch',
            value:false
        },
        loop:{
            label:'重复播放',
            type:'switch',
            value:false
        },
        muted:{
            label:'静音',
            type:'switch',
            value:false
        },
        controls:{
            label:'控制面板',
            type:'switch',
            value:false
        },
        show:{
            label:'是否显示',
            type:'switch',
            value:true
        },
            
    },
    props: {
    },
    width: 400,
    height: 100,
    i: '',
    x: 0,
    y: 0,
    w: 9,
    h: 3,
} as Schema 