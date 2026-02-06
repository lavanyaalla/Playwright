const globalParams = (() => {
  const store = {};

  return {
    set(key, value) {
      store[key] = value; // ✅ no type restriction
    },

    get(key) {
      return store[key];
    },

    reset() {
      for (const key in store) {
        delete store[key];
      }
    }
  };
})();

module.exports = globalParams;
