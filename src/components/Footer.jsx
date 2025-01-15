import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-200 py-6 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Texto */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-800 text-lg font-semibold">
            Referencial Técnico: Administração de Ferro Endovenoso
          </p>
          <p className="text-gray-800 text-base">
            Oferecimento:{' '}
            <a
              href="https://huggingface.co/spaces/drguilhermeapolinario/Flamengo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-2 justify-center md:justify-start"
            >
              <FaMapMarkerAlt className="text-red-600" size={18} />
              UBS Flamengo <FaExternalLinkAlt size={16} />
            </a>
          </p>
        </div>

        {/* Links sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/drguilhermeapolinario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://huggingface.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600"
          >
            <FaInfoCircle size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
