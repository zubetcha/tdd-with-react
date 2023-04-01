import OrderPage from "./pages/OrderPage/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";

import "./App.css";

function App() {
  return (
    <div>
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
}

export default App;
