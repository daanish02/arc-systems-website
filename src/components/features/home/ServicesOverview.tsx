import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <Section divider>
      <div className="text-center mb-16">
        <h2 className="mb-4">Our Services</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Expert AI, machine learning, and data science solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <Card key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-accent-red">{service.title}</h3>
            <p className="text-white/70 mb-6">{service.shortDescription}</p>
            <ul className="space-y-2 text-white/60 text-sm">
              {service.whatWeBuild.slice(0, 5).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent-red mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg" href="/services">
          Explore Our Services
        </Button>
        <p className="text-white/60 text-sm mt-6">
          Need something else? We may be able to help through strategic partnerships.{" "}
          <a href="/contact" className="text-accent-red hover:underline">
            Contact us
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
