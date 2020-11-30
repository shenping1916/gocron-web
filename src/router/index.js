import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    hidden: false,
    meta: {
      title: "登陆"
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
    hidden: false,
    meta: {
      title: "注册"
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    hidden: true,
    meta: {
      title: "页面走失了！"
    }
  },
  {
    path: "*",
    redirect: "/404"
  }

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  next();
});

export default router;
