# Não És Tu Sou Eu | Website Oficial

Website estático para o trio de música tradicional portuguesa "Não És Tu Sou Eu" (Netse).

**🌐 Site Online:** https://www.netse.pt

## 🎵 Sobre o Projeto

Site oficial do trio dedicado à reinterpretação da música tradicional portuguesa em contexto de baile. O website apresenta a discografia, agenda de eventos, galeria de fotos, reportório musical e informações de contacto da banda.

### Características Principais

- **Design Responsivo**: Otimizado para todos os dispositivos
- **Navegação Suave**: Scroll suave entre secções
- **Galeria Interativa**: Slider com navegação por botões, teclado e touch
- **Formulário de Contacto**: Integração com Formspree para envio de emails
- **Página de Reportório**: Lista completa do repertório musical
- **SEO Otimizado**: Meta tags, Schema.org, sitemap.xml
- **Acessibilidade WCAG 2.1 AA**: Totalmente acessível e compatível com leitores de ecrã
- **Performance**: Carregamento rápido sem dependências externas

## 🛠️ Stack Tecnológico

- **HTML5**: Semântico e acessível
- **CSS3**: Vanilla CSS com variáveis customizadas
- **JavaScript**: Vanilla JS (sem frameworks)
- **Fontes**: Google Fonts (Montserrat)
- **Hosting**: GitHub Pages
- **Formulários**: Formspree (https://formspree.io/f/xykdkzkk)
- **Domínio**: www.netse.pt (configurado com DNS e HTTPS)

## 📁 Estrutura do Projeto

```
Netse.trio-website/
├── index.html              # Página principal
├── reportorio.html         # Página de reportório/repertório
├── agenda.html             # Página de agenda completa
├── styles.css              # Todos os estilos CSS
├── script.js               # Funcionalidade JavaScript
├── README.md               # Documentação do projeto
├── AGENTS.md               # Diretrizes para desenvolvedores
├── CNAME                   # Configuração de domínio customizado
├── sitemap.xml             # Sitemap para SEO
├── robots.txt              # Instruções para motores de busca
├── google6d2c5ef30f1580c3.html  # Verificação Google Search Console
└── assets/                 # Recursos estáticos
    └── images/             # Imagens organizadas
        ├── icon.png
        ├── logo-netse.png
        ├── paper-texture.jpg
        ├── pdx_nao-es-tu-sou-eu.png
        ├── sections/       # Títulos das secções
        ├── gallery/        # Fotos da galeria
        ├── icons/          # Ícones de redes sociais
        └── products/       # Imagens de produtos
```

## 🚀 Como Executar Localmente

### Opção 1: Python (Recomendado)
```bash
python3 -m http.server 8000
```

### Opção 2: Node.js
```bash
npx serve .
```

### Opção 3: PHP
```bash
php -S localhost:8000
```

Aceda a `http://localhost:8000` no seu navegador.

## 🎨 Principais Secções

### 1. Hero
- Imagem de destaque da banda
- Navegação direta para secções

### 2. Sobre
- Descrição do projeto musical
- Missão do trio

### 3. Discografia
- Álbum "Ind' agora aqui cheguei"
- Link para Bandcamp

### 4. Reportório
- Página dedicada ao repertório musical
- Viras, Fandangos, Corridinhos e Enleios
- URL: `/reportorio.html`

### 5. Agenda
- Próximos eventos e concertos destacados na página principal
- **Página completa**: `/agenda.html` com todos os eventos
- Eventos organizados em "Próximos" e "Realizados"

### 6. Galeria
- Slider de fotos
- Navegação múltipla (botões, teclado, touch)

### 7. Contactos
- Formulário de contacto integrado com Formspree
- Informações de booking
- Redes sociais

## 🔧 Configuração DNS

O domínio www.netse.pt está configurado com:

- **A Records** (netse.pt → GitHub Pages):
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

- **CNAME** (www → GitHub Pages):
  - www → silentcamxmf-netse.github.io

- **HTTPS**: Enforce HTTPS ativado no GitHub Pages

## ♿ Acessibilidade

O site cumpre os padrões WCAG 2.1 AA:

- ✅ Navegação por teclado completa
- ✅ Contraste de cores adequado
- ✅ Labels descritivos em todos os elementos interativos
- ✅ Suporte para leitores de ecrã
- ✅ Respeito por preferências de movimento reduzido
- ✅ Skip links para navegação rápida

## 📱 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resolução**: 320px - 4K

## 🎯 Funcionalidades Técnicas

### CSS Features
- Variáveis CSS customizadas
- Clamp() para tipografia responsiva
- CSS Grid e Flexbox
- Media queries mobile-first
- Formulários com fundo transparente e linha inferior
- Animações respeitando `prefers-reduced-motion`

### JavaScript Features
- Event delegation para performance
- Smooth scroll behavior
- Form validation em tempo real
- Gallery slider com múltiplos controles
- Mobile menu toggle
- Header scroll effects
- Integração com Formspree API

### SEO
- Meta tags Open Graph e Twitter Cards
- Schema.org JSON-LD (MusicGroup)
- Sitemap.xml
- Robots.txt
- Títulos de secção otimizados

## 🌐 Redes Sociais

- **Instagram**: @naoestusoueutrio
- **YouTube**: @naoestusoueu
- **Bandcamp**: noestusoueu.bandcamp.com
- **Facebook**: facebook.com/netse
- **Spotify**: Disponível na plataforma

## 📧 Contacto

- **Email**: netse.trio@gmail.com
- **Telefone**: +351 912 427 016
- **Formulário**: Disponível em www.netse.pt
- **Dossier técnico**: [Proton Drive](https://drive.proton.me/urls/1JG05H60P4#pmdeTvM4lI8e)

## 📅 Atualizações Recentes

### Fevereiro 2026
- ✅ Adicionada página de agenda completa (`agenda.html`)
- ✅ Atualizados eventos: Folkclorada 2026 (próximo), Salicórnia (realizado)
- ✅ Formulários estilizados com fundo transparente
- ✅ Títulos de secção aumentados 25%
- ✅ Migração completa de Wix para GitHub Pages
- ✅ Configuração de domínio www.netse.pt com DNS

## 🚀 Deployment

O site está hospedado no **GitHub Pages**:
- Repositório: https://github.com/SilentCaMXMF-netse/Netse.trio-website
- URL GitHub: https://silentcamxmf-netse.github.io/Netse.trio-website/
- URL Oficial: https://www.netse.pt

## 📄 Licença

© Não és tu sou eu 2023 | Lisboa | all rights reserved

---

**Desenvolvido com ❤️ para a música tradicional portuguesa**
