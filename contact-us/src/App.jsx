import "./App.css";
import ContactForm from "./çomponent/ContactForm/ContactForm";
import Navigation from "./çomponent/Navigation/Navigation";
import Contactus from "./çomponent/contactheader/contactus";
function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <Contactus />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
