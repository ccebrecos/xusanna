import headerGif from '../../assets/img/header.gif';

export default function Header() {
  return (
    <div className="bg-blau-fort instrument-serif-regular text-turquesa flex md:flex-row flex-col space-evenly items-center py-18 md:py-36">
      <div className="md:w-1/2 flex flex-col lg:pl-32 pl-10">
        <div className="text-8xl lg:text-9xl xl:text-[220px] italic text-left">
          Anna
        </div>
        <div className="text-8xl lg:text-9xl xl:text-[220px] mt-0 italic leading-[0.7] text-left">
          & Xus
        </div>
        <div className="poppins-regular text-base mt-9 text-left">
          Ens casem i volem compartir aquest dia tan especial amb vosaltres.
          Uneix-te a la celebració del nostre casament el 21 de Juny del 2025 a
          La Roureda!
        </div>
      </div>
      <div className="md:w-1/2 mt-9 md:mt-0 px-10 pb-8 md:pb-0">
        <img src={headerGif} className="" />
      </div>
    </div>
  );
}
