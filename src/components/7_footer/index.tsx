import heartIcon from '../../assets/icons/heart.svg'

export default function Footer() {
  return (
    <div className="bg-blau text-blanc h-[500px] instrument-serif-italic flex flex-col justify-center items-center text-6xl">
      <img src={heartIcon} alt="Heart icon" className="w-6 mr-2 center mb-4" />
      <p className="text-6xl">Gràcies per compartir aquest dia amb nosaltres. </p>
      <p className="text-6xl">Cada moment serà més especial perquè tu hi seràs.</p>
      <br/>
      <div className="text-6xl">Us estimem, Anna i Xus.</div>
    </div>
  )
}