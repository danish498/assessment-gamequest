const helpers = {
  capitalizeFirstLetter(string: string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return "";
    }
  },

  onlyNumber(string: string) {
    if (string) {
      return string.replace(/\D/g, "");
    } else {
      return "";
    }
  },

  capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  },
};

export { helpers as helper };
