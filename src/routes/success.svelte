<script>
	export const prerender = true;
</script>

<svelte:head>
	<title>Message Sent | Nick Jessop</title>
</svelte:head>

<div class="flex flex-col">
	<div class="flex justify-center items-center mb-6">
		<div class="inline-block bg-green-600 text-white py-1 px-2.5 rounded-full mr-2 font-bold">
			&#10003;
		</div>
		<div class="flex content-center font-bold text-2xl">Message successfully sent!</div>
	</div>
	<div class="flex justify-center items-center">
		<a
			href="/"
			class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
			>Return home</a
		>
	</div>
</div>
