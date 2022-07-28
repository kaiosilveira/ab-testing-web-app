import { createContext, useCallback, useContext, useReducer } from 'react';

export const DATA_LAYER = { events: [] };
export const DataLayerStoreContext = createContext({ events: [] });
export const DataLayerDispatchContext = createContext({ fireEvent: () => {} });

const dataLayerReducer = (state, action = {}) => {
  switch (action.type) {
    case 'NEW_EVENT':
      return { ...state, events: [...state.events, action.payload] };
    default:
      return state;
  }
};

export const DataLayerProvider = ({ children }) => {
  const [store, dispatch] = useReducer(dataLayerReducer, { events: [] });
  const fireEvent = useCallback(event => dispatch({ type: 'NEW_EVENT', payload: event }), []);
  return (
    <DataLayerStoreContext.Provider value={store}>
      <DataLayerDispatchContext.Provider value={{ fireEvent }}>
        {children}
      </DataLayerDispatchContext.Provider>
    </DataLayerStoreContext.Provider>
  );
};

export const useDataLayer = () => {
  return useContext(DataLayerStoreContext);
};
