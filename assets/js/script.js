/* ===== FUNCIONALIDADES PRINCIPAIS DO SITE ===== */

// Aguarda o carregamento completo do DOM antes de executar o JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona elementos do menu mobile
    const menuBtn = document.querySelector('.menu-btn');        // Botão hambúrguer
    const navLinks = document.querySelector('.nav-links');      // Lista de links do menu
    const body = document.body;                                // Elemento body para controle de scroll

    // Adiciona evento de clique ao botão do menu mobile
    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');     // Alterna a classe 'open' para mostrar/esconder o menu
        body.classList.toggle('menu-open');    // Adiciona classe para prevenir scroll quando menu está aberto
    });

    // Fecha o menu ao clicar em um link de navegação
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');     // Remove a classe 'open' para fechar o menu
            body.classList.remove('menu-open');    // Remove a classe que previne scroll
        });
    });
});

// ===== SISTEMA DE ABAS DOS PROJETOS =====
// Permite alternar entre "Projetos em Código" e "Sites em WordPress"

// Seleciona todos os botões de aba e conteúdos
const tabBtns = document.querySelectorAll('.tab-btn');           // Botões das abas
const tabContents = document.querySelectorAll('.tab-content');    // Conteúdos das abas

// Adiciona evento de clique a cada botão de aba
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');  // Pega o ID do conteúdo alvo

        // Remove a classe 'active' de todos os botões e conteúdos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado e ao conteúdo correspondente
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// ===== ATUALIZAÇÃO AUTOMÁTICA DO ANO NO COPYRIGHT =====
// Atualiza dinamicamente o ano no rodapé do site
document.getElementById('current-year').textContent = new Date().getFullYear();

// ===== INTERATIVIDADE DOS CARDS DE CONTATO =====
// Adiciona efeitos visuais aos cards de contato para melhorar a experiência do usuário
document.querySelectorAll('.contact-box').forEach(box => {
    // Adiciona classe 'active' quando o card recebe foco (navegação por teclado)
    box.addEventListener('focus', () => box.classList.add('active'));
    
    // Remove classe 'active' quando o card perde foco
    box.addEventListener('blur', () => box.classList.remove('active'));
    
    // Adiciona classe 'active' quando o mouse entra no card
    box.addEventListener('mouseenter', () => box.classList.add('active'));
    
    // Remove classe 'active' quando o mouse sai do card
    box.addEventListener('mouseleave', () => box.classList.remove('active'));
    
    // Permite ativar o link com Enter ou Espaço (acessibilidade)
    box.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            box.querySelector('a').click();  // Simula clique no link
        }
    });
});