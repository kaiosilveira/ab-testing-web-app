import { createContext, useContext, useReducer, useCallback } from 'react';

const SET_FLAGS = 'SET_FLAGS';
const OVERRIDE_FLAG = 'OVERRIDE_FLAG';

export const FeatureFlagsStoreContext = createContext({ value: [] });
export const FeatureFlagsDispatchContext = createContext({
  setFlags: () => {},
  overrideFlag: () => {},
});

export const featureFlagsReducer = (state, action) => {
  switch (action.type) {
    case SET_FLAGS:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const FeatureFlagsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(featureFlagsReducer, { value: [] });

  const setFlags = useCallback(flags => dispatch({ type: SET_FLAGS, payload: flags }), [dispatch]);
  const overrideFlag = useCallback(
    flag => dispatch({ type: OVERRIDE_FLAG, payload: flag }),
    [dispatch]
  );

  return (
    <FeatureFlagsStoreContext.Provider value={state}>
      <FeatureFlagsDispatchContext.Provider value={{ setFlags, overrideFlag }}>
        {children}
      </FeatureFlagsDispatchContext.Provider>
    </FeatureFlagsStoreContext.Provider>
  );
};

export const useFeatureFlagManagement = () => useContext(FeatureFlagsDispatchContext);
export const useFeatureFlags = () => useContext(FeatureFlagsStoreContext).value;
export const useFeatureFlag = key => useFeatureFlags().find(ff => ff.key === key);
