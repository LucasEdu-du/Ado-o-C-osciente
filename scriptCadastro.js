// Selecionar o formulário e os inputs
const form = document.querySelector('.cadastro-container form');
const inputs = document.querySelectorAll('.cadastro-container input');
const messageBox = document.createElement('div');

// Adicionar estilos ao messageBox
messageBox.style.marginTop = '20px';
messageBox.style.textAlign = 'center';
messageBox.style.fontWeight = 'bold';

// Validação do formulário ao enviar
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio do formulário para validação

  let isValid = true;
  let errorMessage = '';

  inputs.forEach((input) => {
    if (input.required && input.value.trim() === '') {
      isValid = false;
      errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#ccc'; // Reseta a borda se o campo estiver preenchido
    }

    // Validação do CPF
    if (input.id === 'cpf') {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
      if (!cpfRegex.test(input.value)) {
        isValid = false;
        errorMessage = 'Por favor, insira um CPF válido no formato XXX.XXX.XXX-XX.';
        input.style.borderColor = 'red';
      }
    }

    // Validação do e-mail
    if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        errorMessage = 'Por favor, insira um e-mail válido.';
        input.style.borderColor = 'red';
      }
    }
  });

  if (isValid) {
    messageBox.textContent = 'Cadastro realizado com sucesso!';
    messageBox.style.color = 'green';
    form.appendChild(messageBox);

    // Reseta o formulário após o envio
    form.reset();

    // Remove mensagens de erro
    inputs.forEach((input) => {
      input.style.borderColor = '#ccc';
    });
  } else {
    messageBox.textContent = errorMessage;
    messageBox.style.color = 'red';
    form.appendChild(messageBox);
  }
});

// Limpar a mensagem ao focar nos campos
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.style.borderColor = '#ccc';
    messageBox.textContent = '';
  });
});
