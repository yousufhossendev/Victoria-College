export const site = {
  name: "VCAD",
  fullName: "Victoria College of Arts and Design",
  parent: "PEN Group",
  tagline: "A working art school in the middle of the city.",
  address: ["Victoria Building", "18 Harbour Row", "Chattogram 4000"],
  phone: "020 3278 9857",
  email: "enquiry_office@vcad.co.uk",
} as const;

/**
 * The header has two designed treatments. The homepage and the courses listing
 * use this short set with no CTA; the course detail page uses the fuller set
 * below. One Header component switches between them by route — the shell,
 * logo and mobile menu are shared, so nothing is duplicated.
 */
export const mainNav = [
  { label: "About VCAD", href: "/#about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact us", href: "/#contact" },
] as const;

/**
 * Course detail header. Items with `children` render the chevron from the
 * design and open a real dropdown — the affordance is in the frame, so it works.
 */
export const courseDetailNav = [
  {
    label: "About VCAD",
    href: "/#about",
    children: [
      { label: "Our Story", href: "/#stories" },
      { label: "Our Partners", href: "/#partners" },
      { label: "Careers", href: "/#career" },
    ],
  },
  { label: "Courses", href: "/courses", children: [] },
  { label: "Campuses", href: "/#campus", children: [] },
  {
    label: "VCAD Life",
    href: "/#stories",
    children: [
      { label: "Student Stories", href: "/#stories" },
      { label: "Testimonials", href: "/#work" },
      { label: "FAQs", href: "/#faqs" },
    ],
  },
] as const;

export const headerCta = { label: "Apply Now", href: "/#admissions" } as const;

export const hero = {
  title: ["Welcome", "to VCAD"],
  body: "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry. Search our latest courses.",
  cta: { label: "Explore Courses", href: "/courses" },
} as const;

export const footerSection = {
  headline: [
    { text: "Get creative and ", highlight: false },
    { text: "turn your passion", highlight: true },
    { text: " for the Arts into a rewarding career.", highlight: false },
  ],
  rights: "All rights reserved.",
} as const;

export const footerNav = [
  { label: "About VCAD", href: "/#about" },
  { label: "Our Story", href: "/#stories" },
  { label: "Campuses", href: "/#campus" },
  { label: "Policies", href: "/#policies" },
  { label: "Career", href: "/#career" },
  { label: "Our Partners", href: "/#partners" },
  { label: "Cookies Policy", href: "/#cookies" },
  { label: "FAQs", href: "/#faqs" },
] as const;

export const socials = [
  { id: "facebook", label: "Facebook", href: "https://facebook.com" },
  { id: "x", label: "X", href: "https://x.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com" },
] as const;

/** Accreditation marks. Real logo exports drop in as `logo`; until then the
 *  abbreviated wordmark below stands in. */
export const accreditations = [
  { id: "advance-he", name: "Advance HE Affiliate Member", short: "AdvanceHE" },
  { id: "qaa", name: "QAA Reviewed", short: "QAA" },
  { id: "cyber-essentials", name: "Cyber Essentials Certified", short: "Cyber" },
] as const;

/**
 * Which courses the homepage explorer lists, in order. Slugs rather than copies,
 * so the titles and descriptions still come from the single course dataset.
 */
export const exploreSection = {
  eyebrow: "Our courses",
  heading: "Explore our creative courses",
  cta: { label: "View Courses", href: "/courses" },
  courseSlugs: [
    "fashion-design",
    "fashion-media-marketing",
    "graphic-design",
    "business-management",
  ],
  image: { alt: "Lecture in progress in the main hall" },
} as const;

/**
 * Quote panel. The highlighted span is marked up as data rather than baked into
 * a string, so the emphasis survives a copy change.
 */
export const quoteSection = {
  parts: [
    { text: "A world where ", highlight: false },
    { text: "everyone has the opportunity", highlight: true },
    { text: " to fulfil their potential", highlight: false },
  ],
  /** Positioned as percentages of the panel, same approach as the hero collage. */
  photos: [
    {
      id: "survey",
      alt: "Student surveying a studio space",
      left: "4.5%",
      top: "44.2%",
      width: "30.9%",
      height: "46%",
      rotate: -3,
    },
    {
      id: "painting",
      alt: "Student painting at a desk",
      left: "36.1%",
      top: "38.7%",
      width: "28.1%",
      height: "56.5%",
      rotate: -2,
    },
    {
      id: "patterns",
      alt: "Two students working on garment patterns",
      left: "66.4%",
      top: "6.6%",
      width: "32.1%",
      height: "63.9%",
      rotate: 0,
    },
  ],
} as const;

/**
 * Heading here repeats the Degree Courses section above it — that is what the
 * frame says, so it is reproduced verbatim rather than "corrected".
 */
export const galleryCourses = {
  eyebrow: "Our Gallery",
  heading: "Degree Courses",
  body: "Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities, and industry connections that prepare you for a rewarding creative career.",
  images: [
    { id: "painting", alt: "Student painting with watercolours" },
    { id: "common-room", alt: "Students talking in the common room" },
    { id: "pattern-table", alt: "Students working on garment patterns" },
    { id: "lecture", alt: "Course leader in a teaching session" },
    { id: "print-room", alt: "Student in the print room" },
    { id: "studio-crit", alt: "Studio critique in progress" },
    { id: "workshop", alt: "Students in the model-making workshop" },
  ],
} as const;

export const degreeCourses = {
  eyebrow: "All Courses",
  heading: "Degree Courses",
  body: "Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities, and industry connections that prepare you for a rewarding creative career.",
} as const;

