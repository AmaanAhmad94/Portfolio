import { useState, useMemo } from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { certificates } from '../../data/certificates';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import SearchInput from '../ui/SearchInput';
import ScrollReveal from '../animations/ScrollReveal';

const Certificates = () => {
  const [search, setSearch] = useState('');

  const filteredCertificates = useMemo(() => {
    return certificates.filter(
      (cert) =>
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <section id="certificates" className="section-padding bg-white dark:bg-[#111827]">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Certificates"
            title="Certifications & Credentials"
            subtitle="Professional certifications that validate my skills."
          />
        </ScrollReveal>

        <div className="flex justify-center mb-12">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search certificates..."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index}>
              <Card className="p-0 overflow-hidden h-full flex flex-col">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-navy dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sky text-sm font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={cert.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium flex-1 justify-center"
                    >
                      <FaExternalLinkAlt /> View
                    </a>
                    <a
                      href={cert.downloadUrl}
                      download
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky to-navy text-white text-sm font-medium flex-1 justify-center"
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
