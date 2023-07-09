<svelte:head>
	<title>Contact | Nick Jessop</title>
</svelte:head>

<section class="max-w-7xl bg-white rounded-lg p-8 pt-12 shadow-sm">
	<h1 class="text-4xl font-bold text-slate-800">Contact</h1>
	<span class="text-sm text-slate-500 font-bold"
		>Reach out to me with general inquiries or hire me for freelance work.</span
	>
	<p class="mt-8">
		Looking for a freelance professional who can bring your ideas to life? With expertise in web
		development, UX design, and product management, I offer a unique set of skills that can make
		your digital presence stand out. Let's collaborate and create high quality product experiences
		for your users. Reach out today, and let's discuss how I can help you achieve your goals.
	</p>
	<div class="mt-8">
		<form name="contact" class="relative" method="POST" action="/success" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />

			<div class="mb-2">
				<div class="mt-1">
					<label for="name" class="block text-gray-600"> Name </label>
				</div>
				<div class="mt-1 flex rounded-md shadow-sm">
					<input
						type="text"
						name="name"
						id="name"
						class="p-2 shadow-sm border-2 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 flex-1 block w-full sm:text-sm border-gray-300"
						placeholder="Name"
						required
					/>
				</div>
			</div>
			<div class="mb-2">
				<div class="mt-1">
					<label for="email" class="block mt-4 text-gray-600"> Email </label>
				</div>
				<div class="mt-1 flex rounded-md shadow-sm">
					<input
						type="email"
						name="email"
						id="email"
						class="p-2 shadow-sm border-2 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 flex-1 block w-full sm:text-sm border-gray-300"
						placeholder="Email"
						required
					/>
				</div>
			</div>
			<div class="mb-2">
				<div class="mt-1">
					<label for="message" class="block mt-4 text-gray-600"> Message </label>
				</div>
				<div class="mt-1 flex rounded-md shadow-sm">
					<textarea
						name="message"
						id="message"
						rows={5}
						class="p-2 shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
						style="resize: none;"
						placeholder="Message"
						required
					/>
				</div>
			</div>
			<div class="py-3 text-right">
				<button
					type="submit"
					class="inline-flex justify-center py-2 font-bold px-4 border border-transparent shadow-sm text-sm rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
				>
					Send
				</button>
			</div>
		</form>
	</div>
</section>
