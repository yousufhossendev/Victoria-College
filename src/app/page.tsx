import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import {
  CourseExplorer,
  CourseExplorerSkeleton,
} from "@/components/home/CourseExplorer";
import { CampusSection } from "@/components/home/CampusSection";
import { Partners } from "@/components/home/Partners";
import { QuotePanel } from "@/components/home/QuotePanel";
import { Stories } from "@/components/home/Stories";
import { Testimonials } from "@/components/home/Testimonials";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<CourseExplorerSkeleton />}>
        <CourseExplorer />
      </Suspense>
      <QuotePanel />
      <CampusSection />
      <Testimonials />
      <Partners />
      <Stories />
    </>
  );
}
