import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowDownRight,
  Receipt,
  Share2,
  QrCode,
  Landmark,
  HandCoins,
  FileSymlink,
  Menu,
  Smartphone,
  Home as HomeIcon,
} from "lucide-react";
import homeHeader from "@/assets/home-header.jpeg.asset.json";
import bankLogo from "@/assets/bank-logo.png";
import ipnLogo from "@/assets/ipn-logo.png";
import navHome from "@/assets/nav-home.png.asset.json";
import navSend from "@/assets/nav-send.png.asset.json";
import navRequest from "@/assets/nav-request.png.asset.json";
import navBills from "@/assets/nav-bills.png.asset.json";
import navMenu from "@/assets/nav-menu.png.asset.json";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "الرئيسية | Instapay" },
      {
        name: "description",
        content: "الصفحة الرئيسية لتطبيق Instapay: الحسابات، الخدمات، والمعاملات.",
      },
      { property: "og:title", content: "الرئيسية | Instapay" },
      {
        property: "og:description",
        content: "الصفحة الرئيسية لتطبيق Instapay: الحسابات، الخدمات، والمعاملات.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { label: "ارسال نقود", Icon: ArrowUpRight },
  { label: "طلب دفع", Icon: ArrowDownLeft },
  { label: "دفع فواتير", Icon: Receipt },
  { label: "التبرعات", Icon: HandCoins },
  { label: "عرض الحسابات", Icon: Landmark },
  { label: "المعاملات السابقة", Icon: FileSymlink },
];

const transactions = [
  {
    amount: "1,600 EGP",
    sub: "HABIBA M****** F****",
    name: "H A B I B A",
    date: "16 Sep 2026 02:19 PM",
    kind: "إرسال نقود",
    out: true,
  },
  {
    amount: "3,996 EGP",
    sub: "AHMED SOBHY AHMED",
    name: "ahmedsobhi7781@instapay",
    date: "16 Sep 2026 03:06 AM",
    kind: "إستلام نقود",
    out: false,
  },
  {
    amount: "2,000 EGP",
    sub: "HABIBA M****** F****",
    name: "H A B I B A",
    date: "15 Sep 2026 08:44 PM",
    kind: "إرسال نقود",
    out: true,
  },
  {
    amount: "2,000 EGP",
    sub: "AHMED SOBHY AHMED",
    name: "ahmedsobhi7781@instapay",
    date: "15 Sep 2026 06:30 PM",
    kind: "إستلام نقود",
    out: false,
  },
  {
    amount: "300 EGP",
    sub: "Haba A S****",
    name: "Me",
    date: "11 Sep 2026 09:32 PM",
    kind: "إرسال نقود",
    out: true,
  },
];

function HomePage() {
  return (
    <div className="home" dir="rtl" lang="ar">
      <img
        className="home-hero"
        src={homeHeader.url}
        alt="مساء الخير Mohamed — ادفع فواتيرك"
        width={1282}
        height={921}
      />

      <section className="home-section">
        <div className="account-card">
          <div className="account-top">
            <div className="account-id">
              <p>mohamed.othman4279@instapay</p>
              <small>
                PREPAID <span>****6150</span>
              </small>
            </div>
            <img src={bankLogo} alt="البنك" loading="lazy" width={816} height={816} />
          </div>
          <div className="account-actions">
            <button type="button">
              <QrCode strokeWidth={1.8} />
              <span>مشاركة QR</span>
            </button>
            <button type="button">
              <Share2 strokeWidth={1.8} />
              <span>رابط</span>
            </button>
            <button type="button">
              <Receipt strokeWidth={1.8} />
              <span>الرصيد</span>
            </button>
          </div>
        </div>
        <span className="dot" aria-hidden="true" />
      </section>

      <section className="home-section">
        <div className="section-head">
          <h2>الخدمات</h2>
          <button type="button">المزيد</button>
        </div>
        <div className="services-grid">
          {services.map(({ label, Icon }) => (
            <div className="service-tile" key={label}>
              <span className="service-icon">
                <Icon strokeWidth={1.8} />
              </span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <h2>المعاملات</h2>
          <button type="button">المزيد</button>
        </div>
        <ul className="tx-list">
          {transactions.map((tx, i) => (
            <li className="tx-row" key={i}>
              <div className="tx-head">
                <strong dir="ltr">{tx.amount}</strong>
                <div className="tx-status">
                  <span className="tx-badge">ناجحة</span>
                  <span className="tx-chevron" aria-hidden="true">
                    ‹
                  </span>
                </div>
              </div>
              <div className="tx-body">
                <div className="tx-avatar">
                  {tx.out ? <Smartphone strokeWidth={1.8} /> : <span>@</span>}
                  <span className={`tx-dir ${tx.out ? "out" : "in"}`}>
                    {tx.out ? (
                      <ArrowUpLeft strokeWidth={2.6} />
                    ) : (
                      <ArrowDownRight strokeWidth={2.6} />
                    )}
                  </span>
                  <small>{tx.kind}</small>
                </div>
                <div className="tx-info">
                  <small dir="ltr">{tx.sub}</small>
                  <p>{tx.name}</p>
                  <time dir="ltr">{tx.date}</time>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="powered">
          <small>POWERED BY</small>
          <span
            className="ipn-mark"
            role="img"
            aria-label="IPN"
            style={{ maskImage: `url(${ipnLogo})`, WebkitMaskImage: `url(${ipnLogo})` }}
          />
        </div>
      </section>

      <nav className="bottom-nav" aria-label="التنقل">
        <button type="button" className="nav-item active">
          <img src={navHome.url} alt="" />
          <span>الرئيسية</span>
        </button>
        <button type="button" className="nav-item" aria-label="ارسال نقود">
          <img src={navSend.url} alt="" />
        </button>
        <button type="button" className="nav-item" aria-label="طلب دفع">
          <img src={navRequest.url} alt="" />
        </button>
        <button type="button" className="nav-item" aria-label="الفواتير">
          <img src={navBills.url} alt="" />
        </button>
        <button type="button" className="nav-item" aria-label="القائمة">
          <img src={navMenu.url} alt="" />
        </button>
      </nav>
    </div>
  );
}
