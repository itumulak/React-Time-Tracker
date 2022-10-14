import '../styles/globals.css';
import { Provider } from "react-redux";
import {store, persistent} from "../store/index";
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistent}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  )
}

export default MyApp
