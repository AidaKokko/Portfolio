import React from "react";

const workExperience = [
  {
    title: "Conference Assistant (Internship)",
    company: "Glaston Corporation",
    location: "Tampere, Finland",
    period: "Mar 2023 - Jun 2023",
    company_description: "A global leader in glass processing technology, providing innovative solutions for architectural, automotive, and solar glass industries.",
    description: "• Collected manuscripts and PowerPoint presentations from speakers from different countries through the Oxford Abstract platform.\n\n• Created the conference cue sheet for six parallel sessions.",
    tools_used: "Tools Used: Microsoft Teams, Eventos Event Management Software, Oxford Abstracts Platform, Microsoft Excel, Canva, Outlook for mass mailing"
  },
  {
    title: "Operations Administrator",
    company: "Al Salam Private School & Nursery",
    location: "Dubai, United Arab Emirates",
    period: "Sep 2017 - Sep 2018",
    company_description: "A prestigious educational institution in Dubai offering comprehensive education from nursery to secondary levels.",
    description: "• Created a work cycle sheet for operations and modified the school's blueprint, resulting in more efficient operations.\n\n• Created a digital version of the school's booking request form and the cleaners' weekly checklists.",
    tools_used: "Tools Used: Google Cloud, Microsoft Office Suite, Google Calendar, Google Forms, Adobe Illustrator & Photoshop"
  },
  {
    title: "HR Administrator Assistant",
    company: "Integra Recruiters Asia Pte Ltd.",
    location: "Singapore, Singapore",
    period: "Aug 2015 - Aug 2016",
    company_description: "A leading recruitment firm specializing in executive search and talent acquisition across Asia.",
    description: "• Sealed a subcontract deal with Dragages Singapore Pte Ltd, one of Singapore's largest construction firms.\n\n• Onboarded 50+ construction workers as subcontract workers.",
    tools_used: "Tools Used: Info-Tech HRM System, Google Forms, Microsoft Office Suite"
  },
  {
    title: "Junior Graphic Designer",
    company: "Charisma Elite Marketing",
    location: "Petaling Jaya, Malaysia",
    period: "Jan 2014 - Jun 2015",
    company_description: "A dynamic marketing agency providing creative solutions for brand development and digital marketing.",
    description: "• Designed and prepared visual materials for print and digital formats, including brochures, business cards, flyers, and large-scale signage.\n\n• Ensured high-quality output by performing prepress checks and adhering to color, resolution, and print standards.",
    tools_used: "Tools Used: Adobe Creative Suite (Illustrator, PhotoShop, InDesign, PDF editor), Rainbow card printer, Silhouette Studio"
  },
  {
    title: "Customer Support Representative",
    company: "Qualfon",
    location: "Cebu City, Philippines",
    period: "Jun 2010 - Mar 2012",
    company_description: "A USA-based global business process outsourcing (BPO) company delivering customer experience solutions.",
    description: "• One of the top-performing customer service representatives who constantly received 100% QA scorecards.\n\n• Recognized as one of the customer support representatives who has solved 80% of escalation tickets.",
    tools_used: "Tools Used: Avaya for call handling & routing, Siebel CRM (Oracle) for Ticketing, CSG International for Billing, Citrix for remote system access"
  },
  {
    title: "Technical Writer",
    company: "MedSpecialized, Inc.",
    location: "Cebu City, Philippines",
    period: "Jan 2009 - Nov 2009",
    company_description: "A USA-based healthcare technology company specializing in medical documentation and healthcare solutions.",
    description: "• Created technical manuals, user guides, and product documentation in collaboration with software developers and software testers.\n\n• Translated complex technical information into clear, user-friendly content for internal and external audiences.",
    tools_used: "Tools Used: Adobe FrameMaker, Microsoft Word, Adobe Acrobat Professional, SnagIt, Version Control System"
  },
  {
    title: "Market Analyst",
    company: "Akayin Corp.",
    location: "Lapu-Lapu, Philippines",
    period: "May 2007 - Jun 2008",
    company_description: "A USA-based business consulting firm focused on market research and business strategy development.",
    description: "• Responsible for gathering and analyzing large amounts of customer data pertaining to the company's target market, as well as distributing prospect leads to the sales department.\n\n• Filter potential leads so that sales representatives can make more sales by calling the right customers.",
    tools_used: "Tools Used: Microsoft Excel, Microsoft Access, 6sense cloud-based sales intelligence platform"
  }
];

export default function Home() {
  return (
    <main>
      {workExperience.map((role) => (
        <div key={role.title} className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700 hover:border-emerald-500">
          <dt className="text-base font-semibold leading-7 text-white">
            {role.title}
            {role.company && <span className="text-emerald-400"> · {role.company}</span>}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-300">{role.location}</dd>
          <dd className="mt-1 text-sm leading-6 text-emerald-400">{role.period}</dd>
          <dd className="mt-2 text-sm leading-6 text-gray-400 italic">{role.description}</dd>
          {role.tools_used && (
            <dd className="mt-2">
              <div className="text-sm font-medium text-purple-400 mb-1">Tools Used:</div>
              <div className="flex flex-wrap gap-2">
                {role.tools_used.replace("Tools Used: ", "").split(", ").map((tool, index) => (
                  <span key={index} className="text-sm text-purple-300 bg-gray-700 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </dd>
          )}
        </div>
      ))}
    </main>
  );
} 