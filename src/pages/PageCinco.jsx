import React from 'react';
import { FaBriefcaseMedical, FaHeartbeat, FaClipboardList, FaClipboardCheck, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import './PrescriptionForm.css';

function PageCinco() {
  return (
    <div className="container">
      <div className="page">
        <div className="section">
          <h2 className="flex items-center gap-2">
            <FaBriefcaseMedical className="text-blue-600" size={24} />
            8. ESTRUTURA E MONITORIZAÇÃO
          </h2>

          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaHeartbeat className="text-green-600" size={20} />
              8.1 Kit de Emergência Obrigatório
            </h3>
            <div className="protocol-box">
              <table>
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Itens Obrigatórios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Medicações</strong></td>
                    <td>
                      <ul>
                        <li>Adrenalina 1:1000</li>
                        <li>Anti-histamínicos EV (Difenidramina)</li>
                        <li>Corticosteroides EV (Hidrocortisona)</li>
                        <li>Broncodilatadores (Salbutamol)</li>
                        <li>Solução Fisiológica 0,9%</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Material para Acesso</strong></td>
                    <td>
                      <ul>
                        <li>Cateteres EV diversos calibres</li>
                        <li>Equipos de soro</li>
                        <li>Garrote</li>
                        <li>Material para fixação</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Via Aérea</strong></td>
                    <td>
                      <ul>
                        <li>Máscara de O2 com reservatório</li>
                        <li>Ressuscitador manual (AMBU)</li>
                        <li>Cânulas de Guedel</li>
                        <li>Fonte de O2</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Monitorização</strong></td>
                    <td>
                      <ul>
                        <li>Esfigmomanômetro</li>
                        <li>Oxímetro de pulso</li>
                        <li>Monitor cardíaco/DEA</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="protocol-box">
            <h3 className="flex items-center gap-2">
              <FaClipboardList className="text-yellow-600" size={20} />
              8.2 Protocolo de Monitorização
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Momento</th>
                  <th>Parâmetros</th>
                  <th>Frequência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pré-infusão</strong></td>
                  <td>
                    <ul>
                      <li>Pressão arterial</li>
                      <li>Frequência cardíaca</li>
                      <li>Saturação O2</li>
                      <li>Temperatura</li>
                    </ul>
                  </td>
                  <td>Basal</td>
                </tr>
                <tr>
                  <td><strong>Durante infusão</strong></td>
                  <td>
                    <ul>
                      <li>Pressão arterial</li>
                      <li>Frequência cardíaca</li>
                      <li>Saturação O2</li>
                      <li>Sinais de reação</li>
                    </ul>
                  </td>
                  <td>A cada 15 minutos</td>
                </tr>
                <tr>
                  <td><strong>Pós-infusão</strong></td>
                  <td>
                    <ul>
                      <li>Sinais vitais completos</li>
                      <li>Avaliação do local de punção</li>
                      <li>Sinais de reação tardia</li>
                    </ul>
                  </td>
                  <td>30 minutos após término</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="important">
            <h3 className="flex items-center gap-2">
              <FaClipboardCheck className="text-green-600" size={20} />
              8.3 Documentação Essencial
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Conteúdo Obrigatório</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Prescrição Médica</strong></td>
                  <td>
                    <ul>
                      <li>Dose total calculada</li>
                      <li>Diluição específica</li>
                      <li>Tempo de infusão</li>
                      <li>Frequência de administração</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>TCLE</strong></td>
                  <td>
                    <ul>
                      <li>Riscos e benefícios</li>
                      <li>Alternativas terapêuticas</li>
                      <li>Assinatura do paciente</li>
                      <li>Assinatura do médico</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Ficha de Monitorização</strong></td>
                  <td>
                    <ul>
                      <li>Registro de sinais vitais</li>
                      <li>Intercorrências</li>
                      <li>Medicações administradas</li>
                      <li>Assinatura dos profissionais</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alert">
            <h3 className="flex items-center gap-2">
              <FaFileAlt className="text-red-600" size={20} />
              8.4 Seguimento Pós-Administração
            </h3>
            <div className="protocol-box">
              <table>
                <thead>
                  <tr>
                    <th>Tipo de Reação</th>
                    <th>Conduta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sem Reações</strong></td>
                    <td>
                      <ul>
                        <li>Alta após período de observação</li>
                        <li>Retorno conforme programação</li>
                        <li>Monitorização laboratorial em 2-4 semanas</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Reação Leve</strong></td>
                    <td>
                      <ul>
                        <li>Considerar pré-medicação nas próximas doses</li>
                        <li>Documentar em prontuário</li>
                        <li>Avaliar redução da velocidade de infusão</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Reação Moderada/Grave</strong></td>
                    <td>
                      <ul>
                        <li>Encaminhar ao alergista</li>
                        <li>Considerar contraindicação formal</li>
                        <li>Notificar evento adverso</li>
                        <li>Buscar alternativas terapêuticas</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="page-footer">
          Referencial Técnico: Administração de Ferro Endovenoso - Página 5 (Final)
        </div>
      </div>
    </div>
  );
}

export default PageCinco;
