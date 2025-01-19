import mainImage from '../../assets/img/roureda.png'

export default function Roureda() {
    return  (
      <div className="bg-turquesa text-blau-fort instrument-serif-regular flex flex-row space-around h-[500px] items-center">
        <div className="w-1/2 flex justify-center">
          <img
            src={mainImage}
            alt="La Roureda main building with its distinctive tower and outdoor ceremony setup"
            width={400}
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <p className="text-8xl">La Roureda</p>
          <p className="poppins-regular text-base">Carretera de Cànoves a Sant Antoni de Vilamajor (Km 43,8)
          08458 Sant Pere de Vilamajor.</p>
          <div className="poppins-regular text-base">“Inclou detalls addicionals: si hi ha aparcament disponible, transport públic proper o si es recomana arribar amb temps.”</div>
        </div>
      </div>
    )
  }
  