import * as React from "react";
import GlobalStyles from "./styles/global";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => (
  <div className="App">
    <GlobalStyles />
    <SignIn />
    <SignUp />
  </div>
);

export default App;
