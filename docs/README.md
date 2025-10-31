# 🌐 Futuro em Rede

Projeto desenvolvido como parte da disciplina de Desenvolvimento Front-End Para Web, com foco em **HTML**, **CSS**, **JavaScript**  
A aplicação simula o site institucional de uma ONG fictícia voltada à inclusão digital.

---

## 🧩 Sobre o Projeto

A **Futuro em Rede** é uma ONG fictícia que promove **inclusão digital e educação tecnológica** para jovens e adultos de comunidades vulneráveis.  
O site foi construído para representar a presença digital da organização, permitindo que visitantes conheçam os projetos, cadastrem-se como voluntários e realizem doações.

---

## 🗂️ Estrutura do Projeto

```
── futuro-em-rede
   ├── index.html          # Página inicial
   ├── build              # Arquivos minificados para deploy
   ├── assets              # Assets para web
   ├── css
   │   ├── base.css        # Arquivo CSS base (importa todos demais estilos)
   │   ├── components      # Pasta de componentes reutilizáveis
   │   ├── _components.css # Importar componentes
   │   ├── _config.css     # Configuração base de cores
   │   ├── core            # Estilos para atributos gerais HTML
   │   ├── _core.css       # Importar core
   │   ├── page-layout.css # Layout das páginas
   │   └── _utilities.css  # Classes utilitárias
   ├── docs                # Documentação
   ├── img                 # Imagens do projeto
   ├── js                  # JavaScript
   └── pages               # Página de templates usadas para simular SPA
```

---

## ⚙️ Funcionalidades Implementadas

### 🔁 **Single Page Application (SPA)**

- O site utiliza **roteamento com JavaScript puro** para carregar dinamicamente os conteúdos das páginas sem recarregar o navegador.
- As rotas são gerenciadas pelo arquivo `app.js`.

### 🧱 **Templates JavaScript**

- Cada página é carregada como um **template HTML** dentro do contêiner principal da aplicação.
- O sistema permite fácil manutenção e expansão de novas páginas.

### ✏️ **Manipulação do DOM**

- Inserção dinâmica de conteúdo.
- Alteração de seções conforme a rota ativa.
- Feedback visual para ações do usuário (alertas, mensagens de sucesso, etc.).

### ✅ **Validação de Formulários**

- O arquivo `validation.js` verifica o preenchimento correto dos campos (nome, e-mail, telefone, etc.).
- Exibe **mensagens de erro personalizadas** em tempo real.
- Impede o envio de dados inválidos.

---

## 🧠 Tecnologias Utilizadas

| Tecnologia                    | Uso                                            |
| ----------------------------- | ---------------------------------------------- |
| **HTML5**                     | Estrutura das páginas e templates              |
| **CSS3**                      | Estilização e layout responsivo                |
| **JavaScript (Vanilla)**      | Lógica do SPA, manipulação do DOM e validações |
| **Vanilla Masker (opcional)** | Máscaras para formulários                      |

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seuusuario/futuro-em-rede.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd futuro-em-rede
   ```

3. Inicie o [live-server](https://www.npmjs.com/package/live-server) na pasta raiz do projeto

   ```bash
   live-server .
   ```

---

## 🧭 Próximas Melhorias

- Integração com uma API real de cadastro e doações.
- Adição de um painel administrativo.
- Animações e transições suaves entre rotas.
- Acessibilidade e SEO aprimorados.

---

## 👩‍💻 Autor

**Rafael Wrobel**  
Desenvolvedor em formação e entusiasta de programação.

---

## 🫶 Créditos

- Projeto desenvolvido para fins educacionais.

---
