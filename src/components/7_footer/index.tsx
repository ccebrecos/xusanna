import heartIcon from '../../assets/icons/heart.svg'

export default function Footer() {
  return (
    <div className="bg-blau text-blanc instrument-serif-italic flex flex-col justify-center items-center md:text-6xl text-3xl py-16 md:px-32 px-10">
      <img src={heartIcon} alt="Heart icon" className="w-6 mr-2 center mb-4" />
      <p>Gràcies per compartir aquest dia amb nosaltres.</p>
      <p>Cada moment serà més especial perquè tu hi seràs.</p>
      <br/>
      <p>Us estimem, Anna i Xus.</p>
    </div>
  )
}