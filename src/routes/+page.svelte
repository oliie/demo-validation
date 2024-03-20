<script lang="ts">
	import '@picocss/pico/css/pico.pumpkin.min.css';

	let payload = {};

	let name = '';
	let email = '';
	let password = '';
	let passwordValidation = '';

	let errorMessage = '';

	function isGeneralStringValid(value: string) {
		return value && value.length > 0;
	}

	function isEmailValid(value: string) {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		return value && regex.test(value);
	}

	function isPasswordValid(value: string) {
		return value && value.length >= 8;
	}

	function isPasswordValidationValid(value: string) {
		return value && value === password;
	}

	function handleSubmit() {
		const validForm =
			isGeneralStringValid(name) &&
			isEmailValid(email) &&
			isPasswordValid(password) &&
			isPasswordValidationValid(passwordValidation);

		if (!validForm) {
			errorMessage = 'Formuläret är inte korrekt ifyllt! 😭';
			throw new Error(errorMessage);
		}

		errorMessage = '';
		payload = {
			name,
			email,
			password,
			passwordValidation
		};
	}
</script>

<header>
	<h1>pixel<span class="and">&</span>code_ 🚀 Form-validering</h1>
</header>

<main class="container">
	<form class="user-form" on:submit|preventDefault={handleSubmit}>
		<input type="text" bind:value={name} name="name" placeholder="Namn" />

		<input type="email" bind:value={email} name="email" placeholder="E-post" />

		<input type="text" bind:value={password} name="password" placeholder="Lösenord" />

		<input
			type="text"
			bind:value={passwordValidation}
			name="password-validation"
			id="password-validation"
			placeholder="Lösenord igen"
		/>

		<button type="submit">Skapa användare</button>
	</form>

	{#if errorMessage}
		<p>{errorMessage}</p>
	{:else}
		{JSON.stringify(payload)}
	{/if}
</main>

<style>
	.and {
		color: #ec7454;
	}

	h1 {
		margin-top: 4rem;
		margin-bottom: 2rem;
		text-align: center;
	}
</style>
