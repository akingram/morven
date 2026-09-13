import Image from "next/image";

const categoryLinks = {
  sigma:
    "https://morvenindustrial.org/product-category/painting-and-protective-coating/sigma-paint/",
  international:
    "https://morvenindustrial.org/product-category/painting-and-protective-coating/international-paint/",
  hempel:
    "https://morvenindustrial.org/product-category/painting-and-protective-coating/hempel-paint/",
  jotun:
    "https://morvenindustrial.org/product-category/painting-and-protective-coating/jotun-paint/",
  unitor:
    "https://morvenindustrial.org/product-category/chemicals/unitor-chemicals-products/",
  drew:
    "https://morvenindustrial.org/product-category/cleaning-and-maintenance/cleaning-and-maintenance-chemicals/drew-marine-chemicals/",
};

const serviceLines = [
  {
    number: "01",
    title: "Marine Paint Supply",
    text: "Sigma, International, Hempel and Jotun marine coating categories positioned first for Ghanaian and Lagos-linked RFQs.",
  },
  {
    number: "02",
    title: "Protective Coating Specs",
    text: "Support for anti-corrosive primers, antifouling systems, epoxy coatings, topcoats, tank linings and steel protection.",
  },
  {
    number: "03",
    title: "Cleaning Chemical Procurement",
    text: "Unitor and Drew Marine cleaning, maintenance, boiler, cooling-water and engine-room chemical requests handled clearly.",
  },
  {
    number: "04",
    title: "Ghana Delivery Desk",
    text: "Quotes can be shaped around Accra, Tema, Takoradi, Kumasi, port, offshore, facility and heavy-industry requirements.",
  },
  {
    number: "05",
    title: "Lagos / Apapa Reference",
    text: "Nigeria reference details stay visible for product comparison, marine operations and Apapa-linked procurement context.",
  },
  {
    number: "06",
    title: "Technical RFQ Support",
    text: "Morven can receive brand names, product codes, equivalents, quantities, site conditions and urgent delivery timelines.",
  },
];

const productLanes = [
  {
    title: "Marine Paint & Protective Coatings",
    image: "/morven/marine-coating.jpg",
    label: "First priority category",
    href: "#category-catalog",
    text: "Sigma, International, Hempel and Jotun systems for vessels, tanks, structural steel, terminals and coastal assets.",
  },
  {
    title: "Sigma & International Paint",
    image: "/morven/flooring-coating.jpg",
    label: "Primers, topcoats, linings",
    href: "#category-catalog",
    text: "High-performance coating requests for anti-corrosion, submerged surfaces, decks, tanks and offshore environments.",
  },
  {
    title: "Hempel & Jotun Paint",
    image: "/morven/chlorinated-rubber-resin.jpg",
    label: "Marine and industrial protection",
    href: "#category-catalog",
    text: "Epoxy, polyurethane, mastic, primer and protective coating categories for repair, maintenance and new works.",
  },
  {
    title: "Cleaning & Maintenance Chemicals",
    image: "/morven/maintenance.png",
    label: "Second priority category",
    href: "#category-catalog",
    text: "Unitor and Drew Marine categories for cleaning, degreasing, water treatment, tank cleaning and maintenance routines.",
  },
];

const priorityCategories = [
  {
    name: "Sigma Marine Paint",
    image: "/morven/marine-coating.jpg",
    type: "Painting & Protective Coating",
    href: categoryLinks.sigma,
    text: "Anti-corrosives, low-VOC coatings, rust inhibitors, food-safe epoxy and PPG Sigma coating requests.",
  },
  {
    name: "International Marine Paint",
    image: "/morven/flooring-coating.jpg",
    type: "Painting & Protective Coating",
    href: categoryLinks.international,
    text: "Interzinc, Interthane and Interprime systems for offshore, petrochemical, steel and marine environments.",
  },
  {
    name: "Hempel Marine Paint",
    image: "/morven/chlorinated-rubber-resin.jpg",
    type: "Painting & Protective Coating",
    href: categoryLinks.hempel,
    text: "Hempathane, Hempalin and Hempadur coatings for structural steel, marine assets and heavy-duty protection.",
  },
  {
    name: "Jotun Marine Paint",
    image: "/morven/thermoplastic-road-marking.jpg",
    type: "Painting & Protective Coating",
    href: categoryLinks.jotun,
    text: "Penguard and Jotamastic coating categories for atmospheric, immersed and high-corrosion service conditions.",
  },
  {
    name: "Unitor Chemicals",
    image: "/morven/maintenance.png",
    type: "Cleaning & Maintenance Chemicals",
    href: categoryLinks.unitor,
    text: "Multi Clean, Metal Brite, HP Wash, SeaClean Plus, water-treatment and onboard maintenance categories.",
  },
  {
    name: "Drew Marine Chemicals",
    image: "/morven/fall-arrest.jpg",
    type: "Cleaning & Maintenance Chemicals",
    href: categoryLinks.drew,
    text: "Marine cleaning, boiler water treatment, cooling-water treatment, diesel additives and technical chemical supply.",
  },
];

