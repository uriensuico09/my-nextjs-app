
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    alert(`Email: ${data.email} \n` 
        `Password: ${data.password}`);
    router.push('/');
  };

  const onLogin = () => {
    router.replace('/')
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p className="error-message">Please enter a valid email</p>}
        <input type="password" placeholder="Password" {...register('password', { required: true, minLength: 8 })} />
        {errors.password && <p className="error-message">Password must be at least 8 characters long</p>}
        <button class="register" type="submit">Register</button>
      </form>
        <button onClick={onLogin}>Go to Login</button>
    </div>
  );
};

export default Register;
