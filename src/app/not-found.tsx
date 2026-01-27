import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-accent-red mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-white/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="/">
            Go Home
          </Button>
          <Button variant="outline" size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
