// Shared layout: Header / Footer / Router

const PAGES = [
  { id: 'top', label: 'TOP', en: 'Home', path: '#/' },
  { id: 'service', label: 'サービス', en: 'Service', path: '#/service' },
  { id: 'about', label: '会社概要', en: 'Company', path: '#/about' },
  { id: 'recruit', label: '採用情報', en: 'Recruit', path: '#/recruit' },
  { id: 'contact', label: 'お問い合わせ', en: 'Contact', path: '#/contact' },
];

function useHashRoute() {
  const [navState, setNavState] = React.useState({
    hash: window.location.hash || '#/',
    scrollTarget: null,
  });

  React.useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    const saved = {};          // ページごとのスクロール位置
    let curHash = window.location.hash || '#/';
    let goingBack = false;     // 「戻る」かどうか

    // ---- 方向検知 ----
    // Navigation API（Chrome 102+）: traverse の destination.index で判定
    // フォールバック: history.state にインデックスを保存して比較
    let histIdx = 0;
    const useNavAPI = !!window.navigation;

    if (!useNavAPI) {
      history.replaceState({ _idx: 0 }, document.title);
    }

    // Navigation API（Chrome 102+）: traverse の destination.index で方向判定
    // フォールバック: history.state インデックス比較 + popstate フラグ
    let wasPop = false;

    const onNavigate = useNavAPI ? (e) => {
      // navigate は hashchange より先に発火する
      goingBack = e.navigationType === 'traverse'
        && e.destination.index < window.navigation.currentEntry.index;
    } : null;

    const onPopState = !useNavAPI ? (e) => {
      const newIdx = e.state?._idx ?? 0;
      goingBack = newIdx < histIdx;
      histIdx = newIdx;
      wasPop = true;
    } : null;

    const onChange = () => {
      saved[curHash] = window.scrollY;
      const newHash = window.location.hash || '#/';
      curHash = newHash;

      const scrollTarget = goingBack ? (saved[newHash] ?? 0) : 0;

      // リンククリック時（popstate でない）は新エントリにインデックスを付与
      if (!useNavAPI && !wasPop) {
        histIdx++;
        history.replaceState({ _idx: histIdx }, document.title);
      }

      goingBack = false;
      wasPop = false;
      setNavState({ hash: newHash, scrollTarget });
    };

    if (useNavAPI) window.navigation.addEventListener('navigate', onNavigate);
    if (!useNavAPI) window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onChange);

    return () => {
      if (useNavAPI) window.navigation.removeEventListener('navigate', onNavigate);
      if (!useNavAPI) window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onChange);
    };
  }, []);

  const route =
    navState.hash === '#/' || navState.hash === '' ? 'top'
    : navState.hash === '#/service' ? 'service'
    : navState.hash === '#/about' ? 'about'
    : navState.hash === '#/recruit' ? 'recruit'
    : navState.hash === '#/contact' ? 'contact'
    : 'top';
  return { route, scrollTarget: navState.scrollTarget };
}

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span className="logo-mark__ring"></span>
      <span className="logo-mark__bar"></span>
    </span>
  );
}

function Header({ route, overDark }) {
  const scrolled = useScrolled(40);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  React.useEffect(() => { setDrawerOpen(false); }, [route]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${overDark && !scrolled ? 'over-dark' : ''}`}>
        <a href="#/" className="logo">
          <img src="logo.png" alt="マルタチ" style={{height: 36, display: 'block'}} />
        </a>
        <nav className="nav">
          {PAGES.map(p => (
            <a key={p.id} href={p.path} className={route === p.id ? 'is-active' : ''}>
              <span>{p.label}</span>
              <small>{p.en}</small>
            </a>
          ))}
        </nav>
        <div className="header-right">
          <button className="menu-toggle" onClick={() => setDrawerOpen(true)} aria-label="Menu">
            <span>MENU</span>
            <span className="menu-toggle__bars"></span>
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${drawerOpen ? 'is-open' : ''}`}>
        <div className="drawer-head">
          <a href="#/" className="logo" onClick={() => setDrawerOpen(false)}>
            <img src="logo.png" alt="マルタチ" style={{height: 36, display: 'block'}} />
          </a>
          <button className="menu-toggle" onClick={() => setDrawerOpen(false)} aria-label="Close">
            <span>CLOSE</span>
          </button>
        </div>
        <nav>
          {PAGES.map((p, i) => (
            <a key={p.id} href={p.path} onClick={() => setDrawerOpen(false)}>
              <span>{p.label}</span>
              <small>{String(i + 1).padStart(2, '0')} / {p.en}</small>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer" style={{padding: '40px var(--gutter)', textAlign: 'center'}}>
      <img src="logo.png" alt="マルタチ" style={{height: 48, display: 'inline-block', marginBottom: 16}} />
      <p style={{fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--blue-fog)', margin: 0}}>
        © 2026 MARUTACHI INC. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

function FloatTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      className={`float-top ${show ? 'is-show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >↑</button>
  );
}

// Reveal-on-scroll helper: any element with class .reveal gets .is-in when in viewport
function useReveal(deps = []) {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-in)');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, deps);
}

Object.assign(window, {
  PAGES, useHashRoute, useScrolled, useReveal,
  Header, Footer, FloatTop, LogoMark
});
