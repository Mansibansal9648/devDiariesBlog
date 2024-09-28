import { useContext } from 'react';
import { AppContext } from '../contextApi/context';

export default function useCustomDispatch() {
  const { dispatch } = useContext(AppContext);

  return (type, payload) => {
    dispatch({ type: type, payload: payload });
  };
}
