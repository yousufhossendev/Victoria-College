/**
 * Admissions content is college policy rather than course content, so it lives
 * here once instead of being repeated across every course. The course's own
 * `entryRequirements` are injected into the first section at render time, which
 * keeps the course-specific part with the course.
 */
export type AdmissionBlock =
  | { type: "text"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] };

export interface AdmissionSection {
  title: string;
  blocks: AdmissionBlock[];
}

export interface AdmissionGroup {
  id: string;
  label: string;
  sections: AdmissionSection[];
}

export const admissionsSection = {
  heading: "Admissions & Key Details",
  subheading: "Everything you need to know about applying and studying",
} as const;

/**
 * The download panel under the admissions block. Copy is the same for every
 * course; only the file behind it changes, which is why the link is built from
 * the course rather than stored here.
 */
export const specificationPanel = {
  heading: "Course Specification",
  body: "Download the full course specification for detailed information.",
  cta: "Download PDF",
} as const;

/** Where a course's specification PDF is expected to live. */
export function specificationHref(slug: string): string {
  return `/downloads/${slug}-specification.pdf`;
}

export const admissionGroups: AdmissionGroup[] = [
  {
    id: "entry-requirements",
    label: "Entry Requirements",
    sections: [
      {
        title: "Standard Academic Route",
        blocks: [
          {
            type: "text",
            text: "72 UCAS tariff points (or above) or 60 Credit Ofqual qualification at Level 3.",
          },
          {
            type: "list",
            items: [
              "For international qualifications, ECCTIS (formerly NARIC) will be used to establish equivalence to their comparable level in the UK.",
            ],
          },
          {
            type: "lead",
            text: "All applicants must submit a personal ‘portfolio’, using any one of the following formats",
          },
          {
            type: "list",
            items: [
              "A video or audio recording; using speech, animation, images, or any other appropriate content the candidate wishes. The video must be no less than one minute and no more than two minutes in length.",
              "A digital portfolio of images and writing using Word, Canva, PowerPoint or any other suitable software of the applicant’s choice.",
            ],
          },
          {
            type: "text",
            text: "In the portfolio, applicants should clearly evidence and explain the reasons they wish to study their chosen subject and how they believe their studies can positively impact their lives in the future.",
          },
        ],
      },
      {
        title: "Non-standard Academic Route",
        blocks: [
          {
            type: "text",
            text: "Applicants without the standard tariff points are assessed individually. Relevant work experience, a strong portfolio and a clear statement of purpose can all carry weight in place of formal qualifications.",
          },
          {
            type: "lead",
            text: "We will normally ask for one of the following",
          },
          {
            type: "list",
            items: [
              "Two years of relevant professional or freelance experience, evidenced in the portfolio.",
              "Completion of a recognised access course in art, design or a related subject.",
              "A successful interview with the course leader, following portfolio review.",
            ],
          },
          {
            type: "text",
            text: "Applicants over 21 may apply on the strength of portfolio and experience alone. Speak to admissions before applying and we will tell you honestly where you stand.",
          },
        ],
      },
      {
        title: "Documents Required",
        blocks: [
          {
            type: "list",
            items: [
              "Photographic ID — passport, or driving licence with a birth certificate.",
              "Certificates or transcripts for the qualifications listed on your application.",
              "Proof of address dated within the last three months.",
              "Your portfolio, in one of the accepted formats above.",
              "For international applicants, a valid visa or share code confirming your right to study.",
            ],
          },
          {
            type: "text",
            text: "Copies are accepted at application stage. Originals are checked at enrolment.",
          },
        ],
      },
      {
        title: "Additional Info",
        blocks: [
          {
            type: "text",
            text: "Applications are reviewed on a rolling basis and we aim to respond within five working days. Popular courses fill before the intake date, so applying early materially improves your chances of a place.",
          },
          {
            type: "list",
            items: [
              "There is no application fee.",
              "You may hold offers for two VCAD courses at the same time.",
              "Deferring an offer to the next intake is possible and does not affect your standing.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "english-language",
    label: "English Language Requirements",
    sections: [
      {
        title: "Accepted Qualifications",
        blocks: [
          {
            type: "text",
            text: "Where English is not your first language, you will need to evidence your level before enrolment.",
          },
          {
            type: "list",
            items: [
              "IELTS 6.0 overall, with no component below 5.5.",
              "Pearson PTE Academic 59, with no component below 51.",
              "GCSE English Language at grade 4 or above.",
              "A previous qualification taught and assessed entirely in English.",
            ],
          },
        ],
      },
      {
        title: "Support While You Study",
        blocks: [
          {
            type: "text",
            text: "Every student has access to academic English support for the whole course, at no extra cost.",
          },
          {
            type: "list",
            items: [
              "Weekly drop-in sessions for writing and presentation practice.",
              "One-to-one tutorials ahead of written submissions.",
              "Crit preparation, so that speaking about your work is practised rather than improvised.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "additional-info",
    label: "Additional Info",
    sections: [
      {
        title: "Fees and Funding",
        blocks: [
          {
            type: "text",
            text: "Tuition is payable per year of study and can be spread across the year by instalment. Most UK students fund their course through Student Finance England.",
          },
          {
            type: "list",
            items: [
              "Instalment plans are interest-free and arranged at enrolment.",
              "A hardship fund is available for materials and equipment costs.",
              "Scholarships are awarded on portfolio strength, not household income alone.",
            ],
          },
        ],
      },
      {
        title: "Accessibility and Support",
        blocks: [
          {
            type: "text",
            text: "Tell us what you need and we will arrange it before you start rather than after you struggle.",
          },
          {
            type: "list",
            items: [
              "Step-free access to every studio and workshop.",
              "Assessment adjustments arranged through the learning support team.",
              "Named contact for the duration of your course.",
            ],
          },
        ],
      },
      {
        title: "After You Apply",
        blocks: [
          {
            type: "text",
            text: "You will hear from a named admissions tutor within five working days, and they stay with you through offer, funding and enrolment.",
          },
        ],
      },
    ],
  },
];
