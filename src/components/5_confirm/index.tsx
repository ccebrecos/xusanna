import zucainaImg from '../../assets/img/zucaina.png';

function Banner() {
  return (
    <div className="h-20 bg-turquesa text-blau-fort">
      <div className="flex flex-row instrument-serif-regular justify-between mx-4 md:mx-16 items-center h-full">
        <div className="text-6xl italic">Confirma la teva assitència abans del 09 · 03 · 25</div>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <div 
        className="bg-blau-fort text-beige instrument-serif-regular flex flex-col space-evenly items-center py-20"
        style={{
          backgroundImage: `url(${zucainaImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="center text-8xl">Ens acompanyes?</div>
        <div className="center text-base poppins-regular">
          <p>Confirma la teva assistència abans del 09 · 03 · 25.</p>
          <p>Ens farà molt feliços saber que vindràs!</p>
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
  
  