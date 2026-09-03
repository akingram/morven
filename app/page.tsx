const services = [
  {
    title: "Engineering Services",
    text: "Design, construction and maintenance support for oil and gas, power, manufacturing and marine operations.",
  },
  {
    title: "Procurement",
    text: "Sourcing from reputable original equipment manufacturers with documentation, fit checks and responsive delivery support.",
  },
  {
    title: "Construction Management",
    text: "Project execution oversight that protects schedules, budgets, safety standards and site coordination.",
  },
  {
    title: "Product Distribution",
    text: "Industrial machinery, spare parts, tools, consumables and safety equipment supplied through one accountable partner.",
  },
  {
    title: "IT Solutions",
    text: "Industrial IT infrastructure, systems integration and technology support for modern operational environments.",
  },
  {
    title: "Marine Solutions",
    text: "Coatings, chemicals, maintenance materials and equipment for vessels, ports and marine-facing facilities.",
  },
];

const products = [
  {
    title: "Protective Coatings",
    image: "/morven/flooring-coating.jpg",
    label: "Marine, epoxy, anti-rust",
    text: "Performance coatings for steel, floors, vessels and coastal assets exposed to corrosion and abrasion.",
  },
  {
    title: "Safety & Fall Protection",
    image: "/morven/fall-arrest.jpg",
    label: "PPE and anchors",
    text: "PPE, anchor systems, fall arrest accessories and jobsite safety essentials for high-risk teams.",
  },
  {
    title: "Traffic Safety",
    image: "/morven/thermoplastic-road-marking.jpg",
    label: "Road marking systems",
    text: "Thermoplastic paint, markings, barriers, signs and road-safety products built for durability.",
  },
  {
    title: "Chemicals",
    image: "/morven/chlorinated-rubber-resin.jpg",
    label: "Industrial and marine",
    text: "Industrial solvents, maintenance chemicals, resins, lubricants and specialist process materials.",
  },
];

const featured = [
  {
    name: "TotalEnergies Carter SH",
    image: "/morven/totalenergies-carter-sh.jpg",
    type: "Industrial lubricant",
  },
  {
    name: "Shell Diala S3 ZX-I",
    image: "/morven/shell-diala-s3.jpg",
    type: "Transformer oil",
  },
  {
    name: "FallTech Beam Clamp",
    image: "/morven/beam-clamp.png",
    type: "Fall protection",
  },
];

const proof = [
  "International-standard sourcing",
  "Safety-first delivery culture",
  "OEM partnership network",
  "West Africa industrial reach",
];

