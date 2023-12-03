import { ERROR_MSG } from '../Constants';

const PurchasePriceValidator = {
  isNothing(input) {
    if (input === '') {
      throw new Error(ERROR_MSG.NOTHING);
    }
  },
  isPositive(input) {
    if (Number(input) <= 0) {
      throw new Error(ERROR_MSG.MINUS_NUMBER);
    }
  },
  isDividedByPrice(input) {
    if (input % 1000 !== 0) {
      throw new Error(ERROR_MSG.PURCHASE_PRICE.NOT_DIVIDED_BY_PRICE);
    }
  },

  validatePurchasePrice(input) {
    this.isNothing(input);
    this.isPositive(input);
    this.isDividedByPrice(input);
  },
};

export default { PurchasePriceValidator };
