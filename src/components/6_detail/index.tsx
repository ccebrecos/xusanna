import { useState } from 'react';
import mainImage from '../../assets/img/islandia.png';

export default function Detail() {
  const iban = 'ES08 0128 5812 6501 0000 4207';

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);

    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="bg-beige text-blau-fort flex md:flex-row flex-col space-evenly items-center py-16">
      <div className="md:w-1/2 flex flex-col justify-center gap-9 text-left md:px-32 px-10">
        <p className="text-6xl instrument-serif-regular ">
          Un petit detall per al nostre futur junts{' '}
        </p>
        <p className="text-left text-base poppins-regular">
          La vostra presència en el nostre casament és el millor regal que ens
          podeu fer. Tanmateix, si voleu contribuir d'alguna manera especial, us
          deixem les nostres dades per al regal de noces.
        </p>
        <button
          className="text-blau-fort border-2 bg-turquesa poppins-regular px-6 py-4 md:text-2xl flex md:flex-row flex-col justify-center items-center hover:opacity-80 transition-opacity"
          onClick={handleCopy}
        >
          <div className="flex flex-row gap-3 items-center">
            <span>{`${iban}`}</span>

            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
                className="text-blau-fort fill-current"
              >
                <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
                className="text-blau-fort fill-current"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            )}
          </div>
        </button>
      </div>
      <div className="md:w-1/2 flex flex-row justify-center">
        <img
          src={mainImage}
          alt="Anna and Xus in Iceland"
          className=" md:w-[450px] w-2/3 mt-8 md:mt-20"
        />
      </div>
    </div>
  );
}
