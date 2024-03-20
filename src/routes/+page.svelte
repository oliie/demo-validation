<script lang="ts">
	import '@picocss/pico/css/pico.pumpkin.min.css';
</script>

<main class="container">
	<form class="user-form" action="">
		<input type="text" name="name" id="name" placeholder="Namn" aria-invalid="false" />

		<input type="email" name="email" id="email" placeholder="E-post" />

		<input type="text" name="password" id="password" placeholder="Lösenord" />

		<input
			type="text"
			name="password-validation"
			id="password-validation"
			placeholder="Lösenord igen"
		/>

		<button type="submit">Skapa användare</button>
	</form>
</main>

<style>
	main {
		margin-top: 5rem;
	}
</style>
