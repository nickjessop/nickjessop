<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	let isHovering: boolean = false;
	let isToggled: boolean = false;
	function handleMouseOver(e) {
		isHovering = true;
	}
	function handleMouseOut(e) {
		isHovering = false;
	}
	function toggleContactForm() {
		if (isToggled === false) {
			isToggled = true;
		} else {
			isToggled = false;
			isHovering = false;
		}
	}
</script>

<div
	class="fixed flex items-end bottom-3 right-3 w-20 h-16 z-50 rounded-md bg-slate-300 border border-slate-400 drop-shadow-xl"
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	on:focus={handleMouseOver}
	on:blur={handleMouseOver}
>
	<div class="flex px-2 hover:cursor-pointer" on:click={toggleContactForm}>
		<img
			src="/call-me-guy.png"
			alt="Call me"
			width={140}
			height={140}
			style="display: {isHovering || isToggled ? 'block' : 'none'}; opacity: {isHovering ||
			isToggled
				? '1'
				: '0'};"
		/>
		<img
			src="/wave-guy.png"
			alt="Waving"
			width={140}
			height={140}
			style="display: {isHovering || isToggled ? 'none' : 'block'}; opacity: {isHovering ||
			isToggled
				? '0'
				: '1'}"
		/>
	</div>
	<div
		class="absolute w-[250px] -left-[260px] sm:w-[400px] sm:-left-[410px] p-4 bg-white rounded-md drop-shadow-sm transition delay-100 duration-300 ease-in-out"
		style="visibility: {isToggled ? 'visible' : 'hidden'}; opacity: {isToggled ? '1' : '0'}"
	>
		<form
			name="contact"
			autoComplete="off"
			class="relative"
			method="POST"
			action="/success"
			data-netlify="true"
			data-netlify-honeypot="extra-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p class="hidden">
				<input name="extra-field" aria-labelledby="contact-form-extra-field" />
			</p>
			<div class="flex items-center justify-between">
				<h2 class="text-lg font-bold text-gray-600 py-2">Contact me</h2>
				<div
					class="flex content-center text-gray-600 font-bold py-1 px-2.5 rounded-full bg-slate-200 hover:cursor-pointer"
					on:click={toggleContactForm}
				>
					&#10005;
				</div>
			</div>
			<div class="mb-2">
				<div class="mt-1">
					<label for="name" class="block text-gray-600"> Name </label>
				</div>
				<div class="mt-1 flex rounded-md shadow-sm">
					<input
						type="text"
						name="name"
						id="yourname"
						class="p-2 shadow-sm border-2 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 flex-1 block w-full sm:text-sm border-gray-300"
						placeholder="Name"
						required
						data-enable-grammarly="false"
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
						id="youremail"
						class="p-2 shadow-sm border-2 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 flex-1 block w-full sm:text-sm border-gray-300"
						placeholder="Email"
						required
						data-enable-grammarly="false"
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
						id="yourmessage"
						rows={5}
						class="p-2 shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md"
						style="resize: none;"
						placeholder="Message"
						required
						data-enable-grammarly="false"
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
</div>
