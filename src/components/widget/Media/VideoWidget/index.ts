import { defineAsyncComponent } from 'vue'
import icon from './icon.png'
export type WidgetProps = {
    url:string
    autoplay:boolean
    loop:boolean
    muted:boolean //静音
    controls:boolean //控制面板
    poster:string //封面
}
interface Schema extends Editor.Widget {
    schema: {
        url: Widget.SchemaType,
        autoplay: Widget.SchemaType,
        loop: Widget.SchemaType,
        muted: Widget.SchemaType,
        controls: Widget.SchemaType,
        poster: Widget.SchemaType,
        
    }
}
export default {
    id: '',
    label: '视频组件',
    name: 'VideoWidget',
    component: defineAsyncComponent(() => import('./Video.vue')),
    icon: '',
    brief: '这是一个基础的视频组件',
    type:'media',
    typeName:'媒体',
    cover: icon,
    schema: {
        url:{
            label:'视频地址地址',
            type:'string',
            value:'https://unlit.oss-cn-beijing.aliyuncs.com/150820%20%ED%94%BC%EC%97%90%EC%8A%A4%ED%83%80%28FIESTAR%29%20%EC%9E%AC%EC%9D%B4%20-%20%EC%A7%A0%ED%95%B4%20%28You%27re%20pitiful%29%20%40%EC%96%91%ED%8F%89%20%ED%95%9C%EB%A7%88%EC%9D%8C%20%EC%9C%84%EB%AC%B8%EA%B3%B5%EC%97%B0%20%EC%A7%81%EC%BA%A0%20Fancam%20by%20-wA-.mp4'
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
        poster:{
            label:'封面',
            type:'string',
            value:''
        },
            
    },
    props: {
    },
    width: 400,
    height: 100,
    i: '',
    x: 0,
    y: 0,
    w: 12,
    h: 12,
} as Schema 