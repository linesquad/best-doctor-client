import TrendDisplay from "../components/trend/TrendDisplay";
import { Helmet } from "react-helmet-async";

function Trend() {
  return (
    <>
      <Helmet>
        <title>Trend</title>
        <meta
          name="description"
          content="This is the Trend of my website."
        />
        <link rel="canonical" href="https://www.mywebsite.com/trend" />
      </Helmet>
      <div>
        <TrendDisplay />
      </div>
    </>
  );
}

export default Trend;
