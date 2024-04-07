import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { routingElements } from "./routes/route";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/* Main layout */}
        <main style={{ marginTop: 58 }}>
          <div className="content-container">
          <Routes>
            {routingElements.map((item) => {
              return (
                <Route key={item.id} path={item.path} element={item.element} />
              );
            })}
          </Routes>
          </div>
        </main>
        {/* Main layout */}
      </div>
    </Router>
  );
}

export default App;
