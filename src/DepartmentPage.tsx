import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Clock3,
  Droplets, // NEW: Dialysis icon
  FileText,
  FlaskConical,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import "./DepartmentPage.css";

type DepartmentInfo = {
  number: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  overview: string;
  icon: typeof Siren;
  hours?: string;
  hoursNote?: string;
  services: { title: string; description: string }[];
  guidance: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const departments: Record<string, DepartmentInfo> = {
  emergency: {
    number: "01",
    title: "Emergency Department",
    eyebrow: "URGENT CARE & EMERGENCY SUPPORT",
    shortDescription:
      "Information for patients and families seeking emergency assistance at Twin Care Hospital.",
    overview:
      "The Emergency Department page is designed to help patients and accompanying family members find essential hospital information. For a medical emergency, seek immediate assistance from hospital personnel.",
    icon: Siren,
    hours: "Open 24 hours",
    hoursNote:
      "Emergency Room availability was confirmed by the hospital information provided for this website.",
    services: [
      {
        title: "Emergency assistance",
        description:
          "For urgent medical concerns, proceed to the hospital and ask staff for immediate assistance.",
      },
      {
        title: "Patient and family guidance",
        description:
          "Hospital personnel can guide patients and accompanying family members through the next steps.",
      },
      {
        title: "Related hospital services",
        description:
          "Depending on the patient's needs, hospital staff can advise which additional services may be required.",
      },
    ],
    guidance: [
      {
        title: "If the situation is urgent",
        description:
          "Go to the Emergency Room or contact local emergency services if transport is unsafe.",
      },
      {
        title: "Bring available information",
        description:
          "If readily available, bring identification, current medication details, allergies, and relevant medical records. Do not delay urgent care to collect documents.",
      },
      {
        title: "Ask hospital staff",
        description:
          "For current procedures, fees, and admission requirements, please ask the hospital team directly.",
      },
    ],
    faqs: [
      {
        question: "Is the Emergency Room open 24/7?",
        answer:
          "The hospital information provided for this website confirms that the Emergency Room operates 24 hours a day.",
      },
      {
        question: "What should I bring?",
        answer:
          "If available, bring identification and relevant medical information. Do not delay urgent care to gather paperwork.",
      },
      {
        question: "Can this website assess an emergency?",
        answer:
          "No. This page provides general hospital information and cannot assess symptoms or replace emergency medical care.",
      },
    ],
  },

  outpatient: {
    number: "02",
    title: "Outpatient Department",
    eyebrow: "OUTPATIENT SERVICES",
    shortDescription:
      "Find general guidance for patients planning an outpatient visit to Twin Care Hospital.",
    overview:
      "The Outpatient Department page will provide approved information about clinic services, appointments, and visit preparation. Clinic availability and schedules should be confirmed directly with the hospital.",
    icon: Stethoscope,
    services: [
      {
        title: "Clinic information",
        description:
          "Check with the hospital for current clinic availability and the services offered.",
      },
      {
        title: "Visit preparation",
        description:
          "Prepare any relevant identification, referral, or previous medical records if applicable.",
      },
      {
        title: "Schedule confirmation",
        description:
          "Contact the hospital before visiting to confirm clinic schedules and requirements.",
      },
    ],
    guidance: [
      {
        title: "Confirm clinic schedules",
        description:
          "OPD hours and doctor schedules have not yet been confirmed for publication. Please contact the hospital before your visit.",
      },
      {
        title: "Prepare your information",
        description:
          "Bring relevant medical records and a list of current medicines if available.",
      },
      {
        title: "Ask about requirements",
        description:
          "Confirm appointment, registration, and payment requirements with hospital staff.",
      },
    ],
    faqs: [
      {
        question: "What time is the OPD open?",
        answer:
          "The OPD schedule has not yet been confirmed for this website. Please contact the hospital for current hours.",
      },
      {
        question: "Do I need an appointment?",
        answer:
          "Appointment requirements may vary. Please confirm directly with the hospital before visiting.",
      },
      {
        question: "What should I bring?",
        answer:
          "If applicable, bring identification, previous medical records, referral documents, and current medication information.",
      },
    ],
  },

  laboratory: {
    number: "03",
    title: "Laboratory Department",
    eyebrow: "LABORATORY SERVICES",
    shortDescription:
      "General information for patients who need laboratory testing at Twin Care Hospital.",
    overview:
      "The Laboratory Department page provides a starting point for patients who need information about laboratory testing. Specific tests, preparation instructions, result-release procedures, and fees should be confirmed with hospital staff.",
    icon: FlaskConical,
    hours: "Open 24 hours",
    hoursNote:
      "Laboratory availability was confirmed by the hospital information provided for this website. Individual tests may have specific requirements.",
    services: [
      {
        title: "Laboratory testing information",
        description:
          "Ask the laboratory or attending healthcare professional which tests are available and required.",
      },
      {
        title: "Preparation instructions",
        description:
          "Some tests may require preparation. Follow the instructions given by your healthcare professional or the laboratory.",
      },
      {
        title: "Results and follow-up",
        description:
          "Ask hospital staff about result availability and how results should be discussed with your healthcare professional.",
      },
    ],
    guidance: [
      {
        title: "Check test requirements",
        description:
          "Confirm whether your requested test requires fasting, an appointment, or other preparation.",
      },
      {
        title: "Bring your request",
        description:
          "Bring your laboratory request or doctor's order, if one was provided.",
      },
      {
        title: "Confirm result release",
        description:
          "Ask the hospital about the approved process and expected timing for receiving results.",
      },
    ],
    faqs: [
      {
        question: "Is the laboratory open 24/7?",
        answer:
          "The hospital information provided for this website confirms 24-hour laboratory availability. Specific test availability may vary.",
      },
      {
        question: "Do all tests require fasting?",
        answer:
          "No single preparation rule applies to every test. Confirm instructions for your specific test with the laboratory or healthcare professional.",
      },
      {
        question: "When can I get my results?",
        answer:
          "Result timing depends on the test. Please ask laboratory staff for the expected release process.",
      },
    ],
  },

  radiology: {
    number: "04",
    title: "Radiology Department",
    eyebrow: "IMAGING SERVICES",
    shortDescription:
      "Find general guidance about imaging services and how to confirm availability at Twin Care Hospital.",
    overview:
      "This page is intended to help patients prepare for imaging visits. The hospital has confirmed X-ray availability for its 24-hour services; availability and schedules for other imaging procedures should be checked directly.",
    icon: ScanLine,
    hours: "X-ray service: 24 hours",
    hoursNote:
      "X-ray availability was confirmed by the hospital information provided for this website. Ultrasound hours have not yet been confirmed.",
    services: [
      {
        title: "X-ray information",
        description:
          "Ask hospital staff about the required request, preparation, and current procedure availability.",
      },
      {
        title: "Other imaging procedures",
        description:
          "Contact the hospital to confirm availability and schedules for ultrasound or any other requested imaging procedure.",
      },
      {
        title: "Preparation guidance",
        description:
          "Preparation varies by procedure. Follow the instructions provided by hospital personnel.",
      },
    ],
    guidance: [
      {
        title: "Bring the request",
        description:
          "Bring your doctor's imaging request or referral, if applicable.",
      },
      {
        title: "Confirm the procedure",
        description:
          "Ask whether your specific procedure is available and whether an appointment is needed.",
      },
      {
        title: "Follow preparation instructions",
        description:
          "Some procedures may require special preparation. Confirm this with hospital staff before your visit.",
      },
    ],
    faqs: [
      {
        question: "Is X-ray available 24/7?",
        answer:
          "The hospital information provided for this website confirms 24-hour X-ray availability.",
      },
      {
        question: "Is ultrasound available at any time?",
        answer:
          "Ultrasound hours have not yet been confirmed for publication. Please contact the hospital.",
      },
      {
        question: "Do I need a doctor's request?",
        answer:
          "Requirements may depend on the procedure. Please confirm with the hospital before visiting.",
      },
    ],
  },

  pharmacy: {
    number: "05",
    title: "Pharmacy Department",
    eyebrow: "MEDICATION SERVICES",
    shortDescription:
      "General guidance for patients and families seeking pharmacy information at Twin Care Hospital.",
    overview:
      "The Pharmacy Department page helps visitors find basic information about pharmacy services. Medication availability, dispensing requirements, and other policies should be confirmed with the hospital pharmacy team.",
    icon: Pill,
    hours: "Open 24 hours",
    hoursNote:
      "Pharmacy availability was confirmed by the hospital information provided for this website. Specific medicine availability is not guaranteed.",
    services: [
      {
        title: "Medication availability",
        description:
          "Contact or visit the pharmacy to confirm whether a particular medicine is available.",
      },
      {
        title: "Prescription guidance",
        description:
          "Ask pharmacy personnel about prescription requirements for the medicine you need.",
      },
      {
        title: "Medication questions",
        description:
          "For questions about how to use a medicine, consult a qualified healthcare professional or pharmacist.",
      },
    ],
    guidance: [
      {
        title: "Bring your prescription",
        description:
          "Bring a valid prescription when required for the medicine you need.",
      },
      {
        title: "Confirm availability",
        description:
          "Medicine stocks can change. Contact the hospital to ask about a specific item.",
      },
      {
        title: "Follow professional advice",
        description:
          "Use medicines only as directed by your prescribing healthcare professional and pharmacist.",
      },
    ],
    faqs: [
      {
        question: "Is the pharmacy open 24/7?",
        answer:
          "The hospital information provided for this website confirms 24-hour pharmacy availability.",
      },
      {
        question: "Is every medicine always in stock?",
        answer:
          "No medicine's availability is guaranteed by this page. Please confirm directly with the pharmacy.",
      },
      {
        question: "Can I ask how to take my medicine?",
        answer:
          "Please consult a qualified healthcare professional or pharmacist for medicine-specific instructions.",
      },
    ],
  },

  "medical-records": {
    number: "06",
    title: "Medical Records",
    eyebrow: "HEALTH INFORMATION & RECORDS",
    shortDescription:
      "Learn where to ask about medical record requests and related hospital procedures.",
    overview:
      "Medical records contain private and sensitive health information. The hospital's approved procedures determine how records may be requested, verified, released, or collected.",
    icon: FileText,
    services: [
      {
        title: "Record request guidance",
        description:
          "Ask hospital staff about the official process for requesting records.",
      },
      {
        title: "Document requirements",
        description:
          "Confirm what identification, authorization, or supporting documents are required.",
      },
      {
        title: "Release procedures",
        description:
          "Ask about processing times, fees if applicable, and the approved method of release.",
      },
    ],
    guidance: [
      {
        title: "Contact the hospital first",
        description:
          "Request procedures and requirements directly from authorized hospital staff.",
      },
      {
        title: "Protect patient privacy",
        description:
          "Medical records may only be released through the hospital's approved identity-verification and authorization process.",
      },
      {
        title: "Do not send sensitive records publicly",
        description:
          "Avoid posting patient information or medical documents in public website forms or social media messages.",
      },
    ],
    faqs: [
      {
        question: "How do I request a medical record?",
        answer:
          "Please contact the hospital to obtain its current request procedure and requirements.",
      },
      {
        question: "Can someone else request records for me?",
        answer:
          "Authorization rules apply. Confirm the hospital's requirements before sending another person to request records.",
      },
      {
        question: "How long does a request take?",
        answer:
          "Processing times have not been confirmed for this website. Please ask authorized hospital staff.",
      },
    ],
  },

  nursing: {
    number: "07",
    title: "Nursing Services",
    eyebrow: "PATIENT CARE SUPPORT",
    shortDescription:
      "Learn about the role of nursing services in supporting patients during their hospital visit.",
    overview:
      "Nursing staff support patient care in coordination with the hospital's healthcare team. For specific care arrangements, visiting policies, or ward procedures, please ask hospital personnel.",
    icon: BedDouble,
    hours: "Nurse station: 24 hours",
    hoursNote:
      "Nurse Station availability was confirmed by the hospital information provided for this website. Ward-specific policies should be confirmed with staff.",
    services: [
      {
        title: "Patient care support",
        description:
          "Nursing personnel provide care and guidance within their professional responsibilities.",
      },
      {
        title: "Care coordination",
        description:
          "Patients and families can ask the care team for guidance about the patient's care plan and next steps.",
      },
      {
        title: "Ward information",
        description:
          "Ask hospital staff about ward procedures, visiting guidance, and other current policies.",
      },
    ],
    guidance: [
      {
        title: "Speak with the care team",
        description:
          "For patient-specific concerns, talk directly with the attending healthcare team or nursing personnel.",
      },
      {
        title: "Follow hospital guidance",
        description:
          "Please follow staff instructions and current hospital policies while on the premises.",
      },
      {
        title: "Protect patient privacy",
        description:
          "Patient information should only be shared with authorized people through appropriate hospital processes.",
      },
    ],
    faqs: [
      {
        question: "Is the Nurse Station available 24/7?",
        answer:
          "The hospital information provided for this website confirms 24-hour Nurse Station availability.",
      },
      {
        question: "Where can I ask about a patient's care?",
        answer:
          "Please speak with authorized nursing personnel or the patient's healthcare team.",
      },
      {
        question: "Where can I check visiting policies?",
        answer:
          "Visiting policies should be confirmed directly with the hospital, as they may change.",
      },
    ],
  },
  "ct-scan": {
    number: "08",
    title: "CT Scan Services",
    eyebrow: "ADVANCED DIAGNOSTIC IMAGING",
    shortDescription:
      "Learn about CT Scan services at Twin Care Hospital and find guidance for preparing for your imaging visit.",
    overview:
      "CT scanning uses specialized imaging equipment to produce detailed images of structures inside the body. Patients can contact Twin Care Hospital to ask about CT Scan availability, examination requirements, and preparation instructions for their specific procedure.",
    icon: ScanLine,
    hours: "Contact the hospital",
    hoursNote:
      "Please call the hospital to confirm current CT Scan availability, operating hours, and scheduling requirements.",
    services: [
      {
        title: "CT Scan information",
        description:
          "Contact the hospital to ask about available CT Scan examinations and the requirements for your requested procedure.",
      },
      {
        title: "Examination preparation",
        description:
          "Preparation requirements vary by examination. Follow the instructions provided by your healthcare professional or the imaging team.",
      },
      {
        title: "Imaging requests and results",
        description:
          "Ask hospital personnel about imaging requests, examination procedures, and the approved process for obtaining your results.",
      },
    ],
    guidance: [
      {
        title: "Bring your imaging request",
        description:
          "Bring your doctor's request or referral and any relevant medical records, if applicable.",
      },
      {
        title: "Ask about preparation",
        description:
          "Before your appointment, confirm whether your particular examination requires fasting, contrast material, or other preparation.",
      },
      {
        title: "Inform the healthcare team",
        description:
          "Tell your healthcare professional about relevant medical conditions, allergies, medications, or possible pregnancy so they can advise you appropriately.",
      },
    ],
    faqs: [
      {
        question: "How do I arrange a CT Scan?",
        answer:
          "Contact Twin Care Hospital to ask about availability, scheduling, and any required doctor's request or referral.",
      },
      {
        question: "Do I need to fast before a CT Scan?",
        answer:
          "Preparation depends on the examination and whether contrast material is required. Follow the specific instructions provided by your healthcare team.",
      },
      {
        question: "How can I obtain my CT Scan results?",
        answer:
          "Please ask hospital personnel about the expected result availability and the approved process for receiving your results.",
      },
    ],
  },
  dialysis: {
    number: "09",
    title: "Dialysis Services",
    eyebrow: "KIDNEY CARE & DIALYSIS",
    shortDescription:
      "Find general information and patient guidance for dialysis services at Twin Care Hospital.",
    overview:
      "Dialysis is a treatment that helps remove waste products and excess fluid from the blood when the kidneys cannot perform these functions adequately. Patients and caregivers can contact Twin Care Hospital to ask about dialysis service availability, treatment arrangements, and the requirements for an initial consultation.",
    icon: Droplets,
    hours: "Contact the hospital",
    hoursNote:
      "Please contact the hospital to confirm dialysis operating hours, treatment schedules, availability, and appointment requirements.",
    services: [
      {
        title: "Dialysis service information",
        description:
          "Contact the hospital to ask about available dialysis services and the process for arranging an assessment.",
      },
      {
        title: "Patient assessment and preparation",
        description:
          "Ask the healthcare team which medical records, referrals, laboratory results, or other documents are needed before treatment.",
      },
      {
        title: "Treatment scheduling",
        description:
          "Contact the hospital to discuss treatment availability and scheduling with the appropriate healthcare personnel.",
      },
    ],
    guidance: [
      {
        title: "Contact the hospital before visiting",
        description:
          "Confirm service availability, consultation requirements, and scheduling arrangements before traveling to the hospital.",
      },
      {
        title: "Prepare your medical records",
        description:
          "Bring relevant medical records, current medication information, and referral documents if available and requested by the healthcare team.",
      },
      {
        title: "Follow your care team's instructions",
        description:
          "Follow the treatment, medication, dietary, and fluid-management guidance provided by your qualified healthcare professionals.",
      },
    ],
    faqs: [
      {
        question: "How can I inquire about dialysis services?",
        answer:
          "Call Twin Care Hospital to ask about dialysis availability, the assessment process, and how to discuss treatment arrangements with the appropriate staff.",
      },
      {
        question: "What documents should I bring?",
        answer:
          "Requirements may vary. Ask the hospital what medical records, referrals, laboratory results, or identification you should bring.",
      },
      {
        question: "How can I confirm my treatment schedule?",
        answer:
          "Please contact the hospital and coordinate directly with the appropriate healthcare personnel. Treatment schedules should not be assumed from this website.",
      },
    ],
  },
};

const hospitalPhone = "044-813-5421";
const hospitalEmail = "twincarehospital@yahoo.com";

export default function DepartmentPage() {
  const { slug } = useParams();
  const department = slug ? departments[slug] : undefined;

  if (!department) {
    return (
      <main className="department-page">
        <div className="department-not-found">
          <span className="department-kicker">
            TWIN CARE HOSPITAL INCORPORATED
          </span>
          <h1>Department not found</h1>
          <p>
            This department page may not exist or may have an incorrect
            address.
          </p>
          <Link className="department-button" to="/">
            <ArrowLeft size={17} />
            Return to homepage
          </Link>
        </div>
      </main>
    );
  }

  const Icon = department.icon;
  const related = Object.entries(departments).filter(
    ([key]) => key !== slug
  );

  return (
    <main className="department-page">
      <header className="department-header">
        <div className="department-container department-header-inner">
          <Link
            className="department-brand"
            to="/"
            aria-label="Twin Care Hospital Incorporated homepage"
          >
            <img
              src="/images/tchi-logo.png"
              alt=""
              width={54}
              height={54}
            />
            <span>
              <strong>TWIN CARE</strong>
              <small>HOSPITAL INCORPORATED</small>
            </span>
          </Link>

          <Link className="department-home-link" to="/">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="department-hero">
        <div className="department-container">
          <nav className="department-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#departments">Departments</Link>
            <span>/</span>
            <span>{department.title}</span>
          </nav>

          <div className="department-hero-layout">
            <div className="department-hero-content">
              <div className="department-icon">
                <Icon size={31} strokeWidth={1.6} />
              </div>

              <span className="department-kicker">
                DEPARTMENT {department.number} · {department.eyebrow}
              </span>

              <h1>{department.title}</h1>
              <p className="department-lead">
                {department.shortDescription}
              </p>

              <div className="department-hero-actions">
                <a
                  className="department-button"
                  href={`tel:${hospitalPhone.replaceAll("-", "")}`}
                >
                  <Phone size={16} />
                  Call the Hospital
                </a>

                <a
                  className="department-button department-button-light"
                  href={`mailto:${hospitalEmail}`}
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </div>

            <div
              className="department-visual"
              role="img"
              aria-label={`${department.title} visual placeholder`}
            >
              <div className="department-visual-orbit department-visual-orbit-one" />
              <div className="department-visual-orbit department-visual-orbit-two" />

              <div className="department-visual-mark">
                <Icon size={66} strokeWidth={1.1} />
              </div>

              <span className="department-visual-label">
                TWIN CARE HOSPITAL
              </span>
              <small>Department information</small>
            </div>
          </div>
        </div>
      </section>

      <section className="department-quick-info">
        <div className="department-container department-quick-grid">
          <article className="department-quick-card">
            <span className="department-quick-icon">
              <Clock3 size={21} />
            </span>

            <div>
              <small>OPERATING HOURS</small>
              <strong>{department.hours ?? "Please confirm"}</strong>
              <p>
                {department.hoursNote ??
                  "Please contact the hospital to confirm current schedules."}
              </p>
            </div>
          </article>

          <article className="department-quick-card">
            <span className="department-quick-icon">
              <Phone size={21} />
            </span>

            <div>
              <small>HOSPITAL TELEPHONE</small>
              <strong>{hospitalPhone}</strong>
              <p>Contact the hospital for current service information.</p>
            </div>
          </article>

          <article className="department-quick-card">
            <span className="department-quick-icon">
              <MapPin size={21} />
            </span>

            <div>
              <small>HOSPITAL LOCATION</small>
              <strong>Angat, Bulacan</strong>
              <p>Tapatan Road, Marungko, Angat, Bulacan.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="department-information">
        <div className="department-container department-information-grid">
          <div>
            <span className="department-kicker">ABOUT THIS DEPARTMENT</span>

            <h2>
              Care information, <span>made clearer.</span>
            </h2>

            <p>{department.overview}</p>

            <p className="department-disclaimer">
              <ShieldCheck size={17} />
              For the latest requirements, schedules, and service
              availability, please confirm directly with Twin Care Hospital.
            </p>
          </div>

          <aside className="department-review-card">
            <div className="department-review-icon">
              <HelpCircle size={23} />
            </div>

            <h3>Need more information?</h3>

            <p>
              Our contact details are available for general inquiries. For
              urgent medical needs, seek immediate assistance rather than
              waiting for an email response.
            </p>

            <a
              className="department-inline-link"
              href={`tel:${hospitalPhone.replaceAll("-", "")}`}
            >
              Call {hospitalPhone}
              <ArrowRight size={15} />
            </a>
          </aside>
        </div>
      </section>

      <section className="department-services">
        <div className="department-container">
          <div className="department-section-heading">
            <span className="department-kicker">HOW WE CAN HELP</span>

            <h2>
              Department <span>information</span>
            </h2>

            <p>
              General guidance for patients and visitors. Confirm specific
              services and requirements with hospital staff.
            </p>
          </div>

          <div className="department-service-grid">
            {department.services.map((service, index) => (
              <article
                className="department-service-card"
                key={service.title}
              >
                <span className="department-service-number">
                  {`0${index + 1}`}
                </span>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="department-service-rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="department-guidance">
        <div className="department-container">
          <div className="department-section-heading">
            <span className="department-kicker">BEFORE YOUR VISIT</span>

            <h2>
              Helpful things <span>to know.</span>
            </h2>
          </div>

          <div className="department-guidance-grid">
            {department.guidance.map((item) => (
              <article
                className="department-guidance-item"
                key={item.title}
              >
                <span className="department-guidance-check">
                  <ShieldCheck size={19} />
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="department-faq">
        <div className="department-container department-faq-layout">
          <div className="department-section-heading">
            <span className="department-kicker">COMMON QUESTIONS</span>

            <h2>
              Frequently asked <span>questions.</span>
            </h2>

            <p>
              Answers are limited to information currently confirmed for this
              website.
            </p>
          </div>

          <div className="department-faq-list">
            {department.faqs.map((faq) => (
              <details
                className="department-faq-item"
                key={faq.question}
              >
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="department-related">
        <div className="department-container">
          <div className="department-next-inner">
            <div>
              <span className="department-kicker">EXPLORE TWIN CARE</span>

              <h2>Looking for another department?</h2>

              <p>
                Explore more department information from Twin Care Hospital.
              </p>
            </div>

            <Link className="department-button" to="/#departments">
              View All Departments
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="department-related-grid">
            {related.slice(0, 3).map(([key, item]) => {
              const RelatedIcon = item.icon;

              return (
                <Link
                  className="department-related-card"
                  to={`/departments/${key}`}
                  key={key}
                >
                  <span>
                    <RelatedIcon size={20} />
                  </span>

                  <div>
                    <strong>{item.title}</strong>
                    <small>
                      Explore department
                      <ArrowRight size={13} />
                    </small>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="department-footer">
        <div className="department-container department-footer-inner">
          <span>Twin Care Hospital Incorporated</span>

          <span>
            Because at Twin Care, we give the best healthcare you deserve.
          </span>
        </div>
      </footer>
    </main>
  );
}