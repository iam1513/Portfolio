import Contact from "./components/Contact.jsx";
import EmailForm from "./components/EmailForm.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Timeline />
      <Skills />
      <Contact />
      <EmailForm />
      <Analytics />
    </>
  );
}

export default App;
