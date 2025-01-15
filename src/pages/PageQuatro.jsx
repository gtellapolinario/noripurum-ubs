import React from 'react';
import { FaSyringe, FaClock, FaHeartbeat, FaExclamationTriangle, FaMedkit } from 'react-icons/fa';
import './PrescriptionForm.css';

function PageQuatro() {
  return (
    <div className="container">
      <div className="page">
        {/* Título principal com ícone */}
        <h2 className="flex items-center gap-2">
          <FaSyringe className="text-blue-600" size={24} />
          6. PROCEDIMENTO DE ADMINISTRAÇÃO
        </h2>

        <div className="section">
          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaClock className="text-green-600" size={20} />
              6.1 Cálculo da Dose
            </h3>
            <div className="protocol-box">
              <p><strong>Fórmula de Ganzoni:</strong></p>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px', margin: '10px 0', fontFamily: 'monospace', fontSize: '16px' }}>
                Déficit de Ferro (mg) = [Peso (kg) × (Hb alvo - Hb atual) × 2,4] + [500-1000mg]
              </div>
              <p><strong>Onde:</strong></p>
              <ul>
                <li>Hb alvo = 12 g/dL (mulheres) ou 13 g/dL (homens)</li>
                <li>500-1000mg = reposição de estoque</li>
              </ul>
            </div>
          </div>

          <div className="protocol-box">
            <h3 className="flex items-center gap-2">
              <FaSyringe className="text-yellow-600" size={20} />
              6.2 Diluição e Tempo de Infusão
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Volume Sacarato</th>
                  <th>Volume SF 0,9%</th>
                  <th>Tempo de Infusão</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5 mL (100mg)</td>
                  <td>100 mL</td>
                  <td>15 minutos</td>
                  <td>Dose teste sugerida</td>
                </tr>
                <tr>
                  <td>10 mL (200mg)</td>
                  <td>200 mL</td>
                  <td>30 minutos</td>
                  <td>Dose máxima diária</td>
                </tr>
                <tr>
                  <td>15 mL (300mg)</td>
                  <td>300 mL</td>
                  <td>90 minutos</td>
                  <td>Fracionamento necessário</td>
                </tr>
                <tr>
                  <td>20 mL (400mg)</td>
                  <td>400 mL</td>
                  <td>150 minutos</td>
                  <td>Fracionamento necessário</td>
                </tr>
                <tr>
                  <td>25 mL (500mg)</td>
                  <td>500 mL</td>
                  <td>210 minutos</td>
                  <td>Dose máxima semanal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h2 className="flex items-center gap-2">
            <FaHeartbeat className="text-red-600" size={24} />
            7. MANEJO DE REAÇÕES ADVERSAS
          </h2>

          <div className="important">
            <h3 className="flex items-center gap-2">
              <FaExclamationTriangle className="text-red-600" size={20} />
              7.1 Classificação das Reações
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Gravidade</th>
                  <th>Manifestações</th>
                  <th>Início</th>
                  <th>Conduta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Leve</strong><br />(5-10%)</td>
                  <td>
                    <ul>
                      <li>Rubor facial transitório</li>
                      <li>Prurido leve</li>
                      <li>Cefaleia</li>
                      <li>Náuseas leves</li>
                    </ul>
                  </td>
                  <td>Durante ou até 1h após infusão</td>
                  <td>
                    <ul>
                      <li>Reduzir velocidade</li>
                      <li>Monitorar sinais vitais</li>
                      <li>Observar evolução</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Moderada</strong><br />(0,5-2%)</td>
                  <td>
                    <ul>
                      <li>Urticária</li>
                      <li>Dor torácica leve</li>
                      <li>Dispneia leve</li>
                      <li>Hipotensão leve</li>
                    </ul>
                  </td>
                  <td>Durante infusão</td>
                  <td>
                    <ul>
                      <li>Interromper infusão</li>
                      <li>Anti-histamínico</li>
                      <li>Corticoide se necessário</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Grave</strong><br />(&lt;0,1%)</td>
                  <td>
                    <ul>
                      <li>Hipotensão grave</li>
                      <li>Broncoespasmo</li>
                      <li>Edema de glote</li>
                      <li>Perda de consciência</li>
                    </ul>
                  </td>
                  <td>Primeiros 15min</td>
                  <td>
                    <ul>
                      <li>Interromper imediatamente</li>
                      <li>Adrenalina imediata</li>
                      <li>Acionar SAMU</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alert">
            <h3 className="flex items-center gap-2">
              <FaMedkit className="text-yellow-600" size={20} />
              7.2 Protocolo de Anafilaxia
            </h3>
            <p><strong>PRIORIDADE: Adrenalina IM 1:1000</strong></p>
            <ul>
              <li>Dose: 0,3-0,5mg IM (deltoide)</li>
              <li>Pode repetir a cada 5-15 minutos</li>
              <li>Não atrasar administração aguardando resposta de outras medicações</li>
            </ul>
          </div>
        </div>

        <div className="page-footer">
          Referencial Técnico: Administração de Ferro Endovenoso - Página 4
        </div>
      </div>
    </div>
  );
}

export default PageQuatro;
