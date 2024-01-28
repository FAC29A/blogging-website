function sanitize(unsafe) {
  return unsafe.replace(/</g, "&lt;");
}

function validation(errorMessage) {
  if (errorMessage) {
    return /*html*/ `
          <span>${errorMessage}</span>
          `;
  } else {
    return "";
  }
}

function miao(message) {
  return message + "woooof";
}

module.exports = {
  sanitize,
  validation,
  miao,
};
