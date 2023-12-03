import { ERROR_MSG } from '../Constants';

const WinningNumberValidator = {
  isSixNumbers(numbers) {
    if (numbers.length !== CONDITION.NUMBER.COUNT) {
      throw new Error(ERROR_MSG.NUMBER_NOT_SIX);
    }
  },

  isInRange(numbers) {
    numbers.forEach((number) => {
      if (
        number < CONDITION.NUMBER.MIN_RANGE ||
        number > CONDITION.NUMBER.MAX_RANGE
      ) {
        throw new Error(ERROR_MSG.WINNING_NUMBER.NOT_IN_RANGE);
      }
    });
  },

  isDuplicated(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MSG.WINNING_NUMBER.DUPLICATED);
    }
  },
};

export default { WinningNumberValidator };
