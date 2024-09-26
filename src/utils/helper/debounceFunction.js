let timeout = null;

function debounce(callback, delay) {
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(() => {
    callback();
  }, delay);
}

export default debounce;
