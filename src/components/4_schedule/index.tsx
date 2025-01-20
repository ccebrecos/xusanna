import busIcon from '../../assets/icons/bus.svg'

function Bus() {
  return (
    <div className="bg-white text-left text-blau-fort poppins-regular flex flex-row mx-20 my-5">
      <img src={busIcon} alt="Bus icon" className="w-6 mr-2" />
      <p><strong className="font-semibold">Si agafes l'autobús:</strong> Hauràs de ser al <a href="https://maps.app.goo.gl/5RstZ3CzRAHcqsd99" target="_blank" rel="noopener noreferrer" className="underline">Museu de Badalona</a> a les 16:45h. La tornada serà a les 03:00h.</p>
    </div>
  )
}


export default function Schedule() {
  return (
    <>
    <div className="bg-beige h-[500px] flex justify-evenly items-center">
      <div className="w-60 h-60 bg-white rounded-full"></div>
      <div className="w-60 h-60 bg-white rounded-full"></div>
      <div className="w-60 h-60 bg-white rounded-full"></div>
      <div className="w-60 h-60 bg-white rounded-full"></div>
    </div>
    <Bus />
    </>
  )
}
  