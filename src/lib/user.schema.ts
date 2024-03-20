import { z } from 'zod';

const UserSchema = z
	.object({
		name: z.string(),
		email: z.string().email({ message: 'Ogiltig e-postadress' }),
		password: z.string().min(8, { message: 'Lösenordet måste vara minst 8 tecken' }),
		passwordValidation: z.string()
	})
	.refine((data) => data.password === data.passwordValidation, {
		message: 'Lösenord matchar ej',
		path: ['passwordValidation']
	});

export { UserSchema };
