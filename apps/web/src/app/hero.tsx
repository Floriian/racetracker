import Button from './button';

export function Hero() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    section {
      background-image: url('https://th.bing.com/th/id/OIG3.Gi7Q4bQEQbXfefv45Lh2?pid=ImgGn');
      background-size: cover;
      background-position-y: 75%;
    }
          `,
        }}
      />
      <section className="bg-no-repeat bg-zinc-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-300 md:text-5xl lg:text-6xl">
            Track your racers live on the map!
          </h1>
          <p className="mb-8 text-lg font-normal text-neutral-200 lg:text-xl sm:px-16 lg:px-48">
            You can register your races and track your racers live by
            checkpoints.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Button>primary</Button>
            <Button color="dark" link="page-2">
              dark
            </Button>
            <Button color="outline" link="/asd">
              outline
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
