import React from 'react';
import { FaNotesMedical, FaFlask, FaExclamationTriangle, FaClinicMedical, FaHospitalAlt } from 'react-icons/fa';
import './PrescriptionForm.css';

function PageTres() {
  return (
    <div className="container">
      <div className="page">
        {/* Título principal com ícone */}
        <h2 className="flex items-center gap-2">
          <FaNotesMedical className="text-blue-600" size={24} />
          4. CRITÉRIOS DE ELEGIBILIDADE
        </h2>

        <div className="section">
          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaFlask className="text-green-600" size={20} />
              4.1 Aspectos Farmacológicos
            </h3>
            <table>
              <tbody>
                <tr>
                  <td><strong>Apresentação</strong></td>
                  <td>Sacarato de Hidróxido Férrico 100mg/5ml</td>
                </tr>
                <tr>
                  <td><strong>Nome Comercial</strong></td>
                  <td>Noripurum®</td>
                </tr>
                <tr>
                  <td><strong>Via de Administração</strong></td>
                  <td>Exclusivamente endovenosa</td>
                </tr>
                <tr>
                  <td><strong>Armazenamento</strong></td>
                  <td>Temperatura ambiente (15-30°C)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="protocol-box">
            <h3 className="flex items-center gap-2">
              <FaClinicMedical className="text-yellow-600" size={20} />
              4.2 Situações com Indicação Específica
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Condição</th>
                  <th>Considerações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Gestação</strong></td>
                  <td>2º e 3º trimestres apenas</td>
                </tr>
                <tr>
                  <td><strong>Doença Renal Crônica</strong></td>
                  <td>Especialmente em pacientes dialíticos</td>
                </tr>
                <tr>
                  <td><strong>Pós-operatório</strong></td>
                  <td>Cirurgias com perdas significativas</td>
                </tr>
                <tr>
                  <td><strong>Doenças Inflamatórias</strong></td>
                  <td>IBD, artrite reumatoide</td>
                </tr>
                <tr>
                  <td><strong>Pós-bariátrica</strong></td>
                  <td>Síndromes malabsortivas</td>
                </tr>
                <tr>
                  <td><strong>Intolerância ao ferro oral</strong></td>
                  <td>Documentada e refratária a ajustes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="important">
            <h3 className="flex items-center gap-2">
              <FaExclamationTriangle className="text-red-600" size={20} />
              4.3 Contraindicações
            </h3>
            <div className="protocol-box">
              <table>
                <thead>
                  <tr>
                    <th>Absolutas</th>
                    <th>Relativas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>Primeiro trimestre de gestação</li>
                        <li>História de reação alérgica ao ferro</li>
                        <li>Infecções agudas/bacteremia</li>
                        <li>Hemocromatose/hemosiderose</li>
                        <li>Anemias não-ferropênicas</li>
                        <li>Hepatopatia grave</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Asma</li>
                        <li>Dermatite atópica</li>
                        <li>DPOC</li>
                        <li>Cardiopatias graves</li>
                        <li>Doenças autoimunes em atividade</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="flex items-center gap-2">
            <FaHospitalAlt className="text-blue-600" size={24} />
            5. NÍVEIS DE ATENDIMENTO
          </h2>

          <div className="highlight-box">
            <h3 className="flex items-center gap-2">
              <FaClinicMedical className="text-green-600" size={20} />
              5.1 Atenção Primária à Saúde (APS)
            </h3>
            <div className="protocol-box">
              <p><strong>Critérios para atendimento:</strong></p>
              <ul>
                <li>Anemia ferropriva sem complicações</li>
                <li>Ausência de comorbidades graves</li>
                <li>Acesso venoso adequado</li>
                <li>Disponibilidade de supervisão médica</li>
              </ul>

              <div className="alert" style={{ marginTop: '15px' }}>
                <p><strong>Requisitos estruturais:</strong></p>
                <ul>
                  <li>Presença de médico durante todo o procedimento</li>
                  <li>Material de emergência disponível</li>
                  <li>Equipe treinada para manejo de reações</li>
                  <li>Capacidade de monitorização adequada</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="important">
            <h3 className="flex items-center gap-2">
              <FaHospitalAlt className="text-yellow-600" size={20} />
              5.2 Unidades de Pronto Atendimento (UPA)
            </h3>
            <p><strong>Indicações para encaminhamento:</strong></p>
            <ul>
              <li>Pacientes com comorbidades graves</li>
              <li>Alto risco de reações adversas</li>
              <li>Necessidade de monitoramento intensivo</li>
              <li>Histórico de reações prévias</li>
              <li>Dificuldade de acesso venoso</li>
              <li>Necessidade de administração em caráter de urgência</li>
            </ul>
          </div>
        </div>

        <div className="page-footer">
          Referencial Técnico: Administração de Ferro Endovenoso - Página 3
        </div>
      </div>
    </div>
  );
}

export default PageTres;