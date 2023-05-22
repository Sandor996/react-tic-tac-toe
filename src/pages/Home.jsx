import { useNavigate } from 'react-router-dom';
import ScramblingText from '../components/ScramblingText/ScramblingText';

import FlickeringBtn from '../UI/FlickeringBtn/FlickeringBtn';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/game');
  };

  const phrases = ['Click this button!', 'Let\'s find out', 'Who is better?', 'You or Computer?','Let\'s go!']
  
  return (
    <>
      <ScramblingText phrases={phrases}/>
      <FlickeringBtn text='play' onClick={navigateHandler} />
    </>
  );
};

export default HomePage;
