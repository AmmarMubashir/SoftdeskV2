import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Cabinet from "./components/Home/Cabinet";
import Heads from "./components/Home/Heads";

export default function Home() {
  return (
    <>
      <Hero />
      {/* About softdesk */}
      <About />
      {/* Meet the cabinet */}
      <Cabinet />
      {/* Connect with Heads */}
      <Heads />
      {/* Courses */}
    </>
  );
}
