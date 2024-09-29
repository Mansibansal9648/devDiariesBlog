import strings from '../utils/stringConstant';

export const reducer = (state, action) => {
  switch (action.type) {
    case strings.LOG_IN:
      // console.log("payload",action.payload);
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
