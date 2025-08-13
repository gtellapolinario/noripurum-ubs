// src/pages/PageTres.jsx
import React from 'react'
import { FaHeartbeat, FaExclamationTriangle, FaClipboardList } from 'react-icons/fa'

export function PageTres() {
  return (
    <div className="space-y-6 p-6">
      <header className="flex items-center gap-3">
        <FaHeartbeat className="text-rose-600" size={22} />
        <h2 className="text-lg text-shadow-sm font-semibold text-gray-900">
          Reações, anafilaxia e monitorização
        </h2>
      </header>

      {/* 7. Reações adversas */}
      <section className="rounded-lg border border-stone-200 bg-rose-50 shadow-lg p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaHeartbeat className="text-rose-600" />
          <h3 className="text-base text-shadow-sm font-semibold">
            7. Reações adversas — reconhecimento rápido
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-1">Gravidade</th>
                <th className="py-1">Exemplos</th>
                <th className="py-1">Conduta</th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-white/50">
              <tr>
                <td className="py-1"><strong>Leve</strong></td>
                <td>Rubor, prurido, náusea leve</td>
                <td>Reduzir velocidade; observar SV</td>
              </tr>
              <tr>
                <td className="py-1"><strong>Moderada</strong></td>
                <td>Urticária, dor torácica/dispneia leve, hipotensão leve</td>
                <td>Interromper; anti-histamínico; considerar corticoide</td>
              </tr>
              <tr>
                <td className="py-1"><strong>Grave</strong></td>
                <td>Hipotensão grave, broncoespasmo, edema de glote, síncope</td>
                <td>Interromper; suporte avançado; adrenalina imediata</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Anafilaxia */}
      <section className="rounded-lg border border-stone-200 bg-red-50 shadow-lg p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaExclamationTriangle className="text-red-600" />
          <h3 className="text-base text-shadow-sm font-semibold">
            8. Anafilaxia — prioridade absoluta
          </h3>
        </div>
        <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Adrenalina IM 1:1000</strong> 0,3–0,5 mg (deltoide); repetir a cada 5–15 min se necessário.</li>
          <li>Oxigênio; expansão com SF 0,9%; broncodilatador se broncoespasmo.</li>
          <li>Anti-histamínico e corticoide <em>após</em> adrenalina; acionar suporte avançado.</li>
        </ul>
      </section>

      {/* 9. Monitorização & documentação */}
      <section className="rounded-lg border border-stone-200 bg-sky-50 shadow-lg p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaClipboardList className="text-blue-600" />
          <h3 className="text-base text-shadow-sm font-semibold">
            9. Monitorização & documentação
          </h3>
        </div>
        <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Sinais vitais:</strong> basal → a cada 15 min durante → 30 min após.</li>
          <li><strong>Registrar:</strong> dose, diluição, tempo, reações e condutas; assinaturas.</li>
          <li><strong>Follow-up:</strong> hemograma e ferritina em 2–4 semanas; ajustar plano.</li>
        </ul>
      </section>
    </div>
  )
}

export default PageTres