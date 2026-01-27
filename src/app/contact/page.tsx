"use client";

import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { faqs } from "@/data/faqs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
    description: "",
    referral: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send to Google Sheets
      const googleSheetsUrl = siteConfig.integrations.googleSheetsWebAppUrl;

      if (!googleSheetsUrl) {
        throw new Error("Google Sheets integration not configured");
      }

      const response = await fetch(googleSheetsUrl, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // no-cors means we can't read the response, but if no error thrown, it succeeded
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        timeline: "",
        description: "",
        referral: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setSubmitError(
        "There was an error submitting the form. Please try emailing us directly at " +
        siteConfig.company.email
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Section className="min-h-[90vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl text-white/70 mb-8">
            Whether you have an idea in mind, need technical consultation, or
            just want to explore possibilities - we are here to help.
          </p>

          {/* WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppLink(siteConfig.whatsappMessages.fromContact)}
              className="inline-flex items-center gap-3"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </Button>
            <span className="text-white/50">or fill the form below</span>
          </div>
        </div>
      </Section>

      <Section divider>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-power-red hover:underline"
                  >
                    {siteConfig.company.email}
                  </a>
                  <p className="text-sm text-white/70 mt-1">
                    {/* Average response within 4 hours */}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-white/70">{siteConfig.company.location}</p>
                  <p className="text-sm text-white/70 mt-1">
                    Time Zone: {siteConfig.company.timezone}
                  </p>
                </div>

                {/* Business Hours - Commented Out */}
                {/*
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-white/70">{siteConfig.company.businessHours}</p>
                </div>
                */}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

              {submitError && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
                  <p className="text-white/90">{submitError}</p>
                </div>
              )}

              {submitSuccess ? (
                <div className="bg-accent-red/20 border border-accent-red rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-white/70">
                    We'll respond as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="AE"
                      value={formData.phone}
                      onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                      required
                      className="phone-input-dark"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 font-medium">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block mb-2 font-medium"
                      >
                        Project Type *
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pr-10 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors appearance-none cursor-pointer text-white"
                          style={{
                            colorScheme: 'dark',
                          }}
                        >
                          <option value="">Select</option>
                          <option value="ai-auto">AI Chatbots & Automation </option>
                          <option value="ml-predictive">ML & Predictive Analytics</option>
                          <option value="mvp">MVP & Prototyping</option>
                          <option value="data-mining">Data Mining & BI</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/70">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block mb-2 font-medium"
                      >
                        Timeline *
                      </label>
                      <div className="relative">
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pr-10 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors appearance-none cursor-pointer text-white"
                          style={{
                            colorScheme: 'dark',
                          }}
                        >
                          <option value="">Select</option>
                          <option value="urgent">Urgent {"(<1 month)"}</option>
                          <option value="soon">Soon (1-3 months)</option>
                          <option value="planning">Planning (3+ months)</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/70">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 font-medium"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="referral" className="block mb-2 font-medium">
                      How did you hear about us? *
                    </label>
                    <div className="relative">
                      <select
                        id="referral"
                        name="referral"
                        required
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-10 bg-black border border-medium-grey rounded-lg focus:outline-none focus:border-power-red transition-colors appearance-none cursor-pointer text-white"
                        style={{
                          colorScheme: 'dark',
                        }}
                      >
                        <option value="">Select</option>
                        <option value="search-engine">Search Engine (Google, etc.)</option>
                        <option value="linkedin">LinkedIn Post or Profile</option>
                        <option value="referral">Referred by Someone</option>
                        <option value="social-media">Social Media (Twitter, Instagram, etc.)</option>
                        <option value="event">Event or Conference</option>
                        <option value="article">Article or Blog Post</option>
                        <option value="portfolio">Portfolio/Previous Work</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/70">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>

                  <p className="text-sm text-white/70 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* Discovery Call Section */}
      <Section>
        <Card className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Schedule a Discovery Call</h2>

          <p className="text-xl text-white/70 mb-6">
            The best way to start is with a <span className="text-accent-red">complimentary</span> 30-45 minute discovery session where we:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Learn about your business objectives and project vision",
              "Explore technical possibilities and potential approaches",
              "Discuss timeline expectations and project scope",
              "Understand your team and technical environment",
              "Answer questions about our process and how we work",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-accent-red mr-3">•</span>
                <span className="text-white/70">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-white/70 mb-6">
            No pressure, no obligations, just an honest conversation about your project and how Arc Systems might help bring it to life.
          </p>

          <div className="flex justify-center sm:justify-start">
            <Button variant="primary" size="lg" href="mailto:hello@archsystems.tech">
              Schedule a Discovery Call
            </Button>
          </div>
        </Card>
      </Section>

      {/* FAQ Section */}
      <Section divider>
        <h2 className="mb-12 text-center">Frequently Asked Questions</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-white/70">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="mb-6">Let's build something innovative together</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="mailto:hello@archsystems.tech">
              Let's Discuss
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
