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
	<div class="about">
		<h1>ABOUT</h1>

		<nav-items
			msg="BIENVENUEPROJECTS PARIS DESIGN STUDIO HAS BEEN FOUNDED IN 2020 FOLLOWING YEARS WORKING INDIVIDUALLY AS CREATIVE FOR BRANDS IN LONDON, NEW-YORK, CANADA AND FASHION HOUSES IN PARIS."
			msg2="HAVING A REAL UNDERSTANDING OF THE LUXURY SECTOR, EACH MEMBER OF THE STUDIO PAYS VERY SPECIAL ATTENTION TO DETAIL, DELIVERING VERY HIGH QUALITY ASSETS, CREATING A STRONG + ORIGINAL IMAGE AND ALWAYS LOOKING FOR INNOVATIVE PROPOSALS."
		/>
	</div>
</template>

<style scoped lang="scss">
.about {
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
}
</style>
