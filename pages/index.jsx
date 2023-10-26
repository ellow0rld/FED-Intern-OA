import Topsection from "../components/Topsection"
import Navigation from "../components/Navigation"
import Emotion from "../components/emotions"
import Manifesto from "../components/manifesto"
import Test from "../components/test"
import Work from "../components/work"
function Home() {
  return (
    <div>
      <Navigation />
      <Topsection />
      <Emotion />
      <Manifesto />
      <Test />
      <Work />
          </div>
  );
}

export default Home;
