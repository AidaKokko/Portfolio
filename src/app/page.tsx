'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Image from 'next/image';
import { 
  MusicalNoteIcon, 
  SparklesIcon, 
  FilmIcon, 
  SunIcon, 
  UserGroupIcon, 
  ArrowPathIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCvClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cvUrl = '/files/Aida Kokko-CV.pdf';
    
    if (isMobile) {
      // For mobile devices, create a direct link with specific attributes
      const link = document.createElement('a');
      link.href = cvUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('type', 'application/pdf');
      link.setAttribute('download', ''); // This helps prevent download prompt
      link.setAttribute('data-inline', 'true');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For desktop, open in new tab
      window.open(cvUrl, '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-56 h-56 mb-8 rounded-full overflow-hidden ring-4 ring-emerald-500 shadow-xl">
              <Image
                src="/images/AidaK.jpg"
                alt="Aida Kokko"
                width={224}
                height={224}
                className="object-cover object-center w-full h-full scale-125"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
              Aida Kokko
            </h1>
            <p className="text-xl text-emerald-400 font-medium mb-4">
              Creative Generalist
            </p>
            <p className="text-lg text-white font-medium mb-4">
              Interested in Operations Administrator | Coordinator | Event Related Roles
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              "Attention to detail is my hallmark."
            </p>
            <div className="flex gap-4">
              <a
                href="/view-cv"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-200 shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/view-cv';
                }}
              >
                View CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">About Me</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Profile
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hello! My name is Aida, and I bring a unique blend of IT expertise and diverse experience to the table as an operations administrator. In today's fast-paced technological landscape, organizations need professionals who not only understand the latest trends but also prioritize integrity and values. I've dedicated myself to continuous upskilling, ensuring that I'm always equipped with the latest tools and methodologies to drive efficiency and innovation. My mission is to leverage my skills and passion for technology to help organizations optimize operations and achieve their goals. If you're looking for a dedicated team member who truly cares about the success of your organization, let's connect and explore how I can contribute to your vision!
            </p>
          </div>
        </div>
      </section>

      {/* Values & Strengths Section */}
      <section id="values" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Values & Strengths</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core Principles
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Honesty',
                  description: 'Committed to truthfulness and integrity in all interactions'
                },
                {
                  title: 'Kindness',
                  description: 'Approaching others with compassion and understanding'
                },
                {
                  title: 'Curiosity',
                  description: 'Continuously seeking knowledge and new experiences'
                },
                {
                  title: 'Appreciation of Beauty & Excellence',
                  description: 'Recognizing and valuing quality in all aspects of life'
                },
                {
                  title: 'Social Intelligence',
                  description: 'Understanding and navigating social situations effectively'
                },
                {
                  title: 'Leadership',
                  description: 'Guiding and inspiring others towards common goals'
                }
              ].map((value) => (
                <div
                  key={value.title}
                  className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500"
                >
                  <div className="text-lg font-semibold leading-6 text-emerald-400">{value.title}</div>
                  <div className="text-sm text-gray-300">{value.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Experience</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Journey
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  title: 'Conference Assistant (Internship)',
                  company: 'Glaston Corporation',
                  companyDesc: 'A global leader in glass processing technology, providing innovative solutions for architectural, automotive, and solar glass industries.',
                  location: 'Tampere, Finland',
                  period: 'Mar 2023 - Jun 2023',
                  description: (
                    <div className="space-y-2">
                      <p>Completed a 4-month internship in a hybrid work environment, gaining valuable industry experience.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Collected manuscripts and PowerPoint presentations from speakers from different countries through the Oxford Abstract platform.</p>
                        <p>• Created the conference cue sheet for six parallel sessions.</p>
                        <p>• Gained access to the event server, ensuring that everything ran smoothly during conference week.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Microsoft Teams, Eventos Event Management Software, Oxford Abstracts Platform, Microsoft Excel, Canva, Outlook for mass mailing</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Operations Administrator',
                  company: 'Al Salam Private School & Nursery',
                  companyDesc: 'A prestigious educational institution in Dubai offering comprehensive education from nursery to secondary levels.',
                  location: 'Dubai, United Arab Emirates',
                  period: 'Sep 2017 - Sep 2018',
                  description: (
                    <div className="space-y-2">
                      <p>Full-time role managing daily operations and administrative tasks in an educational institution.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Created a work cycle sheet for operations and modified the school's blueprint, resulting in more efficient operations.</p>
                        <p>• Created a digital version of the school's booking request form and the cleaners' weekly checklists.</p>
                        <p>• Created a shared Google Calendar for school events and facility booking requests.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Google Cloud, Microsoft Office Suite, Google Calendar, Google Forms, Adobe Illustrator & Photoshop</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'HR Administrator Assistant',
                  company: 'Integra Recruiters Asia Pte Ltd',
                  companyDesc: 'A leading recruitment firm specializing in executive search and talent acquisition across Asia.',
                  location: 'Singapore',
                  period: 'Aug 2015 - Aug 2016',
                  description: (
                    <div className="space-y-2">
                      <p>Full-time role providing comprehensive HR administrative support in a recruitment firm.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Sealed a subcontract deal with Dragages Singapore Pte Ltd, one of Singapore's largest construction firms.</p>
                        <p>• Onboarded 50+ construction workers as subcontract workers.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Info-Tech HRM System, Google Forms, Microsoft Office Suite</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Junior Graphic Designer',
                  company: 'Charisma Elite Marketing',
                  companyDesc: 'A dynamic marketing agency providing creative solutions for brand development and digital marketing.',
                  location: 'Petaling Jaya, Malaysia',
                  period: 'Jan 2014 - Jun 2015',
                  description: (
                    <div className="space-y-2">
                      <p>Full-time role creating visual content and design materials for marketing campaigns.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Designed and prepared visual materials for print and digital formats, including brochures, business cards, flyers, and large-scale signage.</p>
                        <p>• Ensured high-quality output by performing prepress checks and adhering to color, resolution, and print standards.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Adobe Creative Suite (Illustrator, PhotoShop, InDesign, PDF editor), Rainbow card printer, Silhouette Studio</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Customer Support Representative',
                  company: 'Qualfon',
                  companyDesc: 'A USA-based global business process outsourcing (BPO) company delivering customer experience solutions.',
                  location: 'Cebu City, Philippines',
                  period: 'Jun 2010 - Mar 2012',
                  description: (
                    <div className="space-y-2">
                      <p>Full-time role providing customer support services in a BPO environment.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Appointed as FA (floor assist) ever since I was in tier 1 until I reached tier 3.</p>
                        <p>• One of the top-performing customer service representatives who constantly received 100% QA scorecards.</p>
                        <p>• Recognized as one of the customer support representatives who has solved 80% of escalation tickets.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Avaya for call handling & routing, Siebel CRM (Oracle) for Ticketing, CSG International for Billing, Citrix for remote system access</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Technical Writer',
                  company: 'MedSpecialized, Inc.',
                  companyDesc: 'A USA-based healthcare technology company specializing in medical documentation and healthcare solutions.',
                  location: 'Cebu City, Philippines',
                  period: 'Jan 2009 - Nov 2009',
                  description: (
                    <div className="space-y-2">
                      <p>Full-time role creating technical documentation and content for healthcare solutions.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Created technical manuals, user guides, and product documentation in collaboration with software developers and software testers.</p>
                        <p>• Translated complex technical information into clear, user-friendly content for internal and external audiences.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Adobe FrameMaker, Microsoft Word, Adobe Acrobat Professional, SnagIt, Version Control System</p>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'Market Analyst',
                  company: 'AKAYIN CORP',
                  companyDesc: 'A USA-based business consulting firm focused on market research and business strategy development.',
                  location: 'Lapu-Lapu, Philippines',
                  period: 'May 2007 - Jun 2008',
                  description: (
                    <div className="space-y-2">
                      <p>Full-time role conducting market research and analysis to support business decisions.</p>
                      <div className="ml-6 space-y-2">
                        <p>• Responsible for gathering and analyzing large amounts of customer data pertaining to the company's target market, as well as distributing prospect leads to the sales department.</p>
                        <p>• Filter potential leads so that sales representatives can make more sales by calling the right customers.</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-purple-400">Tools Used: Microsoft Excel, Microsoft Access, 6sense cloud-based sales intelligence platform</p>
                      </div>
                    </div>
                  ),
                },
              ].map((role) => (
                <div key={role.title} className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700 hover:border-emerald-500">
                  <dt className="text-base font-semibold leading-7 text-white">
                    {role.title}
                    {role.company && <span className="text-emerald-400"> · {role.company}</span>}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-300">{role.location}</dd>
                  <dd className="mt-1 text-sm leading-6 text-emerald-400">{role.period}</dd>
                  <dd className="mt-2 text-sm leading-6 text-gray-400 italic">{role.companyDesc}</dd>
                  <dd className="mt-2 text-base leading-7 text-gray-300">{role.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Skills</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Expertise
            </p>
          </div>

          {/* Soft Skills */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
              {[
                'Operations Management',
                'Cross-cultural Communication',
                'Administrative Support',
                'Technical Writing',
                'Proofreading',
                'Customer Service',
                'Time Management',
                'Creative Problem Solving',
                'Adaptability'
              ].map((skill) => (
                <div
                  key={skill}
                  className="relative flex items-center gap-x-3 rounded-lg border border-gray-700 bg-gray-900 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500"
                >
                  <div className="text-sm font-medium leading-6 text-white">{skill}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Adobe Creative Suite',
                'Canva',
                'Figma (Basic)',
                'WordPress (Basic)',
                'HTML & CSS (Basic)',
                'PostgreSQL (Basic)',
                'Python (Basic)',
                'C Programming (Basic)',
              ].map((skill) => (
                <div
                  key={skill}
                  className="relative flex items-center gap-x-3 rounded-lg border border-gray-700 bg-gray-900 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500"
                >
                  <div className="text-sm font-medium leading-6 text-white">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Languages</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Language Proficiency
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  language: 'Cebuano',
                  level: 'Mother tongue'
                },
                {
                  language: 'Tagalog',
                  level: 'Advanced High'
                },
                {
                  language: 'English',
                  level: 'Advanced Mid'
                },
                {
                  language: 'Finnish',
                  level: 'Basic'
                }
              ].map((lang) => (
                <div
                  key={lang.language}
                  className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500"
                >
                  <div className="text-lg font-semibold leading-6 text-emerald-400">{lang.language}</div>
                  <div className="text-sm text-gray-300">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24 bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Hobbies</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Personal Interests
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  name: 'Karaoke', 
                  icon: MusicalNoteIcon 
                },
                { 
                  name: 'Cooking', 
                  icon: FireIcon 
                },
                { 
                  name: 'Watching Movies', 
                  icon: FilmIcon 
                },
                { 
                  name: 'Picnic', 
                  icon: SunIcon 
                },
                { 
                  name: 'Attending Group Exercise', 
                  icon: UserGroupIcon 
                },
                { 
                  name: 'Walking', 
                  icon: ArrowPathIcon 
                }
              ].map((hobby) => (
                <div
                  key={hobby.name}
                  className="relative flex items-center gap-x-3 rounded-lg border border-gray-700 bg-gray-900 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500"
                >
                  <hobby.icon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  <div className="text-sm font-medium leading-6 text-white">{hobby.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-400">Contact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Interested in working together? Feel free to reach out through the following channels:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500">
                <div className="text-sm font-medium leading-6 text-white">Email</div>
                <a href="mailto:aida.kokko@outlook.com" className="text-sm text-emerald-400 hover:text-emerald-300">
                  aida.kokko@outlook.com
                </a>
              </div>
              <div className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500">
                <div className="text-sm font-medium leading-6 text-white">LinkedIn</div>
                <a href="https://www.linkedin.com/in/aida-kokko/" className="text-sm text-emerald-400 hover:text-emerald-300">
                  linkedin.com/in/aida-kokko
                </a>
              </div>
              <div className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500">
                <div className="text-sm font-medium leading-6 text-white">GitHub</div>
                <a href="https://github.com/AidaKokko" className="text-sm text-emerald-400 hover:text-emerald-300">
                  github.com/AidaKokko
                </a>
              </div>
              <div className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500">
                <div className="text-sm font-medium leading-6 text-white">Location</div>
                <div className="text-sm text-emerald-400">Tampere, Finland</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 