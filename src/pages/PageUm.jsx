import React from 'react';
import { FaCapsules, FaListAlt, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa'; // Importando ícones
import './PrescriptionForm.css';

function PageUm() {
  return (
    <div className="container">
      <div className="page">
        {/* Título principal com ícone */}
        <h1 className="flex items-center gap-2">
          <FaCapsules className="text-blue-600" size={24} />
          REFERENCIAL TÉCNICO PARA ADMINISTRAÇÃO DE FERRO ENDOVENOSO
        </h1>

        <div className="section">
          <h2 className="flex items-center gap-2">
            <FaInfoCircle className="text-blue-600" size={20} />
            1. CONTEXTUALIZAÇÃO DA TERAPIA FÉRRICA
          </h2>

          <p style={{ padding: '15px 0' }}>
            A deficiência de ferro representa a causa mais prevalente de anemia globalmente, com impacto significativo especialmente em grupos vulneráveis como crianças, gestantes e mulheres em idade fértil. O manejo terapêutico desta condição deve seguir princípios racionais e evidências científicas atualizadas, priorizando a via oral como primeira escolha de tratamento.
          </p>

          {/* Destaque para a Terapia com Ferro Oral */}
          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaListAlt className="text-green-600" size={20} />
              1.1 Terapia com Ferro Oral: Primeira Linha de Tratamento
            </h3>
            <p>
              <strong>Características principais:</strong>
            </p>
            <ul>
              <li>Tratamento de primeira escolha para maioria dos pacientes</li>
              <li>Excelente relação custo-efetividade</li>
              <li>Perfil de segurança bem estabelecido</li>
              <li>Biodisponibilidade adequada (15-35%)</li>
              <li>Facilidade de administração e manejo</li>
            </ul>
          </div>

          {/* Tabela de Posologia */}
          <div className="protocol-box">
            <h3 className="flex items-center gap-2">
              <FaInfoCircle className="text-yellow-600" size={20} />
              1.2 Posologia do Sulfato Ferroso
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Parâmetro</th>
                  <th>Especificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Dose recomendada</strong></td>
                  <td>100-200mg de ferro elementar/dia</td>
                </tr>
                <tr>
                  <td><strong>Equivalência</strong></td>
                  <td>1 comp. sulfato ferroso 40mg = 40mg ferro elementar</td>
                </tr>
                <tr>
                  <td><strong>Duração do tratamento</strong></td>
                  <td>3-6 meses</td>
                </tr>
                <tr>
                  <td><strong>Resposta esperada</strong></td>
                  <td>Elevação de 1-2g/dL de hemoglobina em 2-4 semanas</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Alerta de Otimização */}
          <div className="alert">
            <h3 className="flex items-center gap-2">
              <FaExclamationTriangle className="text-red-600" size={20} />
              1.3 Otimização da Terapia Oral
            </h3>
            <p>
              <strong>Antes de considerar a terapia endovenosa, deve-se:</strong>
            </p>
            <ul>
              <li>Verificar adequação da dose prescrita</li>
              <li>Avaliar adesão ao tratamento</li>
              <li>
                Garantir orientações adequadas sobre administração:
                <ul>
                  <li>Tomar em jejum ou com vitamina C</li>
                  <li>Evitar interação com alimentos/medicamentos</li>
                  <li>Manejar efeitos colaterais quando presentes</li>
                </ul>
              </li>
              <li>Assegurar tempo adequado de tratamento</li>
            </ul>
          </div>

          {/* Informação Importante */}
          <div className="important">
            <p className="flex items-center gap-2">
              <FaExclamationTriangle className="text-red-600" size={20} />
              <strong>IMPORTANTE:</strong> A transição para terapia endovenosa só deve ser considerada após clara documentação de falha ou intolerância ao tratamento oral adequadamente conduzido.
            </p>
          </div>
        </div>

        <div className="page-footer">
          Referencial Técnico: Administração de Ferro Endovenoso - Página 1
        </div>
      </div>
    </div>
  );
}

export default PageUm;
