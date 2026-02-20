// import CardComponents from "./components/card";
// import { Card2 } from "./components/card2";
// import { Form } from "./components/form";
// import { ModalComponent } from "./components/modal";

// import Login from "./components/login";

// import Dashboard from "./pages/dashboard";

// import UserTable from "./pages/userTable";

import { Card, ConfigProvider, theme } from "antd";
import { useState } from "react";
import Login from "./components/login";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const { defaultAlgorithm, darkAlgorithm } = theme;
	return (
		<ConfigProvider
			theme={{
				algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<Card>
				<button
					style={{
						position: "fixed",
						top: 20,
						right: 20,
						zIndex: 999,
					}}
					onClick={() => setDarkMode(!darkMode)}
				>
					{darkMode ? "Light Mode" : "Dark Mode"}
				</button>

				<Login />
			</Card>
		</ConfigProvider>
	);
};

export default App;
