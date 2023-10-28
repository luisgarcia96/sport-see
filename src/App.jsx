import SideBar from "./layouts/sideBar/sideBar";
import TopBar from "./layouts/topBar/topBar";
import Dashboard from "./pages/Dashboard";

import "./styles/main.scss";

function App() {
	return (
		<div className="App">
			<TopBar />
			<Dashboard />
			<SideBar />
		</div>
	);
}

export default App;
