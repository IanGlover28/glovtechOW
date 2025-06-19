import { Contact } from 'lucide-react';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '@/components/About';
import Services from '@/components/Services'
// import ContactForm from '@/components/ContactForm';
import Solutions from '../components/Solutions'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <ContactForm /> */}
        <Solutions />
        {/* Add other sections here */}
        <Footer />
      </main>
    </>
  );
}
