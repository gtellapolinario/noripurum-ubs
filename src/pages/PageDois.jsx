import React from 'react';
import { FaHistory, FaListAlt, FaCheckCircle, FaExclamationTriangle, FaBalanceScale } from 'react-icons/fa';
import './PrescriptionForm.css';

function PageDois() {
  return (
    <div className="container">
      <div className="page">
        {/* Título principal com ícone */}
        <h2 className="flex items-center gap-2">
          <FaHistory className="text-blue-600" size={24} />
          2. EVOLUÇÃO DA TERAPIA FÉRRICA ENDOVENOSA
        </h2>

        <div className="section">
          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaListAlt className="text-green-600" size={20} />
              2.1 Perspectiva Histórica
            </h3>
            <div className="protocol-box">
              <table>
                <thead>
                  <tr>
                    <th>Período</th>
                    <th>Características</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Década de 1980</strong></td>
                    <td>
                      <ul>
                        <li>Uso de ferro dextran de alto peso molecular</li>
                        <li>Alta incidência de reações anafiláticas (até 3%)</li>
                        <li>Necessidade de dose teste</li>
                        <li>Mortalidade significativa associada</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Após 1990</strong></td>
                    <td>
                      <ul>
                        <li>Introdução do sacarato de hidróxido férrico</li>
                        <li>Perfil de segurança significativamente superior</li>
                        <li>Eliminação da necessidade de dose teste</li>
                        <li>Incidência de reações graves &lt; 0,1%</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="alert">
            <h3 className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-600" size={20} />
              2.2 Formulações Modernas
            </h3>
            <p><strong>Características do Sacarato de Hidróxido Férrico:</strong></p>
            <ul>
              <li>Estrutura molecular estável</li>
              <li>Liberação controlada de ferro livre</li>
              <li>Menor risco de reações adversas</li>
              <li>Perfil de segurança bem estabelecido</li>
              <li>Não requer dose teste</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="flex items-center gap-2">
            <FaBalanceScale className="text-blue-600" size={24} />
            3. RACIONALIZAÇÃO DO USO DE FERRO ENDOVENOSO
          </h2>

          <div className="important">
            <h3 className="flex items-center gap-2">
              <FaExclamationTriangle className="text-red-600" size={20} />
              3.1 Práticas Não Recomendadas
            </h3>
            <p><strong>A administração de ferro endovenoso NÃO está indicada nas seguintes situações:</strong></p>
            <ul>
              <li>Primeira escolha em pacientes sem tentativa prévia de ferro oral</li>
              <li>"Otimização" de níveis normais de hemoglobina</li>
              <li>Baseada apenas em queixas subjetivas sem confirmação laboratorial</li>
              <li>Como "prevenção" de anemia</li>
              <li>Tratamento de fadiga sem anemia documentada</li>
            </ul>
          </div>

          <div className="protocol-box">
            <h3 className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" size={20} />
              3.2 Evidências Atuais
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Parâmetro</th>
                  <th>Dados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Taxa de reações graves</strong></td>
                  <td>0,03-0,05%</td>
                </tr>
                <tr>
                  <td><strong>Perfil de segurança</strong></td>
                  <td>Bem estabelecido em múltiplos estudos</td>
                </tr>
                <tr>
                  <td><strong>Custo-efetividade</strong></td>
                  <td>Adequada quando bem indicado</td>
                </tr>
                <tr>
                  <td><strong>População beneficiada</strong></td>
                  <td>Grupos específicos com indicações precisas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaListAlt className="text-green-600" size={20} />
              3.3 Comparativo entre Formulações
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Sulfato Ferroso (Oral)</th>
                  <th>Sacarato Férrico (EV)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Biodisponibilidade</strong></td>
                  <td>15-35%</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td><strong>Tempo até efeito</strong></td>
                  <td>2-4 semanas</td>
                  <td>1-2 semanas</td>
                </tr>
                <tr>
                  <td><strong>Custo</strong></td>
                  <td>Baixo</td>
                  <td>Elevado</td>
                </tr>
                <tr>
                  <td><strong>Conveniência</strong></td>
                  <td>Alta</td>
                  <td>Baixa</td>
                </tr>
                <tr>
                  <td><strong>Efeitos GI</strong></td>
                  <td>Frequentes</td>
                  <td>Raros</td>
                </tr>
                <tr>
                  <td><strong>Indicação</strong></td>
                  <td>Primeira linha</td>
                  <td>Segunda linha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="page-footer">
          Referencial Técnico: Administração de Ferro Endovenoso - Página 2 - Oferecimento [https://huggingface.co/spaces/drguilhermeapolinario/Flamengo](UBS Flamengo)
        </div>
      </div>
    </div>
  );
}

export default PageDois;
