<script context="module" lang="ts">
	import Listing from '../../components/Listing/Listing.svelte';
	import type { PostData } from '../../types/index';
	// @ts-ignore
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load() {
		const graphcms = new GraphQLClient(
			// @ts-ignore
			import.meta.env.VITE_GRAPHCMS_URL,
			{
				headers: {}
			}
		);

		const query = gql`
			query PostsIndex {
				portfolioPosts: posts(where: { type: Portfolio }, orderBy: year_DESC) {
					id
					title
					slug
					year
					description
					thumbnailColour {
						css
					}
					thumbnail {
						url
						height
						width
					}
				}
			}
		`;

		const { portfolioPosts } = await graphcms.request(query);

		return {
			props: {
				portfolioPosts
			}
		};
	}
</script>

<script lang="ts">
	export let portfolioPosts: PostData;
</script>

<svelte:head>
	<title>Portfolio | Nick Jessop</title>
</svelte:head>

<section class="max-w-7xl">
	<h1 class="font-serif text-3xl text-slate-800 mb-4 font-bold">Portfolio</h1>
	<Listing listings={portfolioPosts} type="portfolio" size={9} />
</section>
