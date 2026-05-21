// Contact page — single unified form

function Field({ label, req, children, full }) {
  return (
    <div className={`field ${full ? 'full' : ''}`}>
      <label>
        <span>{label}</span>
        {req
          ? <span className="req">必須</span>
          : <span style={{fontSize:11, letterSpacing:'0.06em', color:'var(--blue-fog)'}}>任意</span>
        }
      </label>
      {children}
    </div>
  );
}

const PRIVACY_POLICY = `株式会社マルタチ（以下「当社」といいます。）は、車両輸送サービスの提供にあたり、お客様およびお取引先様、採用応募者様の個人情報を適切に保護することを重要な責務と認識し、以下の方針に基づき個人情報の保護に努めます。

1. 個人情報の取得について
当社は、適法かつ公正な手段により、業務上必要な範囲で個人情報を取得いたします。

2. 個人情報の利用目的
当社が取得した個人情報は、以下の目的の範囲内で利用いたします。
・車両輸送に関するお問い合わせへの対応
・車両輸送業務の遂行およびそれに伴う連絡
・見積もりの作成および各種ご提案
・お取引に関する管理および請求・支払業務
・サービス品質向上および業務改善のための分析
・採用応募者への連絡および採用選考
・その他、上記利用目的に付随する業務

3. 個人情報の第三者提供について
当社は、以下の場合を除き、本人の同意を得ることなく第三者に個人情報を提供いたしません。
・法令に基づく場合
・人の生命、身体または財産の保護のために必要がある場合
・公的機関からの正当な要請があった場合
・業務遂行上必要な範囲で、業務委託先に提供する場合

4. 個人情報の安全管理について
当社は、個人情報の漏えい、紛失、改ざん、不正アクセス等を防止するため、適切な安全管理措置を講じ、個人情報の保護に努めます。

5. 業務委託先の管理について
当社は、業務の一部を外部に委託する場合、個人情報の適切な取り扱いを求め、必要かつ適切な監督を行います。

6. 個人情報の開示・訂正・削除等について
本人から自己の個人情報について、開示、訂正、利用停止、削除等のご請求があった場合には、本人確認のうえ、法令に基づき適切に対応いたします。

7. 法令等の遵守および見直し
当社は、個人情報の保護に関する法令および関連規範を遵守するとともに、本ポリシーの内容を適宜見直し、継続的な改善に努めます。

8. お問い合わせ窓口
個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
株式会社マルタチ　本社営業所
〒349-0135　埼玉県蓮田市井沼843-1
TEL：048-884-8106　FAX：048-884-8107
Mail：info@marutachi.com`;

function PageContact() {
  const [agreed, setAgreed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  useReveal([submitted]);

  const [error, setError] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;
    setError(false);
    try {
      const res = await fetch('https://ssgform.com/s/aOu0E7Uj6cEc', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });
      console.log('status:', res.status, res.ok);
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 200, behavior: 'smooth' });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('送信エラー:', err);
      setError(true);
    }
  };

  return (
    <div className="page page-enter">
      <section className="contact-hero">
        <div className="hero-bg-text">Contact.</div>
        <h1>CONTACT</h1>
      </section>

      <section className="contact-form-wrap">
        <div className="container">

          {submitted ? (
            <div className="form-success" key="success">
              <div className="check-big">✓</div>
              <h3>お問い合わせを受け付けました</h3>
              <p>担当者よりご連絡いたします。</p>
              <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>もう一度送信する</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>

              <Field label="会社名" full={false}>
                <input type="text" name="会社名" placeholder="株式会社○○" />
              </Field>

              <Field label="お名前" req>
                <input type="text" name="お名前" placeholder="山田 太郎" required />
              </Field>

              <Field label="メールアドレス" req>
                <input type="email" name="メールアドレス" placeholder="example@example.com" required />
              </Field>

              <Field label="電話番号" req>
                <input type="tel" name="電話番号" placeholder="048-000-0000" required />
              </Field>

              <Field label="お問い合わせ種別" req full>
                <select name="お問い合わせ種別" defaultValue="" required style={{width: 'fit-content', minWidth: 0, paddingRight: 48}}>
                  <option value="" disabled>選択してください</option>
                  <option>車両輸送のご依頼</option>
                  <option>ご協業について</option>
                  <option>採用について</option>
                  <option>その他</option>
                </select>
              </Field>

              <Field label="お問い合わせ内容" req full>
                <textarea name="お問い合わせ内容" placeholder="ご用件をご記入ください" required style={{minHeight: 160}} />
              </Field>

              {/* プライバシーポリシー */}
              <div className="full" style={{marginTop: 8}}>
                <div style={{
                  border: '1px solid var(--line)',
                  padding: 'clamp(20px, 3vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}>
                  <p style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: 'var(--blue-dusty)',
                  }}>— PRIVACY POLICY / プライバシーポリシー</p>
                  <div style={{
                    maxHeight: 200,
                    overflowY: 'auto',
                    fontSize: 12,
                    lineHeight: 2,
                    color: 'var(--fg-soft)',
                    whiteSpace: 'pre-wrap',
                    paddingRight: 8,
                  }}>
                    {PRIVACY_POLICY}
                  </div>
                </div>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginTop: 16,
                  cursor: 'pointer',
                  userSelect: 'none',
                }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    style={{width: 18, height: 18, accentColor: 'var(--navy-800)', cursor: 'pointer', flexShrink: 0}}
                  />
                  <span style={{fontSize: 13, lineHeight: 1.6}}>
                    プライバシーポリシーに同意する
                  </span>
                </label>
              </div>

              {error && (
                <div className="full" style={{color: 'red', fontSize: 13, marginTop: 8}}>
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}
              <div className="full" style={{display: 'flex', justifyContent: 'center', marginTop: 16}}>
                <button
                  type="submit"
                  className="btn btn--lg"
                  disabled={!agreed}
                  style={{opacity: agreed ? 1 : 0.4, cursor: agreed ? 'pointer' : 'not-allowed'}}
                >
                  送信する<span className="btn-arrow">→</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>
    </div>
  );
}

window.PageContact = PageContact;
