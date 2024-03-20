<script lang="ts">
	import '@picocss/pico/css/pico.pumpkin.min.css';
</script>

<header>
	<h1>pixel<span class="and">&</span>code_ 🚀 Form-validering</h1>
</header>

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
	.and {
		color: #ec7454;
	}

	h1 {
		margin-top: 4rem;
		margin-bottom: 2rem;
		text-align: center;
	}
</style>
