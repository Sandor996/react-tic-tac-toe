import { useNavigate } from 'react-router-dom';

import FlickeringBtn from '../UI/FlickeringBtn/FlickeringBtn';

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/');
  };
  return (
    <main>
      <FlickeringBtn text='404' onClick={navigateHandler} />
      <h2 className='error_message'>Page Not Found</h2>
    </main>
  );
};

export default ErrorPage;
