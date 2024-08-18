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

  calculateShipping(totalPrice: number): number {
    if (totalPrice > 1000) return 0;
    if (totalPrice > 500) return 20;
    return 30;
  },

  calculateTax(totalPrice: number): number {
    const taxRate = 0.08;
    return totalPrice * taxRate;
  },
};

export { helpers as helper };
