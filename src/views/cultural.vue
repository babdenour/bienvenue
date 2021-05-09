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
	<div class="cultural">
		<h1>CULTURAL PROGRAMS</h1>

		<nav-items
			msg="INITIATIVES TO TAKE CONCRETE ACTIONS TO SUPPORT LOCALS ACTIVITIES."
			msg2="RESSOURCES RAISED WILL CONTRIBUTE TO SUPPORT OUR PROGRAMS."
			msg3="TO ENCOURAGE YOUNG TALENTS AND HELP CREATIVES FROM TODAY’S WORLD TO ESTABLISH DURABLE RELATIONSHIPS."
		/>
	</div>
</template>

<style scoped lang="scss">
.cultural {
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
}
</style>
