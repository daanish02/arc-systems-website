import Link from "next/link";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = services.map(s => ({
    name: s.title,
    href: `/services#${s.id}`
  }));

  const company = [
    { name: "About Us", href: "/about" },
    // { name: "Projects", href: "/projects" }, // Temporarily hidden
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-dark-grey border-t border-border-grey">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo-white.svg"
              alt="Arc Systems"
              className="h-10 w-auto mb-4"
            />
            <span className="text-white">{siteConfig.company.tagline}</span>
            <p className="text-white/70 mb-4 max-w-md">
              Building production-ready AI and data systems.
            </p>
            <div className="space-y-2 text-white/70">
              <p>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-power-red hover:underline transition-colors"
                >
                  {siteConfig.company.email}
                </a>
              </p>
              <p>{siteConfig.company.location}</p>
              {/* <p className="text-sm">{siteConfig.company.businessHoursFull}</p> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent-red transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-accent-red transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-grey mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>&copy; {currentYear} Arc Systems. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Crafted with precision. Powered by expertise.
          </p>
        </div>
      </div>
    </footer>
  );
}
