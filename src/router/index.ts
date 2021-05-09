import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
	},
	{
		path: '/studio',
		name: 'Studio',
		component: () => import(/* webpackChunkName: "studio" */ '../views/studio.vue'),
	},
	{
		path: '/cultural',
		name: 'Cultural',
		component: () => import(/* webpackChunkName: "studio" */ '../views/cultural.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
