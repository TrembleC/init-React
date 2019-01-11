import Home from "../pages/home";
import Message from "../pages/message";
import Join from "../pages/join";


let routes = [
    {
        path:'/',
        component: Home,
        exact:true
    },
    {
        path:'/message',
        component: Message,
        routes:[]
    },
    {
        path:'/join',
        component: Join,
    },
]

export default routes;