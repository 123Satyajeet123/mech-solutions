import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import ImageSlider from "../components/ImageSlider";
import { SLiderData } from '@/components/SLiderData';
export default function Home() {
  return (
    <>
      <Navbar />

      <ImageSlider slides={SLiderData}/>

      <div className={styles.intro}>
        <h2>Sometimes, it’s what you don’t see that makes all the difference.</h2>
        <div className={styles.introp}>
          <p >We are a team of engineers who collaborate with clients and the design team to consistently provide the best integrated design solutions.
            We provide design, consulting and inspection services to property owners, property managers, tenants and developers for institutional, commercial, and residential projects, primarily in the metropolitan area. We are knowledgeable in the latest industry trends, standards, technologies, and codes requirements.
            We provide a holistic design view and evaluate each project and its unique requirements, goals, and challenges, at the initial design phase. Our holistic design approach brings critical decision making to the forefront, engaging the client and entire design team in making decisions to align expectations, improved design and coordination efficiencies while maintaining budget forecasts.
            We provide superior client service through honest discussions of the design and construction processes. Our clients have access to the partners and the engineers, each experts in a particular field, and also knowledgeable in all disciplines to best respond to any query.</p>
        </div>
      </div>
      <section>
        <h2 style={{ fontSize: "3rem",marginBottom:"40px", fontWeight: "bold" }}><u>OUR TEAM</u></h2>
        <div className={styles.team}>

          <div className={styles.member}>
            <Image src="/team1.png" width={150} height={150}
              alt="member 1" />
            <h2>Kappua</h2>
            <p style={{ fontSize: "15px" }}>Skilled Web developer</p>
          </div>
          <div className={styles.member}>
            <Image src="/team2.png" width={150} height={150}
              alt="member 2" />
            <h2>Atul</h2>
            <p style={{ fontSize: "15px" }}>Expert in MATLAB</p>
          </div>
          <div className={styles.member}>
            <Image src="/team3.png" width={150} height={150}
              alt="member 3" /><h2>Manish</h2>
            <p style={{ fontSize: "15px" }}>Specialized in CAD softwares</p>
          </div>
          <div className={styles.member}>
            <Image src="/team4.png" width={150} height={150}
              alt="member 4" /><h2>Sam</h2>
            <p style={{ fontSize: "15px" }}>Expert at handling CNC machines</p>
          </div>
        </div>

      </section>
    </>
  )
}
