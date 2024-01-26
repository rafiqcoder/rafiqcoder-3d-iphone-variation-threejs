import { ColorContextProvider } from "./context/ColorContext";
import PricingSection from "./sections/PricingSection";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ColorContextProvider>
        <PricingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
