
export default function Header() {
  return  (
    <div className="bg-blau-fort instrument-serif-regular text-turquesa flex md:flex-row flex-col space-evenly items-center py-18 md:py-36">
      <div className="md:w-1/2 flex flex-col md:pl-32 px-10">
        <div className="text-9xl md:text-[220px] italic text-left">Anna</div>
        <div className="text-9xl md:text-[220px] mt-0 italic leading-[0.7] text-left">& Xus</div>
        <div className="poppins-regular text-base mt-9 text-left">Ens casem i volem compartir aquest dia tan especial 
        amb vosaltres. Uneix-te a la celebració del nostre casament el 21 de Juny del 2025 a La Roureda!</div>
      </div>
      <div className="md:w-1/2 text-9xl mt-9 md:mt-0"> FOTO </div>
    </div>
  )
}
