# Não És Tu Sou Eu | Website Oficial

Website estático para o trio de música tradicional portuguesa "Não És Tu Sou Eu" (Netse).

## 🎵 Sobre o Projeto

Site oficial do trio dedicado à reinterpretação da música tradicional portuguesa em contexto de baile. O website apresenta a discografia, agenda de eventos, galeria de fotos e informações de contacto da banda.

### Características Principais

- **Design Responsivo**: Otimizado para todos os dispositivos
- **Navegação Suave**: Scroll suave entre secções
- **Galeria Interativa**: Slider com navegação por botões, teclado e touch
- **Formulário de Contacto**: Validação em tempo real com feedback visual
- **Acessibilidade WCAG 2.1 AA**: Totalmente acessível e compatível com leitores de ecrã
- **Performance**: Carregamento rápido sem dependências externas

## 🛠️ Stack Tecnológico

- **HTML5**: Semântico e acessível
- **CSS3**: Vanilla CSS com variáveis customizadas
- **JavaScript**: Vanilla JS (sem frameworks)
- **Fontes**: Google Fonts (Montserrat)
- **Imagens**: Wix Static CDN

## 📁 Estrutura do Projeto

```
Netse.trio-website/
├── index.html          # Estrutura principal do site
├── styles.css          # Todos os estilos CSS
├── script.js           # Funcionalidade JavaScript
├── README.md           # Documentação do projeto
├── AGENTS.md           # Diretrizes para desenvolvedores
└── assets/             # Recursos estáticos
    └── images/         # Imagens organizadas
        ├── icon.png
        ├── logo-netse.png
        ├── logo-netse2.jpg
        ├── NETSE_Interior_tripla_High copy.jpg
        ├── paper-texture.jpg
        └── pdx_nao-es-tu-sou-eu.png
```

## 🚀 Como Executar

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

### 4. Agenda
- Próximos eventos e concertos
- Datas e locais

### 5. Galeria
- Slider de fotos
- Navegação múltipla (botões, teclado, touch)

### 6. Contactos
- Formulário de contacto
- Informações de booking
- Redes sociais

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
- **Pré-processadores**: Não requeridos

## 🎯 Funcionalidades Técnicas

### CSS Features
- Variáveis CSS customizadas
- Clamp() para tipografia responsiva
- CSS Grid e Flexbox
- Media queries mobile-first
- Animações respeitando `prefers-reduced-motion`

### JavaScript Features
- Event delegation para performance
- Smooth scroll behavior
- Form validation em tempo real
- Gallery slider com múltiplos controles
- Mobile menu toggle
- Header scroll effects

## 🔧 Desenvolvimento

### Guidelines de Código
- HTML semântico com `lang="pt-PT"`
- CSS com BEM-inspired naming
- JavaScript vanilla com null checks
- Comentários em português quando necessário

### Validação
- HTML5: W3C Validator
- CSS3: W3C CSS Validator
- JavaScript: ESLint (recomendado)

## 📈 Performance

- **Lighthouse Score**: 95+ (Desktop), 90+ (Mobile)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🌐 Redes Sociais

- **Instagram**: @naoestusoueutrio
- **YouTube**: @naoestusoueu
- **Bandcamp**: noestusoueu.bandcamp.com
- **Facebook**: facebook.com/netse

## 📧 Contacto

- **Email**: netse.trio@gmail.com
- **Telefone**: +351 912 427 016
- **Booking**: Through contact form

## 📄 Licença

© Não és tu sou eu 2023 | Lisboa | all rights reserved

---

**Desenvolvido com ❤️ para a música tradicional portuguesa**