const navCategoryGroups = [
  {
    title: "Marine Paint & Protective Coatings",
    links: [
      { name: "Sigma Marine Paint", href: categoryLinks.sigma },
      { name: "International Marine Paint", href: categoryLinks.international },
      { name: "Hempel Marine Paint", href: categoryLinks.hempel },
      { name: "Jotun Marine Paint", href: categoryLinks.jotun },
    ],
  },
  {
    title: "Cleaning & Maintenance Chemicals",
    links: [
      { name: "Unitor Chemicals", href: categoryLinks.unitor },
      { name: "Drew Marine Chemicals", href: categoryLinks.drew },
    ],
  },
];

const marketCards = [
  {
    country: "Ghana",
    role: "Lead market focus",
    places: "Accra / Tema / Takoradi / Kumasi",
    text: "Marine paint, protective coatings, Unitor/Drew chemicals and maintenance supply for Ghana's port, energy, construction and manufacturing corridors.",
  },
  {
    country: "Nigeria",
    role: "Regional reference hub",
    places: "Lagos / Apapa",
    text: "The existing Morven Lagos/Apapa reference point stays visible for marine paint, cleaning chemicals, product benchmarking and Nigeria-linked procurement.",
  },
];

const procurementSteps = [
  "Send the brand lane: Sigma, International, Hempel, Jotun, Unitor or Drew Marine.",
  "Add quantity, colour/system, surface condition, vessel or Ghana site location.",
  "Morven checks category fit, equivalent options, standards and available documentation.",
  "Quote, contact route and delivery timing are confirmed for Ghana or Lagos reference needs.",
];

const industries = [
  "Tema marine & ports",
  "Takoradi oil & gas",
  "Vessels & dry dock",
  "Tank farms",
  "Steel fabrication",
  "Power plants",
  "Lagos/Apapa marine reference",
  "Cleaning chemical supply",
];

const proofPoints = [
  "Sigma / International / Hempel / Jotun",
  "Unitor & Drew Marine chemicals",
  "Ghana-first market positioning",
  "Lagos/Apapa reference support",
];

