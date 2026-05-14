// Service page

function PageService() {
  const [activeRoute, setActiveRoute] = React.useState('r1');

  React.useEffect(() => {
    const t = setInterval(() => {
      const ids = ROUTES.map(r => r.id);
      setActiveRoute(prev => ids[(ids.indexOf(prev) + 1) % ids.length]);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  useReveal();

  const services = [
    {
      id: 'auction',
      n: '01',
      jp: 'オークション輸送',
      img: 'auction.png',
      desc: '全国のオートオークション会場への搬入・搬出に対応。出品車両の持ち込みから、落札後の車両引き上げまで一括してお任せいただけます。スケジュール管理と確実な輸送で、スムーズな取引をサポートします。',
      feats: [
        '落札即日〜最短 24h で運び出し',
        'USS 全会場対応・出品搬入も可',
        '書類不備時のリカバリー一貫対応',
        '法人様は月締め掛け払いに対応',
      ],
      note: { label: '主な対応オークション会場', text: 'CAA・JU・LUM・USS　ほか全国のオークション会場・中古車流通ネットワークに対応しております。' },
    },
    {
      id: 'b2b',
      n: '02',
      jp: '業者間輸送・納車代行',
      img: 'service2.png',
      desc: '中古車販売店・買取店・法人間での車両輸送を行っています。店舗間移動や在庫車の移送、エンドユーザーへの納車代行まで柔軟に対応。自走・積載の最適な方法で、安全かつ効率的にお届けします。',
      feats: [
        '単車・キャリア両対応で柔軟運用',
        '店頭納車代行・整備入庫陸送',
        '専任担当による継続コミュニケーション',
        '法人 1,200 社超のお取引実績',
      ],
    },
    {
      id: 'export',
      n: '03',
      jp: '輸出港への車両輸送',
      img: 'port.jpeg',
      desc: 'オークション会場やディーラーから各輸出港までの輸送に対応。輸出スケジュールに合わせた迅速な対応で、海外ビジネスを支援します。安定した輸送体制で、大量輸送にも対応可能です。',
      feats: [
        '横浜・川崎・神戸・博多港への定期便',
        '船社別ヤード搬入・並べ込み報告',
        '通関業者との直接連携',
        '英語対応スタッフ常駐',
      ],
      note: { label: '主な対応港', text: '横浜港・川崎港・木更津港　ほか、名古屋港・大阪港・神戸港など全国主要港にも対応しております。' },
    },
  ];

  const strengths = [
    { n: '01', title: '迅速対応', desc: '急なご依頼にも柔軟かつスピーディーに対応いたします。' },
    { n: '02', title: <>東関東エリア<br/>に強み</>, desc: '千葉・茨城・埼玉を中心に、効率的で安定した輸送を実現しています。' },
    { n: '03', title: '柔軟な対応力', desc: '時間指定やイレギュラー案件にも柔軟に対応可能です。' },
    { n: '04', title: <>安全・品質<br/>管理の徹底</>, desc: '車両の取り扱いを徹底し、安全かつ確実にお届けいたします。' },
    { n: '05', title: <>豊富な<br/>輸送実績</>, desc: '多数のオークション会場・法人様との継続取引実績があります。' },
  ];

  return (
    <div className="page page-enter">
      <section className="svc-hero">
        <div className="hero-bg-text">Service.</div>
        <div>
          <h1>SERVICE</h1>
        </div>
      </section>

      {/* SERVICE DETAIL 01–03 */}
      {services.map((s, i) => (
        <section key={s.id} className={`svc-detail ${i % 2 === 1 ? 'svc-detail--alt' : ''}`}>
          <div className="container">
            <div className="svc-detail__inner reveal">
              <div className="svc-detail__media-wrap">
                <div className="svc-detail__media-dots" />
                <div className="svc-detail__media">
                  <img
                    src={s.img}
                    alt={s.jp}
                    style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
                  />
                </div>
              </div>
              <div className="svc-detail__copy">
                <div className="eyebrow">— SERVICE {s.n}</div>
                <h2>{s.jp}</h2>
                <p>{s.desc}</p>
                {s.note && (
                  <div style={{marginTop: 24}}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '28px 0',
                      borderTop: '1px solid var(--line)',
                      borderBottom: '1px solid var(--line)',
                    }}>
                      <span style={{
                        flexShrink: 0,
                        width: 28, height: 28,
                        borderRadius: '50%',
                        background: 'var(--navy-800)',
                        color: 'var(--paper)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                      }}>✓</span>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <span style={{fontSize: 15, fontFamily: 'var(--font-jp)', color: 'var(--fg-soft)'}}>{s.note.label}</span>
                        <span style={{fontSize: 15, lineHeight: 1.6}}>{s.note.text}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 安心の輸送体制・保険完備 */}
      <section style={{background: '#dce4ed', color: 'var(--navy-900)'}}>
        <div className="container">
          <div className="reveal" style={{
            padding: 'clamp(40px, 6vw, 72px) 0',
            display: 'grid',
            gridTemplateColumns: '80px 1fr',
            gap: '32px',
            alignItems: 'start',
          }}>
            <div style={{
              width: 56, height: 56,
              borderRadius: '50%',
              border: '1px solid rgba(11,27,59,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
              color: 'var(--navy-800)',
            }}>🛡</div>
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
                fontSize: 14,
                lineHeight: 1.85,
                color: 'var(--navy-800)',
                maxWidth: '60ch',
              }}>お預かりした車両には万が一に備えた保険を適用。<br/>徹底した管理体制のもと、安全第一で輸送を行います。</p>
            </div>
          </div>
        </div>
      </section>

      {/* マルタチの強み */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) 0',
        background: 'var(--navy-800)',
        color: 'var(--paper)',
      }}>
        <div className="container">
          <div className="section-head reveal" style={{borderBottom: '1px solid rgba(244,242,236,0.12)', paddingBottom: 40}}>
            <div>
              <div className="section-num" style={{color: 'var(--blue-fog)'}}>— STRENGTHS</div>
              <h2 style={{marginTop: 12, color: 'var(--paper)'}}>マルタチの強み</h2>
            </div>
          </div>
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: 'rgba(244,242,236,0.08)',
            marginTop: 0,
          }}>
            {strengths.map(s => (
              <div key={s.n} style={{
                background: 'var(--navy-800)',
                padding: 'clamp(32px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* 背景の大きな数字 */}
                <span style={{
                  position: 'absolute',
                  top: -8,
                  right: 16,
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(64px, 8vw, 96px)',
                  fontWeight: 400,
                  color: 'rgba(107,134,176,0.12)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>{s.n}</span>
                {/* アクセントライン */}
                <div style={{width: 32, height: 2, background: 'var(--blue-dusty)'}} />
                <h3 style={{
                  fontFamily: 'var(--font-jp)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2.1vw, 26px)',
                  margin: 0,
                  letterSpacing: '0.02em',
                  color: 'var(--paper)',
                }}>
                  <span style={{
                    background: 'linear-gradient(transparent 55%, rgba(255, 248, 0, 0.65) 55%)',
                    paddingBottom: 2,
                  }}>{s.title}</span>
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: 'var(--blue-fog)',
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 輸送エリア */}
      <section className="map-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— SERVICE AREA</div>
              <h2 style={{marginTop: 16}}>輸送エリア</h2>
            </div>
          </div>
          <div className="reveal" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="map-canvas map-canvas-wrap" style={{width: '55%'}}>
              <MapJapan activeRoute={activeRoute} onRouteHover={setActiveRoute} />
            </div>
          </div>

          {/* エリア凡例 */}
          <div className="reveal" style={{
            display: 'flex',
            gap: 'clamp(24px, 4vw, 48px)',
            justifyContent: 'center',
            marginTop: 32,
            flexWrap: 'wrap',
          }}>
            {[
              { color: '#6b86b0', label: '自社対応可能エリア' },
              { color: '#c8b96e', label: '自社ネットワーク対応エリア' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 20px',
                border: `1px solid ${item.color}`,
                borderLeft: `4px solid ${item.color}`,
              }}>
                <span style={{
                  display: 'inline-block',
                  width: 14, height: 14,
                  borderRadius: '50%',
                  background: item.color,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-jp)',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--navy-800)',
                  letterSpacing: '0.04em',
                }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 車両 */}
      <section style={{padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid var(--line)'}}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— FLEET</div>
              <h2 style={{marginTop: 16}}>車両</h2>
            </div>
          </div>
          <div className="reveal fleet-photo-grid">
            <img src="fleet1.jpeg" alt="車両 1" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
            <img src="fleet2.jpeg" alt="車両 2" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
          </div>

          <div className="reveal fleet-count-grid">
            {[
              ['トレーラー', '7台積み', '6台'],
              ['キャリアカー', '5台積み', '4台'],
              ['キャリアカー', '2台積み', '2台'],
              ['キャリアカー', '1台積み', '1台'],
              ['合計', '', '13台'],
            ].map(([type, spec, count], i) => (
              <div key={i} style={{
                background: i === 4 ? 'var(--navy-900)' : 'var(--bg)',
                color: i === 4 ? 'var(--paper)' : 'inherit',
                padding: 'clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 12,
              }}>
                <span style={{fontFamily: 'var(--font-jp)', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em', color: i === 4 ? 'var(--paper)' : 'inherit'}}>
                  {spec ? `${spec} ${type}` : type}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(22px, 2.5vw, 42px)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginTop: 'auto',
                  color: i === 4 ? 'var(--paper)' : 'var(--navy-800)',
                }}>{count}</span>
              </div>
            ))}
          </div>
          <div className="reveal" style={{marginTop: 32, display: 'flex', justifyContent: 'center'}}>
            <a href="#/contact" className="btn btn--lg" style={{padding: '20px clamp(48px, 6vw, 80px)'}}>お問い合わせ<span className="btn-arrow">→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}

window.PageService = PageService;
