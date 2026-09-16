import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ProgressMark } from "@/components/progress-mark";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowDownRight,
  Smartphone,
  X,
} from "lucide-react";
import qrCode from "@/assets/qr-code.png.asset.json";
import btnQr from "@/assets/btn-qr.png.asset.json";
import btnShare from "@/assets/btn-share.png.asset.json";
import homeHeader from "@/assets/home-header.jpeg";
import bankLogo from "@/assets/bank-reference.png.asset.json";
import ipnLogo from "@/assets/ipn-logo.png";
import navHome from "@/assets/nav-home.png";
import navSend from "@/assets/nav-send.png";
import navRequest from "@/assets/nav-request.png";
import navBills from "@/assets/nav-bills.png";
import navMenu from "@/assets/nav-menu.png";
import actionBalance from "@/assets/action-balance.png.asset.json";
import actionLink from "@/assets/action-link.png.asset.json";
import actionQr from "@/assets/action-qr.png.asset.json";
import serviceBills from "@/assets/service-bills.png.asset.json";
import serviceRequest from "@/assets/service-request.png.asset.json";
import serviceSend from "@/assets/service-send.png.asset.json";
import serviceHistory from "@/assets/service-history.png.asset.json";
import serviceAccounts from "@/assets/service-accounts.png.asset.json";
import serviceDonations from "@/assets/service-donations.png.asset.json";

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
  { label: "ارسال نقود", image: serviceSend.url },
  { label: "طلب دفع", image: serviceRequest.url },
  { label: "دفع فواتير", image: serviceBills.url },
  { label: "التبرعات", image: serviceDonations.url },
  { label: "عرض الحسابات", image: serviceAccounts.url },
  { label: "المعاملات السابقة", image: serviceHistory.url },
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
  const [qrOpen, setQrOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) return;
    const t = window.setTimeout(() => navigate({ to: "/pin" }), 1600);
    return () => window.clearTimeout(t);
  }, [loading, navigate]);
  return (
    <div className="home" dir="rtl" lang="ar">
      <img
        className="home-hero"
        src={homeHeader}
        alt="مساء الخير Mohamed — ادفع فواتيرك"
        width={1282}
        height={921}
      />

      <section className="home-section">
        <div className="account-card">
          <div className="account-top">
            <img src={bankLogo.url} alt="البنك" loading="lazy" width={130} height={130} />
            <div className="account-id">
              <p>mohamed.othman4279@instapay</p>
              <small>
                PREPAID <span>****6150</span>
              </small>
            </div>
          </div>
          <div className="account-actions">
            <button type="button" onClick={() => setQrOpen(true)}>
              <img src={actionQr.url} alt="" />
              <span>مشاركة QR</span>
            </button>
            <button type="button">
              <img src={actionLink.url} alt="" />
              <span>رابط</span>
            </button>
            <button type="button" onClick={() => setLoading(true)}>
              <img src={actionBalance.url} alt="" />
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
          {services.map(({ label, image }) => (
            <div className="service-tile" key={label}>
              <img className="service-icon" src={image} alt="" />
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
          <img src={navHome} alt="" />
          <span>الرئيسية</span>
        </button>
        <button type="button" className="nav-item" aria-label="ارسال نقود">
          <img src={navSend} alt="" />
        </button>
        <button type="button" className="nav-item" aria-label="طلب دفع">
          <img src={navRequest} alt="" />
        </button>
        <button type="button" className="nav-item" aria-label="الفواتير">
          <img src={navBills} alt="" />
        </button>
        <button type="button" className="nav-item" aria-label="القائمة">
          <img src={navMenu} alt="" />
        </button>
      </nav>

      {loading && (
        <div className="loading-overlay" role="status" aria-label="جارٍ التحميل">
          <ProgressMark size={56} />
        </div>
      )}

      {qrOpen && (
        <div className="qr-overlay" role="dialog" aria-modal="true" aria-label="مشاركة QR">
          <div className="qr-card">
            <img className="qr-image" src={qrCode.url} alt="رمز QR" />
            <p className="qr-handle" dir="ltr">
              mohamed.othman4279@instapay
            </p>
            <div className="qr-actions">
              <button type="button">
                <img src={btnQr.url} alt="" />
                <span>مشاركة QR</span>
              </button>
              <button type="button">
                <img src={btnShare.url} alt="" />
                <span>مشاركة الرابط</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="qr-close"
            aria-label="إغلاق"
            onClick={() => setQrOpen(false)}
          >
            <X strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
