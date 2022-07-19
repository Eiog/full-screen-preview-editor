import { defineAsyncComponent } from 'vue'
import icon from './icon.png'
export type WidgetProps = {
    value: string | number;
    size: number;
    color: string;
    align: 'center' | 'start' | 'end'
    justify: 'center' | 'start' | 'end'
    style?: import("vue").CSSProperties;
}
interface TextWidget extends Editor.Widget {
    schema: {
        value: Widget.SchemaType,
        size: Widget.SchemaType,
        color: Widget.SchemaType
        align: Widget.SchemaType
        justify: Widget.SchemaType
    }
}
export default {
    id: '',
    label: '文本组件',
    name: 'TextWidget',
    component: defineAsyncComponent(() => import('./Text.vue')),
    icon: '',
    brief: '这是一个基础的文本组件可配置项：（字体大小，字体颜色）',
    type: 'common',
    typeName: '公共',
    cover: icon,
    schema: {
        value: {
            label: '文本属性',
            type: 'string',
            value: '请输入文本'
        },
        size: {
            label: '尺寸',
            type: 'number',
            value: 26
        },
        color: {
            label: '颜色',
            type: 'color',
            value: '#000'
        },
        align: {
            label: 'align',
            type: 'select',
            value: 'center',
            options: [
                {
                    value: 'start',
                    label: '顶部对齐'
                },
                {
                    value: 'center',
                    label: '居中'
                },
                {
                    value: 'end',
                    label: '底部对齐'
                },
            ]

        },
        justify: {
            label: 'justify',
            type: 'select',
            value: 'center',
            options: [
                {
                    value: 'start',
                    label: '顶部对齐'
                },
                {
                    value: 'center',
                    label: '居中'
                },
                {
                    value: 'end',
                    label: '底部对齐'
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
    h: 2,
} as TextWidget 