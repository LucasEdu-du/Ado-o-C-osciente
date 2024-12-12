// Simulação de dados de perfil (substitua por dados reais ou integração com API/backend)
const userProfile = {
    nome: "João Silva",
    email: "joao.silva@example.com",
    localizacao: "São Paulo, SP"
};

// Função para carregar os dados do usuário na tela de perfil
function carregarPerfil() {
    const inputs = document.querySelectorAll('form input');
    inputs[0].value = userProfile.nome;
    inputs[1].value = userProfile.email;
    inputs[2].value = userProfile.localizacao;
}

// Função para salvar os dados do perfil
function salvarPerfil() {
    const inputs = document.querySelectorAll('form input');
    const nome = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const localizacao = inputs[2].value.trim();

    // Validação simples dos campos
    if (!nome || !email || !localizacao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validarEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Atualiza o objeto de perfil (simulando salvar em um backend)
    userProfile.nome = nome;
    userProfile.email = email;
    userProfile.localizacao = localizacao;

    alert("Perfil salvo com sucesso!");
}

// Função para validar o formato do email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Adiciona um botão de salvar ao formulário
function adicionarBotaoSalvar() {
    const form = document.querySelector('form');
    const botaoSalvar = document.createElement('button');
    botaoSalvar.type = "button";
    botaoSalvar.textContent = "Salvar Alterações";
    botaoSalvar.addEventListener('click', salvarPerfil);
    form.appendChild(botaoSalvar);
}

// Inicializa as funcionalidades da tela de perfil
document.addEventListener('DOMContentLoaded', () => {
    carregarPerfil();
    adicionarBotaoSalvar();
});
