// Recruit page

function PageRecruit() {
  useReveal();

  const jobRows = [
    ['募集職種', 'オークションカーの自動車搬送ドライバー\n（けん引７台積み、大型5台積み、2台積み、ローダー）'],
    ['雇用形態', '正社員'],
    ['給与', '月給：35万円～55万円\n\n★頑張りがそのまま収入UPになります\n★ボーナスあり（業績による／年2回実績あり）\n\n【月収例（入社1年目）】\n＜大型＞ 月収35万円～40万円（基本給＋手当＋歩合）\n＜けん引＞ 月収45万円～55万円（基本給＋手当＋歩合）'],
    ['勤務地', '埼玉県'],
    ['勤務時間', '9:00～18:00（実働8時間、休憩1時間）\n※夜勤の場合あり'],
    ['休日・時間外労働', 'ローテーション制（月6日休）\n※シフトにより決定\n※希望休相談可\n時間外労働あり'],
    ['仕事内容', 'トレーラードライバー・大型ドライバーの募集です。\n《業務拡大・新ヤード開設に伴う増員募集！》\n\n主にオークション車などの商品車を、各拠点から目的地まで安全に輸送していただくお仕事です。\n\n使用する車両は、7台積み・5台積み・2台積み・ローダーのキャリアカー。\n経験やスキルに応じて担当車両を決定しますので、無理なくステップアップできます。\n\nまた、積み込み・積み下ろしも含めた一連の業務をお任せしますが、先輩ドライバーがしっかりサポートしますので未経験の方も安心です。\n\n現在は、未経験スタートのドライバーや女性ドライバーも多数活躍中。\n「車が好き」「運転が好き」という気持ちがあれば大歓迎です。'],
    ['必要資格', '大型自動車免許'],
    ['福利厚生', '雇用保険'],
    ['試用・研修', '試用期間あり（1週間～1か月程度）\n雇用条件は本採用時と同じ'],
    ['勤務期間', '最低勤務期間：半年以上'],
    ['応募方法', '電話連絡後、履歴書（写真添付）持参にて面接応募\n■連絡先　TEL：048-884-8106　担当：浅香'],
    ['契約期間', '無期雇用'],
    ['受動喫煙防止措置', '屋内原則禁煙　※敷地内に喫煙スペースあり'],
    ['募集者', '株式会社マルタチ'],
    ['所在地', '■本社営業所\n埼玉県蓮田市井沼843-1\nTEL．048-884-8106　FAX．048-884-8107\n\n■東北営業所\n福島県西白河郡西郷村小田倉字碑返317\nTEL．0248-21-8887　FAX．0248-21-8846\n\n■仙台ヤード\n宮城県仙台市宮城野区中野5丁目9-10\nTEL．022-794-8796　FAX．022-794-8797\n\n■北関東HUBセンター\n群馬県伊勢崎市赤堀今井町2丁目1411-1\nTEL．0270-75-5923　FAX．0270-75-5924'],
  ];

  return (
    <div className="page page-enter">
      <section className="recruit-hero">
        <h1>RECRUIT</h1>
        <div className="recruit-hero__bg">Join us.</div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="recruit-jobs">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2 style={{marginTop: 0, fontSize: 'clamp(36px, 5vw, 72px)'}}>ともに走る、<br/><em>仲間</em>を募集中。</h2>
            </div>
          </div>

          <table className="profile-table reveal" style={{marginTop: 48}}>
            <tbody>
              {jobRows.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td style={{whiteSpace: 'pre-line'}}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-block">
        <div className="container">
          <div className="cta-block__inner reveal" style={{gridTemplateColumns: 'auto auto', justifyContent: 'start'}}>
            <div>
              <h2>あなたの<em>次</em>を、<br/>マルタチで。</h2>
            </div>
            <div className="actions">
              <p style={{margin: '0 0 16px', fontSize: 17, lineHeight: 1.85, color: 'var(--blue-fog)'}}>
                応募・詳細はお問い合わせください。<br/>ご質問だけでも歓迎です。
              </p>
              <a href="#/contact" className="btn btn--lg">お問い合わせ<span className="btn-arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.PageRecruit = PageRecruit;
