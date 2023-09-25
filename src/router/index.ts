// 路由

interface RouteConfig {
  path: string;
  redirect?: string;
  children?: RouteConfig[];
  name?: string;
  meta?: {
    role: number;
    requiresAuth: boolean;
  };
  component?: () => any;
}

const routes = <RouteConfig[]>[
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        meta: {
          role: 0,
          requiresAuth: false,
        },
        component: () => import('../view/home/index.vue'),
      },
    ],
  },
];

export default routes;
