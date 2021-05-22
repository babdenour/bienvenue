<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Home',
	components: {},
});
</script>

<template>
	<div class="home">
		<div class="home__nav">
			<img src="../assets/logo.png" alt="bienvenue" />
			<p><router-link :to="{ name: 'Studio' }">STUDIO</router-link></p>
			<p><router-link :to="{ name: 'Cultural' }">CULTURAL PROGRAMS</router-link></p>
			<p><router-link :to="{ name: 'About' }">ABOUT</router-link></p>
		</div>
		<div class="home__info-contact">
			<a href="https://www.instagram.com/bienvenueprojects/? igshid=a3gc4g3rk7oa"
				>@bienvenueprojects</a
			>
			<a href="tel:+33963640723">(+33) 9 63 64 07 23 </a>
			<a href="mailto:bonjour@bienvenueprojects.com">bonjour@bienvenueprojects.com</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	height: 100vh;
	width: 100vw;
	overflow: hidden;

	&__nav {
		display: flex;
		flex-direction: column;
		justify-content: stretch;

		& img {
			-webkit-transform: translateY(-100%) rotate(90deg); /* Safari */
			-moz-transform: translateY(-100%) rotate(90deg); /* Firefox 3.6 Firefox 4 */
			/*-moz-transform-origin: right top; */
			-ms-transform: translateY(-100%) rotate(90deg); /* IE9 */
			-o-transform: translateY(-100%) rotate(90deg); /* Opera */
			transform: translateY(-100%) rotate(90deg); /* W3C */
			-webkit-transform-origin: left bottom;
			-moz-transform-origin: left bottom;
			-ms-transform-origin: left bottom;
			-o-transform-origin: left bottom;
			transform-origin: left bottom;
			// width: 100vw;
		}
		& p {
			margin: 6vh;
			font-size: 3vh;

			&:hover {
				transition: transform 0.2s;
				transform: scale(1.5);
			}
		}
	}

	&__info-contact {
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
}
</style>
