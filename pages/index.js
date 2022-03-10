import Hero from "../components/home/Hero";
import Discover from "../components/home/Discover";
import Details from "../components/home/Details";
import styles from "../styles/Home.module.css";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Discover />
      <Details />
      <Footer />
    </div>
  );
}
