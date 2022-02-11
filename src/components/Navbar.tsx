import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-100 flex h-16 bg-black bg-opacity-80 px-5 md:px-10 lg:px-20'>
      <img
        src={Logo}
        alt='nasa'
        className='cursor-pointer object-contain p-2'
        onClick={() => {
          navigate('/');
        }}
      />
      <p
        onClick={() => {
          navigate('/');
        }}
        className='cursor-pointer self-center text-lg font-semibold text-red-800'
      >
        NasApp
      </p>
      <p
        onClick={() => {
          navigate('/picture');
        }}
        className='ml-auto mr-5 cursor-pointer self-center text-lg font-semibold'
      >
        Zdjęcia
      </p>
    </div>
  );
};
