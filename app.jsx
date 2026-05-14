// App entry — router + tweaks integration

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "dusty",
  "heroVariant": "bold",
  "fontDisplay": "bodoni"
}/*EDITMODE-END*/;

function App() {
  const { route, scrollTarget } = useHashRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // React 再レンダリング完了後にスクロール（null = 初回ロードはスキップ）
  React.useEffect(() => {
    if (scrollTarget === null) return;
    window.scrollTo({ top: scrollTarget, behavior: 'instant' });
  }, [route, scrollTarget]);

  // Apply theme + accent tokens
  React.useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme;
    const root = document.documentElement;
    const accents = {
      dusty:  ['#6b86b0', '#13316e'],
      gold:   ['#c4a76a', '#13316e'],
      cyan:   ['#7fb6c9', '#13316e'],
      mono:   ['#a9b8d1', '#13316e'],
    };
    const [a3, a2] = accents[tweaks.accent] || accents.dusty;
    root.style.setProperty('--blue-dusty', a3);
    root.style.setProperty('--accent-2', a2);

    if (tweaks.fontDisplay === 'playfair') {
      root.style.setProperty('--font-display', '"Playfair Display", "Times New Roman", serif');
    } else if (tweaks.fontDisplay === 'fraunces') {
      root.style.setProperty('--font-display', '"Fraunces", "Times New Roman", serif');
    } else {
      root.style.setProperty('--font-display', '"Bodoni Moda", "Times New Roman", serif');
    }

    document.body.dataset.heroVariant = tweaks.heroVariant;
  }, [tweaks]);

  const overDark = false;

  let Page;
  if (route === 'service') Page = PageService;
  else if (route === 'about') Page = PageAbout;
  else if (route === 'recruit') Page = PageRecruit;
  else if (route === 'contact') Page = PageContact;
  else Page = PageTop;

  return (
    <>
      <Header route={route} overDark={overDark} />
      <main key={route}>
        <Page />
      </main>
      <Footer />
      <FloatTop />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio
            label="モード"
            value={tweaks.theme}
            onChange={v => setTweak('theme', v)}
            options={[
              { value: 'light', label: 'Light' },
              { value: 'dark',  label: 'Dark' },
            ]}
          />
          <TweakSelect
            label="アクセントカラー"
            value={tweaks.accent}
            onChange={v => setTweak('accent', v)}
            options={[
              { value: 'dusty', label: 'くすみブルー (default)' },
              { value: 'gold',  label: 'ゴールド' },
              { value: 'cyan',  label: 'ライトブルー' },
              { value: 'mono',  label: 'モノトーン' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Typography">
          <TweakSelect
            label="ディスプレイ書体"
            value={tweaks.fontDisplay}
            onChange={v => setTweak('fontDisplay', v)}
            options={[
              { value: 'bodoni',    label: 'Bodoni Moda (default)' },
              { value: 'playfair',  label: 'Playfair Display' },
              { value: 'fraunces',  label: 'Fraunces' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakRadio
            label="ヒーロー演出"
            value={tweaks.heroVariant}
            onChange={v => setTweak('heroVariant', v)}
            options={[
              { value: 'bold',   label: 'Bold (default)' },
              { value: 'quiet',  label: 'Quiet' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
