// 路由

interface Router {
  path:string,
  name?:string,
  redirect?:string | {
    name:string
  },
  component?:object,
  children?:Router [],
  meta?:{
    role:number,
    requiresAuth: boolean
  }
}

const routes = <Router []> [
  {
    path:"/",
    redirect:"/home",
    children:[
      {
        path:"home",
        name:"首页",
        component:()=>import("@/view/home.vue"),
        meta:{
          role:0,
          requiresAuth:false,
        }
      }
    ]
  }
]

export default routes