// src/components/aplications/CalculadoraNoripurum.jsx
import React, { useEffect, useRef, useState } from 'react'
import { FcCalculator, FcLikePlaceholder, FcLike, FcDisplay, FcRules, FcHighPriority } from "react-icons/fc";

function parsePtNumber(v) {
  if (v === '' || v === null || v === undefined) return NaN
  return Number(String(v).replace(',', '.'))
}

function CalculadoraNoripurum() {
  const [isOpen, setIsOpen] = useState(false)
  const [peso, setPeso] = useState('')
  const [hbAtual, setHbAtual] = useState('')
  const [hbAlvo, setHbAlvo] = useState(12)
  const [resultado, setResultado] = useState(null)
  const [alerta, setAlerta] = useState('')
  const [mensagemAjuste, setMensagemAjuste] = useState('')

  const firstFieldRef = useRef(null)

  const open = () => setIsOpen(true)
  const close = () => {
    setIsOpen(false)
    reset()
  }

  const reset = () => {
    setPeso('')
    setHbAtual('')
    setHbAlvo(12)
    setResultado(null)
    setAlerta('')
    setMensagemAjuste('')
  }

  // Esc fecha modal e foca primeiro campo ao abrir
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      window.addEventListener('keydown', onKey)
      setTimeout(() => firstFieldRef.current?.focus(), 50)
    }
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const calcularDose = () => {
    const p = parsePtNumber(peso)
    const hba = parsePtNumber(hbAtual)
    const hbt = Number(hbAlvo)

    if (!isFinite(p) || !isFinite(hba) || !isFinite(hbt)) {
      setAlerta('Por favor, preencha todos os campos com valores válidos.')
      setResultado(null)
      return
    }
    if (p <= 0 || hba <= 0 || hbt <= 0) {
      setAlerta('Os valores devem ser maiores que zero.')
      setResultado(null)
      return
    }

    const reservaFerro = p < 35 ? Math.round(p * 15) : 500
    const dhb = hbt - hba
    const deficitTotal = Math.round(p * dhb * 2.4 + reservaFerro)

    // Esquema 200 mg 2x/semana (terça/sexta) até completar
    const numDoses = Math.ceil(deficitTotal / 200)
    const dosesPorSemana = Math.min(2, numDoses)
    const numSemanas = Math.ceil(numDoses / dosesPorSemana)

    const esquemaAdministracao = []
    let ferroRestante = deficitTotal
    let ajusteRealizado = false

    for (let semana = 1; semana <= numSemanas; semana++) {
      let doseTerca = Math.min(200, ferroRestante)
      ferroRestante -= doseTerca

      let doseSexta = Math.min(200, ferroRestante)
      ferroRestante -= doseSexta

      // Evitar fração de ampola residual < 100 mg
      if (ferroRestante > 0 && ferroRestante <= 100) {
        ajusteRealizado = true
        doseSexta = Math.max(doseSexta, 100)
        ferroRestante = 0
      }

      esquemaAdministracao.push({
        semana: `Semana ${semana}`,
        terca: doseTerca > 0 ? `${doseTerca} mg (${Math.ceil(doseTerca / 100)} amp.)` : '-',
        sexta: doseSexta > 0 ? `${doseSexta} mg (${Math.ceil(doseSexta / 100)} amp.)` : '-',
        totalSemanal: `${Math.max(doseTerca, 0) + Math.max(doseSexta, 0)} mg`,
      })
    }

    setResultado({
      reservaFerro,
      deficitTotal,
      numAmpolas: Math.ceil(deficitTotal / 100),
      esquemaAdministracao,
    })

    setMensagemAjuste(
      ajusteRealizado
        ? 'A última dose foi arredondada para 100 mg para evitar frações de ampolas.'
        : ''
    )
    setAlerta('')
  }

  return (
    <>
      {/* Botão que abre o modal */}
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center rounded-xl bg-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 px-4 py-3 text-sm font-semibold text-white text-shadow-sm shadow-md active:bg-blue-800"
      >
        Calculadora Noripurum
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={close}
          />

          {/* painel */}
          <div
            role="dialog"
            aria-modal="true"
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-stone-200 bg-white shadow-2xl"
          >
            {/* cabeçalho */}
            <div className="flex items-center gap-3 justify-center border-b border-stone-200 px-4 py-3">
              <FcCalculator className="text-2xl" />
              <h3 className="text-base font-semibold text-gray-900">
                Calculadora Sacarato de hidróxido férrico EV (Noripurum) - Informe os parâmetros
              </h3>
              <button
                onClick={close}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                aria-label="Fechar"
                title="Fechar (Esc)"
              >
                ✕
              </button>
            </div>

            {/* conteúdo */}
            <div className="max-h-[75vh] overflow-y-auto px-4 py-4">
              <div className="space-y-4">
                {/* Campos */}
                <div className=" rounded-lg border border-stone-200 bg-sky-50 px-20 py-6 shadow-lg">
                  <div className="py-6 px-16 shadow-xl rounded-xl flex flex-col">

                    {/* Peso */}
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <FcDisplay className="text-xl" />
                      <label htmlFor="peso" className="sm:w-56 text-sm font-medium text-gray-700">
                        Peso do paciente (kg): <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="peso"
                        ref={firstFieldRef}
                        type="number"
                        inputMode="decimal"
                        step="0.1"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Ex: 70"
                        className="w-28 h-8 bg-white rounded-md border border-stone-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Hb atual */}
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <FcLikePlaceholder className="text-xl" />
                      <label htmlFor="hbAtual" className="sm:w-56 text-sm font-medium text-gray-700">
                        Hb atual (g/dL)
                      </label>
                      <input
                        id="hbAtual"
                        type="number"
                        inputMode="decimal"
                        step="0.1"
                        value={hbAtual}
                        onChange={(e) => setHbAtual(e.target.value)}
                        placeholder="Ex: 10.5"
                        className="w-28 h-8 rounded-md border bg-white border-stone-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Hb alvo */}
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <FcLike className="text-xl" />
                      <label htmlFor="hbAlvo" className="sm:w-56 text-sm font-medium text-gray-700">
                        Hb alvo (g/dL)
                      </label>
                      <select
                        id="hbAlvo"
                        value={hbAlvo}
                        onChange={(e) => setHbAlvo(Number(e.target.value))}
                        className="w-42 h-8 rounded-md border border-stone-300 bg-white px-3 py- text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={12}>12 g/dL (Mulheres)</option>
                        <option value={13}>13 g/dL (Homens)</option>
                        <option value={14}>14 g/dL</option>
                        <option value={15}>15 g/dL</option>
                      </select>
                    </div>
                  </div>

                    {/* botão calcular */}
                    <div className="mt-8 flex justify-center">
                      <button
                        type="button"
                        onClick={calcularDose}
                        className="w-28 rounded-md bg-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow active:bg-blue-800"
                      >
                        Calcular dose
                      </button>
                    </div>
                  
                </div>

                {/* alerta de validação */}
                {alerta && (
                  <div
                    role="alert"
                    className="flex gap-3 justify-center rounded-md shadow-md border border-red-200 bg-red-50 p-3 text-sm text-red-800"
                  >
                    <FcHighPriority className="text-xl" />
                    {alerta}
                  </div>
                )}

                {/* resultados */}
                {resultado && (
                  <div className="rounded-lg border border-stone-200 bg-white p-4 shadow">
                    <div className="flex item-center justify-center gap-3 mb-6">
                    <FcRules className="text-xl" />
                    <h4 className="text-base font-semibold text-gray-900">Resultados do cálculo</h4>
                </div>
                    <div className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-800 sm:grid-cols-3 p-4 rounded-xl shadow-lg">
                      <p>
                        <span className="font-medium">Déficit total:</span>{' '}
                        {resultado.deficitTotal} mg
                      </p>
                      <p>
                        <span className="font-medium">Ampolas (100 mg):</span>{' '}
                        {resultado.numAmpolas}
                      </p>
                      <p>
                        <span className="font-medium">Reserva de ferro:</span>{' '}
                        {resultado.reservaFerro} mg
                      </p>
                    </div>

                    {mensagemAjuste && (
                      <div
                        role="alert"
                        className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"
                      >
                        {mensagemAjuste}
                      </div>
                    )}

                    <hr className="my-4 border-stone-200" />

                    <h5 className="text-sm font-semibold text-gray-900">Esquema de administração</h5>
                      <div className="mt-6 overflow-x-auto bg-white shadow-xl rounded-xl border border-gray-100">
                        <table className="w-full text-left text-sm text-gray-800">
                          <thead>
                            <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                              <th className="py-4 px-6 font-semibold text-gray-700 text-center">
                                Semana
                              </th>
                              <th className="py-4 px-6 font-semibold text-gray-700 text-center">
                                Terça-feira
                              </th>
                              <th className="py-4 px-6 font-semibold text-gray-700 text-center">
                                Sexta-feira
                              </th>
                              <th className="py-4 px-6 font-semibold text-gray-700 text-center">
                                Total Semanal
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {resultado.esquemaAdministracao.map((row, index) => (
                              <tr 
                                key={row.semana}
                                className={`hover:bg-blue-25 transition-colors duration-150 ${
                                  index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                                }`}
                              >
                                <td className="py-4 px-6 text-center font-medium text-blue-700">
                                  {row.semana}
                                </td>
                                <td className="py-4 px-6 text-center text-gray-800">
                                  {row.terca}
                                </td>
                                <td className="py-4 px-6 text-center text-gray-800">
                                  {row.sexta}
                                </td>
                                <td className="py-4 px-6 text-center font-medium text-gray-900">
                                  {row.totalSemanal}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                    <hr className="my-4 border-stone-200" />

                    <div className="rounded-md border border-sky-200 bg-sky-50 p-3 text-sm text-sky-900">
                      <p>
                        <strong>Importante:</strong> administrar exclusivamente em SF 0,9%, com
                        tempo <em>mínimo</em> de ~15 minutos por 100 mg (ajustar conforme a dose).
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* rodapé */}
            <div className="flex items-center justify-end gap-3 border-t border-stone-200 px-4 py-3">
              <button
                onClick={close}
                className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CalculadoraNoripurum
