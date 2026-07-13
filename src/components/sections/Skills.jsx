import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';
import { getIcon } from '../../utils/iconMap';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container-custom">
      <ScrollReveal>
        <SectionTitle
          eyebrow="Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I use to bring ideas to life."
        />
      </ScrollReveal>

      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <ScrollReveal key={category.id} delay={catIndex}>
            <div>
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">
                {category.title}
              </h3>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={`${category.id}-${skill.name}`} variants={fadeInUp} custom={index}>
                    <Card className="h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-sky/10 text-sky text-xl">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="font-semibold text-navy dark:text-white">{skill.name}</span>
                      </div>
                      <div className="w-full h-2 bg-light-gray dark:bg-navy/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-sky to-navy rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                        />
                      </div>
                      <p className="text-right text-sm text-gray-500 mt-2">{skill.progress}%</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
