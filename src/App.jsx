import { Header } from "./components/Layout/Header";
import { ApprenticeshipsPage } from "./components/Apprenticeships/ApprenticeshipsPage";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div >
      <ApprenticeshipsPage />
      </div>
      
      <Footer />
    </div>
  )
}

export default App;