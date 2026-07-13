import { profile } from '../../data/profile';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';
import { useCounter } from '../../hooks/useCounter';

const StatItem = ({ label, value, suffix }) => {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{label}</p>
    </div>
  );
};

const About = () => (
  <section id="about" className="section-padding bg-white dark:bg-[#111827]">
    <div className="container-custom">
      <ScrollReveal>
        <SectionTitle
          eyebrow="About Me"
          title="Crafting Digital Experiences"
          subtitle="A passionate developer focused on building clean, scalable, and user-friendly applications."
        />
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <ScrollReveal delay={1}>
          <Card>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-4">Introduction</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {profile.longBio}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-navy dark:text-sky">Career Goal:</strong>{' '}
              {profile.careerGoal}
            </p>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <Card>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-4">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="p-4 rounded-2xl bg-light-gray dark:bg-navy/40">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{fact.label}</p>
                  <p className="font-semibold text-navy dark:text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <ScrollReveal delay={1}>
          <Card>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-sky/10 text-navy dark:text-sky text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <Card>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-4">Strengths</h3>
            <ul className="space-y-2">
              {profile.strengths.map((strength) => (
                <li
                  key={strength}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 rounded-full bg-sky" />
                  {strength}
                </li>
              ))}
            </ul>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Card className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {profile.stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </Card>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
