import mainImage from '../../assets/img/islandia.png'


export default function Detail() {
  return (
    <div className="bg-beige text-blau-fort flex flex-row space-evenly items-center py-16">
        <div className="w-1/2 flex flex-col justify-center  gap-9 text-left md:px-32 px-10">
           <p className="text-6xl instrument-serif-regular ">Un petit detall per al nostre futur junts.</p>
           <p className="text-left text-base poppins-regular">La vostra presència en el nostre casament és el millor regal que ens podeu fer. Tanmateix, si voleu contribuir d'alguna manera especial, us deixem les nostres dades per al regal de noces.</p>
           <div className=''>

              <button className="text-blau-fort border-2 bg-turquesa poppins-regular px-6 py-4 text-2xl">
               IBAN : [ESXX XXXX XXXX XXXX XXXX XXXX]
              </button>
            </div>
          </div>
        <div className="w-1/2 text-9xl flex flex-row justify-center"> 
        <img
            src={mainImage}
            alt="Anna and Xus in Iceland"
            width={450}
            className="md:mt-20 mt-0"
          />
        </div>

       
    </div>
  )
}