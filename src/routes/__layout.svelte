<script lang="ts">
  // import Header from "$lib/Header/index.svelte"
  import "../app.css"
  import "../styles/global.css"
  import "../styles/fonts.css"
	import GridBackground from '/src/components/GridBackground/GridBackground.svelte';
  import { page } from '$app/stores';

</script>

{#if $page.url.pathname != '/'}
<!-- <Header /> -->
<p>Load header</p>
{/if}

<GridBackground></GridBackground>

<main class="h-full pt-16 pb-8 px-8 lg:px-16 text-gray-800 relative z-10">
  <slot />
</main>

<footer>
  <p>
    footer
  </p>
</footer>