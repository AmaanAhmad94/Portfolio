import { useState, useMemo } from 'react';
import { achievements, achievementCategories } from '../../data/achievements';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import FilterTabs from '../ui/FilterTabs';
import ScrollReveal from '../animations/ScrollReveal';
import { getIcon } from '../../utils/iconMap';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = useMemo(() => {
    if (activeCategory === 'All') return achievements;
    return achievements.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Achievements"
            title="Milestones & Recognition"
            subtitle="Highlights from hackathons, awards, and academic excellence."
          />
        </ScrollReveal>

        <div className="flex justify-center mb-12">
          <FilterTabs
            options={achievementCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filteredAchievements.map((item, index) => (
            <ScrollReveal key={item.id} delay={index}>
              <Card className="flex gap-4">
                <div className="p-4 rounded-2xl bg-sky/10 text-sky text-2xl h-fit shrink-0">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy dark:text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {item.description}
                  </p>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
