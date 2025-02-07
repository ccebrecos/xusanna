import zucainaImg from '../../assets/img/zucaina.png';

function Banner() {
  return (
    <div className="h-20 bg-turquesa text-blau-fort banner-container">
      <div className="instrument-serif-regular justify-between mx-4 md:mx-16  h-full flex items-center">
        <div className="moving-text flex flex-row space-x-4 ">
          <p className="text-6xl italic ">
            Confirma la teva assistència abans del 09 · 03 · 25
          </p>
          <p className="text-6xl italic ">
            Confirma la teva assistència abans del 09 · 03 · 25
          </p>
          <p className="text-6xl italic ">
            Confirma la teva assistència abans del 09 · 03 · 25
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <div
        className="bg-blau-fort text-beige instrument-serif-regular flex flex-col space-evenly items-center md:py-20 py-8"
        style={{
          backgroundImage: `url(${zucainaImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="center md:text-8xl text-6xl md:mb-9 mb-5">
          Ens acompanyes?
        </div>
        <div className="center text-base poppins-regular mx-10">
          <p>
            Confirma la teva assistència abans del{' '}
            <span className="text-nowrap">09 · 03 · 25.</span> Ens farà molt
            feliços saber que vindràs!
          </p>
        </div>
        <a
          href="https://forms.gle/ujKPfq3DndksVk9K8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 text-left"
        >
          <button className="text-white border-2 border-white poppins-regular px-6 py-4 hover:opacity-50 transition-opacity">
            Confirmar assistència
          </button>
        </a>
      </div>
      <Banner />
    </>
  );
}
