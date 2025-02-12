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
   <section className='bg-[#111827] w-[100%] h-[100vh] flex justify-center items-center rounded-b-lg '>

   <div className='bg-[#fff] w-[500px]  rounded-[10px] flex flex-col justify-between'>

    <div className='m-5'>
      <h1 className='text-[25px] mb-1 pl-3 font-serif font-bold'>Login</h1>
      <span className='text-[18px] pl-3 text-[grey] font-serif'>Welcome! So good to have you back!</span>
    </div>

    <div className='flex justify-center align-center'>
    <form className='w-[300px]  flex flex-col  gap-7' onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input className=' p-2 pr-[2rem] w-[300px] border-b border-gray-600 outline-none font-serif'
        type="text"
        placeholder='Username...'
        {...register('username')}
      />
      {errors?.username && <div>{errors.username.message}</div>}
      </div>
     <div>
     <input  className='p-2 pr-[2rem] w-[300px] border-b border-gray-600 outline-none font-serif' 
      placeholder='Name...'
      type="text" 
      {...register('name')} />
     {errors?.name && <div>{errors.name.message}</div>}
     </div>
     <div>
     <input className='p-2 pr-[2rem] w-[300px] border-b border-gray-600 outline-none font-serif'
        placeholder='Password...'
        type="password"
        {...register('password')}
      />
      {errors?.password && <div>{errors.password.message}</div>}
     </div>
      <button className='bg-[#14B8A6] text-[#fff] py-2 px-5 hover:bg-white hover:text-[#14B8A6] hover:border-[#14B8A6] border cursor-pointer font-serif' type="submit">Login</button>
    </form>
    </div>

     <p className='text-center mb-5 text-[#555454e9] font-serif'>Don't have an account? <a className='text-[#14B8A6] font-bold font-serif' href='/auth/register'>Register here</a></p>
      <a className='text-end m-3 mr-6  font-serif underline' href="/">Visit to Home Page</a>

   </div>
    
   </section>
  );
};
