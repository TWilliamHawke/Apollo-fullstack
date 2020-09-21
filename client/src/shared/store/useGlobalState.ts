import { useContext } from "react";
import { GlobalStateContext } from "./GlobalState";
import { GlobalStateType } from './reducer'
import { GlobalActionsType } from "./types";

type GlobalStateHookType = {
  dispatch: (action: GlobalActionsType) => void
  state: GlobalStateType
}

export const useGlobalState = (): GlobalStateHookType => {
  const { state, dispatch } = useContext(GlobalStateContext);

  return {
    state, dispatch
  }
}