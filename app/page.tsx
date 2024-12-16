import Header from "../components/header";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
