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
				projectPosts: posts(where: { type: Project }) {
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

<section class="py-8 flex flex-col max-w-7xl">
	<div class="w-full sm:w-3/4 md:w-2/4 xl:w-1/3 mb-2">
		<img src="/logo.png" alt="nickjessop.com" style="width: 50%" />
		<p class="mt-4">
			I&apos;m a designer who takes a holelistic approach to building digital products using a
			cross-disciplinary skill set in design, development, and business. I&apos;ve launched my own
			projects, built things for others, and worked in both design and product management roles.
		</p>
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-800 font-serif font-bold">Portfolio</h2>
			<span class="text-slate-600">
				A selection of portfolio pieces covering both development and design.
			</span>
		</div>
		<Listing listings={portfolioPosts} type="portfolio" size={3} />
		<a href="/portfolio" class="text-xl font-semibold text-sky-600 hover:text-sky-700 mt-6 block">
			View all &rarr;
		</a>
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-800 font-serif font-bold">Projects</h2>
			<span class="text-slate-600"> Various projects I have started over the years. </span>
		</div>
		<Listing listings={projectPosts} type="project" size={3} />
		<a href="/projects" class="text-xl font-semibold text-sky-600 hover:text-sky-700 mt-6 block">
			View all &rarr;
		</a>
	</div>
</section>
