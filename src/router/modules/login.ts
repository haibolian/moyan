export default {
  path: "/login",
  name: "login",
  component: () => import("@/views/login/index.vue"),
  meta: {
    title: "登录",
    icon: "el-icon-home",
  },
}
