export const CONTACT = {
  company: "Nedd Digital",
  phone: "+1 (281) 547-9290",
  phoneHref: "tel:+12815479290",
  email: "info@nedddigital.com",
  address: "111 Town Square Place, Jersey City, NJ",
};

export const LEAVE_DEMO_URL = "https://leave-managment-mock-data.vercel.app/";

// Put a photo at public/hero-bg.jpg (office, laptop, desk). It shows faintly behind the hero.
export const HERO_IMAGE = "/hero-bg.jpg";

export const NICHES = [
  {
    title: "Small businesses and trades",
    body: "Contractors, clinics, agencies and local service companies that want clean books, honest numbers and a website that brings in enquiries.",
  },
  {
    title: "Online stores",
    body: "Sellers who need sales, fees, inventory and cost of goods sorted properly, plus a store front that turns visitors into orders.",
  },
  {
    title: "Charities and nonprofits",
    body: "Organizations that must show donors, trustees and funders exactly where money came from and where it went, and want a site that earns trust and donations.",
  },
];

export type Track = "finance" | "digital";

export type Service = {
  slug: string;
  track: Track;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  problemTitle: string;
  problems: string[];
  solution: string;
  offerings: { title: string; body: string; example?: string }[];
  deliverables: string[];
  outcomes: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  why?: { title: string; body: string[] };
  withOut?: string[];
  withIt?: string[];
  forWho?: { title: string; body: string }[];
  cta: string;
  related: { slug: string; prompt: string };
};

const standardProcess = [
  { title: "Discover", body: "We talk through how your business works today and what is getting in the way." },
  { title: "Plan", body: "You get a clear written scope, timeline and price before any work starts." },
  { title: "Build", body: "We do the work in stages and share progress so nothing arrives as a surprise." },
  { title: "Review", body: "You test and give feedback. We adjust until it fits how you actually work." },
  { title: "Launch", body: "We hand over, walk you through it and stay available for support." },
];

