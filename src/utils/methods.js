function debounce(callback, delay) {
  let timeout = null;
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(() => {
    callback();
  }, delay);
}

// Limittext
const limitText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};

module.exports = {
  debounce,
  limitText,
};