const articles = [
  "Coastal steel corrosion prevention",
  "Saltwater and rapid corrosion in Nigeria",
  "High-quality chlorinated rubber resin sourcing",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="topline">
        <a href="tel:+2349129659392">+234 912 965 9392</a>
        <span>/</span>
        <a href="tel:+2348144536538">+234 814 453 6538</a>
        <a href="mailto:sales@morvenindustrial.org">
          sales@morvenindustrial.org
        </a>
      </div>

      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Morven Industrial home">
            <img src="/morven/logo.png" alt="Morven Industrial Limited" />
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#why">Why Morven</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="https://wa.me/2349129659392">
            WhatsApp RFQ
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-label="Morven Industrial Limited">
        <div className="hero-content">
          <p className="eyebrow">EPC, procurement and industrial supply</p>
          <h1>Morven Industrial Limited</h1>
          <p className="hero-copy">
            Engineering, protective coatings, chemicals, marine products,
            safety equipment and industrial supplies delivered across Nigeria
            and West Africa.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Get Started
            </a>
            <a className="button secondary" href="#products">
              Explore Products
            </a>
          </div>
          <div className="hero-metrics" aria-label="Morven capabilities">
            <div>
              <strong>6</strong>
              <span>Core service lines</span>
            </div>
            <div>
              <strong>24 hr</strong>
              <span>RFQ response focus</span>
            </div>
            <div>
              <strong>West Africa</strong>
              <span>Industrial coverage</span>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-band" aria-label="Procurement routes">
        {["Protective coatings", "Marine chemicals", "PPE", "Traffic safety"].map(
          (item) => (
            <span key={item}>{item}</span>
          ),
        )}
      </section>

      <section className="intro section">
        <div className="section-heading">
          <p className="eyebrow dark">Welcome to Morven Industrial</p>
          <h2>One partner for complex industrial needs.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Morven Industrial Limited serves demanding teams in oil and gas,
            marine, manufacturing, power generation, IT and facility operations.
            The promise is simple: quality products, accountable procurement,
            technical confidence and delivery that respects time on site.
          </p>
          <div className="proof-grid">
            {proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="image-story">
        <img
          src="/morven/maintenance.png"
          alt="Industrial equipment maintenance and safety"
        />
        <div className="story-copy">
          <p className="eyebrow">Built for operational pressure</p>
          <h2>From specification to delivery, Morven keeps the job moving.</h2>
          <p>
            Every request is handled around fit, durability and supply
            continuity, whether the need is a coating system, plant part,
            safety product, chemical, lubricant or marine maintenance item.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow dark">What Morven does</p>
          <h2>Engineering depth with distributor speed.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="products">
        <div className="section-heading light">
          <p className="eyebrow">Product collection</p>
          <h2>Source critical industrial categories from one desk.</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={product.title} />
              <div>
                <span>{product.label}</span>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured section" aria-label="Featured products">
        <div className="section-heading">
          <p className="eyebrow dark">Fast-moving stock</p>
          <h2>Popular requests, ready for RFQ.</h2>
        </div>
        <div className="featured-grid">
          {featured.map((item) => (
            <article className="featured-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.type}</span>
              <h3>{item.name}</h3>
              <a href="#contact" aria-label={`Request quote for ${item.name}`}>
                Request Quote
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="why" id="why">
        <div className="why-copy">
          <p className="eyebrow">Why choose Morven</p>
          <h2>Execution, teamwork and safety in the same lane.</h2>
          <p>
            Morven brings together disciplined sourcing, practical technical
            support and customer-first communication for projects where the
            wrong product can cost more than the product itself.
          </p>
        </div>
        <div className="why-grid">
          {[
            "Excellence in execution",
            "Collaborative teamwork",
            "Respect for every stakeholder",
            "Customer success focus",
            "Safety first",
            "Innovative solutions",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="article-strip section" aria-label="Knowledge center">
        <div className="section-heading">
          <p className="eyebrow dark">From the knowledge center</p>
          <h2>Useful guidance for industrial buyers.</h2>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <article key={article}>
              <span>0{index + 1}</span>
              <h3>{article}</h3>
              <p>
                Practical buyer insight for coatings, corrosion control and
                product sourcing in demanding Nigerian environments.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Talk to a specialist</p>
          <h2>Send your list. Morven will help source it.</h2>
          <p>
            Share product names, quantities, site location, technical
            requirements and urgency. The team can respond by WhatsApp, phone or
            email.
          </p>
        </div>
        <div className="contact-panel">
          <a className="button primary" href="https://wa.me/2349129659392">
            Start WhatsApp RFQ
          </a>
          <a className="button secondary dark-button" href="tel:+2349129659392">
            Call Morven
          </a>
          <a href="mailto:sales@morvenindustrial.org">
            sales@morvenindustrial.org
          </a>
          <address>
            No 6, Alhaji Yusuf Adebayo, Olodi, by Coconut Market, Apapa,
            Lagos.
          </address>
        </div>
      </section>

      <footer className="footer">
        <img src="/morven/logo.png" alt="Morven Industrial Limited" />
        <p>
          Protective coatings, chemicals, marine supplies, PPE and industrial
          equipment for West Africa.
        </p>
        <a href="https://morvenindustrial.org/">morvenindustrial.org</a>
      </footer>
    </main>
  );
}
