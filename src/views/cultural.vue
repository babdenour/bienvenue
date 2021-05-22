<script lang="ts">
import { defineComponent } from 'vue';
import NavItems from '../components/NavItems.vue';

export default defineComponent({
	name: 'Cultural',
	components: {
		NavItems,
	},
});
</script>

<template>
	<div id="nav">
		<router-link to="/home" v-if="!$route.path.includes('/home')">←</router-link>
	</div>
	<div class="cultural">
		<h1>CULTURAL PROGRAMS</h1>

		<nav-items
			msg="bienvenueprojects LEADS INITIATIVES TO TAKE CONCRETE ACTIONS TO SUPPORT COMMUNITIES.
RAISE FUNDS AND PROVIDE RESSOURCES FOR ORGANIZATIONS, TO SUPPORT OUR CULTURAL PROGRAMS, TO ENCOURAGE YOUNG TALENTS, 
TO HELP YOUNG CREATIVES"
		/>
	</div>
</template>

<style scoped lang="scss">
#nav {
	position: fixed;
	top: 1rem;
	left: 1rem;
	margin-bottom: 1rem;
	a {
		font-weight: bold;
		color: white;
	}
}
.cultural {
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
}
</style>
