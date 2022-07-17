declare namespace Editor{
    type Props = {

    }
    type Widget = {
        id:string
        i:string
        name:string
        component:import('vue').Component|string
        componentName:string
        dark?:boolean
        props?:Props,
        width?:number
        height?:number
        x?:number
        y?:number
        w?:number
        h?:number
    }
    type Canvas = {
        width:number
        height:number
        zoom:number
        row:number
        col:number
        background:string
    }
}