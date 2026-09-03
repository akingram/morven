const serviceLines = [
  {
    number: "01",
    title: "Engineering Services",
    text: "Design, construction and maintenance support for oil and gas, power, manufacturing, marine and facility operations.",
  },
  {
    number: "02",
    title: "Procurement",
    text: "Technical sourcing from reputable original equipment manufacturers with documentation, fit checks and delivery coordination.",
  },
  {
    number: "03",
    title: "Construction Management",
    text: "Project execution oversight that protects schedules, budgets, safety standards and site communication.",
  },
  {
    number: "04",
    title: "Product Distribution",
    text: "Industrial machinery, spare parts, tools, consumables and safety equipment supplied through one accountable desk.",
  },
  {
    number: "05",
    title: "IT Solutions",
    text: "Industrial IT infrastructure, systems integration and technology support for modern operational teams.",
  },
  {
    number: "06",
    title: "Marine Solutions",
    text: "Coatings, chemicals, maintenance materials and equipment for vessels, ports and marine-facing assets.",
  },
];

const productLanes = [
  {
    title: "Protective Coatings",
    image: "/morven/flooring-coating.jpg",
    label: "Marine, epoxy, anti-rust",
    text: "Coating systems for steel, floors, vessels and coastal structures exposed to corrosion, saltwater and abrasion.",
  },
  {
    title: "Safety & Fall Protection",
    image: "/morven/fall-arrest.jpg",
    label: "PPE, anchors, rescue",
    text: "PPE, fall arrest systems, anchor accessories and safety essentials for high-risk industrial sites.",
  },
  {
    title: "Traffic Safety",
    image: "/morven/thermoplastic-road-marking.jpg",
    label: "Road marking systems",
    text: "Thermoplastic road paint, barriers, signs and reflective safety products for road and facility projects.",
  },
  {
    title: "Industrial Chemicals",
    image: "/morven/chlorinated-rubber-resin.jpg",
    label: "Resins and process supply",
    text: "Specialist resins, solvents, maintenance chemicals, lubricants and process materials for demanding applications.",
  },
];

