# Noripurum: Administração de Sacarato de Hidróxido Férrico

## 📝 Descrição
- Sistema web para consulta de protocolo e cálculo de doses de Sacarato de Hidróxido Férrico (Noripurum), desenvolvido com Vite React JS. 
- Inclui nota técnica completa, calculadora de doses e checklist de segurança.

## 🚀 Funcionalidades

- 📖 **Protocolo Completo**: Documentação técnica detalhada sobre administração de ferro endovenoso
- 🧮 **Calculadora de Doses**: Cálculo automático baseado em peso e hemoglobina do paciente
- ✅ **Checklist de Segurança**: Formulário para verificação de procedimentos
- 📊 **Tabelas de Diluição**: Referência rápida para preparo da medicação


## 🛠️ Tecnologias

- Vite
- React JS

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/gtellapolinario/noripurum-ubs.git

# Entre no diretório
cd noripurum-ubs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🏗️ Estrutura do Projeto

```
noripurum-ubs
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── aplications
│   │       └── CalculadoraNoripurum.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── PageDois.jsx
│   │   ├── PageTres.jsx
│   │   ├── PageUm.jsx
│   │   └── PrescriptionForm.css
│   └── vite-env.d.ts
├── jsconfig.json
└── vite.config.js
```

## 🌍 Deploy

Para fazer deploy em produção:

```bash
# Usando GitHub Pages
npm run deploy

# OU usando servidor local
npm run preview
```

## Como usar:
- Transcorrer das páginas
- Clicar nas setas direita ou esquerda para avançar ou voltar para a próxima página
- Clicar no botão "Home" para voltar para a página inicial

## Calcular a dose de ferro:
- Preencher os campos com os dados necessários
- Clicar no botão "Calcular" para calcular a dose de ferro

---



## 🧪 Referências Técnicas

- Fórmula de Ganzoni para cálculo do déficit de ferro
- Protocolos de diluição e administração baseados em evidências
- Diretrizes de segurança para administração de ferro endovenoso

## ✨ Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👥 Autores

* **Guilherme Apolinário** - [gtellapolinario](https://github.com/gtellapolinario)

---
- *Nota: A dose de ferro é calculada com base nos dados fornecidos e o resultado é exibido na página. Calculadora para uso em adultos.*
- *Atenção aos arredondamentos e aos valores mínimos e máximos de dose de ferro. Uso exclusivo para profissionais de saúde.*

- *O software é de uso responsável e consciente por profissionais de saúde.* 
- *Não substitui a consulta com um médico.*
---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">

<h6 style="text-color: #000">Dr. Guilherme Apolinário</h6>
