
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  FlaskConical,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import "./App.css";

import { Link } from "react-router-dom";

const informationCards = [
  {
    number: "01",
    title: "Emergency Department",
    description:
      "Find approved information about emergency services and how to seek assistance.",
    icon: Siren,
    href: "/departments/emergency",
  },
  {
    number: "02",
    title: "Outpatient Department",
    description:
      "Find outpatient service information, clinic guidance, and approved visitor instructions.",
    icon: Stethoscope,
    href: "/departments/outpatient",
  },
  {
    number: "03",
    title: "Laboratory Department",
    description:
      "Learn about laboratory services and patient preparation guidance once officially confirmed.",
    icon: FlaskConical,
    href: "/departments/laboratory",
  },
  {
    number: "04",
    title: "Radiology Department",
    description:
      "Find approved information about X-ray, ultrasound, and related imaging services.",
    icon: ScanLine,
    href: "/departments/radiology",
  },
  {
    number: "05",
    title: "Pharmacy Department",
    description:
      "Access hospital-approved pharmacy information and service guidance.",
    icon: Pill,
    href: "/departments/pharmacy",
  },
  {
    number: "06",
    title: "Medical Records",
    description:
      "Find official guidance on medical record requests and related procedures.",
    icon: FileText,
    href: "/departments/medical-records",
  },
  {
    number: "07",
    title: "Nursing Services",
    description:
      "Find approved information about nursing services and patient care support.",
    icon: BedDouble,
    href: "/departments/nursing",
  },
];


const departmentGroups = [
  {
    number: "01",
    title: "Clinical & Patient Services",
    description:
      "Departments associated with patient care, diagnostics, and hospital services.",
    departments: [
      "Emergency Department",
      "Outpatient Department (OPD)",
      "Laboratory Department",
      "Radiology Department — X-ray and Ultrasound",
      "Pharmacy Department",
      "Medical Records",
      "Nurstation Department",
    ],
  },
  {
    number: "02",
    title: "Ancillary & Hospital Support",
    description:
      "Support departments that help maintain hospital operations and services.",
    departments: [
      "Dietary Department",
      "CSSR Department",
      "Housekeeping Department",
      "Linen Department",
      "Warehouse Department",
      "Maintenance Department",
    ],
  },
  {
    number: "03",
    title: "Administration & Office Services",
    description:
      "Administrative offices and service counters within the hospital.",
    departments: [
      "Administration",
      "Accounting",
      "Human Resources and Development (HRD)",
      "Billing",
      "Cashier",
      "PhilHealth Services",
    ],
  },
];


