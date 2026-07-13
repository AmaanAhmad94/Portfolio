import { FaExternalLinkAlt } from 'react-icons/fa';
import { codingProfiles } from '../../data/codingProfiles';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';
import { getIcon } from '../../utils/iconMap';

const CodingProfiles = () => (
  <section id="coding-profiles" className="section-padding bg-white dark:bg-[#111827]">
    <div className="container-custom">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Coding Profiles"
          title="Where I Code"
          subtitle="My profiles across competitive programming and development platforms."
        />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {codingProfiles.map((profile, index) => (
          <ScrollReveal key={profile.id} delay={index}>
            <Card className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-white text-2xl`}
              >
                {getIcon(profile.icon)}
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-1">
                {profile.platform}
              </h3>
              <p className="text-gray-500 mb-4">@{profile.username}</p>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky to-navy text-white text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Open Profile <FaExternalLinkAlt className="text-xs" />
              </a>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