export const SERVICES: Service[] = [
  {
    slug: "bookkeeping-quickbooks",
    track: "finance",
    name: "Bookkeeping & QuickBooks",
    short: "Accurate, reconciled books in QuickBooks, closed every month and ready for your CPA.",
    metaTitle: "Bookkeeping & QuickBooks Services | Nedd Digital",
    metaDescription:
      "Monthly QuickBooks bookkeeping, reconciliation, AR/AP, job costing, cleanup and migration for small and growing businesses.",
    heroTitle: "Books you can trust, closed every month.",
    heroLead: "We keep your QuickBooks accurate, reconciled and up to date, so you always know where the business stands and your accountant never has to chase you for anything.",
    problemTitle: "What usually goes wrong before we start",
    problems: ["Nobody has reconciled the accounts in months, so the real bank balance is a guess.", "Expenses sit in the wrong categories, so the profit and loss report does not show where the money really went.", "Invoices go unpaid for weeks and cash gets tight, even though sales look healthy.", "Tax time turns into a hunt through emails, receipts and bank apps."],
    solution: "We take over the file, clean up whatever is behind, and then keep it current every month. Each transaction is recorded and categorized properly. Each account is checked against the real bank and card statements, which is how duplicate charges and mistakes get caught early. At month end we close the books and send you a profit and loss report and balance sheet you can rely on. If you are months behind today, that is fine. Cleanup comes first, then the monthly routine.",
        offerings: [
      {
        title: "Transaction entry & categorization",
        body: "Every time money moves in or out of your business, we record it in QuickBooks and assign it to the correct account.",
        example: "A $1,200 insurance payment is recorded as Insurance Expense, not just 'Payment', so at year end you know exactly what you spent on insurance versus rent or supplies.",
      },
      {
        title: "Bank & credit card reconciliation",
        body: "We match every QuickBooks transaction against your bank and card statements. This catches errors, duplicate entries, missed transactions and potential fraud.",
      },
      {
        title: "Accounts receivable & payable",
        body: "We track who owes you and how overdue they are, and who you need to pay and when, so you know your real cash position.",
      },
      {
        title: "Payroll allocation & job costing",
        body: "Labor and costs assigned to specific jobs, projects or departments so you can see whether each job was profitable.",
      },
      {
        title: "Monthly close",
        body: "We review and finalize transactions, make adjusting entries, reconcile all accounts and produce your P&L and Balance Sheet.",
      },
      {
        title: "Chart of accounts",
        body: "A clean, specific account structure (Marketing, Software, Insurance…) so your reports actually mean something.",
      },
    ],
    deliverables: [
      "QuickBooks setup with proper chart of accounts and opening balances",
      "QuickBooks cleanup of messy or outdated files",
      "Migration from QuickBooks Desktop to Online, or from Xero, Wave or FreshBooks",
      "Inventory and cost of goods sold tracking",
      "Job and project costing",
      "Management of multiple related companies",
      "Monthly P&L and Balance Sheet",
    ],
    outcomes: [
      { title: "Clear cash position", body: "Know what's in the bank, what's owed to you and what you owe." },
      { title: "Ready for your CPA", body: "Closed, reconciled books make tax preparation faster and cleaner." },
      { title: "Ready for lenders", body: "Accurate statements are what banks ask for when you apply for credit." },
    ],
    process: [
      { title: "Review", body: "We look at your current QuickBooks file (or set one up) and agree what needs doing." },
      { title: "Clean up", body: "If the books are behind or messy, we bring them current first." },
      { title: "Monthly bookkeeping", body: "Ongoing entry, categorization and reconciliation throughout the month." },
      { title: "Close & report", body: "Monthly close with your P&L and Balance Sheet delivered." },
    ],
    faqs: [
      { q: "Do you prepare tax returns?", a: "No. We keep your books accurate and closed so your CPA or tax preparer can work from clean numbers." },
      { q: "Do I need QuickBooks already?", a: "No. We can set up QuickBooks from scratch or migrate you from Desktop, Xero, Wave or FreshBooks." },
      { q: "My books are months behind. Can you help?", a: "Yes. QuickBooks cleanup is a standalone service, and we usually do it before ongoing monthly work begins." },
      { q: "Is a dashboard included?", a: "Every bookkeeping package includes a free historical Power BI dashboard covering up to 3 years of data (without automatic refresh)." },
    ],
    why: { title: "Why clean books matter more than most owners think", body: ["Your books are how you find out whether the business is really making money. The bank balance alone cannot tell you that. It will not show which jobs paid for themselves, which customers are slow to pay, or whether you can afford to hire someone next quarter.", "When the books fall behind, decisions get made on gut feeling. Tax season becomes a rush. A lender asks for statements and you have nothing you would be happy to hand over. None of it feels dramatic on the day. It just builds up until it costs real money."] },
    withOut: ["You guess your cash position instead of knowing it", "Deductions get missed because receipts were never filed", "Your accountant charges more to untangle the year", "Loan and funding applications stall while numbers get rebuilt"],
    withIt: ["You open one report and see where the money went last month", "Every account is matched to the real bank statements", "Your accountant receives closed, clean books without a chase email", "You can answer a lender in a day instead of a month"],
    forWho: [{"title": "Small businesses and trades", "body": "Job costing, payroll allocation and monthly reports that show which work actually earns its keep."}, {"title": "Online stores", "body": "Sales channels, processor fees, inventory and cost of goods tracked so your margins are real, not estimated."}, {"title": "Charities and nonprofits", "body": "Donations, grants and restricted funds kept separate in QuickBooks, so you can show funders exactly where each dollar went."}],
    cta: "Talk about your books",
    related: { slug: "power-bi-data-analytics", prompt: "Need clearer financial reporting?" },
  },
  {
    slug: "power-bi-data-analytics",
    track: "finance",
    name: "Power BI & Data Analytics",
    short: "Power BI and Tableau dashboards built on your QuickBooks, Excel and SQL data.",
    metaTitle: "Power BI & Tableau Dashboards, Data Analytics | Nedd Digital",
    metaDescription:
      "Power BI and Tableau dashboards for cash flow, P&L, AR aging and KPIs, built from QuickBooks, Excel and SQL data.",
    heroTitle: "Turn the data you already have into answers.",
    heroLead: "Your numbers sit in QuickBooks, Excel and a few other places. We pull them together into Power BI or Tableau dashboards built around the decisions you actually make.",
    problemTitle: "The problem isn't a lack of reports",
    problems: ["A monthly report arrives as a spreadsheet, takes an hour to read and still does not answer your question.", "Cash flow surprises happen because money coming in and going out is never shown side by side.", "Your data lives in three systems that never talk to each other."],
    solution: "We start with the questions you need answered, then connect the data behind them. The dashboard is built around those questions, with filters and drill downs so you can explore it yourself instead of asking for a new report every time. We finish with a walkthrough so your team really uses it. Scattered data across QuickBooks, Excel and an old database is a normal starting point for us.",
        offerings: [
      { title: "Cash flow dashboards", body: "Money in and money out over time, so you can spot tight months before they arrive." },
      { title: "P&L dashboards", body: "Revenue, expenses and margin by month, category or department, with period comparisons." },
      { title: "AR aging", body: "Who owes you, how much and how long it's been outstanding." },
      { title: "Business performance & KPIs", body: "The handful of numbers that matter for your business, in one view." },
      { title: "Tableau dashboards", body: "Interactive Tableau views for teams that already work in Tableau." },
      { title: "Excel & SQL reporting", body: "Cleaner Excel reports and SQL queries that pull the right numbers together." },
    ],
    deliverables: [
      "Connections to QuickBooks, Excel, SQL and other business data",
      "Data model built for your reporting questions",
      "Interactive Power BI or Tableau reports with filters and detailed views",
      "Before and after comparisons across reporting periods",
      "Walkthrough so your team can use the dashboards confidently",
    ],
    outcomes: [
      { title: "Faster answers", body: "Filter and drill in yourself instead of waiting for a new report." },
      { title: "Fewer surprises", body: "Cash and receivables trends become visible early." },
      { title: "One source", body: "Numbers from different systems shown together in one place." },
    ],
    process: [
      { title: "Questions first", body: "We agree what you need to know before choosing charts." },
      { title: "Connect data", body: "We connect QuickBooks, Excel, SQL or other sources." },
      { title: "Build & review", body: "A first version to react to, then refinements." },
      { title: "Hand over", body: "Training and support so the dashboards get used." },
    ],
    faqs: [
      { q: "Do I need Power BI licenses?", a: "It depends on how you want to share dashboards. We'll explain the options during the first call." },
      { q: "Can you use data outside QuickBooks?", a: "Yes. Excel files, SQL databases and other business data can be combined with QuickBooks data." },
    ],
    why: { title: "Why a dashboard beats another spreadsheet", body: ["Most owners can tell you last month's sales. Fewer can say which three customers carry the business, how long cash would last in a slow month, or which service has the best margin. Those answers are in your data already. They are just buried.", "A good dashboard puts them on one screen and keeps them current. You stop waiting for someone to build a report and start spotting problems while there is still time to act."] },
    withOut: ["You find out about a cash squeeze after it has started", "Meetings begin with arguments about whose numbers are right", "Reports take days to prepare and are out of date on arrival"],
    withIt: ["Cash, profit and receivables are visible at a glance", "Everyone in the room looks at the same figures", "Charities can show trustees and funders where money came from and went", "Online stores can see margin by product and channel"],
    cta: "Discuss your dashboard",
    related: { slug: "custom-software-development", prompt: "Need a system built around your business?" },
  },
  {
    slug: "website-design-development",
    track: "digital",
    name: "Website Design & Development",
    short: "Fast, responsive business websites and landing pages that explain what you do clearly.",
    metaTitle: "Website Design & Development | Nedd Digital",
    metaDescription:
      "Business websites and landing pages: modern design, responsive development, working forms and deployment support.",
    heroTitle: "Software shaped around your process, not the other way round.",
    heroLead: "When spreadsheets and off the shelf tools stop fitting, we build internal systems and web applications around how your team really works.",
    problemTitle: "Why the current site isn't pulling its weight",
    problems: ["It looks dated and does not match the quality of the work you really do.", "It is awkward on a phone, which is where most visitors arrive.", "A new visitor cannot tell within a few seconds what you offer or how to reach you."],
    solution: "We start with the problem your customers have, not a template, and shape the site so they reach the answer quickly. Then we design and build it clean and responsive, with the forms, booking links, donation pages or product pages you need and nothing you do not. New pages can be added later without starting over.",
            offerings: [
      { title: "Website design", body: "A modern interface with clear hierarchy that fits your brand." },
      { title: "Responsive development", body: "Built to work properly on phones, tablets and desktops." },
      { title: "Business websites & landing pages", body: "Company websites with several pages or focused pages for a single offer." },
      { title: "Website functionality", body: "Contact forms, booking links, content sections and integrations." },
    ],
    deliverables: [
      "Site structure and page content plan",
      "Custom design in your brand",
      "Responsive build with SEO basics",
      "Deployment and domain setup",
      "Ongoing support where needed",
    ],
    outcomes: [
      { title: "Clear message", body: "Visitors understand what you do and how to reach you." },
      { title: "Works everywhere", body: "A consistent experience on every device." },
      { title: "Easy to grow", body: "Built so new pages and sections can be added later." },
    ],
    process: standardProcess,
    why: { title: "Why you need a website, even if work comes by word of mouth", body: ["Before anyone calls you, emails you or walks through your door, they look you up. It takes about ten seconds. A clear, modern website puts you in the running. Nothing at all, or something that looks abandoned, and most people quietly move on to the next name. You never hear from them, so you never know what it cost.", "A website is also the one place online that is truly yours. Social pages and directory listings can change overnight. Your site stays put, answers the same questions every time and keeps working at midnight."] },
    withOut: ["People who hear about you cannot check you out, so they hesitate", "You answer the same questions by phone and message every day", "A competitor with a proper site gets the enquiry instead", "Charities cannot take donations or volunteer sign ups online", "Online sellers depend on marketplaces that keep a cut of every sale"],
    withIt: ["Visitors understand what you do within seconds", "Enquiries, bookings and donations arrive through one clear form", "You have one link for every email, proposal and social profile", "People find you on Google when they search for what you do", "You look as established as you really are"],
    forWho: [{"title": "Service businesses", "body": "A site that explains what you do, shows your work and makes calling you the easy next step."}, {"title": "Online stores", "body": "Fast product pages, simple checkout and a layout that makes buying feel safe."}, {"title": "Charities and nonprofits", "body": "Donation pages, event and volunteer sign ups, and a clear page showing where support goes."}],
    cta: "Plan your website",
    related: { slug: "custom-software-development", prompt: "Need more than a website?" },
  },
  {
    slug: "custom-software-development",
    track: "digital",
    name: "Custom Software Development",
    short: "Internal systems, workflow tools and web applications built around how you work.",
    metaTitle: "Custom Software Development | Nedd Digital",
    metaDescription:
      "Custom business software: internal systems, workflow tools, dashboards and web applications designed around your processes.",
    heroTitle: "Software shaped around your process, not the other way round.",
    heroLead:
      "When spreadsheets and standard tools stop fitting, we build internal systems and web applications around how your business actually runs, not how a generic tool assumes every business runs.",
    problemTitle: "Where standard tools stop being enough",
    problems: [
      "Key processes run on a patchwork of spreadsheets and email.",
      "Generic software forces workarounds for the way your team works.",
      "Managers can't see status or history without asking around.",
    ],
    solution:
      "We start with the problem, map the process, then build a focused web application with the roles, workflows and views your team needs.",
    offerings: [
      { title: "Custom business software", body: "Applications built for a specific business need." },
      { title: "Internal business systems", body: "Tools your team uses daily to manage records, requests and operations." },
      { title: "Workflow systems", body: "Requests, approvals and status tracking with clear roles." },
      { title: "Dashboards & web applications", body: "Web applications with reporting views for managers." },
    ],
    deliverables: [
      "Process map and written scope",
      "User roles and permissions",
      "Web application with dashboard views",
      "Testing with your team",
      "Deployment, handover and support",
    ],
    outcomes: [
      { title: "One place", body: "Work that was scattered lives in a single system." },
      { title: "Visibility", body: "Managers see status and history without chasing." },
      { title: "Fits your team", body: "Built around your process instead of workarounds." },
    ],
    process: standardProcess,
    why: { title: "When it is time to stop forcing your work into someone else's software", body: ["Most teams start with spreadsheets and email, and that is fine for a while. Then a request gets lost, two people edit different copies, and a manager has to ask around to learn what is going on.", "A small system built for your process puts requests, approvals and history in one place. It does not need every feature. It needs the ones your team uses every day."] },
    withOut: ["Work lives in spreadsheets, inboxes and chat messages", "Nobody is sure which version is current", "Managers chase people for status updates"],
    withIt: ["Requests and approvals follow one clear path", "Everyone sees only what their role needs", "Managers see status and history without asking"],
    cta: "Discuss your system",
    related: { slug: "leave-management", prompt: "Looking for an internal HR workflow?" },
  },
  {
    slug: "mobile-app-development",
    track: "digital",
    name: "Mobile App Development",
    short: "Mobile applications built from your business requirements, from design to deployment.",
    metaTitle: "Mobile App Development | Nedd Digital",
    metaDescription:
      "Mobile app development based on your business requirements: UI/UX design, app development, backend integration, testing and deployment.",
    heroTitle: "Put your service in your customers' pockets.",
    heroLead: "We build mobile apps from clear requirements: design, development, connection to your existing systems, testing and release, so the app does what it should from day one.",
    problemTitle: "What usually stalls a mobile app before it starts",
    problems: ["You know roughly what the app should do, but turning that into a scope is the hard part.", "The app needs to talk to systems and data you already have, and that connection has to work properly.", "A past attempt stalled out because there was never a clear process to follow."],
    solution: "We define the requirements with you first, design the actual screens, then build, connect it to your systems, and test it properly before release. You know what's being built and roughly when at every stage, not just at the end. Support doesn't stop at launch. Early feedback from real users usually means a few adjustments, and we're there for that.",
        offerings: [
      { title: "UI/UX design", body: "Screen flows and interface designed for how people will use the app." },
      { title: "Mobile application development", body: "The app built to your agreed requirements." },
      { title: "API & backend integration", body: "Connections to your existing systems and data." },
      { title: "Testing & deployment", body: "Testing before release and help getting the app published." },
    ],
    deliverables: ["Requirements and scope", "Screen designs", "Working app", "Backend/API connections", "Testing and release support"],
    outcomes: [
      { title: "Clear scope", body: "You know what's being built and when." },
      { title: "Connected", body: "The app works with the systems you already have." },
      { title: "Supported", body: "Help after launch as you gather feedback." },
    ],
    process: standardProcess,
    why: { title: "Why an app, and when you do not need one", body: ["An app makes sense when people use your service often, need to log in, book, track or get reminders, and a mobile website would feel clumsy. If that is not your situation, we will say so and suggest something simpler.", "When an app is the right call, planning matters more than code. Most stalled apps stall because nobody wrote down what the app should do."] },
    withOut: ["Customers phone or message you for things they could do themselves", "Your team uses paper or chat for work that needs a record", "A past app idea never got past the first conversation"],
    withIt: ["Customers book, track and pay from their phone", "Your team captures work in the field and it lands in your systems", "You know the scope, the timeline and the price before we start"],
    cta: "Discuss your app",
    related: { slug: "custom-software-development", prompt: "Need a web system alongside the app?" },
  },
  {
    slug: "logo-brand-design",
    track: "digital",
    name: "Logo & Brand Design",
    short: "Logos, visual identity and brand assets that make your business recognizable.",
    metaTitle: "Logo & Brand Design | Nedd Digital",
    metaDescription:
      "Logo design, brand identity, visual direction and business branding assets for small and growing businesses.",
    heroTitle: "Look as professional as the work you do.",
    heroLead: "We design logos and simple, consistent brand identities, so your business looks like the same business on your website, documents, social media and signs.",
    problemTitle: "What inconsistent branding actually costs you",
    problems: ["The logo was put together quickly years ago and no longer fits the business you've grown into.", "Colors and fonts shift from one document to the next, so nothing feels connected.", "There are no proper files ready for print, web and social, so every new need turns into a scramble."],
    solution: "We agree on a visual direction first, design the logo and the core identity around it, then hand over the files and a short, clear guide so your team can use it consistently without having to ask each time. The result is a business that looks like one business, wherever a customer runs into it.",
        offerings: [
      { title: "Logo design", body: "A distinctive mark in the formats you need." },
      { title: "Brand identity", body: "Color palette, typography and usage rules." },
      { title: "Visual direction", body: "A clear look and feel agreed before design starts." },
      { title: "Business branding assets", body: "Business cards, letterheads, social images and similar." },
    ],
    deliverables: ["Logo files for web and print", "Color and typography guide", "Branding assets you choose", "Simple usage guidelines"],
    outcomes: [
      { title: "Recognizable", body: "A consistent look customers remember." },
      { title: "Ready to use", body: "Files for every place your brand appears." },
      { title: "Consistent", body: "Clear rules so everyone applies it the same way." },
    ],
    process: standardProcess,
    why: { title: "Why a consistent brand pays for itself", body: ["People judge quickly. A sharp logo and a steady look tell a stranger you are established and careful, long before they read a word. A patchwork of old logos and mismatched colors says the opposite.", "Good branding also saves you time. When your files, colors and fonts are ready, every new flyer, proposal or social post takes minutes instead of a scramble."] },
    withOut: ["Logos in the wrong format turn up blurry on print and web", "Every document uses different colors and fonts", "New customers cannot tell if you are the same business they saw before"],
    withIt: ["One recognizable look across everything you publish", "Files ready for print, web and social", "A short guide anyone on your team can follow"],
    cta: "Discuss your brand",
    related: { slug: "website-design-development", prompt: "Ready to put the new brand online?" },
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const TRACKS: Record<Track, { name: string; lead: string }> = {
  finance: {
    name: "Business, Finance & Insights",
    lead: "Books that are reconciled every month, dashboards that show what's actually happening, and fewer hours spent chasing numbers that should already be there.",
  },
  digital: {
    name: "Digital & Technology",
    lead: "Websites, internal tools, apps and branding built around how your business runs day to day, not a template that almost fits.",
  },
};

export const LEAVE_FEATURES = [
  { title: "Employee, manager & admin roles", body: "Separate views for employees, managers and admins, each seeing only what's relevant to their role." },
  { title: "Leave requests & approvals", body: "Leave requests and approvals with a clear, auditable trail behind every decision." },
  { title: "Live leave balances", body: "Leave balances that update live as requests are approved." },
  { title: "Leave types & policies", body: "Configurable leave types and the policies behind them." },
  { title: "CSV import", body: "CSV import, so existing employee data doesn't need to be retyped." },
  { title: "Attachments", body: "Supporting documents attached directly to a request." },
  { title: "Notifications", body: "Notifications when a request needs action or has just been decided." },
  { title: "Reports", body: "Reporting views for managers and admins." },
  { title: "Audit logs", body: "An audit log of who did what and when." },
];