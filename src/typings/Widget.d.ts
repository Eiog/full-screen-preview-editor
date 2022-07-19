declare namespace Widget {
    type SchemaType = {
        label: string
        type: 'string' | 'number' | 'upload' | 'select' | 'switch' | 'color' | 'time'
        value: string | number | boolean | object | Array
        textarea?:boolean
        options?: {
            value: string | number | boolean
            label: string
        }[]
        rule?: any
    }
}