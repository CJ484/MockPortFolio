import avatar from '../../Assets/images/pictures/Avatar.jpg'
import '../../Assets/styles/Home.scss';

const Home = () => {
  return (
    <div className='homePage page'>
      <img className="avatarImg" src={avatar} alt="avatar" />
      <div className='header'>
        <h1><b>Portfolio</b></h1>
        <h1>Design</h1>
        <h1>example</h1>
      </div>
    </div>
  );
};

export default Home;