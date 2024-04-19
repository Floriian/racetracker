import { useNavigate } from 'react-router-dom';
import Button from './button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-zinc-600 bg-no-repeat bg-blend-multiply bg-cover bg-[75%] bg-[url('https://th.bing.com/th/id/OIG3.Gi7Q4bQEQbXfefv45Lh2?pid=ImgGn')]">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-300 md:text-5xl lg:text-6xl">
          Track your racers live on the map!
        </h1>
        <p className="mb-8 text-lg font-normal text-neutral-200 lg:text-xl sm:px-16 lg:px-48">
          You can register your races and track your racers live by checkpoints.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Button>primary</Button>
          <Button className='mr-4' disabled={true}>disabled</Button>
          <Button color="dark" onClick={() => navigate('page-2')} disabled={false}>
            dark
          </Button>
          <Button className='mr-4' color="dark" disabled={true}>disabled</Button>
          <Button color="outline" onClick={() => navigate('/')}>
            outline
          </Button>
          <Button color="outline" disabled={true}>disabled</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
