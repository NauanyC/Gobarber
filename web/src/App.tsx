import * as React from "react";
import GlobalStyles from "./styles/global";
import SignIn from "./pages/SignIn";

const App: React.FC = () => (
  <div className="App">
    <GlobalStyles />
    <SignIn />
  </div>
);

export default App;
