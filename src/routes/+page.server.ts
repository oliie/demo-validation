import { UserSchema } from '$lib/user.schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load() {
	const form = await superValidate(zod(UserSchema));

	return { form };
}

export const actions = {
	default: async (request) => {
		const form = await superValidate(request, zod(UserSchema));

		return { valid: form.valid, form };
	}
};
