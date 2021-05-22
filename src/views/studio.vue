<script lang="ts">
import { defineComponent } from 'vue';
import NavItems from '../components/NavItems.vue';

export default defineComponent({
	name: 'Studio',
	components: {
		NavItems,
	},
});
</script>

<template>
	<div id="nav">
		<router-link to="/home" v-if="!$route.path.includes('/home')">←</router-link>
	</div>
	<div class="studio">
		<h1>STUDIO</h1>

		<nav-items
			class="nav-items"
			msg="CREATIVE & IMAGE DIRECTION
PHOTOGRAPHY
FILMS & VIDEOS
ADVERTISING
BRANDING & IDENTITY
MODELS & TALENTS CASTING
PRESS RELATIONS
TALENTS & ARTISTS MANAGEMENT
CURATION 
EVENTS
DESIGN RESEARCH
CREATIVE CONSULTANCY FOR COLLECTION DEVELOPMENT 
RESEARCH AND DEVELOPMENT FOR MOODBOARDS 
SUPPORT TO CREATIVE DIRECTOR 
SET DESIGN
PRODUCTION
LOCATIONS SCOUTING
COMMUNITY SOCIAL STRATEGY 
WEB DESIGN"
			msg2="** UPON REQUEST, A MORE DETAILED PORTFOLIO IS AVAILABLE."
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
.studio {
	display: flex;
	flex-direction: column;
	margin-top: 3rem;

	// & .nav-items {
	// 	// max-inline-size: 29ch;
	// }
}
</style>
