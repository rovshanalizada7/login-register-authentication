import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthSchema, authSchema } from '../utils/schema';
import { login } from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/save-token';
import { useAuth } from '../../../store/auth.store';


export const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthSchema) => {
    try {
      const response = await login(data);
      saveToken(response.data);
      setToken(response.data.accessToken);
      navigate('/profile');
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
   <section className='bg-[gray] w-[100%] h-[100vh] flex justify-center items-center '>

   <div className='bg-[#fff] w-[500px] h-[450px] flex flex-col justify-between'>

    <div className='m-5'>
      <h1 className='text-[25px] mb-1 pl-3'>Login</h1>
      <span className='text-[18px] pl-3 text-[grey]'>Welcome! So good to have you back!</span>
    </div>

    <div className='flex justify-center align-center'>
    <form className='w-[300px]  flex flex-col  gap-7' onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input className=' p-2 pr-[100px] border-b border-gray-600 outline-none'
        type="text"
        placeholder='Username...'
        {...register('username')}
      />
      {errors?.username && <div>{errors.username.message}</div>}
      </div>
     <div>
     <input  className='p-2 pr-[100px] border-b border-gray-600 outline-none' 
      placeholder='Name...'
      type="text" 
      {...register('name')} />
     {errors?.name && <div>{errors.name.message}</div>}
     </div>
     <div>
     <input className='p-2 pr-[100px] border-b border-gray-600 outline-none'
        placeholder='Password...'
        type="password"
        {...register('password')}
      />
      {errors?.password && <div>{errors.password.message}</div>}
     </div>
      <button className='bg-[#14B8A6] text-[#fff] py-2 px-5 hover:bg-white hover:text-[#14B8A6] hover:border-[#14B8A6] border cursor-pointer' type="submit">Login</button>
    </form>
    </div>

     <p className='text-center mb-5 mr-8'>Don't have an account? <a href='/auth/register'>Register here</a></p>

   </div>
    
   </section>
  );
};
