// src/pages/PageDois.jsx
import React from 'react'
import { FaSyringe, FaClock, FaClipboardList } from 'react-icons/fa'

export function PageDois() {
  return (
    <div className="space-y-6 p-6">
      <header className="flex items-center gap-3">
        <FaSyringe className="text-blue-600" size={22} />
        <h2 className="text-lg text-shadow-sm font-semibold text-gray-900">
          Cálculo de dose, diluição e preparo de infusão
        </h2>
      </header>

      {/* 4. Dose — Ganzoni */}
      <section className="rounded-lg border border-stone-200 bg-sky-50 shadow-lg p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaSyringe className="text-blue-600" />
          <h3 className="text-base text-shadow-sm font-semibold">
            4. Dose — fórmula de Ganzoni (prático)
          </h3>
        </div>
        <pre className="overflow-auto rounded-md bg-white p-3 text-sm text-gray-800">
{`Déficit (mg) = Peso(kg) × [Hb alvo – Hb atual] × 2,4 + 500–1000 (estoque)
Hb alvo: 12 g/dL (mulheres) | 13 g/dL (homens)`}
        </pre>
        <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Atalho:</strong> 200 mg EV 1–2×/semana até completar a dose total.</li>
          <li>Para ≥ <strong>300 mg</strong> no mesmo dia, fracionar e alongar a infusão.</li>
        </ul>
      </section>

      {/* 5. Diluição e tempo */}
      <section className="rounded-lg border border-stone-200 bg-emerald-50 shadow-lg p-4">
        <div className="mb-4 flex items-center gap-2">
          <FaClock className="text-emerald-600" />
          <h3 className="text-base text-shadow-sm font-semibold">
            5. Diluição e tempo de infusão (SF 0,9%)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-1">Dose</th>
                <th className="py-1">Diluição</th>
                <th className="py-1">Tempo</th>
                <th className="py-1">Observação</th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-white/50">
              <tr>
                <td className="py-1"><strong>100 mg</strong></td>
                <td>em 100 mL</td>
                <td>≈ 15 min</td>
                <td>Início seguro</td>
              </tr>
              <tr>
                <td className="py-1"><strong>200 mg</strong></td>
                <td>em 200 mL</td>
                <td>≈ 30 min</td>
                <td>Dose usual</td>
              </tr>
              <tr>
                <td className="py-1"><strong>≥ 300 mg</strong></td>
                <td>300–500 mL</td>
                <td>≈ 90–210 min</td>
                <td>Fracionar e monitorar de perto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Checklist pré-infusão */}
      <section className="rounded-lg border border-stone-200 bg-amber-50 shadow-lg p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaClipboardList className="text-amber-600" />
          <h3 className="text-base text-shadow-sm font-semibold">
            6. Checklist antes de iniciar
          </h3>
        </div>
        <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
          <li>Médico presente; acesso venoso adequado; TCLE assinado.</li>
          <li>Kit de emergência: adrenalina, anti-histamínico, corticoide, O₂, SF.</li>
          <li>Sinais vitais basais e plano de monitorização definido.</li>
        </ul>
      </section>
    </div>
  )
}

export default PageDois
