const workExperience = [
  {
    title: "Market Analyst",
    company: "AKAYIN CORP",
    period: "May 2007 - Jun 2008",
    description: "A USA-based business consulting firm focused on market research and business strategy development. Responsible for gathering and analyzing large amounts of customer data pertaining to the company's target market, as well as distributing prospect leads to the sales department. Filtered potential leads to optimize sales representatives' efficiency in reaching the right customers.",
    location: "Lapu-Lapu, Philippines",
    tools: ["Microsoft Excel", "Microsoft Access", "6sense cloud-based sales intelligence platform"]
  },
  {
    title: "Technical Writer",
    company: "MedSpecialized, Inc.",
    period: "Jan 2009 - Nov 2009",
    description: "A USA-based healthcare technology company specializing in medical documentation and healthcare solutions. Created technical manuals, user guides, and product documentation in collaboration with software developers and software testers. Translated complex technical information into clear, user-friendly content for internal and external audiences.",
    location: "Cebu City, Philippines",
    tools: ["Adobe FrameMaker", "Microsoft Word", "Adobe Acrobat Professional", "SnagIt", "Version Control System"]
  },
  {
    title: "Customer Support Representative",
    company: "Qualfon",
    period: "Jun 2010 - Mar 2012",
    description: "A USA-based global business process outsourcing (BPO) company delivering customer experience solutions. One of the top-performing customer service representatives who constantly received 100% QA scorecards. Recognized as one of the customer support representatives who has solved 80% of escalation tickets.",
    location: "Cebu City, Philippines",
    tools: ["Avaya for call handling & routing", "Siebel CRM (Oracle) for Ticketing", "CSG International for Billing", "Citrix for remote system access"]
  },
  {
    title: "Junior Graphic Designer",
    company: "Charisma Elite Marketing",
    period: "Jan 2014 - Jun 2015",
    description: "A dynamic marketing agency providing creative solutions for brand development and digital marketing. Designed and prepared visual materials for print and digital formats, including brochures, business cards, flyers, and large-scale signage. Ensured high-quality output by performing prepress checks and adhering to color, resolution, and print standards.",
    location: "Petaling Jaya, Malaysia",
    tools: ["Adobe Creative Suite (Illustrator, PhotoShop, InDesign, PDF editor)", "Rainbow card printer", "Silhouette Studio"]
  },
  {
    title: "HR Administrator Assistant",
    company: "Integra Recruiters Asia Pte Ltd",
    period: "Aug 2015 - Aug 2016",
    description: "A leading recruitment firm specializing in executive search and talent acquisition across Asia. Sealed a subcontract deal with Dragages Singapore Pte Ltd, one of Singapore's largest construction firms. Onboarded 50+ construction workers as subcontract workers.",
    location: "Singapore",
    tools: ["Info-Tech HRM System", "Google Forms", "Microsoft Office Suite"]
  },
  {
    title: "Operations Administrator",
    company: "Al Salam Private School & Nursery",
    period: "Sep 2017 - Sep 2018",
    description: "A prestigious educational institution in Dubai offering comprehensive education from nursery to secondary levels. Created a work cycle sheet for operations and modified the school's blueprint, resulting in more efficient operations. Created a digital version of the school's booking request form and the cleaners' weekly checklists.",
    location: "Dubai, United Arab Emirates",
    tools: ["Google Cloud", "Microsoft Office Suite", "Google Calendar", "Google Forms", "Adobe Illustrator & Photoshop"]
  },
  {
    title: "Conference Assistant (Internship)",
    company: "Glaston Corporation",
    period: "Mar 2023 - Jun 2023",
    description: "A global leader in glass processing technology, providing innovative solutions for architectural, automotive, and solar glass industries. Collected manuscripts and PowerPoint presentations from speakers from different countries through the Oxford Abstract platform. Created the conference cue sheet for six parallel sessions.",
    location: "Tampere, Finland",
    tools: ["Microsoft Teams", "Eventos Event Management Software", "Oxford Abstracts Platform", "Microsoft Excel", "Canva", "Outlook for mass mailing"]
  }
]; 

{workExperience.map((role) => (
  <div key={role.title} className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700 hover:border-emerald-500">
    <dt className="text-base font-semibold leading-7 text-white">
      {role.title}
      {role.company && <span className="text-emerald-400"> · {role.company}</span>}
    </dt>
    <dd className="mt-1 text-sm leading-6 text-gray-300">{role.location}</dd>
    <dd className="mt-1 text-sm leading-6 text-emerald-400">{role.period}</dd>
    <dd className="mt-2 text-sm leading-6 text-gray-400 italic">{role.description}</dd>
    {role.tools && (
      <dd className="mt-2">
        <div className="text-sm font-medium text-purple-400 mb-1">Tools Used:</div>
        <div className="flex flex-wrap gap-2">
          {role.tools.map((tool, index) => (
            <span key={index} className="text-sm text-purple-300 bg-gray-700 px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </dd>
    )}
  </div>
))} 