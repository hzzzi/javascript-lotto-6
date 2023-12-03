import { ERROR_MSG } from '../Constants';

const BonusNumberValidator = {
  isNothing(input) {
    if (input === '') {
      throw new Error(ERROR_MSG.NOTHING);
    }
  },
  isInRange(input) {
    if (
      input < CONDITION.NUMBER.MIN_RANGE ||
      input > CONDITION.NUMBER.MAX_RANGE
    ) {
      throw new Error(ERROR_MSG.NOT_IN_RANGE);
    }
  },
  IncludedInNumbers(numbers, input) {
    if (numbers.includes(input)) {
      throw new Error(ERROR_MSG.BONUS_NUMBER.DUPLICATED);
    }
  },

  validatePurchasePrice(numbers, input) {
    this.isNothing(input);
    this.isInRange(input);
    this.isincludedInNumbers(numbers, input);
  },
};

export default { BonusNumberValidator };
