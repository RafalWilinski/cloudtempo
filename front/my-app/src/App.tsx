import { VercelCMDK } from "./components/SearchBar";
interface HomeProps {
  isDemo?: boolean;
}

const Home = ({ isDemo }: HomeProps) => {
  return (
    <div>
      <main>
        <VercelCMDK isDemo={isDemo} />
      </main>
    </div>
  );
};

export default Home;
