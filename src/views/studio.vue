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
	<div class="back">
		<!-- <router-link to="/">←</router-link> -->
	</div>
	<div class="studio">
		<h1>STUDIO</h1>

		<nav-items
			class="nav-items"
			msg="CREATIVE & ART DIRECTION PHOTOGRAPHY FILMS & VIDEOS ADVERTISING
		BRANDING & IDENTITY CREATIVE CONSULTANCY RESEARCH AND DEVELOPMENT SUPPORT CREATIVE DIRECTOR
		PRODUCTION CONTENT & COMMUNITY SOCIAL STRATEGY WEB DESIGN "
			msg2="UPON REQUEST, A MORE DETAILED PORTFOLIO IS AVAILABLE."
			msg3="TALENTS & MODELS CASTING LOCATIONS SCOUTING"
		/>
	</div>
</template>

<style scoped lang="scss">
.studio {
	display: flex;
	flex-direction: column;
	margin-top: 3rem;

	// & .nav-items {
	// 	// max-inline-size: 29ch;
	// }
}
</style>
