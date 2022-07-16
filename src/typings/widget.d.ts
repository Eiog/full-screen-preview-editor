declare namespace Widget{
    type Props = {

    }
    type Widget = {
        id:string
        name:string
        component:import('vue').Component|string
        dark?:boolean
        props?:Props,
        width?:number
        height?:number
        x?:number
        y?:number
    }
}