import { Toaster } from "react-hot-toast";
import { CloudTempo } from "./components/SearchBar";

interface HomeProps {
  isDemo?: boolean;
  demoText?: string;
}

const Home = ({ isDemo, demoText }: HomeProps) => {
  return (
    <div>
      <main>
        <CloudTempo isDemo={isDemo} demoInput={demoText} />
      </main>
      <Toaster />
    </div>
  );
};

export default Home;
