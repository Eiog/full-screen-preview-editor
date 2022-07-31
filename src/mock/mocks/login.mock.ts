import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
export default [
    {
        url:'/api/login',
        method: 'post',
        timeout: 2000,
        statusCode: 200,
        response: () =>{
            return {
                account:'aman',
                name:'阿满',
                avatar:'https://unlit.oss-cn-beijing.aliyuncs.com/2022-04-30/e90fb423de7a17aaa47fb8b21663819a.jpeg?x-oss-process=style/avatar',
                auth:'admin',
                token:'f7bF5CAA-e4eE-BcE5-6C21-514CA44273bD'
            }
        }
    },
    {
        url:'/api/status',
        method: 'get',
        timeout: 2000,
        statusCode: 200,
        response: () =>{
            return {
                account:'aman',
                name:'阿满',
                avatar:'https://unlit.oss-cn-beijing.aliyuncs.com/2022-04-30/e90fb423de7a17aaa47fb8b21663819a.jpeg?x-oss-process=style/avatar',
                auth:'admin',
                token:'f7bF5CAA-e4eE-BcE5-6C21-514CA44273bD'
            }
        }
    },
] as MockMethod[]