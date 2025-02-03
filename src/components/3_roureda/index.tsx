import mainImage from '../../assets/img/roureda.png'

export default function Roureda() {
    return  (
      <div className="bg-turquesa text-blau-fort instrument-serif-regular flex md:flex-row flex-col space-around items-center py-9 md:py-0">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={mainImage}
            alt="La Roureda main building with its distinctive tower and outdoor ceremony setup"
            className="md:mt-20 mt-0 md:w-96 w-2/3"
          />
        </div>
        <div className="md:w-1/2 flex flex-col pl-8 md:pl-0 mt-8 md:mt-0">
          <p className="text-8xl text-left">La Roureda</p>
          <p className="poppins-regular text-base text-left mt-9 mr-20">Carretera de Cànoves a Sant Antoni de Vilamajor (Km 43,8) 08458 Sant Pere de Vilamajor.</p>
          <div className="poppins-regular text-base text-left mt-9 mr-20">“Inclou detalls addicionals: si hi ha aparcament disponible, transport públic proper o si es recomana arribar amb temps.”</div>
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
    )
  }
  