const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#information" },
  { label: "Announcements", href: "#announcements" },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-message">
            <Sparkles size={14} aria-hidden="true" />
            Official hospital information, all in one place
          </span>

          <a href="#contact" className="topbar-link">
            Hospital information <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Twin Care Hospital Incorporated home"
            onClick={closeMenu}
          >
          <img
            className="brand-logo"
            src="/images/tchi-logo.png"
            alt=""
            width={58}
            height={58}
          />

            <span className="brand-copy">
              <span className="brand-name">TWIN CARE</span>
              <span className="brand-subtitle">
                HOSPITAL INCORPORATED
              </span>
            </span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav
            id="primary-navigation"
            className={`navigation ${menuOpen ? "navigation-open" : ""}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={item.label === "Home" ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="button button-primary nav-cta"
              onClick={closeMenu}
            >
              Contact Us <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-anchor" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                TWIN CARE HOSPITAL INCORPORATED
              </div>

              <h1>
                Because we give
                <br />
                <span>the best healthcare</span>
                <br />
                you deserve.
              </h1>

              <p className="hero-description">
                Because we give the best healthcare you deserve. Find official
                hospital information, explore our departments, and stay informed
                through hospital-approved announcements.
              </p>

              <div className="hero-actions">
                <a href="#about" className="button button-primary">
                  Discover Twin Care <ArrowRight size={17} />
                </a>

                <a href="#information" className="button button-secondary">
                  Explore Information
                </a>
              </div>

              <div className="hero-note">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Official information will be published after review.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  className="hero-image"
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
                  alt="Representative healthcare setting"
                  fetchPriority="high"
                />

                <div className="image-shade" />

                <div className="image-caption">
                  <span className="caption-icon">
                    <HeartPulse size={20} />
                  </span>
                  <span>
                    <strong>Care. Compassion. Community.</strong>
                    <small>A welcoming place to find hospital information</small>
                  </span>
                </div>
              </div>

              <div className="floating-note">
                <span className="floating-icon">
                  <CheckCircle2 size={21} />
                </span>
                <span>
                  <strong>Information you can find</strong>
                  <small>Hospital updates and resources</small>
                </span>
              </div>

              <div className="hero-decoration hero-decoration-one" />
              <div className="hero-decoration hero-decoration-two" />
            </div>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="intro-section section-anchor" id="about">
          <div className="container intro-grid">
            <div className="section-label">
              <span className="section-kicker">01 / ABOUT TWIN CARE</span>
              <span className="label-rule" />
            </div>

            <div className="intro-content">
              <h2>
                A hospital website designed around{" "}
                <span>people and clarity.</span>
              </h2>

              <p>
                Twin Care Hospital Incorporated is establishing this online
                space to make official hospital information easier to find.
                Our goal for this website is to provide a clear, welcoming
                experience for patients, visitors, and the wider community.
              </p>

              <p className="approval-note">
                <ShieldCheck size={17} />
                Hospital history, mission, vision, and other official statements
                will be added after approval.
              </p>

              <a href="#information" className="text-link">
                Explore hospital information <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="information-section section-anchor" id="information">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">02 / EXPLORE</span>
                <h2>
                  Our departments,
                  <br />
                  <span>here to serve you.</span>
                </h2>
              </div>

              <p className="section-heading-description">
                Explore our hospital departments and find the official
                information you need before your visit.
              </p>
            </div>

            <div className="information-grid">
              {informationCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article className="info-card" key={card.number}>
                    <div className="info-card-top">
                      <span className="info-card-number">{card.number}</span>
                      <span className="info-card-icon">
                        <Icon size={24} strokeWidth={1.7} />
                      </span>
                    </div>

                    <h3>{card.title}</h3>
                    <p>{card.description}</p>

                <Link className="card-link" to={card.href}>
                  Learn more
                  <ChevronRight size={16} />
                </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="department-directory section-anchor"
          id="departments"
        >
          <div className="container">
            <div className="directory-heading">
              <span className="section-kicker">
                COMPLETE DEPARTMENT DIRECTORY
              </span>

              <h2>
                One hospital.
                <br />
                <span>Many teams working together.</span>
              </h2>

              <p>
                Explore the departments and offices of Twin Care Hospital
                Incorporated. Official service descriptions and contact details
                will be added after verification.
              </p>
            </div>

            <div className="directory-groups">
              {departmentGroups.map((group) => (
                <article className="directory-group" key={group.number}>
                  <div className="directory-group-heading">
                    <span className="directory-number">{group.number}</span>

                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>

                  <ul className="department-list">
                    {group.departments.map((department) => (
                      <li key={department}>
                        <span className="department-indicator" aria-hidden="true" />
                        <span>{department}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="directory-disclaimer">
              Department names and classifications are subject to hospital
              verification and approval before public release.
            </p>
          </div>
        </section>

        <section className="announcement-section section-anchor" id="announcements">
          <div className="container">
            <div className="announcement-panel">
              <div className="announcement-copy">
                <span className="section-kicker light-kicker">
                  03 / STAY INFORMED
                </span>

                <h2>
                  Updates that
                  <br />
                  keep you connected.
                </h2>

                <p>
                  Official hospital announcements and notices will be shared
                  here once approved for publication.
                </p>

                <a href="#contact" className="button button-light">
                  Hospital Information <ArrowRight size={17} />
                </a>
              </div>

              <div className="announcement-art" aria-hidden="true">
                <div className="art-circle art-circle-large" />
                <div className="art-circle art-circle-small" />
                <div className="art-icon">
                  <Clock3 size={39} strokeWidth={1.3} />
                </div>
                <div className="art-line art-line-one" />
                <div className="art-line art-line-two" />
                <div className="art-line art-line-three" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-anchor" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">04 / GET IN TOUCH</span>
              <h2>
                Find the information
                <br />
                <span>you need.</span>
              </h2>
              <p>
                Official contact details, location information, and visitor
                guidance will be displayed here after verification by the
                hospital.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-icon">
                  <MapPin size={20} />
                </span>
                <span>
                  <strong>Hospital Address</strong>
                  <small>Tapatan Rd. Marungko, Angat, Bulacan</small>
                </span>
              </div>

              <div className="contact-row">
                <span className="contact-icon">
                  <Mail size={20} />
                </span>
                <span>
                  <strong>Official Contact</strong>
                  <small>044-813-5421</small>
                </span>
              </div>

              <div className="contact-row">
                <span className="contact-icon">
                  <Clock3 size={20} />
                </span>
                <span>
                  <strong>Operating Information</strong>
                  <small>24/7</small>
                </span>
              </div>

              <div className="contact-disclaimer">
                <ShieldCheck size={17} />
                These details will be published only after hospital approval.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a href="#home" className="brand footer-brand">
          <img
            className="brand-logo"
            src="/images/tchi-logo.png"
            alt=""
            width={58}
            height={58}
          />
            <span className="brand-copy">
              <span className="brand-name">TWIN CARE</span>
              <span className="brand-subtitle">
                HOSPITAL INCORPORATED
              </span>
            </span>
          </a>

          <p className="footer-message">
            A welcoming online home for official hospital information.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Twin Care Hospital Incorporated
          </span>
          <span className="footer-status">
            <span className="status-dot" />
            Website in development
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
