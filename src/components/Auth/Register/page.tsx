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
    <section className='w-[100%] h-[100vh] flex justify-center items-center bg-[url("https://images.unsplash.com/photo-1484807352052-23338990c6c6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVnaXN0cmF0aW9ufGVufDB8fDB8fHww")] bg-cover bg-center bg-no-repeat'>
      <div className='bg-[#fff] w-[450px]  rounded-[10px]'>
        <h1 className='text-center text-[30px] font-extrabold my-5 font-serif'>Sign Up</h1>
        <form className='flex flex-col justify-center items-center gap-4 p-3' onSubmit={handleSubmit(onSubmit)}>
      <input
        className=' p-2 pr-[2rem] w-[300px]  border-b border-gray-600  outline-none  font-serif '
        type="text"
        placeholder='Username...'
        {...register('username')}
      />
      {errors?.username && <div>{errors.username.message}</div>}
      <input 
       className='p-2 pr-[2rem] w-[300px]   border-b border-gray-600  outline-none  font-serif' 
       placeholder='Name...'
       type="text" {...register('name')} />
      {errors?.name && <div>{errors.name.message}</div>}
      <input
        className='p-2 pr-[2rem] w-[300px]  border-b border-gray-600 outline-none  font-serif  '
        placeholder='Password...'
        type="password"
        {...register('password')}
      />
      {errors?.password && <div>{errors.password.message}</div>}
      <button className='w-[300px] rounded-md bg-[#14B8A6] text-[#fff] py-2 px-5 mt-4 hover:bg-white hover:text-[#14B8A6] hover:border-[#14B8A6] border cursor-pointer font-serif' type="submit">Register</button>
        </form>
        <p className='text-center font-serif text-[#555454e9] my-3'>Already have an account? <a className='text-[#14B8A6] font-bold font-serif' href='/auth/login'>Login</a></p>
        <div className='flex justify-end'>
        <a className='text-end font-serif underline mr-5 my-5' href="/">Visit to Home Page</a>
        </div>
      </div>
    </section>
  );
};