export const coursesHero = {
  heading: "Explore Our Courses",
  body: "Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities, and industry connections that prepare you for a rewarding creative career.",
  photos: [
    { id: "sofa", alt: "Students talking in a common room", side: "left" },
    { id: "drawing", alt: "Student drawing at a desk", side: "right" },
  ],
} as const;

export const storySection = {
  eyebrow: "Stories",
  heading: "Our Stories",
  cta: "Read Article",
} as const;

export const stories = [
  {
    id: "induction-canary-wharf",
    title: "Induction in VCAD Canary Wharf campus",
    excerpt:
      "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    href: "/#stories",
    alt: "Course leader welcoming students at induction",
  },
  {
    id: "degree-show",
    title: "Two hundred graduates, one weekend",
    excerpt:
      "The Victoria Building opens to the public every June for the largest graduate show in the city. Two hundred students hang their final projects, and buyers, studios and press walk the floor across three days of open viewing.",
    href: "/#stories",
    alt: "Visitors at the annual graduate show",
  },
  {
    id: "live-briefs",
    title: "What a live client brief actually looks like",
    excerpt:
      "From term three, the briefs stop being hypothetical. Students work to a real scope, a real budget and a client who changes their mind — and present the result in the room rather than through a tutor.",
    href: "/#stories",
    alt: "Students presenting work to a client",
  },
  {
    id: "workshops",
    title: "Inside the print and sample rooms",
    excerpt:
      "Letterpress, risograph, screen print, industrial machining and a full materials library, all open outside teaching hours. A tour of the workshops that sit underneath every course we run.",
    href: "/#stories",
    alt: "The print workshop in use",
  },
] as const;

export const partnerSection = {
  eyebrow: "Our partners",
  heading: "Partner Institutions",
  body: "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry.",
} as const;

/**
 * Partner logos. `logo` is the path to an exported asset; until one exists the
 * wordmark below renders instead, so the section never shows a broken image.
 */
export const partners = [
  {
    id: "ravensbourne",
    name: "Ravensbourne University London",
    href: "https://www.ravensbourne.ac.uk",
    mark: "circle",
    lines: [
      { text: "Ravensbourne", bold: true },
      { text: "University London", bold: false },
    ],
  },
  {
    id: "arts-university-plymouth",
    name: "Arts University Plymouth",
    href: "https://www.aup.ac.uk",
    mark: "arch",
    lines: [
      { text: "Arts", bold: true },
      { text: "University", bold: true },
      { text: "Plymouth", bold: true },
    ],
  },
] as const;

export const campusSection = {
  eyebrow: "Our campuses",
  heading: "Explore our campuses",
  body: "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas.",
  discoverLabel: "Discover",
} as const;

export const campuses = [
  {
    slug: "canary-wharf",
    name: "Canary Wharf Campus",
    alt: "Students outside the Canary Wharf campus",
    blurb: "Our largest campus, home to business, media and the main lecture theatres.",
  },
  {
    slug: "shoreditch",
    name: "Shoreditch Campus",
    alt: "The Shoreditch campus building",
    blurb: "Studios, workshops and the print rooms, in the middle of the design district.",
  },
  {
    slug: "kensington",
    name: "Kensington Campus",
    alt: "The Kensington campus building",
    blurb: "Fashion and photography, with the sample rooms and three shooting studios.",
  },
  {
    slug: "camden",
    name: "Camden Campus",
    alt: "The Camden campus building",
    blurb: "Animation, games and sound, plus the motion capture stage.",
  },
] as const;

export const stats = [
  { value: "9", label: "Degree programmes" },
  { value: "91%", label: "In work or study within a year" },
  { value: "1:20", label: "Average tutor to student ratio" },
  { value: "40+", label: "Industry partners" },
] as const;

export const testimonialSection = {
  eyebrow: "Students testimonial",
  heading: "Our students sharing their thoughts",
} as const;

export const testimonials = [
  {
    id: "daniel-karen",
    quote:
      "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry.",
    name: "Daniel Karen",
    role: "Student of VCAD Borough campus",
  },
  {
    id: "amara-osei",
    quote:
      "The crits were brutal in the best way. Six months out I could walk into a client meeting and defend every decision in my portfolio, because I had already done it fifty times in front of a room that would tell me the truth.",
    name: "Amara Osei",
    role: "Student of VCAD Shoreditch campus",
  },
  {
    id: "tomasz-wnuk",
    quote:
      "Second year runs like a real production. Dailies, deadlines, someone reviewing your shot in front of everyone. When I walked into my first studio job, the whole week already felt familiar.",
    name: "Tomasz Wnuk",
    role: "Student of VCAD Camden campus",
  },
  {
    id: "ife-balogun",
    quote:
      "I came in never having touched an industrial machine. I left with a six-look collection on the runway and an offer from someone who was sitting in the third row watching it.",
    name: "Ife Balogun",
    role: "Student of VCAD Kensington campus",
  },
] as const;

export const campusGallery = [
  { caption: "The Victoria Building, main entrance" },
  { caption: "Studio 4, second-year design" },
  { caption: "The materials library" },
  { caption: "Print workshop" },
  { caption: "Sample room" },
  { caption: "Motion capture stage" },
  { caption: "The refectory" },
] as const;

export const admissionSteps = [
  {
    step: "01",
    title: "Choose your course",
    body: "Compare the eight programmes, or come to an open day and see the studios in use before you decide.",
  },
  {
    step: "02",
    title: "Apply online",
    body: "One short form. You will hear from an admissions tutor within five working days, not five weeks.",
  },
  {
    step: "03",
    title: "Portfolio conversation",
    body: "For most courses, a friendly forty minutes about your work. We will tell you exactly what to bring.",
  },
  {
    step: "04",
    title: "Enrol and start",
    body: "Offers, funding and enrolment handled by one named person who stays with you until you start.",
  },
] as const;
