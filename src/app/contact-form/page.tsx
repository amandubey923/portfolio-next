import ContactFormComponent from "@/components/shared/ContactFormComponent";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ContactFormPage() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto py-16 md:py-24 px-4 sm:px-6">
      <SectionHeading
        tag="// DIRECT MESSAGE"
        title="Direct"
        highlight="Communication"
        description="Have a question, software opportunity, or project idea? Send a transmission directly to my inbox."
        align="center"
      />

      <div className="max-w-2xl mx-auto">
        <ContactFormComponent />
      </div>
    </section>
  );
}