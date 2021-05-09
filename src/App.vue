<template>
	<div id="nav">
		<router-link to="/home" v-if="!$route.path.includes('/home')">←</router-link>
	</div>
	<router-view />
</template>

<style lang="scss">
html {
	background-color: black;
	color: white;
}
#app {
	@font-face {
		font-family: 'Montserrat';
		src: url(https://fonts.google.com/specimen/Montserrat?query=mont);
	}
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	height: 100vh;
	a {
		text-decoration: none;
		color: white;
	}
}

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
</style>
