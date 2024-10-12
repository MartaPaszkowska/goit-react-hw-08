import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "./src/components/App";
import { store, persistor } from "./src/redux/store";
import "modern-normalize";
import "./src/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<HelmetProvider>
						<App />
					</HelmetProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
