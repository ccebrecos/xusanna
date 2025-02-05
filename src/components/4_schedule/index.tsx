import busIcon from '../../assets/icons/bus.svg';

import schedule_1 from '../../assets/img/schedule_1.png';
import schedule_2 from '../../assets/img/schedule_2.png';
import schedule_3 from '../../assets/img/schedule_3.png';
import schedule_4 from '../../assets/img/schedule_4.png';

function scheduleItem(hora: string, cosa: string, img?: string) {
  return (
    <div className="flex flex-col text-blau-fort poppins-regular items-center py-5 md:py-0">
      <div
        className="w-48 h-48 md:w-60 md:h-60 bg-white rounded-full md:mb-9 mb-4 bg-cover bg-center"
        style={{ backgroundImage: img ? `url(${img})` : 'none' }}
      />
      <p className="text-3xl font-semibold">{hora}h</p>
      <p className="text-2xl">{cosa}</p>
    </div>
  );
}

function Bus() {
  return (
    <div className="bg-white text-left text-blau-fort poppins-regular flex flex-row md:mx-20 mx-3 my-5">
      <img src={busIcon} alt="Bus icon" className="w-6 mr-2" />
      <p>
        <strong className="font-semibold">Si agafes l'autobús:</strong> Hauràs
        de ser al{' '}
        <a
          href="https://maps.app.goo.gl/5RstZ3CzRAHcqsd99"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Museu de Badalona
        </a>{' '}
        a les 16:45h. La tornada serà a les 03:00h.
      </p>
    </div>
  );
}

export default function Schedule() {
  return (
    <>
      <div className="bg-beige justify-evenly items-center py-16 flex md:flex-row flex-col">
        {scheduleItem('18:00', 'Cerimònia', schedule_1)}
        {scheduleItem('19:00', 'Recepció i aperitiu', schedule_2)}
        {scheduleItem('21:00', 'Sopar', schedule_3)}
        {scheduleItem('23:00', 'Ball i festa', schedule_4)}
      </div>
      <Bus />
    </>
  );
}
