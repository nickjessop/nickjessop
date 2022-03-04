<script lang="ts">
	import Card from '../Card/Card.svelte';
	// const listingData = listings?.slice(0, size).map((listing: ProjectData, i: number) => ())}
	export let listings;
	export let type: string;

	console.log(listings, 'in listings component');
</script>

<div class="flex last:mr-0">
	{#each listings as listing}
		<Card card={listing} {type} />
	{/each}
</div>
