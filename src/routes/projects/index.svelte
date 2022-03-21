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
				projectPosts: posts(where: { type: Project }, orderBy: year_DESC) {
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

		const { projectPosts } = await graphcms.request(query);

		return {
			props: {
				projectPosts
			}
		};
	}
</script>

<script lang="ts">
	export let projectPosts: PostData;
</script>

<svelte:head>
	<title>Projects | Nick Jessop</title>
</svelte:head>

<section class="max-w-7xl">
	<h1 class="font-serif text-3xl text-slate-800 mb-4 font-bold">Projects</h1>
	<Listing listings={projectPosts} type="projects" size={9} />
</section>
