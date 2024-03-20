import { z } from 'zod';

const UserSchema = z
	.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(8),
		passwordValidation: z.string()
	})
	.refine((data) => data.password === data.passwordValidation, { message: 'Lösenord matchar ej' });

export { UserSchema };
