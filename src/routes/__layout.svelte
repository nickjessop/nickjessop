<script type="ts">
	import '../styles/fonts.css';
	import '../app.css';
	import '../styles/global.css';
	import GridBackground from '/src/components/GridBackground/GridBackground.svelte';
	import ContactBubble from '/src/components/ContactBubble/ContactBubble.svelte';
	import Footer from '/src/components/Footer/Footer.svelte';
	import Header from '/src/components/Header/Header.svelte';
	import { page } from '$app/stores';
</script>

<GridBackground />

{#if $page.url.pathname != '/'}
	<Header />
{/if}

<main class="h-full text-gray-800 relative z-10 pt-16">
	<slot />
</main>

<Footer />

<ContactBubble />
