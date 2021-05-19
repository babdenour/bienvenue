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
		component: () => import('../views/about.vue'),
	},
	{
		path: '/studio',
		name: 'studio',
		component: () => import('../views/studio.vue'),
	},
	{
		path: '/cultural',
		name: 'cultural',
		component: () => import('../views/cultural.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
