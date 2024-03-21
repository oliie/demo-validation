<script>
	import Confetti from 'svelte-confetti';

	export let success = false;
</script>

{#if success}
	<Confetti
		x={[-2, 2]}
		y={[0, 2]}
		amount={100}
		size={30}
		colorArray={['url(https://pixelcode.se/wp-content/uploads/2023/03/favicon_pixelcode_1.png)']}
	/>
{/if}
