const enterScreen = document.getElementById("enterScreen");
const music = document.getElementById("bgMusic");

// Tela de entrada
enterScreen.onclick = () => {
  enterScreen.classList.add("fade-out");
  music.play().catch(()=>{});
};

/* SCROLL REVEAL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

/* ===== SISTEMA DE NAVEGAÇÃO (TABS) ===== */
// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Criar menu de navegação flutuante
    const nav = document.createElement('nav');
    nav.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 15px;
        background: rgba(10, 10, 15, 0.9);
        backdrop-filter: blur(10px);
        padding: 12px 24px;
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    
    // Botões de navegação
    const buttons = [
        { id: 'home', name: 'HOME' },
        { id: 'team', name: 'TEAM' },
        { id: 'servers', name: '/DISK OPEN' }
    ];
    
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.name;
        button.style.cssText = `
            background: transparent;
            border: none;
            color: #e8e8e8;
            font-family: 'Inter', 'Segoe UI', sans-serif;
            font-size: 14px;
            font-weight: 500;
            padding: 8px 20px;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 0.5px;
        `;
        
        // Efeito hover
        button.addEventListener('mouseenter', () => {
            button.style.background = 'rgba(255,255,255,0.1)';
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('active')) {
                button.style.background = 'transparent';
            }
            button.style.transform = 'scale(1)';
        });
        
        // Clique para trocar de aba
        button.addEventListener('click', () => {
            // Remover active de todos os botões
            document.querySelectorAll('nav button').forEach(b => {
                b.style.background = 'transparent';
                b.classList.remove('active');
            });
            
            // Ativar botão clicado
            button.style.background = 'rgba(255,255,255,0.15)';
            button.classList.add('active');
            
            // Esconder todas as abas
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Mostrar a aba selecionada
            const activeTab = document.getElementById(btn.id);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
        
        nav.appendChild(button);
    });
    
    // Ativar primeiro botão por padrão (HOME)
    if (nav.children[0]) {
        nav.children[0].style.background = 'rgba(255,255,255,0.15)';
        nav.children[0].classList.add('active');
    }
    
    // Adicionar navegação ao body
    document.body.appendChild(nav);
    
    // Adicionar classe "reveal" para animação de scroll
    document.querySelectorAll('.bio-block, .card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

/* ===== REMOVER TELA DE ENTRADA APÓS CLIQUE ===== */
enterScreen.addEventListener('click', function() {
    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 1000);
});
