declare namespace Editor {
    
    interface Widget  {
        id: string
        label: string
        name: string
        component?: import('vue').Component
        icon?: string
        cover?:string
        brief?:string
        type:string
        typeName:string
        schema?: {},
        props?: {},
        width?: number
        height?: number
        i: string
        x?: number
        y?: number
        w?: number
        h?: number
    }
    type Canvas = {
        width: number
        height: number
        zoom: number
        row: number
        col: number
        background: string
        backgroundImage?:string
        backgroundOjectfit?:'contain'|'cover'
        backgroundRepeat:boolean
        backgroundOjectfitOptions?: {
            value: string | number | boolean
            label: string
        }[]
        ,
    }
}