// src/components/Footer.jsx
import { FaGithub, FaInfoCircle, FaStethoscope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="h-28 bg-gradient-to-r  from-sky-200 via-blue-200 to-indigo-100 border-indigo-100 shadow-t-2xl">
      {/* Linha de acento médico */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />
 
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2 text-center px-6 pt-6">
            <FaStethoscope className="text-blue-700" size={22} />
            <span className="text-sm font-medium text-gray-800 text-shadow-sm px-6 ">
              Referencial Técnico de Administração de Ferro Endovenoso
            </span>
            <span className="text-gray-400">-</span>
            <span className="text-xs text-stone-600 text-shadow-sm">
              © {new Date().getFullYear()} GT-Medic - Todos os direitos reservados
            </span>
          </div>

          {/* Links de navegação abaixo */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/gtellapolinario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            
            <span className="text-gray-300">•</span>
            
            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaInfoCircle size={20} />
              <span>Informações</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;