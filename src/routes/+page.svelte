<script lang="ts">
	import '@picocss/pico/css/pico.pumpkin.min.css';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	/**
	 * Visa SuperDebug
	 * Visa default-värden (schema)
	 * Visa errors
	 * Visa constraints (min/max) | lägg på det på namn
	 * Visa optional
	 * Visa custom error-meddelanden
	 * Visa custom action name
	 */

	export let data;

	const { form, constraints, errors, enhance } = superForm(data.form, {
		dataType: 'json',
		resetForm: false,
		clearOnSubmit: 'none'
	});

	// $: console.log($constraints);
</script>

<header>
	<h1>pixel<span class="and">&</span>code_ 🚀 Form-validering</h1>
</header>

<main class="container">
	<!-- <section>
		<SuperDebug data={$form} />
	</section> -->

	<form class="user-form" method="POST" use:enhance>
		<input type="text" placeholder="Namn" bind:value={$form.name} aria-invalid={!!$errors.name} />

		<input
			type="email"
			placeholder="E-post"
			bind:value={$form.email}
			aria-invalid={!!$errors.email}
		/>
		{#if $errors.email}
			<p class="error">{$errors.email}</p>
		{/if}

		<input
			type="text"
			placeholder="Lösenord"
			bind:value={$form.password}
			aria-invalid={!!$errors.password}
		/>
		{#if $errors.password}
			<p class="error">{$errors.password}</p>
		{/if}

		<input
			type="text"
			placeholder="Lösenord igen"
			bind:value={$form.passwordValidation}
			aria-invalid={!!$errors.passwordValidation}
		/>
		{#if $errors.passwordValidation}
			<p class="error">{$errors.passwordValidation}</p>
		{/if}

		<button type="submit">Skapa användare</button>
	</form>
</main>

<style>
	.error {
		color: hotpink;
	}

	.and {
		color: #ec7454;
	}

	h1 {
		margin-top: 4rem;
		margin-bottom: 2rem;
		text-align: center;
	}
</style>
