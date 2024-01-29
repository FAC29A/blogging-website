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

module.exports = {
  sanitize,
  validation,
};
