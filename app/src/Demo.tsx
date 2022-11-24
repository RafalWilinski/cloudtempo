import { CloudTempo } from "./components/SearchBar";

interface HomeProps {
  isDemo?: boolean;
  demoText?: string;
}

const Home = ({ isDemo, demoText }: HomeProps) => {
  return (
    <main className="main-demo">
      <CloudTempo isDemo={isDemo} demoInput={demoText} />
    </main>
  );
};

export default Home;
