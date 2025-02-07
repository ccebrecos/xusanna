import mainImage from '../../assets/img/roureda.png';

export default function Roureda() {
  return (
    <div className="bg-turquesa text-blau-fort instrument-serif-regular flex md:flex-row flex-col space-around items-center py-9 md:py-0">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={mainImage}
          alt="La Roureda main building with its distinctive tower and outdoor ceremony setup"
          className="md:mt-20 mt-0 md:w-96 w-2/3"
        />
      </div>
      <div className="md:w-1/2 flex flex-col px-10 mt-8 md:mt-0">
        <p className="text-7xl text-left">La Roureda</p>
        <p className="poppins-regular text-base text-left mt-9">
          Carretera de Cànoves a Sant Antoni de Vilamajor (Km 43,8) 08458 Sant
          Pere de Vilamajor.
        </p>
        <div className="poppins-regular text-base text-left mt-9">
          Us esperem el dissabte 21 a les 17.45h a la Roureda. Pots arribar-hi
          en cotxe, podràs aparcar sense problema, també pots venir en autobús,
          més avall trobaràs més informació!
        </div>
        <a
          href="https://maps.app.goo.gl/hD8ABPrCVDvnkq1f8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 text-left"
        >
          <button className="text-blau-fort border-2 border-blau-fort poppins-regular px-6 py-4 hover:opacity-50 transition-opacity">
            Com arribar-hi
          </button>
        </a>
      </div>
    </div>
  );
}
