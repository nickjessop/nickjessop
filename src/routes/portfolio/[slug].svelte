<script context="module" lang="ts">
  import { gql, GraphQLClient } from 'graphql-request'

  export async function load(context) {
    const graphcms = new GraphQLClient(
      // @ts-ignore
      import.meta.env.VITE_GRAPHCMS_URL,
      {
        headers: {},
      }
    )

    const query = gql`
      query PostPageQuery($slug: String!) {
        post(where: { slug: $slug }) {
          title
          createdAt
          brief {
            html
          }
        }
      }
    `

    const variables = {
      slug:context.params.slug,
    }

    const { post } = await graphcms.request(query, variables)

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>{post.createdAt}</p>
{@html post.brief.html}