import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthSchema, authSchema } from '../utils/schema';
import { register as registerApi } from '../../../service/api';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: AuthSchema) => {
    try {
      registerApi(data);
      navigate('/auth/login');
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        style={{ display: 'block' }}
        type="text"
        {...register('username')}
      />
      {errors?.username && <div>{errors.username.message}</div>}
      <input style={{ display: 'block' }} type="text" {...register('name')} />
      {errors?.name && <div>{errors.name.message}</div>}
      <input
        style={{ display: 'block' }}
        type="password"
        {...register('password')}
      />
      {errors?.password && <div>{errors.password.message}</div>}
      <button type="submit">regitser</button>
    </form>
  );
};
