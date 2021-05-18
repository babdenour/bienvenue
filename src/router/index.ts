import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/home',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
	},
	{
		path: '/studio',
		name: 'studio',
		component: () => import(/* webpackChunkName: "studio" */ '../views/studio.vue'),
	},
	{
		path: '/cultural',
		name: 'cultural',
		component: () => import(/* webpackChunkName: "cultural" */ '../views/cultural.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
