import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <span className="eyebrow text-accent">404</span>
        <h1 className="mt-5 max-w-2xl text-page-title">We could not find that page</h1>
        <p className="mt-5 max-w-md text-body text-pale-blue/70">
          The link may be out of date. The full course list is the best place to pick things up
          again.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ActionLink href="/courses" withArrow>
            Explore our courses
          </ActionLink>
          <ActionLink href="/" variant="secondary">
            Back to the homepage
          </ActionLink>
        </div>
      </div>
    </Container>
  );
}
