import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/education';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

const Education = () => (
  <section id="education" className="section-padding bg-white dark:bg-[#111827]">
    <div className="container-custom">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Education"
          title="Academic Journey"
          subtitle="My educational background and academic milestones."
        />
      </ScrollReveal>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky to-navy md:-translate-x-1/2" />

        {education.map((item, index) => (
          <ScrollReveal key={item.id} delay={index}>
            <div
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-sky rounded-full border-4 border-white dark:border-[#111827] md:-translate-x-1/2 z-10" />

              <div className="md:w-1/2 pl-12 md:pl-0">
                <Card>
                  <div className="flex items-start gap-3 mb-3">
                    <FaGraduationCap className="text-sky text-2xl mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">{item.degree}</h3>
                      <p className="text-sky font-medium">{item.college}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{item.university}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    {item.years} · {item.location} · CGPA: {item.cgpa}
                  </p>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                        <span className="text-sky">•</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
