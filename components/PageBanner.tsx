import Link from "next/link";

interface PageBannerProps {
  tag: string;
  title: string;
  titleEm?: string;
  sub: string;
  breadcrumb: string;
}

export default function PageBanner({ tag, title, titleEm, sub, breadcrumb }: PageBannerProps) {
  return (
    <section className="page-banner">
      <div className="page-banner-grid" />
      <div className="page-banner-orb" />
      <div className="container">
        {/* Breadcrumb */}
        <div className="page-banner-crumb">
          <Link href="/">Home</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
          <span>{breadcrumb}</span>
        </div>

        <div className="section-tag" style={{ justifyContent: "flex-start" }}>{tag}</div>

        <h1 className="page-banner-h1">
          {title}
          {titleEm && <><br /><em>{titleEm}</em></>}
        </h1>
        <p className="page-banner-sub">{sub}</p>
      </div>
    </section>
  );
}
