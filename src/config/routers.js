import { lazy } from "react";
import RegisterPhone from "../pages/Register/RegisterPhone";
//定义一个数组，存储路由数组，然后再app里根据这个数组渲染路由

// 只要routers.js文件执行，所有导入的组件，都会加载到内存中
// 所以需要懒加载，跟图片懒加载一样
// import Home from '../pages/Home/Home'
// import Login from '../pages/Login/Login'

// 使用lazy懒加载加载组件
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));

//路由表
const routeArr = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/RegisterPhone",
    component: RegisterPhone,
  },
];

export default routeArr;
