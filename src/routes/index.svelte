<script context="module" lang="ts">
	import Listing from '../components/Listing/Listing.svelte';

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
				portfolioPosts: posts(where: { type: Portfolio }) {
					id
					title
					slug
					createdAt
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
				projectPosts: posts(where: { type: Project }) {
					id
					title
					slug
					createdAt
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

		const { portfolioPosts, projectPosts } = await graphcms.request(query);

		return {
			props: {
				projectPosts,
				portfolioPosts
			}
		};
	}
</script>

<script lang="ts">
	export let projectPosts: any;
	export let portfolioPosts: any;
</script>

<svelte:head>
	<title>Nick Jessop</title>
</svelte:head>

<section class="py-8 flex flex-col">
	<div class="w-full sm:w-3/4 md:w-2/4 xl:w-1/3 mb-2">
		<h1 class="text-5xl font-bold">Nick Jessop</h1>
		<p class="mt-2">
			I&apos;m a designer who takes a wholelistic approach to building digital products using a
			cross-disciplinary skill set in design, development, and business. I&apos;ve launched my own
			projects, built things for others, and worked in both design and product management roles.
		</p>
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-900 font-serif">Portfolio</h2>
			<span class="text-slate-600">
				A selection of portfolio pieces covering both development and design.
			</span>
		</div>
		<Listing listings={portfolioPosts} type="portfolio" size={3} />
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-900 font-serif">Projects</h2>
			<span class="text-slate-600"> Various projects I have started over the years. </span>
		</div>
		<Listing listings={projectPosts} type="project" size={3} />
	</div>
</section>
