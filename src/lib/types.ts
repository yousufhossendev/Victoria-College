export type SchoolId =
  | "design"
  | "media-technology"
  | "fashion-styling"
  | "creative-business";

export interface School {
  id: SchoolId;
  name: string;
  /** Short label used inside card badges where the full name does not fit. */
  shortName: string;
  description: string;
}

export interface CourseModuleUnit {
  title: string;
  /** Module code as printed in the handbook, e.g. FD01. */
  code: string;
  credits: number;
  description: string;
}

export interface CourseModule {
  /** Year of study — drives the year tabs on the course structure panel. */
  term: string;
  units: CourseModuleUnit[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface CourseStat {
  label: string;
  value: string;
}

export interface Course {
  slug: string;
  title: string;
  /** One line under the title on cards. */
  summary: string;
  schoolId: SchoolId;
  credential: string;
  durationMonths: number;
  studyMode: "Full Time" | "Part Time" | "Full Time / Part Time";
  intakes: string[];
  tuition: string;
  /** Campus the course is taught at. */
  location: string;
  /** Partner institution that awards the qualification. */
  awardingBody: string;
  /**
   * Media is referenced by path only. Files are not committed — see README.
   * A missing file degrades to a branded placeholder rather than a broken image.
   */
  cardImage?: string;
  heroImage?: string;
  gallery: { src?: string; caption: string }[];
  /** Promotes a course into the large feature slot of the asymmetric grid. */
  featured?: boolean;
  overview: string[];
  highlights: string[];
  stats: CourseStat[];
  modules: CourseModule[];
  careers: string[];
  entryRequirements: string[];
  /**
   * Overrides the conventional `/downloads/<slug>-specification.pdf` path used
   * by the download panel. Set it when a course's PDF lives somewhere else.
   */
  specificationUrl?: string;
  faqs: CourseFaq[];
}

export interface CourseQuery {
  school?: SchoolId | "all";
  q?: string;
}
