import AdSection from "../components/AdSection";
import RouteDisplay from "../components/RouteDisplay";

function HomePage() {
  return (
    <>
      <AdSection />
      <div className="px-4 py-8 bg-black">
        <RouteDisplay />
      </div>
    </>
  );
}

export default HomePage;