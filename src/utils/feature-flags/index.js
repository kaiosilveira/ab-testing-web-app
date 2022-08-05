import { createContext, useContext, useReducer, useCallback } from 'react';

const SET_FLAGS = 'SET_FLAGS';
const OVERRIDE_FLAG = 'OVERRIDE_FLAG';

export const FeatureFlagsStoreContext = createContext({ value: [] });
export const FeatureFlagsDispatchContext = createContext({
  setFlags: () => {},
  overrideFlag: () => {},
});

const updateFeatureFlagsPreservingOverridesOperator = (state, action) => {
  const [currentValue, newValue] = [state.value, action.payload];
  const overwrittenFeatureFlags = currentValue.filter(ff => ff.wasOverwritten);
  if (overwrittenFeatureFlags.length === 0) return newValue;
  return overwrittenFeatureFlags.concat(
    newValue.filter(ff => !overwrittenFeatureFlags.map(flag => flag.key).includes(ff.key))
  );
};

const overrideFeatureFlagOperator = (state, action) => {
  const { key, variant } = action.payload;
  return state.value.map(ff => (ff.key !== key ? ff : { ...ff, variant, wasOverwritten: true }));
};

const handleActions = actionHandlerDictionary => (state, action) => {
  const handler = actionHandlerDictionary[action.type];
  if (typeof handler !== 'function') return state;
  return handler(state, action);
};

const updateStateWith = overrideMap => (state, action) => {
  return Object.assign(
    {},
    state,
    ...Object.keys(overrideMap).map(key => ({ [key]: overrideMap[key](state, action) }))
  );
};

export const featureFlagsReducer = handleActions({
  [OVERRIDE_FLAG]: updateStateWith({ value: overrideFeatureFlagOperator }),
  [SET_FLAGS]: updateStateWith({ value: updateFeatureFlagsPreservingOverridesOperator }),
});

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
