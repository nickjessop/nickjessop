<script context="module" lang="ts">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load(context) {
		const graphcms = new GraphQLClient(
			// @ts-ignore
			import.meta.env.VITE_GRAPHCMS_URL,
			{
				headers: {}
			}
		);

		const query = gql`
			query PostPageQuery($slug: String!) {
				post(where: { slug: $slug }) {
					title
					createdAt
					description
					year
					brief {
						html
					}
					solution {
						html
					}
					projectImages {
						title
						image {
							url
							width
							height
						}
						description
					}
				}
			}
		`;

		const variables = {
			slug: context.params.slug
		};

		const { post } = await graphcms.request(query, variables);

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	export let post;
	console.log(post);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<section class="px-4">
	<h1 class="text-4xl font-bold text-slate-900">{post.title}</h1>
	<span class="text-sm text-slate-400">{post.year}</span>

	<div class="flex">
		<div class="basis-3/4 mr-72">
			<div class="mt-4">
				<h2 class="text-sm uppercase font-bold text-slate-600">Brief</h2>
				<div class="text-slate-800">{@html post.brief.html}</div>
			</div>
			<div class="mt-4">
				<h2 class="text-sm uppercase font-bold text-slate-600">Solution</h2>
				<div class="text-slate-800">{@html post.solution.html}</div>
			</div>
		</div>
		<div class="basis-1/4 pr-2">
			<div class="mb-4">
				<div class="pb-1 border-b border-slate-400 text-slate-600 uppercase text-sm font-bold">
					Scope
				</div>
				<p class="mt-2 text-slate-800">UX Design, Development, Product Strategy</p>
			</div>
			<div>
				<div class="pb-1 border-b border-slate-400 text-slate-600 uppercase text-sm font-bold">
					Tech
				</div>
				<p class="mt-2 text-slate-800">Figma</p>
			</div>
		</div>
	</div>
	<div class="mt-24">
		<h2 class="text-sm uppercase font-bold text-slate-600">Project Images</h2>
		<div class="flex flex-col mt-4">
			{#each post.projectImages as { image, description, title }}
				<div class="flex w-full mb-8">
					<div class="mr-12 basis-3/4">
						{#if image != null}
							<img
								src={image.url}
								width={image.width}
								height={image.height}
								alt={title}
								class="shadow-sm"
							/>
						{/if}
					</div>
					<div class="mt-4 pl-2 border-l-2 border-gray-500 basis-1/4" style="height: fit-content">
						<p class="text-gray-500">{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>