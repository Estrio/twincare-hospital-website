import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Droplets,
  ExternalLink,
  FileText,
  FlaskConical,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Phone,
  Pill,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./App.css";

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
  {
    number: "08",
    title: "Dialysis Center",
    description:
      "Find approved information about dialysis services and patient care support.",
    icon: Droplets,
    href: "/departments/dialysis",
  },
  {
    number: "09",
    title: "CT Scan Center",
    description:
      "Find approved information about CT scan services and patient care support.",
    icon: ScanLine,
    href: "/departments/ct-scan",
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
      "Nursing Services",
      "Dialysis Center",
      "CT Scan Center",
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

const departmentLinks: Record<string, string> = {
  "Emergency Department": "/departments/emergency",
  "Outpatient Department (OPD)": "/departments/outpatient",
  "Laboratory Department": "/departments/laboratory",
  "Radiology Department — X-ray and Ultrasound": "/departments/radiology",
  "Pharmacy Department": "/departments/pharmacy",
  "Medical Records": "/departments/medical-records",
  "Nursing Services": "/departments/nursing",
  "Dialysis Center": "/departments/dialysis",
  "CT Scan Center": "/departments/ct-scan",
};

const coreValues = [
  {
    letter: "C",
    title: "Compassionate",
    description: "Showing sympathy and concern for others.",
  },
  {
    letter: "A",
    title: "Altruism",
    description: "Selfless concern for the well-being of others.",
  },
  {
    letter: "R",
    title: "Resilient",
    description:
      "Able to withstand or recover quickly from different situations.",
  },
  {
    letter: "E",
    title: "Excellence",
    description: "Strive for the best.",
  },
];

const staffGroups = [
  {
    title: "Hospital Leadership",
    members: [
      {
        name: "Albert S. Salvador, MD, MHA",
        role: "President & CEO / Medical Director",
      },
      {
        name: "Pilar I. Salvador, MD, FPCP, FPCEDM, MHA",
        role: "Vice President / Hospital Administrator",
      },
      {
        name: "Alona S. Flores",
        role: "Administrative Officer",
      },
      {
        name: "Charmaine C. Dagoco",
        role: "Executive Secretary",
      },
    ],
  },
  {
    title: "Administration & Office Services",
    members: [
      {
        name: "John Michael M. Bonifacio, ACPHR",
        role: "Human Resources",
      },
      {
        name: "Francisco C. Capistrano",
        role: "Admitting",
      },
      {
        name: "Ryan M. Reyes",
        role: "Information Technology",
      },
      {
        name: "Alona S. Flores",
        role: "Medical Records",
      },
      {
        name: "Joseph S. Velasco, CPA",
        role: "Accounting",
      },
      {
        name: "Dominick A. Mercado",
        role: "Bookkeeper",
      },
      {
        name: "Patricia Marie T. Torres",
        role: "Cashier",
      },
      {
        name: "Kristine Michelle DR. Zarate",
        role: "Billing",
      },
      {
        name: "Leizel V. Vega",
        role: "Social Worker",
      },
      {
        name: "Jerycha S. Altare",
        role: "PhilHealth",
      },
    ],
  },
  {
    title: "Hospital Operations & Support",
    members: [
      {
        name: "Aljon M. Mariano",
        role: "Maintenance",
      },
      {
        name: "Aldrin P. Bayanay",
        role: "Housekeeping",
      },
      {
        name: "Name not listed",
        role: "Security Guard",
      },
    ],
  },
];

const operatingHours = [
  "Emergency Room (ER)",
  "Laboratory Department",
  "X-ray",
  "Pharmacy Department",
  "Nurse Station",
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our People", href: "#staff" },
  { label: "Departments", href: "#information" },
  { label: "Announcements", href: "#announcements" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
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
                className={
                  item.label === "Home" ? "nav-link active" : "nav-link"
                }
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
                Because at
                <br />
                <span>Twin Care </span>
                we give
                <br />
                <span>the best healthcare</span>
                <br />
                you deserve.
              </h1>

              <p className="hero-description">
                Explore Twin Care Hospital Incorporated&apos;s departments,
                find essential hospital contact information, learn about our
                services, and stay updated through official hospital
                announcements.
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
                <span>
                  Official hospital information and confirmed service hours.
                </span>
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
                    <small>
                      A welcoming place to find hospital information
                    </small>
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
                Care guided by <span>purpose and compassion.</span>
              </h2>

              <p>
                Twin Care Hospital Incorporated is committed to providing
                patients with the best healthcare they deserve and a positive
                healthcare experience.
              </p>

              <div className="official-statements">
                <article className="statement-card">
                  <span className="section-kicker">OUR MISSION</span>
                  <p>
                    To provide our patients the best healthcare they deserve
                    with great experience.
                  </p>
                </article>

                <article className="statement-card">
                  <span className="section-kicker">OUR VISION</span>
                  <p>
                    To be recognize as an institution by delivering a quality,
                    affordable and excellent patient care.
                  </p>
                </article>
              </div>

              <div className="values-heading">
                <span className="section-kicker">OUR CORE VALUES</span>
                <h3>C.A.R.E.</h3>
              </div>

              <div className="values-grid">
                {coreValues.map((value) => (
                  <article className="value-card" key={value.letter}>
                    <span className="value-letter">{value.letter}</span>

                    <div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <a href="#information" className="text-link">
                Explore hospital information <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="information-section section-anchor"
          id="information"
        >
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
                    {group.departments.map((department) => {
                      const href = departmentLinks[department];

                      return (
                        <li key={department}>
                          <span
                            className="department-indicator"
                            aria-hidden="true"
                          />

                          {href ? (
                            <Link
                              to={href}
                              className="department-directory-link"
                            >
                              {department}
                              <ChevronRight
                                size={15}
                                aria-hidden="true"
                              />
                            </Link>
                          ) : (
                            <span>{department}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="staff-section section-anchor" id="staff">
          <div className="container">
            <div className="directory-heading">
              <span className="section-kicker">OUR PEOPLE</span>

              <h2>
                The people behind <span>patient care.</span>
              </h2>

              <p>
                Meet the personnel listed in the hospital&apos;s administrative
                organizational chart. Names and roles should be verified by
                hospital administration before this directory is publicly
                promoted.
              </p>
            </div>

            <div className="staff-groups">
              {staffGroups.map((group) => (
                <section className="staff-group" key={group.title}>
                  <h3>{group.title}</h3>

                  <div className="staff-grid">
                    {group.members.map((member) => (
                      <article
                        className="staff-card"
                        key={`${member.name}-${member.role}`}
                      >
                        <span className="staff-avatar" aria-hidden="true">
                          {member.name === "Name not listed"
                            ? "—"
                            : member.name.charAt(0)}
                        </span>

                        <div>
                          <h4>{member.name}</h4>
                          <p>{member.role}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section
          className="announcement-section section-anchor"
          id="announcements"
        >
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
                Contact Twin Care Hospital Incorporated or visit our official
                Facebook page for hospital information and updates.
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

              <a
                className="contact-row contact-row-link"
                href="tel:0448135421"
              >
                <span className="contact-icon">
                  <Phone size={20} />
                </span>

                <span>
                  <strong>Telephone</strong>
                  <small>044-813-5421</small>
                </span>

                <ArrowUpRight
                  className="contact-row-arrow"
                  size={16}
                />
              </a>

              <a
                className="contact-row contact-row-link"
                href="mailto:twincarehospital@yahoo.com"
              >
                <span className="contact-icon">
                  <Mail size={20} />
                </span>

                <span>
                  <strong>Official Email</strong>
                  <small>twincarehospital@yahoo.com</small>
                </span>

                <ArrowUpRight
                  className="contact-row-arrow"
                  size={16}
                />
              </a>

              <a
                className="contact-row contact-row-link"
                href="https://www.facebook.com/profile.php?id=61552647747926"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">
                  <ExternalLink size={20} />
                </span>

                <span>
                  <strong>Official Facebook Page</strong>
                  <small>Visit Twin Care Hospital on Facebook</small>
                </span>

                <ArrowUpRight
                  className="contact-row-arrow"
                  size={16}
                />
              </a>

              <div className="contact-hours">
                <div className="contact-hours-heading">
                  <span className="contact-icon">
                    <Clock3 size={20} />
                  </span>

                  <div>
                    <strong>Confirmed 24/7 Services</strong>
                    <small>Open 24 hours a day, 7 days a week</small>
                  </div>
                </div>

                <ul>
                  {operatingHours.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>

                <p className="hours-pending">
                  OPD and ultrasound schedules are pending confirmation.
                </p>
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
            Because at Twin Care, we give the best healthcare you deserve.
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