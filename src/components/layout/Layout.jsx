import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import CustomCursor from './CustomCursor';
import ParticleBackground from './ParticleBackground';

const Layout = ({ children, isDark, toggleDarkMode }) => (
  <div className="relative min-h-screen">
    <ScrollProgress />
    <CustomCursor />
    <ParticleBackground />
    <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
    <main className="relative z-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
