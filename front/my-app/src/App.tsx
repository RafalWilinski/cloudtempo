import { CloudTempo } from "./components/SearchBar";

interface HomeProps {
  isDemo?: boolean;
}

const Home = ({ isDemo }: HomeProps) => {
  return (
    <div>
      <main>
        <CloudTempo isDemo={isDemo} />
      </main>
    </div>
  );
};

export default Home;