const featuredProducts = [
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

const procurementSteps = [
  "Send the product list, quantity and site location.",
  "Morven checks specifications, standards and brand equivalents.",
  "Quote, documentation and delivery route are confirmed.",
  "Materials are supplied with responsive after-sales support.",
];

const industries = [
  "Marine & ports",
  "Oil & gas",
  "Power generation",
  "Manufacturing",
  "Road works",
  "Facilities",
];

const proofPoints = [
  "OEM-aligned sourcing",
  "Safety-first delivery",
  "West Africa reach",
  "Technical product support",
];

const insightCards = [
  "Coastal steel corrosion prevention",
  "Saltwater and rapid corrosion in Nigeria",
  "High-quality chlorinated rubber resin sourcing",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="topline">
        <span>Lagos, Nigeria</span>
        <a href="tel:+2349129659392">+234 912 965 9392</a>
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
            <a href="#capabilities">Capabilities</a>
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#rfq">RFQ</a>
          </div>
          <a className="nav-cta" href="https://wa.me/2349129659392">
            WhatsApp RFQ
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-label="Morven Industrial Limited">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">EPC / protective coatings / industrial supply</p>
            <h1>Morven Industrial Limited</h1>
            <p className="hero-lede">
              One accountable partner for engineering support, procurement,
              marine coatings, chemicals, PPE and industrial equipment across
              Nigeria and West Africa.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#rfq">
                Start an RFQ
              </a>
              <a className="button secondary" href="#products">
                View Supply Lanes
              </a>
            </div>
          </div>

          <aside className="command-panel" aria-label="Morven procurement desk">
            <div className="panel-header">
              <span>Procurement desk</span>
              <strong>Ready</strong>
            </div>
            <div className="route-stack">
              {["Specification", "Sourcing", "Quote", "Delivery"].map((item) => (
                <div key={item}>
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="panel-note">
              <strong>24 hr</strong>
              <span>RFQ response focus for clear product lists</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="signal-band" aria-label="Morven supply categories">
        {[
          "Protective coatings",
          "Marine chemicals",
          "PPE & safety",
          "Industrial equipment",
          "Traffic safety",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="intro section">
        <div className="section-kicker">
          <p className="eyebrow dark">Built for operational pressure</p>
          <h2>Industrial buyers do not need more noise. They need certainty.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Morven Industrial Limited supports teams that need the right product,
            the right documentation and the right delivery path. The company
            brings engineering discipline to industrial distribution, helping
            customers source durable materials for sites where downtime is
            expensive.
          </p>
          <div className="proof-grid">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="story-band">
        <div className="story-image">
          <img
            src="/morven/maintenance.png"
            alt="Industrial equipment maintenance and safety"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">Supply without guesswork</p>
          <h2>From coating systems to critical spares, Morven keeps the job moving.</h2>
          <p>
            The work starts with understanding application conditions, site
            urgency, standards and brand preference. From there, Morven helps
            identify the right materials and coordinates supply with practical
            communication from first quote to after-sales support.
          </p>
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Capabilities</p>
            <h2>Engineering depth with distributor speed.</h2>
          </div>
          <p>
            Morven operates across service, procurement and distribution, so
            industrial teams can reduce vendor fragmentation and move from need
            to delivery faster.
          </p>
        </div>
        <div className="service-grid">
          {serviceLines.map((service) => (
            <article className="service-card" key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="products">
        <div className="section product-heading">
          <div className="split-heading light">
            <div>
              <p className="eyebrow">Supply lanes</p>
              <h2>Critical industrial categories, presented with clarity.</h2>
            </div>
            <p>
              Buyers can start with a category or send an exact item list. Each
              lane is built around technical fit, durability and accountable
              sourcing.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {productLanes.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={product.title} />
              <div>
                <span>{product.label}</span>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <a href="#rfq">Request this category</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured" aria-label="Featured products">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Fast-moving stock</p>
            <h2>Popular requests, ready for quote conversations.</h2>
          </div>
          <p>
            Morven can help source lubricants, transformer oils, fall protection
            hardware and adjacent materials from reputable industrial brands.
          </p>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <article className="featured-card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <span>{product.type}</span>
              <h3>{product.name}</h3>
              <a href="#rfq" aria-label={`Request quote for ${product.name}`}>
                Request Quote
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="section industry-grid">
          <div>
            <p className="eyebrow">Sectors served</p>
            <h2>Built around the realities of West African industry.</h2>
          </div>
          <div className="industry-list">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section process" aria-label="RFQ process">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">How supply moves</p>
            <h2>A cleaner path from requirement to delivery.</h2>
          </div>
          <p>
            This is the simplest way to brief Morven when speed and accuracy
            matter.
          </p>
        </div>
        <div className="process-grid">
          {procurementSteps.map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge section" aria-label="Knowledge center">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Knowledge center</p>
            <h2>Buyer guidance for harsher environments.</h2>
          </div>
          <p>
            Practical insight for teams buying coatings, chemicals and safety
            products in coastal, heavy-duty and high-compliance conditions.
          </p>
        </div>
        <div className="insight-grid">
          {insightCards.map((article, index) => (
            <article key={article}>
              <span>0{index + 1}</span>
              <h3>{article}</h3>
              <p>
                Helpful context for choosing products that hold up in demanding
                Nigerian industrial environments.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rfq" id="rfq">
        <div className="rfq-copy">
          <p className="eyebrow">Talk to a specialist</p>
          <h2>Send the list. Morven will help source it.</h2>
          <p>
            Include product names, quantities, preferred brands, technical
            standards, delivery location and urgency. The team can respond by
            WhatsApp, phone or email.
          </p>
        </div>
        <div className="rfq-panel">
          <div className="rfq-panel-top">
            <strong>RFQ brief</strong>
            <span>Best response when your list includes:</span>
          </div>
          <ul>
            <li>Item description and quantity</li>
            <li>Brand, model or acceptable equivalent</li>
            <li>Delivery city and deadline</li>
            <li>Application or site condition</li>
          </ul>
          <div className="rfq-actions">
            <a className="button primary" href="https://wa.me/2349129659392">
              Start WhatsApp RFQ
            </a>
            <a className="button secondary dark-button" href="tel:+2349129659392">
              Call Morven
            </a>
          </div>
          <a href="mailto:sales@morvenindustrial.org">
            sales@morvenindustrial.org
          </a>
          <address>
            No 6, Alhaji Yusuf Adebayo, Olodi, by Coconut Market, Apapa, Lagos.
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
