// About page

function PageAbout() {
  useReveal();

  return (
    <div className="page page-enter">
      <section className="about-hero">
        <div className="hero-bg-text">Company.</div>
        <h1>COMPANY</h1>
      </section>

      {/* 代表あいさつ */}
      <section className="about-intro">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— MESSAGE</div>
              <h2 style={{marginTop: 16}}>代表あいさつ</h2>
            </div>
          </div>
          <div className="reveal" style={{marginTop: 48}}>
            <p>株式会社マルタチのホームページをご覧いただき、誠にありがとうございます。</p>
            <p>当社は自動車輸送・陸送を専門とし、お客様の大切な車両を安全かつ確実にお届けすることを使命として日々業務に取り組んでおります。</p>
            <p>創業以来、「丁寧な対応」「信頼に応える輸送」「迅速な対応」を大切にし、オートオークション輸送や業者間輸送、輸出関連輸送など、さまざまなご要望にお応えしてまいりました。</p>
            <p>現在では、本社営業所をはじめ、東北営業所・仙台ヤード・北関東HUBセンターを展開し、全国規模での輸送体制を整えております。最大7台積載のトレーラーを主軸とした輸送力に加え、自走輸送など柔軟な対応力により、お客様の多様なニーズにお応えできる体制を構築しております。</p>
            <p>これからも現状に満足することなく、安全・品質の向上に努めるとともに、お客様により一層ご満足いただけるサービスを提供できるよう、社員一同努力を重ねてまいります。今後とも変わらぬご支援、ご愛顧を賜りますようお願い申し上げます。</p>
            <p style={{marginTop: 32, fontFamily:'var(--font-jp)', fontWeight:600, fontSize:15}}>株式会社マルタチ　代表取締役　立川 正和</p>
          </div>
        </div>
      </section>

      {/* 会社紹介 */}
      <section style={{padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid var(--line)'}}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— ABOUT</div>
              <h2 style={{marginTop: 16}}>会社紹介</h2>
            </div>
          </div>
          <div className="reveal" style={{marginTop: 48}}>
            <p>株式会社マルタチは、埼玉県蓮田市を拠点に自動車輸送・陸送を専門に行う運送会社です。</p>
            <p>オートオークション輸送、業者間輸送、輸出港への車両輸送、納車代行など、幅広い車両輸送ニーズに対応しております。</p>
            <p>最大7台積載可能なトレーラーを主軸に、5台積み・2台積み・1台積みの積載車、さらに自走輸送を組み合わせることで、小ロットから大量輸送まで柔軟かつ効率的な輸送体制を構築しています。</p>
            <p>また、本社営業所に加え、東北営業所・仙台ヤード・北関東HUBセンターを展開しており、各拠点を活かしたネットワークにより、広範囲かつ安定した輸送体制を実現し、全国規模での車両輸送に対応可能です。案件規模や納期に応じて最適な輸送方法をご提案し、スピードと安全性を両立したサービスを提供いたします。</p>
            <p>お客様の大切な車両を「丁寧・確実・迅速」にお届けすることを徹底しております。</p>
            <p>今後も信頼されるパートナーとして、質の高い輸送サービスを提供し続けてまいります。</p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section style={{padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid var(--line)'}}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— PROFILE</div>
              <h2 style={{marginTop: 16}}>会社概要</h2>
            </div>
          </div>
          <table className="profile-table reveal">
            <tbody>
              {[
                ['会社名', '株式会社マルタチ'],
                ['設立', '2002年5月'],
                ['代表取締役', '立川 正和'],
                ['事業内容', '自動車陸送、自動車輸送'],
                ['本社営業所', '埼玉県蓮田市井沼843-1\nTEL：048-884-8106 / FAX：048-884-8107'],
                ['東北営業所', '福島県西白河郡西郷村小田倉字碑返317\nTEL：0248-21-8887 / FAX：0248-21-8846'],
                ['仙台ヤード', '宮城県仙台市宮城野区中野5丁目9-10\nTEL：022-794-8796 / FAX：022-794-8797'],
                ['北関東HUBセンター', '群馬県伊勢崎市赤堀今井町2丁目1411-1\nTEL：0270-75-5923 / FAX：0270-75-5924'],
              ].map(([k, v]) => (
                <tr key={k}><th>{k}</th><td style={{whiteSpace: 'pre-line'}}>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 拠点紹介 */}
      <section style={{padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid var(--line)'}}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— LOCATIONS</div>
              <h2 style={{marginTop: 16}}>拠点紹介</h2>
            </div>
          </div>

          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            background: 'var(--line)',
            border: '1px solid var(--line)',
            marginTop: 0,
          }}>
            {[
              {
                n: '01', label: '本社営業所', en: 'HEAD OFFICE',
                img: 'office1.jpg',
                address: '埼玉県蓮田市井沼843-1',
                tel: '048-884-8106',
                fax: '048-884-8107',
              },
              {
                n: '02', label: '東北営業所', en: 'TOHOKU OFFICE',
                img: 'office2.jpg',
                address: '福島県西白河郡西郷村小田倉字碑返317',
                tel: '0248-21-8887',
                fax: '0248-21-8846',
              },
              {
                n: '03', label: '仙台ヤード', en: 'SENDAI YARD',
                img: 'office3.jpg',
                address: '宮城県仙台市宮城野区中野5丁目9-10',
                tel: '022-794-8796',
                fax: '022-794-8797',
              },
              {
                n: '04', label: '北関東HUBセンター', en: 'KITA-KANTO HUB',
                img: 'office4.jpg',
                address: '群馬県伊勢崎市赤堀今井町2丁目1411-1',
                tel: '0270-75-5923',
                fax: '0270-75-5924',
              },
            ].map(o => (
              <div key={o.n} style={{background: 'var(--bg)', display: 'flex', flexDirection: 'column'}}>
                {/* 写真 */}
                <div style={{aspectRatio: '4/3', overflow: 'hidden', background: 'var(--paper-2)'}}>
                  {o.img
                    ? <img src={o.img} alt={o.label} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
                    : <div className="placeholder" style={{width:'100%', height:'100%'}}>PHOTO</div>
                  }
                </div>
                {/* テキスト */}
                <div style={{padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 14, flex: 1}}>
                  <h3 style={{
                    fontFamily: 'var(--font-jp)',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                    margin: 0,
                    letterSpacing: '0.02em',
                  }}>{o.label}</h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4}}>
                    <p style={{
                      margin: 0,
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: 'var(--fg-soft)',
                    }}>{o.address}</p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      paddingTop: 10,
                      borderTop: '1px solid var(--line-soft)',
                    }}>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em'}}>
                        TEL <a href={`tel:${o.tel}`} style={{color: 'var(--navy-700)'}}>{o.tel}</a>
                      </span>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--fg-soft)'}}>
                        FAX {o.fax}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* アクセスマップ */}
      <section style={{padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid var(--line)'}}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-num">— ACCESS</div>
              <h2 style={{marginTop: 16}}>アクセスマップ</h2>
            </div>
            <p>本社営業所：埼玉県蓮田市井沼843-1</p>
          </div>
          <div className="reveal" style={{marginTop: 48, width: '100%', aspectRatio: '16/7', minHeight: 320}}>
            <iframe
              src="https://maps.google.com/maps?q=埼玉県蓮田市井沼843-1&output=embed&hl=ja"
              width="100%"
              height="100%"
              style={{border: 0, display: 'block'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="本社営業所 アクセスマップ"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

window.PageAbout = PageAbout;
