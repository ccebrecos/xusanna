
function Banner() {
  return  (
    <div className="h-20 bg-turquesa text-blau-fort">
      <div className='flex flex-row instrument-serif-regular justify-between mx-4 md:mx-16 items-center h-full'>
        <div className="text-6xl italic">Confirma la teva assitència abans del 09 · 03 · 25</div>
      </div>
    </div>
)
}

export default function Confirm() {
  return (
    <>
      <div className="bg-blau-fort text-blanc instrument-serif-regular h-[535px] flex flex-col justify-center items-center">
        <div className="center text-8xl">Ens acompanyes?</div>
        <div className="center text-base poppins-regular">Confirma la teva assistència abans del 09 · 03 · 25.</div>
        <div className="center text-base poppins-regular">Ens farà molt feliços saber que vindràs!</div> 
      </div>
      <Banner />
    </>
  )
  }
  
  