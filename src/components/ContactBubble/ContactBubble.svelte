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
</script>

<div
	class="fixed flex items-end bottom-3 right-3 w-20 h-16 z-50 rounded-md bg-slate-300 border border-slate-400 drop-shadow-xl"
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	on:focus={handleMouseOver}
	on:blur={handleMouseOver}
>
	<a class="flex px-2 hover:cursor-pointer" href="/contact">
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
	</a>
</div>
