import { numberInFullConverter } from '../../node_modules/number-in-full-multilang/index.js';

window.addEventListener('load', () => {
  const inputNumber = document.querySelector('#inputNumber');
  const inputText = document.querySelector('#inputText');
  const button = document.querySelector('#button');
  const selectList = document.querySelector('.selectClass');

  // Inicializar select do Materialize
  const instances = M.FormSelect.init(selectList);

  // Chama handleEnterKey a partir de evento ocorrido em qualquer componente
  document.addEventListener('keydown', handleEnterKey);

  button.addEventListener('click', handleClick);

  // Dispara click com a tecla Enter
  function handleEnterKey(event) {
    if (event.key == 'Enter') {
      document.querySelector('#button').click();
    }
  }

  function handleClick() {
    const numberValue = inputNumber.value;
    const language = selectList.value;
    const languageCode = language == 1 ? 'en' : language == 2 ? 'pt' : 'es';
    inputText.value = numberInFullConverter(numberValue, languageCode);
  }
});
