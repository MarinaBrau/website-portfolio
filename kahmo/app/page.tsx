import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import SocialMedia from "@/components/SocialMedia";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <SocialMedia />
      <ContactForm />
      <Footer />
      <FloatingButton />
    </main>
  );
}
