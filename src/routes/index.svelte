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
			I&apos;m a designer who takes a holistic approach to building digital products using a
			cross-disciplinary skill set in design, development, and business. I&apos;ve launched my own
			projects, built things for others, and worked in both design and product management roles.
		</p>
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-800 font-bold">Portfolio</h2>
		</div>
		<Listing listings={portfolioPosts} type="portfolio" size={3} />
		<a
			href="/portfolio"
			class="text-xl font-semibold text-primary-500 hover:text-primary-600 mt-6 block"
		>
			View all &rarr;
		</a>
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-800 font-bold">Projects</h2>
		</div>
		<Listing listings={projectPosts} type="projects" size={3} />
		<a
			href="/projects"
			class="text-xl font-semibold text-primary-500 hover:text-primary-600 mt-6 block"
		>
			View all &rarr;
		</a>
	</div>
	<div class="mt-8 mb-4">
		<div class="mb-6">
			<h2 class="text-3xl mb-1 text-slate-800 font-bold">Articles</h2>
		</div>
		<div class="mt-6">
			<a
				href="https://media.graphcms.com/eGukGGiROeLNm4dLzj8L"
				target="_blank"
				class="inline-flex text-xl font-semibold bg-white p-4 border-2 border-transparent rounded-lg  text-primary-500 hover:text-primary-600"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19Z"
						fill="#A0A0A0"
					/>
				</svg>
				<h3 class="pl-2 inline">Directory Ads - Feature Overview</h3></a
			>
		</div>
		<div class="mt-6">
			<a
				href="https://media.graphcms.com/WsrRTPDVTJKGcU3htRiM"
				target="_blank"
				class="inline-flex text-xl font-semibold bg-white p-4 border-2 border-transparent rounded-lg  text-primary-500 hover:text-primary-600"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19Z"
						fill="#A0A0A0"
					/>
				</svg>
				<h3 class="pl-2 inline">Blue Dot - Feature Overview</h3></a
			>
		</div>
		<div class="mt-6">
			<a
				href="https://media.graphcms.com/Bnfy7ZJXRdiAeD2AcpRT"
				target="_blank"
				class="inline-flex text-xl font-semibold bg-white p-4 border-2 border-transparent rounded-lg  text-primary-500 hover:text-primary-600"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19Z"
						fill="#A0A0A0"
					/>
				</svg>
				<h3 class="pl-2 inline">Smart Labels - Feature Overview</h3></a
			>
		</div>
		<div class="mt-6">
			<a
				href="https://media.graphcms.com/4bQFfpQvS0e5ktKL8UIE"
				target="_blank"
				class="inline-flex text-xl font-semibold bg-white p-4 border-2 border-transparent rounded-lg  text-primary-500 hover:text-primary-600"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12H19V19Z"
						fill="#A0A0A0"
					/>
				</svg>
				<h3 class="pl-2 inline">Directory Voice Assist - Feature Overview</h3></a
			>
		</div>
	</div>
</section>
