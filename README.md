# Saúde para Todos - Landing Page

Landing Page moderna e responsiva da clínica **Saúde para Todos**, desenvolvida em React + Vite + Tailwind CSS.

---

## 🚀 Como hospedar no Vercel (Plano Hobby - Gratuito)

O projeto já está 100% configurado com o arquivo `vercel.json` e otimizado para o ambiente de produção do Vercel.

### Opção 1: Via GitHub (Recomendado)

1. **Suba o projeto para o seu GitHub:**
   - Crie um novo repositório no seu GitHub (ex: `saude-para-todos`).
   - Faça o commit e push dos arquivos deste projeto para o repositório.

2. **Importe no Vercel:**
   - Acesse [vercel.com](https://vercel.com) e faça login na sua conta (Plano Hobby).
   - Clique em **"Add New..."** > **"Project"**.
   - Selecione o repositório do GitHub que acabou de criar.

3. **Configurações de Build (Automáticas):**
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Clique em **"Deploy"**. Em menos de 1 minuto seu site estará no ar com HTTPS gratuito e domínio `.vercel.app`!

---

### Opção 2: Via Vercel CLI (Direto do Terminal)

Se preferir fazer deploy diretamente pela linha de comando:

```bash
# 1. Instale a CLI da Vercel globalmente
npm i -g vercel

# 2. Faça login
vercel login

# 3. Execute o comando de deploy na raiz do projeto
vercel --prod
```

---

## 🛠️ Comandos Locais

- **Instalar dependências:** `npm install`
- **Executar em desenvolvimento:** `npm run dev`
- **Gerar build de produção:** `npm run build`
- **Visualizar build localmente:** `npm run preview`
