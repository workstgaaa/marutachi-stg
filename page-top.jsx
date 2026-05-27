// TOP page

function LinkCard({ href, en, label, desc, cta }) {
  return (
    <a href={href} style={{
      background: 'var(--navy-900)',
      padding: 'clamp(40px, 6vw, 72px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minHeight: 320,
      justifyContent: 'space-between',
      transition: 'background 0.4s',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-800)'}
    onMouseLeave={e => e.currentTarget.style.background = 'var(--navy-900)'}
    >
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-jp)',
          fontWeight: 800,
          fontSize: 'clamp(40px, 5.5vw, 72px)',
          lineHeight: 0.92,
          color: 'var(--paper)',
          letterSpacing: '-0.02em',
        }}>{en}</p>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-jp)',
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: '0.08em',
          color: 'var(--blue-fog)',
        }}>{label}</p>
        <p style={{
          margin: '8px 0 0',
          fontSize: 13,
          lineHeight: 1.85,
          color: 'var(--blue-fog)',
          maxWidth: '36ch',
        }}>{desc}</p>
      </div>
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: 'var(--font-jp)',
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: '0.04em',
        color: 'var(--paper)',
      }}>
        {cta}
        <span style={{
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(244,242,236,0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
        }}>→</span>
      </span>
    </a>
  );
}

const HERO_SLIDES = ['office1.jpg', 'service2.png', 'service3.jpg'];

function PageTop() {
  const [slideIdx, setSlideIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setSlideIdx(i => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useReveal();

  return (
    <div className="page page-enter">
      {/* HERO */}
      <section className="hero">
<div className="hero__slide-wrap">
          {HERO_SLIDES.map((src, i) => (
            <img key={src} src={src} alt="" aria-hidden="true"
              className={`hero__slide ${i === slideIdx ? 'is-active' : ''}`} />
          ))}
        </div>
        <div className="hero__main" style={{
          gridTemplateColumns: '1fr', gap: 0,
        }}>
          <div>
            <h1 className="hero__title">
              丁寧・確実・迅速。<br/>
              <em>信頼</em>{' '}で選ばれる<br/>
              車両輸送。
            </h1>
          </div>
        </div>

        {/* SCROLL indicator */}
        <div className="hero__scroll">
          <span className="hero__scroll-label">SCROLL</span>
          <span className="hero__scroll-arrow" />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="svc-preview">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p style={{
                margin: '0 0 4px',
                fontFamily: 'var(--font-jp)',
                fontWeight: 800,
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
              }}>SERVICE</p>
              <h2 style={{fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--fg-soft)'}}>輸送のことなら、すべてマルタチへ。</h2>
            </div>
          </div>

          <div className="svc-list">
            {[
              {n: '01', jp: 'オークション輸送', desc: '全国のオートオークション会場への搬入・搬出を行っております。出品から落札後の引き上げまで一括サポートしております。'},
              {n: '02', jp: '業者間輸送・納車代行', desc: '中古車販売店・買取店・法人間での車両輸送を行っております。店舗間移動やエンドユーザーへの納車代行まで柔軟に対応しております。'},
              {n: '03', jp: '輸出港への車両輸送', desc: '各輸出港までの車両輸送を行っております。輸出スケジュールに合わせた迅速な対応で、海外ビジネスを支援いたします。'},
            ].map(s => (
              <a key={s.n} href="#/service" className="svc-row reveal">
                <span className="svc-num">— {s.n}</span>
                <h3 className="svc-title">{s.jp}</h3>
                <p className="svc-desc">{s.desc}</p>
                <span className="svc-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="reveal" style={{
            marginTop: 2,
            padding: 'clamp(32px, 4vw, 56px) clamp(28px, 4vw, 56px)',
            display: 'grid',
            gridTemplateColumns: '60px 1fr',
            gap: '16px',
            alignItems: 'start',
            background: '#dce4ed',
            color: 'var(--navy-900)',
          }}>
            <div style={{
              width: 56, height: 56,
              borderRadius: '50%',
              border: '1px solid rgba(11,27,59,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
              color: 'var(--navy-800)',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6v6.5C4 17.8 7.6 22 12 23.5c4.4-1.5 8-5.7 8-11V6L12 2z" />
                <polyline points="8,12.5 11,15.5 16.5,9.5" />
              </svg>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <h3 style={{
                fontFamily: 'var(--font-jp)',
                fontWeight: 700,
                fontSize: 'clamp(18px, 2.2vw, 26px)',
                margin: 0,
                letterSpacing: '0.02em',
                color: 'var(--navy-900)',
              }}>安心の輸送体制・保険完備</h3>
              <p style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.85,
                color: 'var(--navy-800)',
                maxWidth: '60ch',
              }}>お預かりした車両には万が一に備えた保険を適用。<br/>徹底した管理体制のもと、安全第一で輸送を行います。</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY / RECRUIT / CONTACT LINKS */}
      <section style={{
        padding: 'clamp(80px, 12vw, 140px) 0',
        background: 'var(--navy-900)',
        color: 'var(--paper)',
      }}>
        <div className="container">
          <div className="reveal link-card-grid">
            <LinkCard
              href="#/about"
              en="ABOUT"
              label="会社概要"
              desc=""
              cta="会社概要を見る"
            />
            <LinkCard
              href="#/recruit"
              en="RECRUIT"
              label="採用情報"
              desc=""
              cta="採用情報を見る"
            />
          </div>

          {/* CONTACT LINK */}
          <div className="reveal" style={{marginTop: 1}}>
            <a href="#/contact" className="link-card-contact" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'clamp(40px, 5vw, 64px) clamp(40px, 6vw, 72px)',
              background: 'var(--navy-800)',
              border: '1px solid rgba(244,242,236,0.14)',
              borderTop: 'none',
              transition: 'background 0.4s',
              gap: 32,
              flexWrap: 'wrap',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-700)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--navy-800)'}
            >
              <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                <p style={{
                  margin: 0,
                  fontFamily: 'var(--font-jp)',
                  fontWeight: 800,
                  fontSize: 'clamp(40px, 5.5vw, 72px)',
                  lineHeight: 0.92,
                  color: 'var(--paper)',
                  letterSpacing: '-0.02em',
                }}>CONTACT</p>
                <p style={{
                  margin: '4px 0 0',
                  fontFamily: 'var(--font-jp)',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  color: 'var(--blue-fog)',
                }}>お問い合わせ</p>
                <p style={{
                  margin: '8px 0 0',
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: 'var(--blue-fog)',
                  maxWidth: '48ch',
                }}>輸送のご依頼・お見積もり・採用・ご協業は、お気軽にお問い合わせください。</p>
              </div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: 'var(--font-jp)',
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '0.04em',
                color: 'var(--paper)',
                whiteSpace: 'nowrap',
              }}>
                お問い合わせはこちら
                <span style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  border: '1px solid rgba(244,242,236,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                }}>→</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

window.PageTop = PageTop;
