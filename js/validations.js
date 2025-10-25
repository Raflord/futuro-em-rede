const Validation = {
  init() {
    // seleciona formulario
    const form = document.getElementById("formulario");

    // seleciona todos inputs a serem validados
    const nomeInput = document.getElementById("nome-completo");
    const emailInput = document.getElementById("email");
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("tel");
    const nascimentoInput = document.getElementById("nascimento");
    const cepInput = document.getElementById("cep");

    // seleciona elementos com mesagens de erro a serem apresentados em inputs invalidos
    const participanteErro = document.getElementById("erro-participante");
    const nomeErro = document.getElementById("erro-nome");
    const emailErro = document.getElementById("erro-email");
    const cpfErro = document.getElementById("erro-cpf");
    const telErro = document.getElementById("erro-tel");
    const nascimentoErro = document.getElementById("erro-nascimento");
    const cepErro = document.getElementById("erro-cep");

    // aplica mascara de input usando a biblioteca vanilla-masker (https://github.com/vanilla-masker/vanilla-masker)
    VMasker(cpfInput).maskPattern("999.999.999-99");
    VMasker(telInput).maskPattern("(99) 99999-9999");
    VMasker(cepInput).maskPattern("99999-999");

    // utilizado elemento de formulario para verificar se os inputs sao validos
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // variavel auxiliar para verificar se todos os inputs estao corretos
      let validationsCounter = 0;

      const participante = document.querySelector(
        'input[name="participante"]:checked',
      );
      const nomeValue = nomeInput.value.trim();
      const emailValue = emailInput.value.trim();
      const cpfValue = cpfInput.value.trim();
      const telValue = telInput.value.trim();
      const nascimentoValue = nascimentoInput.value;
      const cepValue = cepInput.value.trim();

      // validacoes basicas
      if (!participante) {
        validationsCounter++;
        participanteErro.classList.replace("hidden", "block");
      }

      if (nomeValue.split(" ").length < 2) {
        validationsCounter++;
        nomeErro.classList.replace("hidden", "block");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        validationsCounter++;
        emailErro.classList.replace("hidden", "block");
      }

      if (!this.validarCPF(cpfValue)) {
        validationsCounter++;
        cpfErro.classList.replace("hidden", "block");
      }

      const telRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!telRegex.test(telValue)) {
        validationsCounter++;
        telErro.classList.replace("hidden", "block");
      }

      // idade minima
      const dataNasc = new Date(nascimentoValue);
      const hoje = new Date();
      let idade = hoje.getFullYear() - dataNasc.getFullYear();
      const mes = hoje.getMonth() - dataNasc.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate()))
        idade--;

      if (idade < 18) {
        validationsCounter++;
        nascimentoErro.classList.replace("hidden", "block");
      }

      const cepRegex = /^\d{5}-\d{3}$/;
      if (!cepRegex.test(cepValue)) {
        validationsCounter++;
        cepErro.classList.replace("hidden", "block");
      }

      // alerta ao usuario para verificar campos com mensagens de erro
      if (validationsCounter > 0) {
        console.log(validationsCounter);
        validationsCounter = 0;
        return alert("Preencha todos os campos corretamente.");
      }

      // se passou em tudo remove as mensagens de erro e apresenta um alerto de sucesso
      participanteErro.classList.replace("block", "hidden");
      nomeErro.classList.replace("block", "hidden");
      emailErro.classList.replace("block", "hidden");
      cpfErro.classList.replace("block", "hidden");
      telErro.classList.replace("block", "hidden");
      nascimentoErro.classList.replace("block", "hidden");
      cepErro.classList.replace("block", "hidden");

      alert(`✅ Obrigado por se conectar!
Recebemos seu cadastro com sucesso.
Em breve, nossa equipe entrará em contato com mais informações sobre como participar ou contribuir com nossos projetos.`);

      form.reset();
    });
  },

  // metodo para validacao de CPF
  validarCPF(cpf) {
    var Soma = 0;
    var Resto;

    var strCPF = String(cpf).replace(/[^\d]/g, "");

    if (strCPF.length !== 11) return false;

    if (
      [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
      ].indexOf(strCPF) !== -1
    )
      return false;

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;

    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;

    if (Resto != parseInt(strCPF.substring(10, 11))) return false;

    return true;
  },
};
