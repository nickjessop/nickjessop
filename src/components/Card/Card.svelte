<script lang="ts">
	import type { PostData } from '../../types/index';
	export let card: PostData;
	export let type: string;
</script>

<div>
	<div
		class="bg-white p-4 border-2 rounded-lg h-full"
		style="box-shadow: {card.thumbnailColour.css} 6px 6px 0px 0px;"
	>
		<a href={`/${type}/${card.slug}`}>
			<div
				class="w-full flex bg-slate-300 rounded-sm"
				style="background-color: {card.thumbnailColour.css != ''
					? card.thumbnailColour.css
					: 'rgb(203 213 225)'}"
			>
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
				<span class="text-slate-900 text-xl font-bold leading-none">{card?.title}</span>
				<div class="text-sm text-slate-400 font-bold mb-2">{card?.year}</div>
				<p class="text-slate-600">{card?.description}</p>
			</div>
		</a>
	</div>
</div>
