//定义一个数组，存储路由数组，然后再app里根据这个数组渲染路由
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const routeArr = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/Login',
        component:Login
    }
]

export default routeArr