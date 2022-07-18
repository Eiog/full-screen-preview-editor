declare namespace Widget {
    type SchemaType = {
        label: string
        type: 'string' | 'number' | 'upload' | 'select' | 'switch' | 'color' | 'time'
        value: string | number | boolean | object | Array
        option?: {
            key: string | number | boolean
            value: string
        }
        rule?: any
    }
}