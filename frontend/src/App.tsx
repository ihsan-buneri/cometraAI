import { BrowserRouter, Routes, Route } from "react-router";

import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/chat' element={<Chat />} />

			{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default App;
