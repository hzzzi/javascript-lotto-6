const NEW_LINE = '\n';

const GAME_MSG = {
  INPUT: {
    PURCHASE_PRICE: '구입금액을 입력해 주세요.',
    WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
  OUTPUT: {
    RESULT: '당첨 통계',
  },
};

const CONDITION = {
  NUMBER: {
    COUNT: 6,
    MIN_RANGE: 1,
    MAX_RANGE: 45,
  },
  PRICE: 1000,
};

const DEFAULT_ERROR = '[ERROR]';

const ERROR_MSG = {
  NOTHING: `${DEFAULT_ERROR} 값을 입력해주세요.`,
  MINUS_NUMBER: `${DEFAULT_ERROR} 1 이상의 수만 입력해주세요.`,
  NUMBER_NOT_SIX: `${DEFAULT_ERROR} 로또 번호는 6개여야 합니다.`,
  NOT_IN_RANGE: `${DEFAULT_ERROR} 1부터 45 사이의 수를 입력해주세요.`,
  PURCHASE_PRICE: {
    NOT_DIVIDED_BY_PRICE: `${DEFAULT_ERROR} ${LOTTO.PRICE}원 단위로 입력해주세요.`,
  },
  WINNING_NUMBER: {
    DUPLICATED: `${DEFAULT_ERROR} 중복된 수를 입력할 수 없습니다.`,
  },
  BONUS_NUMBER: {
    DUPLICATED: `${DEFAULT_ERROR} 당첨 번호와 중복된 수를 입력할 수 없습니다.`,
  },
};

export { NEW_LINE, GAME_MSG, CONDITION, ERROR_MSG };
