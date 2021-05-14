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
			<p><router-link to="/studio">STUDIO</router-link></p>
			<p><router-link to="/cultural">CULTURAL PROGRAMS</router-link></p>
			<p><router-link to="/about">ABOUT</router-link></p>
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
@media (max-width: 600px) {
	.home {
		display: flex;
		flex-direction: column;
		margin-top: 5rem;
		&__logo {
			background: url(../assets/logo.png) 0 0 no-repeat;
			background-size: 100%;
			width: 100vw;
			z-index: -1;
		}

		&__nav {
			display: flex;
			flex-direction: column;
			justify-content: stretch;

			& img {
				transform: rotate(90deg) translate(19rem, 7.8rem) scale(2.2);
			}

			& p {
				margin: 6vh;
				font-size: 3vh;
			}
			& p:hover {
				transition: transform 0.2s;
				transform: scale(1.5);
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
}
</style>
