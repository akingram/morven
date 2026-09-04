import Image from "next/image";

const serviceLines = [
  {
    number: "01",
    title: "Engineering Services",
    text: "Design, construction and maintenance support for Ghanaian marine, power, manufacturing, oil and gas, and facility operations.",
  },
  {
    number: "02",
    title: "Procurement",
    text: "Technical sourcing for Ghana-based requirements with Lagos/Apapa as a regional reference for marine and industrial supply.",
  },
  {
    number: "03",
    title: "Construction Management",
    text: "Project execution oversight that protects schedules, budgets, safety standards and site communication across both markets.",
  },
  {
    number: "04",
    title: "Product Distribution",
    text: "Industrial machinery, spare parts, tools, consumables and safety equipment supplied through one accountable regional desk.",
  },
  {
    number: "05",
    title: "IT Solutions",
    text: "Industrial IT infrastructure, systems integration and technology support for modern operational teams in Ghana and Nigeria.",
  },
  {
    number: "06",
    title: "Marine Solutions",
    text: "Coatings, chemicals, maintenance materials and equipment for Tema, Takoradi, Lagos and other marine-facing assets.",
  },
];

const productLanes = [
  {
    title: "Protective Coatings",
    image: "/morven/flooring-coating.jpg",
    label: "Marine, epoxy, anti-rust",
    text: "Coating systems for steel, floors, vessels and coastal structures in Ghana, with Lagos/Apapa as a proven reference environment.",
  },
  {
    title: "Safety & Fall Protection",
    image: "/morven/fall-arrest.jpg",
    label: "PPE, anchors, rescue",
    text: "PPE, fall arrest systems, anchor accessories and safety essentials for industrial projects from Accra to Lagos.",
  },
  {
    title: "Traffic Safety",
    image: "/morven/thermoplastic-road-marking.jpg",
    label: "Road marking systems",
    text: "Thermoplastic road paint, barriers, signs and reflective products for Ghanaian road, facility and logistics projects.",
  },
  {
    title: "Industrial Chemicals",
    image: "/morven/chlorinated-rubber-resin.jpg",
    label: "Resins and process supply",
    text: "Specialist resins, solvents, maintenance chemicals, lubricants and process materials for Ghana and Nigeria operations.",
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

const marketCards = [
  {
    country: "Ghana",
    role: "Lead market focus",
    places: "Accra / Tema / Takoradi / Kumasi",
    text: "Industrial supply, coatings, chemicals, safety products and marine support for Ghana's port, energy, construction and manufacturing corridors.",
  },
  {
    country: "Nigeria",
    role: "Regional reference hub",
    places: "Lagos / Apapa",
    text: "The existing Morven Lagos/Apapa reference point stays visible for marine supply context, product benchmarking and Nigeria-linked procurement.",
  },
];

const procurementSteps = [
  "Send the product list, quantity and Ghana site location.",
  "Add Lagos/Apapa reference details when the request is Nigeria-linked.",
  "Morven checks specifications, standards and brand equivalents.",
  "Quote, documentation and delivery route are confirmed.",
];

const industries = [
  "Tema marine & ports",
  "Takoradi oil & gas",
  "Accra facilities",
  "Kumasi manufacturing",
  "Ghana road works",
  "Mining support",
  "Lagos/Apapa marine reference",
  "Nigeria industrial supply",
];

const proofPoints = [
  "Ghana-first market positioning",
  "Lagos/Apapa reference hub",
  "OEM-aligned sourcing",
  "Technical product support",
];

const insightCards = [
  "Coastal steel corrosion in Ghana and Lagos",
  "Marine coating selection for Tema and Apapa",
  "Chemical and resin sourcing for West Africa",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="topline">
        <span>Ghana: Accra/Tema/Takoradi</span>
        <span>Lagos/Apapa</span>
        <a href="tel:+2349129659392">+234 912 965 9392</a>
        <a href="mailto:sales@morvenindustrial.org">
          sales@morvenindustrial.org
        </a>
      </div>

      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Morven Industrial home">
            <Image
              src="/morven/logo.png"
              alt="Morven Industrial Limited"
              width={220}
              height={70}
              priority
            />
          </a>
          <div className="nav-links">
            <a href="#markets">Markets</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#products">Products</a>
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
            <p className="eyebrow">
              Ghana-focused EPC / Lagos reference supply hub
            </p>
            <h1>Morven Industrial Limited</h1>
            <p className="hero-lede">
              Industrial procurement, protective coatings, chemicals, marine
              products, PPE and equipment for Ghana, with Lagos and Apapa kept
              as the regional Nigeria reference point.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#rfq">
                Start a Ghana RFQ
              </a>
              <a className="button secondary" href="#markets">
                View Market Coverage
              </a>
            </div>
            <div className="market-badges" aria-label="Regional market focus">
              <span>Ghana lead</span>
              <span>Tema/Takoradi</span>
              <span>Lagos ref</span>
            </div>
          </div>

          <aside className="command-panel" aria-label="Morven regional desk">
            <div className="panel-header">
              <span>Regional desk</span>
              <strong>Ready</strong>
            </div>
            <div className="market-route">
              <div>
                <span>Lead</span>
                <strong>Ghana</strong>
                <p>Accra, Tema, Takoradi and Kumasi</p>
              </div>
              <div>
                <span>Reference</span>
                <strong>Lagos</strong>
                <p>Apapa marine and industrial supply context</p>
              </div>
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
              <strong>2 markets</strong>
              <span>Ghana orientation with Nigeria/Lagos reference continuity</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="signal-band" aria-label="Morven supply categories">
        {[
          "Ghana supply desk",
          "Tema & Takoradi",
          "Lagos reference hub",
          "Protective coatings",
          "Industrial equipment",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="market-section section" id="markets">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Market coverage</p>
            <h2>Ghana leads the story. Lagos anchors the regional reference.</h2>
          </div>
          <p>
            The page now speaks first to Ghanaian buyers while preserving
            Morven&apos;s Lagos/Apapa connection for Nigeria-linked procurement,
            marine operations and cross-border industrial supply context.
          </p>
        </div>
        <div className="market-grid">
          {marketCards.map((market) => (
            <article className="market-card" key={market.country}>
              <span>{market.role}</span>
              <h3>{market.country}</h3>
              <strong>{market.places}</strong>
              <p>{market.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="intro section">
        <div className="section-kicker">
          <p className="eyebrow dark">Built for operational pressure</p>
          <h2>Industrial buyers in Ghana need certainty, not noise.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Morven Industrial Limited supports Ghanaian teams that need the
            right product, the right documentation and the right delivery path.
            Lagos remains a visible reference point for Nigeria-based supply,
            marine context and regional procurement continuity.
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
          <Image
            src="/morven/maintenance.png"
            alt="Industrial equipment maintenance and safety"
            width={980}
            height={720}
            sizes="(max-width: 1040px) 100vw, 58vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">Supply without guesswork</p>
          <h2>From Ghana site requirements to Lagos reference specs.</h2>
          <p>
            The work starts with understanding application conditions, site
            urgency, standards and brand preference. From there, Morven helps
            identify the right materials and coordinates supply for Ghanaian
            industrial projects while keeping Lagos/Apapa available as a
            practical Nigeria reference.
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
            industrial teams in Ghana and Nigeria can reduce vendor
            fragmentation and move from need to delivery faster.
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
              <h2>Critical industrial categories for Ghana, backed by Lagos context.</h2>
            </div>
            <p>
              Buyers can start with a Ghana category, a Lagos reference item or
              an exact product list. Each lane is built around technical fit,
              durability and accountable sourcing.
            </p>
          </div>
        </div>
        <div className="product-grid">
          {productLanes.map((product) => (
            <article className="product-card" key={product.title}>
              <Image
                src={product.image}
                alt={product.title}
                width={720}
                height={540}
                sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 25vw"
              />
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
            <h2>Popular requests for Ghanaian buyers and Nigeria-linked projects.</h2>
          </div>
          <p>
            Morven can help source lubricants, transformer oils, fall protection
            hardware and adjacent materials from reputable industrial brands.
          </p>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <article className="featured-card" key={product.name}>
              <Image
                src={product.image}
                alt={product.name}
                width={520}
                height={520}
                sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 33vw"
              />
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
            <h2>
              Built around Ghana&apos;s industrial corridors and Lagos reference
              demand.
            </h2>
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
            <h2>A cleaner path from Ghana requirement to regional delivery.</h2>
          </div>
          <p>
            This is the simplest way to brief Morven when Ghana is the target
            market and Lagos is part of the reference or comparison.
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
            <h2>Buyer guidance for Ghana and Lagos coastal conditions.</h2>
          </div>
          <p>
            Practical insight for teams buying coatings, chemicals and safety
            products in coastal, heavy-duty and high-compliance environments.
          </p>
        </div>
        <div className="insight-grid">
          {insightCards.map((article, index) => (
            <article key={article}>
              <span>0{index + 1}</span>
              <h3>{article}</h3>
              <p>
                Helpful context for choosing products that hold up across
                Ghanaian and Nigerian industrial environments.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rfq" id="rfq">
        <div className="rfq-copy">
          <p className="eyebrow">Talk to a specialist</p>
          <h2>Send the Ghana list. Add Lagos reference details when needed.</h2>
          <p>
            Include product names, quantities, preferred brands, technical
            standards, Ghana delivery location and urgency. For Nigeria-linked
            requests, include Lagos or Apapa reference details.
          </p>
        </div>
        <div className="rfq-panel">
          <div className="rfq-panel-top">
            <strong>RFQ brief</strong>
            <span>Best response when your list includes:</span>
          </div>
          <ul>
            <li>Ghana site city, delivery point and deadline</li>
            <li>Lagos/Apapa reference item when applicable</li>
            <li>Brand, model or acceptable equivalent</li>
            <li>Application, standard or site condition</li>
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
            Ghana coverage: Accra, Tema, Takoradi and Kumasi. Nigeria reference:
            No 6, Alhaji Yusuf Adebayo, Olodi, by Coconut Market, Apapa, Lagos.
          </address>
        </div>
      </section>

      <footer className="footer">
        <Image
          src="/morven/logo.png"
          alt="Morven Industrial Limited"
          width={220}
          height={70}
        />
        <p>
          Ghana-focused protective coatings, chemicals, marine supplies, PPE and
          industrial equipment with Lagos/Apapa as Nigeria reference.
        </p>
        <a href="https://morvenindustrial.org/">morvenindustrial.org</a>
      </footer>
    </main>
  );
}
