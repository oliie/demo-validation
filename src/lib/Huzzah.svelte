<script>
	import Confetti from 'svelte-confetti';

	export let success = false;
</script>

{#if success}
	<Confetti
		x={[-3, 3]}
		y={[-0.5, 2]}
		amount={100}
		size={50}
		colorArray={['url(https://pixelcode.se/wp-content/uploads/2023/03/favicon_pixelcode_1.png)']}
	/>
{/if}
