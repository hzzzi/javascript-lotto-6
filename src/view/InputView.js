import { Console } from '@woowacourse/mission-utils';
import { GAME_MSG, NEW_LINE } from '../Constants';

const InputView = {
  async readPurchasePrice() {
    const input = await Console.readLineAsync(
      GAME_MSG.INPUT.PURCHASE_PRICE + NEW_LINE,
    );
    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync(
      GAME_MSG.INPUT.WINNING_NUMBER + NEW_LINE,
    );
    return input;
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(
      GAME_MSG.INPUT.BONUS_NUMBER + NEW_LINE,
    );
    return input;
  },
};

export default InputView;
