import z from 'zod';

export const authSchema = z.object({
  username: z.string().min(1, 'Username can not be empty'),
  name: z.string().min(1, 'Name can not be empty'),
  password: z.string().min(1, 'Password can not be empty'),
});

export type AuthSchema = z.infer<typeof authSchema>;
