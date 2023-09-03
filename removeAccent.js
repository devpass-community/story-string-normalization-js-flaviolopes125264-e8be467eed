function removeAccent(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  // Esse código usa o método normalize com o argumento "NFD", que separa as letras acentuadas em caracteres individuais. Em seguida, a expressão regular /[\u0300-\u036f]/g é usada para remover esses caracteres.

module.exports = removeAccent;
