import Footer from "./components/Footer";
import Header from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-primary text-white mt-auto">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