const insightCards = [
  "Choosing anti-corrosive marine coating systems",
  "Specifying cleaning chemicals for onboard maintenance",
  "Preparing Ghana RFQs for paint and chemical supply",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="topline">
        <span>Marine Paint & Coatings</span>
        <span>Cleaning Chemicals</span>
        <a href="tel:+2349129659392">+234 912 965 9392</a>
        <a href="tel:+2348144536538">+234 814 453 6538</a>
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
          <details className="category-menu">
            <summary>Categories</summary>
            <div className="category-dropdown">
              {navCategoryGroups.map((group) => (
                <div className="category-group" key={group.title}>
                  <strong>{group.title}</strong>
                  {group.links.map((link) => (
                    <a href={link.href} key={link.name}>
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </details>
          <a className="nav-cta" href="https://wa.me/2349129659392">
            WhatsApp RFQ
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-label="Morven Industrial Limited">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Ghana supply desk / Lagos reference support
            </p>
            <h1>Marine Paint & Protective Coatings</h1>
            <p className="hero-lede">
              Morven Industrial Limited supplies Sigma, International, Hempel
              and Jotun marine paint systems, plus Unitor and Drew Marine
              cleaning and maintenance chemicals for Ghana projects and
              Lagos/Apapa reference requests.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#rfq">
                Request Paint Quote
              </a>
              <a className="button secondary" href="#category-catalog">
                View Priority Categories
              </a>
            </div>
            <div className="market-badges" aria-label="Regional market focus">
              <span>Sigma</span>
              <span>Hempel</span>
              <span>Unitor/Drew</span>
            </div>
          </div>

          <aside className="command-panel" aria-label="Morven regional desk">
            <div className="panel-header">
              <span>Priority desk</span>
              <strong>Ready</strong>
            </div>
            <div className="market-route">
              <div>
                <span>Category one</span>
                <strong>Marine Coatings</strong>
                <p>Sigma, International, Hempel and Jotun</p>
              </div>
              <div>
                <span>Category two</span>
                <strong>Chemicals</strong>
                <p>Unitor and Drew Marine cleaning products</p>
              </div>
            </div>
            <div className="route-stack">
              {["Sigma Paint", "International Paint", "Hempel Paint", "Jotun Paint"].map((item) => (
                <div key={item}>
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="panel-note">
              <strong>6 lines</strong>
              <span>Paint and chemical categories ready for RFQ follow-up</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="signal-band" aria-label="Morven supply categories">
        {[
          "Sigma Marine Paint",
          "International Marine Paint",
          "Hempel Marine Paint",
          "Jotun Marine Paint",
          "Unitor / Drew Chemicals",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="market-section section" id="markets">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Market coverage</p>
            <h2>Ghana leads demand. Lagos anchors the reference desk.</h2>
          </div>
          <p>
            Morven prioritizes marine paint and protective coatings first,
            then cleaning and maintenance chemicals, while keeping
            Lagos/Apapa visible for Nigeria-linked procurement.
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
          <p className="eyebrow dark">Built for marine buyers</p>
          <h2>Coating systems and chemicals should be easy to specify.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Morven Industrial Limited now places the requested marine paint
            brands and cleaning chemical lines at the center of the page.
            Ghanaian buyers can start from the category they need, while Lagos
            remains available as the Nigeria reference for comparison and
            regional supply continuity.
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
          <h2>From coating selection to chemical maintenance supply.</h2>
          <p>
            The work starts with brand preference, surface condition, vessel or
            site use, standards and urgency. From there, Morven helps shape the
            RFQ around Sigma, International, Hempel, Jotun, Unitor or Drew
            Marine categories before confirming the supply path.
          </p>
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Capabilities</p>
            <h2>Marine coating focus with chemical supply backup.</h2>
          </div>
          <p>
            Morven can receive a precise product name, a broad brand category
            or an acceptable-equivalent request, then help buyers move toward a
            cleaner quote for Ghana and Lagos/Apapa reference needs.
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
              <p className="eyebrow">Priority categories</p>
              <h2>Push marine paint first. Keep cleaning chemicals close behind.</h2>
            </div>
            <p>
              Start with Painting and Protective Coating, followed by Cleaning
              and Maintenance Chemicals for marine and heavy-industry users.
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
                <a href={product.href}>View category focus</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section featured"
        id="category-catalog"
        aria-label="Priority categories"
      >
        <div className="split-heading">
          <div>
            <p className="eyebrow dark">Product categories</p>
            <h2>Marine coating and cleaning chemical lines ready for RFQ.</h2>
          </div>
          <p>
            Choose the brand category you need. Morven can help with
            availability, equivalents, documentation and delivery for Ghana,
            with Lagos/Apapa reference support when needed.
          </p>
        </div>
        <div className="featured-grid">
          {priorityCategories.map((product) => (
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
              <p>{product.text}</p>
              <a
                href={product.href}
                aria-label={`View ${product.name} category`}
              >
                View Category
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
              Built around Ghana&apos;s marine, port and heavy-industry
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
            <h2>A cleaner path from paint or chemical request to quote.</h2>
          </div>
          <p>
            This is the simplest way to brief Morven when you need marine paint
            brands, protective coating systems or cleaning and maintenance
            chemicals.
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
            <h2>Buyer guidance for paint systems and maintenance chemicals.</h2>
          </div>
          <p>
            Practical context for teams buying marine coatings and cleaning
            chemicals in coastal, heavy-duty and high-compliance environments.
          </p>
        </div>
        <div className="insight-grid">
          {insightCards.map((article, index) => (
            <article key={article}>
              <span>0{index + 1}</span>
              <h3>{article}</h3>
              <p>
                Helpful context for choosing products that hold up across
                Ghanaian and Lagos/Apapa-linked marine environments.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rfq" id="rfq">
        <div className="rfq-copy">
          <p className="eyebrow">Talk to a specialist</p>
          <h2>Send the paint or chemical list. We&apos;ll match the category.</h2>
          <p>
            Include product names, quantities, preferred brands, colour or
            system requirements, Ghana delivery location and urgency. For
            Nigeria-linked requests, include Lagos or Apapa reference details.
          </p>
        </div>
        <div className="rfq-panel">
          <div className="rfq-panel-top">
            <strong>RFQ brief</strong>
            <span>Best response when your list includes:</span>
          </div>
          <ul>
            <li>Sigma, International, Hempel or Jotun paint request</li>
            <li>Unitor or Drew Marine chemical request</li>
            <li>Product code, quantity, colour, primer/topcoat or equivalent</li>
            <li>Ghana delivery point or Lagos/Apapa reference detail</li>
          </ul>
          <div className="rfq-actions">
            <a className="button primary" href="https://wa.me/2349129659392">
              WhatsApp +234 912
            </a>
            <a className="button secondary dark-button" href="https://wa.me/2348144536538">
              WhatsApp +234 814
            </a>
            <a className="button secondary dark-button" href="mailto:sales@morvenindustrial.org">
              Email Sales
            </a>
          </div>
          <div className="contact-lines" aria-label="Morven contact details">
            <a href="tel:+2349129659392">+234 912 965 9392</a>
            <a href="tel:+2348144536538">+234 814 453 6538</a>
            <a href="mailto:sales@morvenindustrial.org">
              sales@morvenindustrial.org
            </a>
          </div>
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
          Marine paint, protective coatings, Unitor and Drew Marine chemicals
          for Ghana, with Lagos/Apapa as Nigeria reference.
        </p>
        <a href="https://morvenindustrial.org/">morvenindustrial.org</a>
      </footer>
    </main>
  );
}
