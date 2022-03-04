<script lang="ts">
	import type { PostData } from '../../types/index';
	export let card: PostData;
	export let type: string;

	console.log(card, 'inside card component');
</script>

<div class="w-96 bg-white p-4 mr-6">
	<div class="w-full flex bg-slate-300">
		{#if card.thumbnail}
			<img
				src={card.thumbnail.url}
				alt={card?.title}
				height={card.thumbnail.height}
				width={card.thumbnail.width}
			/>
		{/if}
	</div>
	<div class="mt-4">
		<a class="text-slate-900 text-xl font-bold" href={`/${type}/${card.slug}`}>
			{card?.title}
		</a>
		<p class="text-slate-600">{card?.description}</p>
	</div>
</div>
