import '@/styles/pages/Home.scss';

interface HomeProps {
  theme?: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className='homePage'>
      <img className="avatarImg" src="/images/Avatar.jpg" alt="avatar" />
      <div className='header'>
        <h1><b>Portfolio</b></h1>
        <h1>Design</h1>
        <h1>example</h1>
      </div>
    </div>
  );
};

export default Home;
