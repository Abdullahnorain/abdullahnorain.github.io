/* Single source of truth for the facts on index.html.
   Edit here once; the page fills its name, headline, bio, interests, and links from it. */

window.CV = {
  name: "Abdullah A. Norain",
  credential: "MD",
  linkedin: "https://www.linkedin.com/in/abdullahnorain/",
  x: "https://x.com/AbdullahNorain",

  // The one-line positioning statement. This is the highest-leverage copy on the page.
  headline: "Diagnostic radiology resident and healthtech builder.",
  impression: "Physician and two-time healthtech founder with experience in product development, clinical research, and executive advisory. I help teams assess clinical needs, evaluate evidence, and turn ideas into usable software. My work spans advising Ezra’s CEO and product teams, leading healthcare startups, and building applications for medical education, literature discovery, and radiology workflows. I bring that work into my clinical training as a diagnostic radiology resident at Montefiore/Einstein and incoming neuroradiology fellow at Northwell Health.",

  // Condensed impression for the one-page site (index.html). The full impression stays for the CV.
  bio: "I am a diagnostic radiology resident and incoming neuroradiology fellow. I have founded two healthtech companies, one in electronic health records and one in healthcare collaboration, the second backed by Amazon Web Services. Right now I am exploring tools for medical education, literature discovery, and research workflows.",

  // Shown on the one-page site under "Interests".
  interests: ["Clinical product strategy", "Neuroradiology", "Imaging informatics", "Healthcare informatics", "AI and LLMs", "Medical education"],

  status: [
    { k: "Focus",     v: "Clinical product strategy · Medical imaging · Applied AI" },
    { k: "Building",  v: "AuntCore · Journal Rounds" },
    { k: "Clinical",  v: "Diagnostic Radiology Resident, Montefiore / Einstein" },
    { k: "Languages", v: "English, Arabic — native proficiency" }
  ],

  sections: [
    {
      id: "ventures",
      label: "Healthtech Leadership & Advisory",
      short: "Leadership & Advisory",
      kind: "entries",
      items: [
        {
          role: "Clinical & Product Strategy Consultant",
          org: "Ezra",
          // Engagement dates to be confirmed; the acquisition date is not a role date.
          meta: "",
          note: "Acquired by Function Health in May 2025",
          bullets: [
            "Advised the CEO and leadership team on clinical product strategy and opportunities to expand the company’s offerings.",
            "Led planning and feasibility assessment for proposed clinical validation studies and served as the clinical point person for a research paper initiative.",
            "Assessed evidence requirements and validation timelines, advising leadership on whether proposed research pathways were practical and informing internal decisions about what to pursue.",
            "Provided ongoing clinical input to product and development teams, helping evaluate product concepts, clinical use cases, and implementation questions."
          ]
        },
        {
          role: "Independent Healthcare Consultant",
          org: "Independent practice · Selected engagement: Ezra (above)",
          meta: "Sep 2022 – Present",
          flag: "current",
          bullets: [
            "Advise pre-seed through Series A healthtech companies on product strategy, clinical workflows, user experience, and emerging technologies, including AI in medical imaging and informatics."
          ]
        },
        {
          role: "Co-Founder & Chief Executive Officer",
          org: "PeerCapsule Inc.",
          meta: "Mar 2022 – Dec 2024",
          bullets: [
            "Led product strategy, business development, and go-to-market execution for digital products supporting healthcare collaboration and clinical research.",
            "Secured $125,000 in cash funding and $100,000 in AWS cloud credits through selection for the AWS Impact Accelerator.",
            "Conceived and developed Recapsule, a generative AI platform designed to help physicians answer clinical questions and synthesize medical evidence."
          ]
        },
        {
          role: "Co-Founder & Chief Executive Officer",
          org: "Wellow Inc.",
          meta: "Oct 2020 – Feb 2022",
          bullets: [
            "Founded and led development of an electronic health record platform centered on physician workflows.",
            "Conducted physician usability testing using the System Usability Scale, demonstrating improved usability relative to legacy workflows.",
            "Led fundraising, strategic partnerships, and executive recruitment, including technical leadership."
          ]
        }
      ]
    },
    {
      id: "build",
      label: "Products & Clinical Software",
      short: "Products",
      kind: "entries",
      items: [
        {
          role: "AuntCore",
          org: "Founder and Developer",
          meta: "2026 – Present",
          link: { href: "https://auntcore.com/app/", label: "auntcore.com" },
          flag: "live",
          bullets: [
            "Built and launched a web application that converts user-owned radiology casebooks into interactive question banks for independent learning and board preparation.",
            "Developed case-linked image review, progress tracking, and targeted review sessions to support focused study."
          ]
        },
        {
          role: "Journal Rounds",
          org: "Founder and Developer",
          meta: "2025 – Present",
          link: { href: "https://journalrounds.app/", label: "journalrounds.app" },
          flag: "live",
          bullets: [
            "Built and released an iOS application on the App Store to help physicians and researchers keep up with medical literature."
          ]
        },
        {
          role: "Appendiceal Cancer Nodal Risk Assessment Calculator",
          org: "Research Collaborator and Developer",
          meta: "2026 – Present",
          link: { href: "https://appendiceal-cancer-nodal-risk-assessment-production.up.railway.app/", label: "Open the calculator" },
          flag: "live",
          bullets: [
            "Translated five histology-specific multivariable logistic regression models into an interactive web calculator estimating regional lymph-node metastasis risk in appendiceal cancer.",
            "Co-developed the risk-estimation workflow using age, sex, T category, tumor grade, and lymphovascular invasion for research, education, and multidisciplinary discussion."
          ]
        },
        {
          role: "MinnieProof",
          org: "Independent Clinical Informatics Project",
          meta: "2025 – Present",
          bullets: [
            "Developed an experimental LLM-assisted reporting interface with inline checks for missing elements, laterality discrepancies, internal contradictions, anatomical inconsistencies, and unclear language."
          ]
        },
        {
          role: "Radiology Workflow Dashboard",
          org: "Exploratory Clinical Informatics Project",
          meta: "2025 – 2026",
          bullets: [
            "Evaluated clinical value, integration requirements, and implementation constraints for a dashboard bringing patient history, prior examinations, and clinical context into image interpretation."
          ]
        }
      ]
    },
    {
      id: "research",
      label: "Applied AI & Clinical Research",
      short: "Applied Research",
      kind: "entries",
      items: [
        {
          role: "LLM Evaluation for Structured Radiology Reporting",
          org: "Montefiore Medical Center, Department of Radiology",
          meta: "2026 – Present",
          note: "Advisor: Neeraj Lalwani, MD",
          flag: "current",
          bullets: [
            "Investigating how reliably large language models extract structured clinical information from radiology reports across imaging modalities and clinical questions.",
            "Currently evaluating lesion-level descriptor extraction, O-RADS category assignment, and guideline-concordant management recommendations from pelvic ultrasound reports."
          ]
        }
      ]
    },
    {
      id: "training",
      label: "Clinical Training & Education",
      short: "Training",
      kind: "entries",
      items: [
        { role: "Neuroradiology Fellowship", org: "Northwell Health", meta: "Jul 2027 – Jun 2028", note: "Incoming Fellow", flag: "incoming" },
        { role: "Diagnostic Radiology Residency", org: "Montefiore Medical Center", meta: "Jul 2023 – Present", note: "Albert Einstein College of Medicine · ABR Diagnostic Radiology Core Exam passed Jun 2026", flag: "current" },
        { role: "Biodesign Innovation Fellowship", org: "Montefiore Medical Center", meta: "Jul 2024 – Present", note: "Concurrent · Albert Einstein College of Medicine", flag: "current" },
        { role: "General Surgery Residency", org: "Mayo Clinic", meta: "Jul 2018 – Jul 2021" },
        { role: "Doctor of Medicine", org: "Albert Einstein College of Medicine", meta: "Aug 2014 – Jun 2018" },
        { role: "BS Biology, Minor in Biophysics", org: "Creighton University", meta: "Aug 2010 – May 2014" }
      ]
    },
    {
      id: "teaching",
      label: "Teaching & Education",
      short: "Teaching",
      kind: "entries",
      items: [
        {
          role: "Instructor, Transitional Clerkship",
          org: "Albert Einstein College of Medicine",
          meta: "Feb – Mar 2026",
          bullets: [
            "Facilitated interactive radiology sessions for medical students preparing for clinical rotations.",
            "Led small-group virtual workshops on chest radiograph interpretation, ACR Appropriateness Criteria, and common radiologic diagnoses."
          ]
        },
        {
          role: "Guest Speaker, Bronx High School of Science Visit",
          org: "Montefiore Medical Center, Department of Radiology",
          meta: "Nov 2024 and Jul 2026",
          bullets: [
            "Presented the radiology resident perspective during annual career conversations, offering students insight into clinical training and careers in radiology."
          ]
        },
        {
          role: "Facilitator, Impact Course Selective 11: Using AI/ChatGPT When Developing Capstone Products",
          org: "Albert Einstein College of Medicine",
          meta: "Oct 2024",
          bullets: [
            "Facilitated an interactive workshop on the ethical and practical application of generative AI in medical scholarship.",
            "Covered LLM fundamentals, manuscript guidelines, critical evaluation of AI tools, bias mitigation, and practical application to research manuscripts and abstracts."
          ]
        }
      ]
    },
    {
      id: "prior",
      label: "Prior Research Experience",
      short: "Prior research",
      kind: "entries",
      items: [
        {
          role: "Research Resident",
          org: "Mayo Clinic (Arizona), Department of Surgery",
          meta: "Jul 2020 – Jul 2021",
          note: "Advisors: Nabil Wasif, MD; Patricia Cronin, MD; Chee-Chee Stucky, MD",
          bullets: [
            "Conducted outcomes research using institutional and national datasets (SEER and NSQIP), contributing to studies of endocrine and surgical oncology outcomes."
          ]
        },
        {
          role: "Research Assistant",
          org: "Montefiore Medical Center, Department of Pediatric Surgery",
          meta: "Jun 2017 – Jun 2018",
          note: "Advisor: Sathyaprasad Burjonrappa, MD",
          bullets: [
            "Built institutional and NSQIP datasets to evaluate utilization, weight-loss patterns, and short-term outcomes of adolescent bariatric surgery."
          ]
        },
        {
          role: "Research Assistant",
          org: "Albert Einstein College of Medicine, Department of Nuclear Medicine",
          meta: "Jun 2015 – Jan 2016",
          note: "Advisor: Ekaterina Dadachova, PhD",
          bullets: [
            "Evaluated targeted radionuclide therapy and radiolabeled-antibody biodistribution in preclinical models of CD45-positive malignancy."
          ]
        }
      ]
    },
    {
      id: "publications",
      label: "Peer-Reviewed Publications",
      short: "Publications",
      kind: "pubs",
      items: [
        { authors: "Egbert L, <b>Norain A</b>, Stucky CC, Ahmad S, Chang YH, Wasif N.", title: "Cancer embryonic antigen (CEA) levels in patients with appendiceal adenocarcinoma predict response to neo-adjuvant chemotherapy and overall survival.", journal: "J Surg Oncol", year: "2023", cite: "127(4):688–698", doi: "10.1002/jso.27178" },
        { authors: "Armstrong VL, Hangge PT, Butterfield R, <b>Norain A</b>, Wasif N, Stucky CH, Cronin PA.", title: "Phenotypes of primary hyperparathyroidism: Does parathyroidectomy improve clinical outcomes for all?", journal: "Surgery", year: "2023", cite: "173(1):173–179", doi: "10.1016/j.surg.2022.05.042" },
        { authors: "Kalagara R, <b>Norain A</b>, Chang YH, Stucky CC, Wasif N.", title: "Association of textbook outcome and surgical case volume with long-term survival in patients undergoing surgical resection for pancreatic cancer.", journal: "J Am Coll Surg", year: "2022", cite: "235(6):829–837", doi: "10.1097/XCS.0000000000000407" },
        { authors: "Hangge PT, <b>Norain A</b>, Butterfield RJ 3rd, Wasif N, Cronin PA, Stucky CH.", title: "Parathyroidectomy in the elderly is beneficial and safe with similar improvements in postoperative bone mineral density.", journal: "Am J Surg", year: "2022", cite: "224(1 Pt A):147–152", doi: "10.1016/j.amjsurg.2022.04.031" },
        { authors: "<b>Norain A</b>, Arafat M, Burjonrappa S.", title: "Trending weight loss patterns in obese and super obese adolescents: Does laparoscopic sleeve gastrectomy provide equivalent outcomes in both groups?", journal: "Obes Surg", year: "2019", cite: "29(8):2511–2516", doi: "10.1007/s11695-019-03867-8" },
        { authors: "Arafat M, <b>Norain A</b>, Burjonrappa S.", title: "Characterizing bariatric surgery utilization and complication rates in the adolescent population.", journal: "J Pediatr Surg", year: "2019", cite: "54(2):288–292", doi: "10.1016/j.jpedsurg.2018.10.089" },
        { authors: "<b>Norain A</b>, Dadachova E.", title: "Targeted radionuclide therapy of melanoma.", journal: "Semin Nucl Med", year: "2016", cite: "46(3):250–259", doi: "10.1053/j.semnuclmed.2015.12.005" }
      ]
    },
    {
      id: "talks",
      label: "Presentations & CME",
      short: "Talks",
      kind: "entries",
      items: [
        { role: "Contributor, CME Course: “AI in Preventive Medicine & Public Health”", org: "American College of Preventive Medicine", meta: "2024", bullets: ["Contributed to ACPM’s accredited CME course on the role of artificial intelligence in preventive medicine and public health."] },
        { role: "Conducting Market Assessment and Competitive Landscape Analysis", org: "Invited Speaker · Montefiore Biodesign Innovation Program", meta: "Oct 26, 2023" },
        { role: "Strategic Partnerships", org: "Invited Speaker · Montefiore Biodesign Innovation Program", meta: "May 26, 2022" },
        { role: "The Innovation Biodesign Process", org: "Invited Speaker · Montefiore Biodesign Innovation Program", meta: "Aug 27, 2021" },
        { role: "The Association Between Surgical Case Volume and a Textbook Outcome With Survival Following Pancreatic Cancer Surgery", org: "Presenter · American College of Surgeons, Arizona Chapter", meta: "May 20, 2021" },
        { role: "Do Phenotypes of Primary Hyperparathyroidism Present Differently? · The Effect of Phenotype on the Accuracy of Preoperative Imaging in Primary Hyperparathyroidism", org: "Presenter · American Association of Endocrine Surgeons Annual Meeting", meta: "Apr 25, 2021" }
      ]
    },
    {
      id: "abstracts",
      label: "Abstracts",
      short: "Abstracts",
      kind: "abstracts",
      items: [
        { title: "The association between surgical case volume and a textbook outcome with survival following pancreatic cancer surgery.", authors: "<b>Norain A</b>, Egbert L, Chang Y, Stucky C, Cronin P, Ahmad S, Wasif N.", venue: "Society of Surgical Oncology Annual Meeting", year: "2021" },
        { title: "Do phenotypes of primary hyperparathyroidism present differently?", authors: "<b>Norain A</b>, Hangge P, Butterfield R, Wasif N, Stucky C, Cronin P.", venue: "American Association of Endocrine Surgeons Annual Meeting", year: "2021" },
        { title: "The effect of phenotype on the accuracy of preoperative imaging in primary hyperparathyroidism.", authors: "<b>Norain A</b>, Hangge P, Butterfield R, Wasif N, Stucky C, Cronin P.", venue: "American Association of Endocrine Surgeons Annual Meeting", year: "2021" },
        { title: "Brittle bones but tough as nails: Parathyroidectomy in the elderly population is beneficial and safe.", authors: "Hangge P, <b>Norain A</b>, Butterfield R, Wasif N, Stucky C, Cronin P.", venue: "Southwestern Surgical Congress", year: "2021" },
        { title: "Preoperative elevation of CEA is associated with worse overall survival in patients with appendiceal adenocarcinoma.", authors: "<b>Norain A</b>, Egbert L, Kalagara S, Chang Y, Stucky C, Cronin P, Ahmad S, Wasif N.", venue: "Southwestern Surgical Congress", year: "2021" },
        { title: "30-day outcomes after bariatric surgery in 2,862 adolescents: An 11-year NSQIP database analysis.", authors: "Arafat M, <b>Norain A</b>, Burjonrappa S.", venue: "British Association of Paediatric Surgeons Congress", year: "2018" },
        { title: "Weight-loss patterns in obese and super-obese adolescents after bariatric surgery.", authors: "<b>Norain A</b>, Arafat M, Burjonrappa S.", venue: "British Association of Paediatric Surgeons Congress", year: "2018" }
      ]
    },
    {
      id: "honors",
      label: "Honors & Awards",
      short: "Honors",
      kind: "entries",
      items: [
        { role: "Founder Fellow", org: "Primary Venture Partners", meta: "Feb – Aug 2023", bullets: ["Selected as one of 50 fellows from more than 1,000 applicants for a healthcare-focused founder fellowship."] },
        { role: "Louis Ritter and Gladys Ritter Livingston Research Fellowship", org: "Albert Einstein College of Medicine", meta: "May 2015" },
        { role: "Research and Community Service Scholarship", org: "Albert Einstein College of Medicine", meta: "Aug 2014 – May 2018" }
      ]
    },
    {
      id: "societies",
      label: "Professional Associations",
      short: "Societies",
      kind: "list",
      items: [
        "Radiological Society of North America",
        "American Society of Neuroradiology",
        "American College of Radiology",
        "Sudanese American Medical Association"
      ]
    }
  ]
};
