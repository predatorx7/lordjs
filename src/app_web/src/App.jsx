import "./App.css";

import { Providers } from "./lib/providers";
import { AppRouter } from "./lib/navigation/AppRouter";

function App() {
	return <Providers>{() => <AppRouter />}</Providers>;
}

export default App;
