// src/pages/PageUm.jsx
import React from 'react'
import { FaCapsules, FaInfoCircle, FaListAlt, FaTimesCircle } from 'react-icons/fa'

export function PageUm() {
  return (
    <div className="space-y-6 p-6 ">
      <header className="flex items-center gap-3">
        <FaCapsules className="text-blue-600" size={22} />
        <h2 className="text-lg text-shadow-sm font-semibold text-gray-900">
          Noripurum (sacarato de hidróxido férrico) — Guia Rápido
        </h2>
      </header>

      {/* 1. Via oral é 1ª linha */}
      <section className="rounded-lg border border-stone-200  bg-sky-50 shadow-lg p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaInfoCircle className="text-blue-600" />
          <h3 className="text-base text-shadow-sm font-semibold">1. Ferro oral é primeira linha</h3>
        </div>
        <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Sulfato ferroso</strong> 100–200 mg de ferro elementar/dia, por <strong>3–6 meses</strong>.</li>
          <li>Expectativa: ↑ Hb <strong>1–2 g/dL</strong> em 2–4 semanas.</li>
          <li><strong>Otimização:</strong> dose adequada, adesão, tomar em jejum/+vitamina C, evitar laticínios/antiácidos/quelantes, manejar efeitos GI.</li>
        </ul>
      </section>

      {/* 2. Quando indicar EV */}
      <section className="rounded-lg border border-stone-200 bg-emerald-50 shadow-lg p-4">
        <div className="mb-4 flex items-center gap-2">
          <FaListAlt className="text-emerald-600" />
          <h3 className="text-base text-shadow-sm font-semibold">2. Quando considerar EV (Noripurum 100 mg/5 mL)</h3>
        </div>
        <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Falha</strong> ou <strong>intolerância</strong> ao ferro oral (após condução otimizada).</li>
          <li><strong>Necessidade de reposição rápida</strong> (p.ex. pré/pós-operatório).</li>
          <li><strong>Doença inflamatória</strong> (IBD etc.) ou estados com hepcidina elevada.</li>
          <li><strong>Pós-bariátrica/malabsorção</strong>.</li>
          <li><strong>DRC em diálise</strong>.</li>
          <li><strong>Gestação</strong>: apenas <strong>2º–3º trimestres</strong>.</li>
        </ul>
      </section>

      {/* 3. Contraindicações */}
      <section className="rounded-lg border border-stone-200 bg-red-50 shadow-lg p-4">
        <div className="mb-4 flex items-center gap-2">
          <FaTimesCircle className="text-red-600" />
          <h3 className="text-base text-shadow-sm font-semibold">3. Contraindicações</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
          <div>
            <p className="font-medium">Absolutas</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>1º trimestre de gestação</li>
              <li>Reação alérgica prévia a ferro EV</li>
              <li>Infecção aguda/bacteremia</li>
              <li>Hemocromatose/hemosiderose</li>
              <li>Anemia não ferropriva</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Relativas</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Asma/dermatite atópica</li>
              <li>DCV grave/DPOC</li>
              <li>Doença autoimune em atividade</li>
              <li>Hepatopatia importante</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageUm;