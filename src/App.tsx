import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./router";
import { store } from "./store/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
