import type { Course, School, SchoolId } from "@/lib/types";

export const schools: School[] = [
  {
    id: "design",
    name: "School of Design",
    shortName: "Design",
    description:
      "Graphic, interior and spatial design taught through live briefs and studio critique.",
  },
  {
    id: "media-technology",
    name: "School of Media & Technology",
    shortName: "Media & Tech",
    description:
      "Animation, games, photography and front-end craft, built on industry pipelines.",
  },
  {
    id: "fashion-styling",
    name: "School of Fashion & Styling",
    shortName: "Fashion",
    description:
      "Pattern, construction and styling, from first sketch to finished collection.",
  },
  {
    id: "creative-business",
    name: "School of Business & Creative Industries",
    shortName: "Business",
    description:
      "The commercial side of creative work — producing, managing and selling it.",
  },
];

export const schoolsById: Record<SchoolId, School> = Object.fromEntries(
  schools.map((school) => [school.id, school]),
) as Record<SchoolId, School>;

export const courses: Course[] = [
  {
    slug: "graphic-design",
    title: "BA (Hons) Graphic Design",
    summary:
      "Type, brand and editorial systems for print and screen, built in a studio that runs on real briefs.",
    schoolId: "design",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time / Part Time",
    intakes: ["January", "May", "September"],
    tuition: "£9,250 per year",
    location: "Shoreditch Campus",
    awardingBody: "Ravensbourne University London",
    cardImage: "/images/courses/course-1.jpg",
    featured: true,
    gallery: [
      { caption: "Second-year identity project, Studio 4" },
      { caption: "Letterpress and risograph workshop" },
      { caption: "Degree show installation, Victoria Building" },
      { caption: "Type specimen crit, Autumn term" },
      { caption: "Packaging prototypes in the model shop" },
    ],
    overview: [
      "BA (Hons) Graphic Design is a studio-led programme for designers who want to work across identity, editorial and digital product. You will spend most of your week in the studio, working to briefs set with practising designers and, from the second year, with external clients.",
      "The course is structured around three strands that run in parallel: type and image making, systems and identity, and the professional practice of getting work made. Every project ends in a crit, and every crit is documented — by the end of the course you leave with a portfolio that has been argued for out loud.",
    ],
    highlights: [
      "Live client briefs from term three onwards",
      "Letterpress, risograph and screen-print workshops on site",
      "One-to-one portfolio mentoring with a working designer",
      "Two-week placement built into the second year",
    ],
    stats: [
      { label: "Graduate employment", value: "92%" },
      { label: "Studio hours per week", value: "18" },
      { label: "Average class size", value: "22" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Typographic Foundations",
            code: "FY01",
            credits: 30,
            description:
              "Letterform anatomy, hierarchy and grid systems, worked through weekly setting exercises.",
          },
          {
            title: "Image & Composition",
            code: "FY02",
            credits: 30,
            description:
              "Photography, illustration and collage as tools for communicating a single clear idea.",
          },
          {
            title: "Design History & Context",
            code: "FY03",
            credits: 30,
            description:
              "How the movements that shaped visual culture still show up in the work you make now.",
          },
          {
            title: "Production & Print",
            code: "FY04",
            credits: 30,
            description:
              "Colour management, stock, finishing and the conversations you need to have with a printer.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Brand Systems",
            code: "SY01",
            credits: 30,
            description:
              "Building identities that survive contact with real applications, guidelines included.",
          },
          {
            title: "Editorial & Publishing",
            code: "SY02",
            credits: 30,
            description:
              "Long-form layout, pacing and the discipline of designing across many pages.",
          },
          {
            title: "Digital Product Design",
            code: "SY03",
            credits: 30,
            description:
              "Interface patterns, component thinking and handing off work a developer can build.",
          },
          {
            title: "Final Major Project",
            code: "SY04",
            credits: 30,
            description:
              "A self-directed body of work, taken from proposal to degree show.",
          },
        ],
      },
    ],
    careers: [
      "Graphic designer",
      "Brand designer",
      "Art director",
      "Editorial designer",
      "Design studio account manager",
    ],
    entryRequirements: [
      "Two A-levels at grade C or above, or an equivalent Level 3 qualification",
      "A portfolio of 12–15 pieces, presented at interview",
      "GCSE English at grade 4 or above",
      "Applicants over 21 may apply on the strength of portfolio and experience alone",
    ],
    faqs: [
      {
        question: "Do I need to own a laptop?",
        answer:
          "You do not need one to start. The studios have iMacs with the full Adobe suite, available outside teaching hours. Most students buy a laptop in the second year once they know what they actually need.",
      },
      {
        question: "Is the portfolio interview competitive?",
        answer:
          "We interview everyone who meets the academic requirements. We are looking for evidence of curiosity and iteration far more than polish — sketchbooks count.",
      },
      {
        question: "Can I switch to part-time partway through?",
        answer:
          "Yes. Students move between full-time and part-time study at the end of any term, subject to a conversation with your course leader.",
      },
    ],
  },
  {
    slug: "interior-design",
    title: "BA (Hons) Interior Design",
    summary:
      "Residential and commercial interiors, from spatial planning through to specification and dressing.",
    schoolId: "design",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time",
    intakes: ["January", "September"],
    tuition: "£8,400 per year",
    location: "Shoreditch Campus",
    awardingBody: "Ravensbourne University London",
    cardImage: "/images/courses/course-2.jpg",
    gallery: [
      { caption: "Materials library, ground floor" },
      { caption: "Scale model of the hospitality project" },
      { caption: "Site visit, Victoria Quarter" },
    ],
    overview: [
      "BA (Hons) Interior Design covers the whole arc of an interiors project: reading a space, planning it, specifying what goes into it and presenting the result to a client who is paying for it.",
      "Teaching splits between the drawing studio and the materials library, with regular site visits to projects in progress across the city.",
    ],
    highlights: [
      "Full materials library with supplier samples updated each term",
      "CAD and SketchUp taught to industry standard",
      "Two live residential briefs across the course",
      "Portfolio review with a practising interior designer each term",
    ],
    stats: [
      { label: "Graduate employment", value: "88%" },
      { label: "Live briefs", value: "2" },
      { label: "Average class size", value: "18" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Spatial Planning",
            code: "FY01",
            credits: 30,
            description:
              "Circulation, zoning and the human dimensions that decide whether a room works.",
          },
          {
            title: "Technical Drawing & CAD",
            code: "FY02",
            credits: 30,
            description:
              "Plans, sections and elevations, drawn by hand and then in CAD.",
          },
          {
            title: "Colour, Light & Material",
            code: "FY03",
            credits: 30,
            description:
              "How surfaces behave under real light, and how to specify them with confidence.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Commercial Interiors",
            code: "SY01",
            credits: 30,
            description:
              "Retail and hospitality projects, with the regulations that come attached.",
          },
          {
            title: "Visualisation & Presentation",
            code: "SY02",
            credits: 30,
            description:
              "Boards, renders and the client conversation that goes with them.",
          },
          {
            title: "Final Project",
            code: "SY03",
            credits: 30,
            description:
              "A full scheme for a real building, presented to an industry panel.",
          },
        ],
      },
    ],
    careers: [
      "Interior designer",
      "Interior decorator",
      "Kitchen and bathroom designer",
      "Retail space planner",
      "Set and props assistant",
    ],
    entryRequirements: [
      "One A-level at grade C or above, or an equivalent Level 3 qualification",
      "A short portfolio or a written statement of interest",
      "GCSE English and Maths at grade 4 or above",
    ],
    faqs: [
      {
        question: "Is there a lot of maths?",
        answer:
          "There is measurement, scale and budgeting, all of which is taught from first principles. You do not need maths beyond GCSE level.",
      },
      {
        question: "Do I need to buy materials?",
        answer:
          "A model-making kit costs roughly £120 in stage one. Everything in the materials library is free to use.",
      },
    ],
  },
  {
    slug: "3d-animation",
    title: "BA (Hons) Animation & VFX",
    summary:
      "Character and environment work taught on the pipelines studios actually use — Maya, Houdini, Unreal.",
    schoolId: "media-technology",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time",
    intakes: ["September"],
    tuition: "£9,750 per year",
    location: "Camden Campus",
    awardingBody: "Ravensbourne University London",
    cardImage: "/images/courses/course-3.jpg",
    gallery: [
      { caption: "Render farm and grading suite" },
      { caption: "Motion capture session, Studio B" },
      { caption: "Second-year showreel screening" },
      { caption: "Character sculpt review" },
    ],
    overview: [
      "BA (Hons) Animation & VFX trains you for a seat in a production pipeline. You will model, texture, rig, light and render — and then specialise, because studios hire specialists.",
      "The second year runs as a production: teams, schedules, dailies and a delivery date that does not move.",
    ],
    highlights: [
      "Maya, Houdini, Substance and Unreal Engine taught throughout",
      "Motion capture stage with weekly bookable slots",
      "Year-two work produced under studio-style dailies",
      "Showreel finishing week with visiting supervisors",
    ],
    stats: [
      { label: "Graduate employment", value: "90%" },
      { label: "Render nodes", value: "24" },
      { label: "Average class size", value: "20" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Modelling & Sculpting",
            code: "FY01",
            credits: 30,
            description:
              "Hard-surface and organic modelling, topology and the discipline of clean geometry.",
          },
          {
            title: "Texturing & Look Development",
            code: "FY02",
            credits: 30,
            description:
              "PBR materials, UV layout and getting a surface to read under any light.",
          },
          {
            title: "Rigging & Animation Principles",
            code: "FY03",
            credits: 30,
            description:
              "Skeletons, deformation and the twelve principles applied to digital characters.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Lighting & Rendering",
            code: "SY01",
            credits: 30,
            description:
              "Shot lighting, render layers and compositing for a consistent final image.",
          },
          {
            title: "Real-time Pipelines",
            code: "SY02",
            credits: 30,
            description:
              "Taking assets into Unreal for virtual production and interactive work.",
          },
          {
            title: "Production Project",
            code: "SY03",
            credits: 30,
            description:
              "A team-made short or cinematic, run to a studio schedule.",
          },
          {
            title: "Showreel & Industry Practice",
            code: "SY04",
            credits: 30,
            description:
              "Cutting a reel that gets you a first interview, and preparing for it.",
          },
        ],
      },
    ],
    careers: [
      "3D modeller",
      "Character or environment artist",
      "Lighting artist",
      "Technical animator",
      "Virtual production artist",
    ],
    entryRequirements: [
      "Two A-levels at grade C or above, or an equivalent Level 3 qualification",
      "A portfolio or reel showing drawing, 3D or animation work",
      "GCSE English at grade 4 or above",
    ],
    faqs: [
      {
        question: "Do I need to be able to draw?",
        answer:
          "It helps and it is taught, but it is not an entry requirement. Strong spatial reasoning matters more.",
      },
      {
        question: "What computer do I need at home?",
        answer:
          "None — the labs are open seven days a week. If you want to work at home, we publish a recommended spec at enrolment.",
      },
      {
        question: "Is there a games route?",
        answer:
          "Yes. From the second term you can weight your projects towards games, and several units are shared with Game Art & Design.",
      },
    ],
  },
  {
    slug: "game-art-design",
    title: "BA (Hons) Games Art & Design",
    summary:
      "Concept, asset production and level design, shipped as playable builds every single term.",
    schoolId: "media-technology",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time",
    intakes: ["September"],
    tuition: "£9,750 per year",
    location: "Camden Campus",
    awardingBody: "Ravensbourne University London",
    cardImage: "/images/courses/course-4.jpg",
    gallery: [
      { caption: "Playtest night, Studio C" },
      { caption: "Level blockout review" },
      { caption: "Concept art wall, second year" },
    ],
    overview: [
      "Game Art & Design is built around shipping. Every term ends with a playable build in front of players who are not your classmates, and the feedback from that session feeds the next term's brief.",
      "You will work in Unreal and Unity, in mixed teams with designers, artists and, where projects need them, students from the development course.",
    ],
    highlights: [
      "A playable build delivered every term",
      "Public playtest nights each half term",
      "Unreal and Unity taught side by side",
      "Game jam weekend with visiting studios",
    ],
    stats: [
      { label: "Builds shipped per student", value: "6" },
      { label: "Playtest nights a year", value: "8" },
      { label: "Average class size", value: "24" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Concept & Visual Development",
            code: "FY01",
            credits: 30,
            description:
              "Thumbnails, silhouettes and turning a loose idea into an art direction.",
          },
          {
            title: "Asset Production",
            code: "FY02",
            credits: 30,
            description:
              "Modelling and texturing to a budget, because real games have one.",
          },
          {
            title: "Level Design Fundamentals",
            code: "FY03",
            credits: 30,
            description:
              "Blockouts, pacing and guiding a player without telling them where to go.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Systems & Balance",
            code: "SY01",
            credits: 30,
            description:
              "Designing mechanics that stay interesting after the first ten minutes.",
          },
          {
            title: "Team Production",
            code: "SY02",
            credits: 30,
            description:
              "Version control, sprints and shipping in a group with a hard deadline.",
          },
          {
            title: "Portfolio & Release",
            code: "SY03",
            credits: 30,
            description:
              "Storefront pages, trailers and getting a build in front of an audience.",
          },
        ],
      },
    ],
    careers: [
      "Environment artist",
      "Level designer",
      "Technical artist",
      "Game designer",
      "Indie developer",
    ],
    entryRequirements: [
      "Two A-levels at grade C or above, or an equivalent Level 3 qualification",
      "A portfolio, mod, or playable project of any size",
      "GCSE English at grade 4 or above",
    ],
    faqs: [
      {
        question: "Do I need to code?",
        answer:
          "Blueprint and visual scripting are taught from week one. Written code is optional and supported if you want it.",
      },
      {
        question: "Can I work solo on projects?",
        answer:
          "First-year projects are solo. Second-year production work is deliberately team-based, because that is how the industry hires.",
      },
    ],
  },
  {
    slug: "web-ux-development",
    title: "BA (Hons) Digital Media Design",
    summary:
      "Front-end craft and interface design in one course — research, prototype, then actually build it.",
    schoolId: "media-technology",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time / Part Time",
    intakes: ["January", "May", "September"],
    tuition: "£7,900 per year",
    location: "Camden Campus",
    awardingBody: "Ravensbourne University London",
    cardImage: "/images/courses/course-1.jpg",
    gallery: [
      { caption: "Usability testing lab" },
      { caption: "Component library crit" },
      { caption: "Final project demo day" },
    ],
    overview: [
      "BA (Hons) Digital Media Design is a single intensive year covering the two halves of the job that are usually taught apart: understanding what to build, and being able to build it.",
      "You finish with three shipped projects, a documented design system and a deployed portfolio site you wrote yourself.",
    ],
    highlights: [
      "Accessibility taught as a requirement, not an extra unit",
      "Real user testing sessions with recruited participants",
      "React and TypeScript from term two",
      "Everything deployed to a live URL and reviewed there",
    ],
    stats: [
      { label: "Projects shipped", value: "3" },
      { label: "Weeks", value: "36" },
      { label: "Average class size", value: "20" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Interface Foundations",
            code: "FY01",
            credits: 30,
            description:
              "HTML, CSS and layout that holds up on a phone, a laptop and a screen reader.",
          },
          {
            title: "Research & Discovery",
            code: "FY02",
            credits: 30,
            description:
              "Interviews, journey mapping and deciding what is worth building.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Component Systems",
            code: "SY01",
            credits: 30,
            description:
              "React, TypeScript and a design system you keep using for the rest of the course.",
          },
          {
            title: "Prototyping & Testing",
            code: "SY02",
            credits: 30,
            description:
              "Figma prototypes, moderated tests and acting on what you learn from them.",
          },
        ],
      },
      {
        term: "Third Year",
        units: [
          {
            title: "Full Project Build",
            code: "TY01",
            credits: 30,
            description:
              "A complete product, from research through to a deployed application.",
          },
          {
            title: "Professional Practice",
            code: "TY02",
            credits: 30,
            description:
              "Estimating, handover, code review and working with a client who changes their mind.",
          },
        ],
      },
    ],
    careers: [
      "Front-end developer",
      "UX designer",
      "UI designer",
      "Product designer",
      "Design technologist",
    ],
    entryRequirements: [
      "One A-level at grade C or above, or equivalent experience",
      "A short written statement — no portfolio required",
      "GCSE English at grade 4 or above",
    ],
    faqs: [
      {
        question: "Is this a coding bootcamp?",
        answer:
          "No. Bootcamps teach you to build; this course also teaches you to decide what to build, which is the part that keeps you employed.",
      },
      {
        question: "Can I study part-time while working?",
        answer:
          "Yes — the part-time route runs over two years with two evening sessions a week plus one Saturday a month.",
      },
    ],
  },
  {
    slug: "fashion-design",
    title: "BA (Hons) Fashion Design",
    summary:
      "Pattern cutting, construction and collection development, finishing on the runway at the annual show.",
    schoolId: "fashion-styling",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time",
    intakes: ["September"],
    tuition: "£9,400 per year",
    location: "Canary Wharf",
    awardingBody: "Arts University Plymouth",
    cardImage: "/images/courses/course-2.jpg",
    featured: true,
    gallery: [
      { caption: "Sample room, second floor" },
      { caption: "Toile fitting, year two" },
      { caption: "Annual runway show" },
      { caption: "Digital print studio" },
    ],
    overview: [
      "BA (Hons) Fashion Design teaches the whole garment: how it is drawn, cut, fitted, costed and finally shown. The technical units are not optional extras here — a design you cannot make is not finished.",
      "The second year is spent developing a six-look collection, shown on the runway at the end of the summer term to an audience that includes buyers and press.",
    ],
    highlights: [
      "Industrial sample room with overlockers and a steam press",
      "Digital print and dye studio",
      "Six-look graduate collection shown on the runway",
      "Costing and production planning taught alongside design",
    ],
    stats: [
      { label: "Graduate employment", value: "86%" },
      { label: "Looks in final collection", value: "6" },
      { label: "Average class size", value: "16" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Pattern Cutting",
            code: "FY01",
            credits: 30,
            description:
              "Blocks, drafting and adaptation, from the flat pattern to the stand.",
          },
          {
            title: "Garment Construction",
            code: "FY02",
            credits: 30,
            description:
              "Industrial machining, finishing and the tolerances that separate sample from product.",
          },
          {
            title: "Textiles & Surface",
            code: "FY03",
            credits: 30,
            description:
              "Fibre behaviour, print, dye and choosing cloth that suits the design.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Collection Development",
            code: "SY01",
            credits: 30,
            description:
              "Research, range planning and editing an idea down to six coherent looks.",
          },
          {
            title: "Production & Costing",
            code: "SY02",
            credits: 30,
            description:
              "Tech packs, grading and what a garment actually costs to make at volume.",
          },
          {
            title: "Runway & Presentation",
            code: "SY03",
            credits: 30,
            description:
              "Fittings, styling and putting a collection in front of an audience.",
          },
        ],
      },
    ],
    careers: [
      "Fashion designer",
      "Pattern cutter",
      "Garment technologist",
      "Production assistant",
      "Studio sample machinist",
    ],
    entryRequirements: [
      "Two A-levels at grade C or above, or an equivalent Level 3 qualification",
      "A portfolio including drawing and, if you have it, made work",
      "GCSE English at grade 4 or above",
    ],
    faqs: [
      {
        question: "Do I need to sew before I start?",
        answer:
          "No. Construction is taught from the first week and around half of each intake arrives having never used an industrial machine.",
      },
      {
        question: "What does the final collection cost?",
        answer:
          "Budget roughly £400–£600 for fabric and trims across the six looks. A hardship fund is available and genuinely used.",
      },
    ],
  },
  {
    slug: "professional-photography",
    title: "BA (Hons) Photography",
    summary:
      "Studio lighting, location work and post-production, taught towards a commissionable portfolio.",
    schoolId: "media-technology",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time / Part Time",
    intakes: ["January", "September"],
    tuition: "£7,600 per year",
    location: "Kensington Campus",
    awardingBody: "Arts University Plymouth",
    cardImage: "/images/courses/course-3.jpg",
    gallery: [
      { caption: "Main studio, three-head setup" },
      { caption: "Darkroom, analogue elective" },
      { caption: "Location shoot, harbour" },
    ],
    overview: [
      "Professional Photography is a working-practice course. You shoot every week, you edit every week, and you show the results to a room that will tell you the truth about them.",
      "By the end of the year you have a portfolio built around one clear specialism, plus the business basics to take a commission without underpricing it.",
    ],
    highlights: [
      "Three studios with bookable lighting kit",
      "Full-frame bodies and lenses available to borrow",
      "Darkroom available as an elective strand",
      "Pricing, licensing and contracts taught properly",
    ],
    stats: [
      { label: "Studio spaces", value: "3" },
      { label: "Shoots per student", value: "20+" },
      { label: "Average class size", value: "18" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Camera & Exposure",
            code: "FY01",
            credits: 30,
            description:
              "Manual control, metering and getting the file right before you edit it.",
          },
          {
            title: "Studio Lighting",
            code: "FY02",
            credits: 30,
            description:
              "One, two and three-head setups for portrait, product and still life.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Location & Documentary",
            code: "SY01",
            credits: 30,
            description:
              "Working with available light, access and the ethics of photographing people.",
          },
          {
            title: "Post-Production",
            code: "SY02",
            credits: 30,
            description:
              "Raw processing, retouching and a colour-managed workflow end to end.",
          },
        ],
      },
      {
        term: "Third Year",
        units: [
          {
            title: "Specialist Portfolio",
            code: "TY01",
            credits: 30,
            description:
              "A focused body of work in the area you intend to be commissioned for.",
          },
          {
            title: "Business of Photography",
            code: "TY02",
            credits: 30,
            description:
              "Rates, licensing, contracts and finding the first paying client.",
          },
        ],
      },
    ],
    careers: [
      "Commercial photographer",
      "Portrait photographer",
      "Photo retoucher",
      "Studio assistant",
      "Picture editor",
    ],
    entryRequirements: [
      "No formal qualifications required",
      "A selection of 10–15 images, phone photographs accepted",
      "GCSE English at grade 4 or above, or an equivalent assessment",
    ],
    faqs: [
      {
        question: "Do I need my own camera?",
        answer:
          "Not to start. Kit is available to borrow for the whole year, though most students buy a body by the second term.",
      },
      {
        question: "Is film photography covered?",
        answer:
          "Yes, as an elective strand in term two. The darkroom is open to all students on the course.",
      },
    ],
  },
  {
    slug: "business-management",
    title: "CertHE Business & Management",
    summary:
      "Producing, marketing and running creative work as a business that pays the people making it.",
    schoolId: "creative-business",
    credential: "CertHE",
    durationMonths: 12,
    studyMode: "Full Time / Part Time",
    intakes: ["January", "September"],
    tuition: "£7,200 per year",
    location: "Canary Wharf",
    awardingBody: "Arts University Plymouth",
    cardImage: "/images/courses/course-4.jpg",
    gallery: [
      { caption: "Pitch practice, seminar room 2" },
      { caption: "Industry panel, spring term" },
      { caption: "Student-run exhibition launch" },
    ],
    overview: [
      "CertHE Business & Management is for people who want to run the studio, produce the project or represent the work. It sits alongside the practice courses, and many of its projects are delivered with them.",
      "You will produce at least two real events or campaigns for other students' work, with a budget you are accountable for.",
    ],
    highlights: [
      "Two live productions with real budgets",
      "Delivered jointly with the practice courses",
      "Freelance and small-studio finance taught in detail",
      "Industry mentor assigned in the second term",
    ],
    stats: [
      { label: "Live productions", value: "2" },
      { label: "Industry mentors", value: "1:1" },
      { label: "Average class size", value: "22" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "The Creative Economy",
            code: "FY01",
            credits: 30,
            description:
              "How the sector is structured, who pays for what, and where the money moves.",
          },
          {
            title: "Project & Production Management",
            code: "FY02",
            credits: 30,
            description:
              "Scheduling, budgeting and delivering when the work is unpredictable by nature.",
          },
          {
            title: "Marketing & Audience",
            code: "FY03",
            credits: 30,
            description:
              "Finding an audience for creative work and speaking to it honestly.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Finance for Creative Businesses",
            code: "SY01",
            credits: 30,
            description:
              "Cash flow, pricing and the accounts a freelancer or small studio actually needs.",
          },
          {
            title: "Contracts, Rights & Licensing",
            code: "SY02",
            credits: 30,
            description:
              "IP, usage and negotiating terms without giving the work away.",
          },
          {
            title: "Capstone Production",
            code: "SY03",
            credits: 30,
            description:
              "A full event or campaign, produced end to end with a real budget.",
          },
        ],
      },
    ],
    careers: [
      "Creative producer",
      "Studio manager",
      "Marketing executive",
      "Arts administrator",
      "Freelance project manager",
    ],
    entryRequirements: [
      "One A-level at grade C or above, or equivalent experience",
      "A written statement of interest",
      "GCSE English and Maths at grade 4 or above",
    ],
    faqs: [
      {
        question: "Do I need a creative practice of my own?",
        answer:
          "No, and many students do not have one. What you need is genuine interest in the work other people make.",
      },
      {
        question: "Is a placement included?",
        answer:
          "The capstone production functions as one, and around a third of students arrange an additional external placement with support from the course team.",
      },
    ],
  },
  {
    slug: "fashion-media-marketing",
    title: "BA (Hons) Fashion Media and Marketing",
    summary:
      "Campaign, content and brand storytelling for fashion — the commercial half of the industry.",
    schoolId: "fashion-styling",
    credential: "BA (Hons)",
    durationMonths: 36,
    studyMode: "Full Time / Part Time",
    intakes: ["January", "September"],
    tuition: "£9,250 per year",
    location: "Kensington Campus",
    awardingBody: "Arts University Plymouth",
    cardImage: "/images/courses/course-1.jpg",
    gallery: [
      { caption: "Campaign shoot, Studio 2" },
      { caption: "Editorial layout crit" },
      { caption: "Trend forecasting workshop" },
    ],
    overview: [
      "BA (Hons) Fashion Media and Marketing sits between the studio and the market. You will build campaigns, shoot and edit the content that carries them, and learn to argue for the work in commercial terms.",
      "Projects run with the design courses wherever possible, so the collections you promote are real ones made by people you can talk to.",
    ],
    highlights: [
      "Live campaigns built around graduate collections",
      "Content production taught alongside strategy",
      "Trend forecasting and consumer research",
      "Industry mentor assigned in the second year",
    ],
    stats: [
      { label: "Graduate employment", value: "89%" },
      { label: "Live campaigns", value: "3" },
      { label: "Average class size", value: "20" },
    ],
    modules: [
      {
        term: "Foundation Year",
        units: [
          {
            title: "Fundamentals",
            code: "FD01",
            credits: 30,
            description:
              "An introduction to creative practice across theoretical, practical and technical components, with the study skills the rest of the course assumes.",
          },
          {
            title: "Thinking Through Making",
            code: "FD02",
            credits: 30,
            description:
              "Material experiment as a way of thinking — testing ideas by building them rather than describing them.",
          },
          {
            title: "Developing Specialist Practice",
            code: "FD03",
            credits: 30,
            description:
              "Narrowing towards a discipline, with workshops across every specialism the college teaches before you commit.",
          },
          {
            title: "Specialist Project",
            code: "FD04",
            credits: 30,
            description:
              "A self-directed project in your chosen specialism, assessed as the bridge into first year.",
          },
        ],
      },
      {
        term: "First Year",
        units: [
          {
            title: "Fashion Communication",
            code: "FY01",
            credits: 30,
            description:
              "How a brand speaks, and how a campaign carries an idea to the person buying it.",
          },
          {
            title: "Content Production",
            code: "FY02",
            credits: 30,
            description:
              "Shooting, editing and art directing for social, editorial and e-commerce.",
          },
          {
            title: "Consumer & Market",
            code: "FY03",
            credits: 30,
            description:
              "Segmentation, trend forecasting and reading a market that changes every season.",
          },
        ],
      },
      {
        term: "Second Year",
        units: [
          {
            title: "Campaign Strategy",
            code: "SY01",
            credits: 30,
            description:
              "Planning, budgeting and measuring a campaign from brief through to results.",
          },
          {
            title: "Digital & Retail Marketing",
            code: "SY02",
            credits: 30,
            description:
              "E-commerce, paid channels and the physical store as a marketing surface.",
          },
          {
            title: "Final Campaign",
            code: "SY03",
            credits: 30,
            description:
              "A full campaign for a graduate collection, presented to an industry panel.",
          },
        ],
      },
    ],
    careers: [
      "Fashion marketing executive",
      "Content producer",
      "Brand manager",
      "Fashion PR assistant",
      "Social media strategist",
    ],
    entryRequirements: [
      "Two A-levels at grade C or above, or an equivalent Level 3 qualification",
      "A written statement of interest — no portfolio required",
      "GCSE English at grade 4 or above",
    ],
    faqs: [
      {
        question: "Do I need to be able to design?",
        answer:
          "No. You will learn enough visual craft to art direct confidently, but this is a marketing and communication course, not a design one.",
      },
      {
        question: "Is a placement included?",
        answer:
          "The second-year campaign runs with an external partner, and around half of each cohort arranges an additional placement with support from the course team.",
      },
    ],
  },
];

export function formatDuration(months: number): string {
  if (months % 12 === 0) {
    const years = months / 12;
    return `${years} ${years === 1 ? "year" : "years"}`;
  }
  return `${months} months`;
}
