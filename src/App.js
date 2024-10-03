import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MouseActivityTracker from "./components/common/MouseActivityTracker/MouseActivityTracker";
import ClearOnBrowserClose from "./components/LocalStorage/ClearOnBrowserClose";
import AppRoutes from "./Routes";
import UserContext from "./contexts/UserContext";

function App() {
  const [sharedState, setSharedState] = useState({
    toggleSidebar: false,
    isShowModal: false,
  });

  const handleProductModal = () => {
    setSharedState((prevSharedState) => {
      return { ...prevSharedState, isShowModal: !prevSharedState.isShowModal };
    });
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{
            sharedState,
            setSharedState,
            handleProductModal,
          }}
        >
          <MouseActivityTracker />
          <AppRoutes sharedState={sharedState} setSharedState={setSharedState} />
          <ClearOnBrowserClose />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
