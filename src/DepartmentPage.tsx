
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  FileText,
  FlaskConical,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import "./DepartmentPage.css";

const departments = {
  emergency: {
    number: "01",
    title: "Emergency Department",
    shortDescription:
      "Find approved information about emergency services and how to seek assistance.",
    icon: Siren,
  },
  outpatient: {
    number: "02",
    title: "Outpatient Department",
    shortDescription:
      "Find outpatient service information, clinic guidance, and approved visitor instructions.",
    icon: Stethoscope,
  },
  laboratory: {
    number: "03",
    title: "Laboratory Department",
    shortDescription:
      "Learn about laboratory services and patient preparation guidance once officially confirmed.",
    icon: FlaskConical,
  },
  radiology: {
    number: "04",
    title: "Radiology Department",
    shortDescription:
      "Find approved information about X-ray, ultrasound, and related imaging services.",
    icon: ScanLine,
  },
  pharmacy: {
    number: "05",
    title: "Pharmacy Department",
    shortDescription:
      "Access hospital-approved pharmacy information and service guidance.",
    icon: Pill,
  },
  "medical-records": {
    number: "06",
    title: "Medical Records",
    shortDescription:
      "Find official guidance on medical record requests and related procedures.",
    icon: FileText,
  },
  nursing: {
    number: "07",
    title: "Nursing Services",
    shortDescription:
      "Find approved information about nursing services and patient care support.",
    icon: BedDouble,
  },
} as const;

export default function DepartmentPage() {
  const { slug } = useParams();
  const department =
    slug && Object.hasOwn(departments, slug)
      ? departments[slug as keyof typeof departments]
      : undefined;

  if (!department) {
    return (
      <main className="department-page">
        <div className="department-not-found">
          <span className="department-kicker">TWIN CARE HOSPITAL INCORPORATED</span>
          <h1>Department not found</h1>
          <p>
            This department page may not exist or may have an incorrect address.
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
            <span>Departments</span>
            <span>/</span>
            <span>{department.title}</span>
          </nav>

          <div className="department-hero-content">
            <div className="department-icon">
              <Icon size={32} strokeWidth={1.6} />
            </div>

            <span className="department-kicker">
              DEPARTMENT {department.number}
            </span>

            <h1>{department.title}</h1>

            <p className="department-lead">
              {department.shortDescription}
            </p>

            <p className="department-motto">
              Because we give the best healthcare you deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="department-information">
        <div className="department-container department-information-grid">
          <div>
            <span className="department-kicker">DEPARTMENT INFORMATION</span>
            <h2>
              Here to help you find
              <br />
              <span>the information you need.</span>
            </h2>
            <p>
              This page is reserved for official information about the{" "}
              {department.title}. Details will be added after review and
              approval by Twin Care Hospital Incorporated.
            </p>
          </div>

          <aside className="department-review-card">
            <div className="department-review-icon">
              <ShieldCheck size={23} />
            </div>
            <h3>Official information</h3>
            <p>
              Service descriptions, operating hours, contact details, and
              visitor guidance will be published only after verification.
            </p>
            <span className="department-review-status">
              <span />
              Information pending approval
            </span>
          </aside>
        </div>
      </section>

      <section className="department-next">
        <div className="department-container department-next-inner">
          <div>
            <span className="department-kicker">EXPLORE TWIN CARE</span>
            <h2>Looking for another department?</h2>
            <p>Return to the homepage to explore the hospital directory.</p>
          </div>

          <Link className="department-button" to="/#departments">
            View Departments
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="department-footer">
        <div className="department-container department-footer-inner">
          <span>Twin Care Hospital Incorporated</span>
          <span>Because we give the best healthcare you deserve.</span>
        </div>
      </footer>
    </main>
  );
}
