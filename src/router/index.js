import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			title: "未来社区首页"
		}
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: "登录"
		},
		component: () => import('../views/Login.vue')
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			title: "注册"
		},
		component: () => import('../views/Register.vue')
	},
	{
		path: '/forgetPassword',
		name: 'forgetPassword',
		meta: {
			title: "忘记密码"
		},
		component: () => import('../views/ForgetPassword.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
