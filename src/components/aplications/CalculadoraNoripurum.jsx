import React, { useState } from 'react';
import { Modal, Button, Input, Select, Typography, Space, Alert, Divider, Table } from 'antd';

const { Title } = Typography;
const { Option } = Select;

function CalculadoraNoripurum() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [peso, setPeso] = useState('');
  const [hbAtual, setHbAtual] = useState('');
  const [hbAlvo, setHbAlvo] = useState(12);
  const [resultado, setResultado] = useState(null);
  const [alerta, setAlerta] = useState('');
  const [mensagemAjuste, setMensagemAjuste] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetInputs();
  };

  const resetInputs = () => {
    setPeso('');
    setHbAtual('');
    setHbAlvo(12);
    setResultado(null);
    setAlerta('');
    setMensagemAjuste('');
  };

  const calcularDose = () => {
    if (!peso || !hbAtual || !hbAlvo) {
      setAlerta('Por favor, preencha todos os campos!');
      return;
    }
    if (peso <= 0 || hbAtual <= 0 || hbAlvo <= 0) {
      setAlerta('Os valores devem ser maiores que zero!');
      return;
    }

    const reservaFerro = peso < 35 ? Math.round(peso * 15) : 500;
    const dhb = hbAlvo - hbAtual;
    const deficitTotal = Math.round((peso * dhb * 2.4) + reservaFerro);

    const numDoses = Math.ceil(deficitTotal / 200);
    const dosesPorSemana = Math.min(2, numDoses);
    const numSemanas = Math.ceil(numDoses / dosesPorSemana);

    const esquemaAdministracao = [];
    let ferroRestante = deficitTotal;
    let ajusteRealizado = false;

    for (let semana = 1; semana <= numSemanas; semana++) {
      let doseTerca = Math.min(200, ferroRestante);
      ferroRestante -= doseTerca;

      let doseSexta = Math.min(200, ferroRestante);
      ferroRestante -= doseSexta;

      // Ajuste a última dose se for menor que 100 mg
      if (ferroRestante <= 100 && ferroRestante > 0) {
        ajusteRealizado = true;
        doseSexta = 100; // Arredonda para 100 mg (1 ampola)
        ferroRestante = 0;
      }

      esquemaAdministracao.push({
        key: `semana-${semana}`,
        semana: `Semana ${semana}`,
        terca: doseTerca > 0 ? `${doseTerca}mg (${Math.ceil(doseTerca / 100)} ampola${doseTerca === 100 ? '' : 's'})` : '-',
        sexta: doseSexta > 0 ? `${doseSexta}mg (${Math.ceil(doseSexta / 100)} ampola${doseSexta === 100 ? '' : 's'})` : '-',
        totalSemanal: `${doseTerca + doseSexta}mg`,
      });
    }

    setResultado({
      reservaFerro,
      deficitTotal,
      numAmpolas: Math.ceil(deficitTotal / 100),
      esquemaAdministracao,
    });

    if (ajusteRealizado) {
      setMensagemAjuste('A última dose foi arredondada para 100 mg para evitar frações de ampolas.');
    } else {
      setMensagemAjuste('');
    }

    setAlerta('');
  };

  const columns = [
    {
      title: 'Semana',
      dataIndex: 'semana',
      key: 'semana',
    },
    {
      title: 'Terça-feira',
      dataIndex: 'terca',
      key: 'terca',
    },
    {
      title: 'Sexta-feira',
      dataIndex: 'sexta',
      key: 'sexta',
    },
    {
      title: 'Total Semanal',
      dataIndex: 'totalSemanal',
      key: 'totalSemanal',
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Calculadora Noripurum
      </Button>
      <Modal
        title="Calculadora de Dose - Noripurum"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
        centered
      >
        <Space direction="vertical" className="w-full" size="large">
          <Title level={5}>Informe os Parâmetros:</Title>
          <div className="form-group">
            <label>Peso do Paciente (kg):</label>
            <Input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
            />
          </div>
          <div className="form-group">
            <label>Hemoglobina Atual (g/dL):</label>
            <Input
              type="number"
              value={hbAtual}
              onChange={(e) => setHbAtual(e.target.value)}
              placeholder="Ex: 10.5"
            />
          </div>
          <div className="form-group">
            <label>Hemoglobina Alvo (g/dL):</label>
            <Select
              value={hbAlvo}
              onChange={(value) => setHbAlvo(value)}
              className="w-full"
            >
              <Option value={12}>12 g/dL (Mulheres)</Option>
              <Option value={13}>13 g/dL (Homens)</Option>
              <Option value={14}>14 g/dL</Option>
              <Option value={15}>15 g/dL</Option>
            </Select>
          </div>

          <Button type="primary" onClick={calcularDose} className="w-full">
            Calcular Dose
          </Button>

          {alerta && <Alert message={alerta} type="error" showIcon />}

          {resultado && (
            <div className="result-box bg-gray-100 p-4 rounded-lg shadow-lg">
              <Title level={4}>Resultados do Cálculo</Title>
              <p>
                <strong>Déficit Total de Ferro:</strong> {resultado.deficitTotal} mg
              </p>
              <p>
                <strong>Esquema Recomendado:</strong> {resultado.numAmpolas} {resultado.numAmpolas === 1 ? 'ampola' : 'ampolas'} (100 mg cada)
              </p>
              <p>
                <strong>Reserva de Ferro:</strong> {resultado.reservaFerro} mg
              </p>
              {mensagemAjuste && <Alert message={mensagemAjuste} type="warning" showIcon />}
              <Divider />
              <Title level={5}>Esquema de Administração:</Title>
              <Table
                columns={columns}
                dataSource={resultado.esquemaAdministracao}
                pagination={false}
                bordered
                className="bg-white"
              />
              <Divider />
              <Alert
                message="Observação Importante"
                description="A administração deve ser realizada exclusivamente em solução fisiológica 0,9%, com tempo mínimo de 15 minutos por ampola."
                type="info"
                showIcon
              />
            </div>
          )}
        </Space>
      </Modal>
    </>
  );
}

export default CalculadoraNoripurum;
