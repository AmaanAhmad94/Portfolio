import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Certificates from '../components/sections/Certificates';
import Achievements from '../components/sections/Achievements';
import CodingProfiles from '../components/sections/CodingProfiles';
import Contact from '../components/sections/Contact';
import { profile } from '../data/profile';

const Home = () => (
  <>
    <Helmet>
      <title>{profile.name} | {profile.profession}</title>
      <meta name="description" content={profile.shortBio} />
      <meta name="author" content={profile.name} />
      <meta property="og:title" content={`${profile.name} - Portfolio`} />
      <meta property="og:description" content={profile.shortBio} />
      <meta property="og:type" content="website" />
    </Helmet>

    <Hero />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Certificates />
    <Achievements />
    <CodingProfiles />
    <Contact />
  </>
);

export default Home;
