import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Studio from '../views/Studio.vue';
import Cultural from '../views/Cultural.vue';
import Bienvenue from '../views/Bienvenue.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		component: Bienvenue,
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/studio',
		name: 'Studio',
		component: Studio,
	},
	{
		path: '/cultural',
		name: 'Cultural',
		component: Cultural,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
