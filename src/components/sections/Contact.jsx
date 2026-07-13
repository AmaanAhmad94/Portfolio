import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contactCards } from '../../data/socials';
import { profile } from '../../data/profile';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Toast from '../ui/Toast';
import ScrollReveal from '../animations/ScrollReveal';
import { getIcon } from '../../utils/iconMap';
import { validateEmail } from '../../utils/formatDate';
import { sendEmail } from '../../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      setToast({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setToast({
        message: 'Failed to send message. Please configure EmailJS or try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast({ message: '', type: 'success' }), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let's Connect"
            subtitle="Feel free to reach out for collaborations, internships, or just a friendly hello."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {contactCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index % 4}>
              <motion.a
                href={card.href}
                target={card.download ? undefined : '_blank'}
                rel={card.download ? undefined : 'noopener noreferrer'}
                download={card.download ? 'Amaan_Ahmad_Resume.pdf' : undefined}
                className="block h-full"
                whileHover={{ y: -4 }}
              >
                <Card className="h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{card.emoji}</span>
                    <FaArrowRight className="text-gray-400 group-hover:text-sky group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{card.label}</p>
                  <p className="font-semibold text-navy dark:text-white truncate">{card.value}</p>
                </Card>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-2 text-center">
              Send a Message
            </h3>
            <p className="text-gray-500 text-center mb-8">
              Or email me directly at {profile.email}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/30 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky/40"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/30 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky/40"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/30 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky/40"
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/30 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky/40 resize-none"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky to-navy text-white font-semibold hover:shadow-lg transition-shadow disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </Card>
        </ScrollReveal>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </section>
  );
};

export default Contact;
