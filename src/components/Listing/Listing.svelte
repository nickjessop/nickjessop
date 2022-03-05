<script lang="ts">
	import Card from '../Card/Card.svelte';
	export let size: number;
	export let listings;
	const listingData = listings?.slice(0, size);
	export let type: string;
</script>

<div class="flex last:mr-0">
	{#each listingData as listing}
		<Card card={listing} {type} />
	{/each}
</div>
