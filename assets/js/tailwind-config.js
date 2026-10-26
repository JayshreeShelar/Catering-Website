/* ==========================================================================
   Tailwind theme + reusable components (shared by all pages).
   No separate CSS file is used: everything is Tailwind (CDN) + this config.
   Card style: "leaf" cards (two sharp + two round corners) that flip shape,
   tint and lift on hover, each with its own accent colour (--ac).
   ========================================================================== */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        sage:     { DEFAULT: '#946500', 50: '#FFF8E6', 100: '#FBEFCB', 200: '#F5E0A0', 300: '#EDCB6B', 400: '#D9A91F', 500: '#946500', 600: '#7D5400', 700: '#6B4800', 800: '#5B3A0C', 900: '#3A2406' },
        taupe:    { DEFAULT: '#C9A66B', 50: '#FBF6EC', 100: '#F5ECD9', 200: '#EADCBC', 300: '#DEC999', 400: '#C9A66B', 500: '#A98648', 600: '#876A38' },
        gold:     { DEFAULT: '#F2B91B', light: '#FFE27A', dark: '#946500' },
        charcoal: { DEFAULT: '#2B2118', soft: '#43362A' },
        cream:    { DEFAULT: '#FFF8E6', deep: '#F7EBCB' },
        forest:   { DEFAULT: '#5B3A0C', deep: '#3A2406' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script:  ['"Great Vibes"', 'cursive']
      },
      boxShadow: {
        glass:   '0 10px 40px -10px rgba(43,33,24,.22)',
        'glass-lg': '0 24px 60px -18px rgba(43,33,24,.35)',
        glow:    '0 8px 30px -6px rgba(242,185,27,.55)'
      },
      keyframes: {
        kenburns: { '0%': { transform: 'scale(1.02)' }, '100%': { transform: 'scale(1.12)' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeUp:   { '0%': { opacity: 0, transform: 'translateY(26px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        pulseRing:{ '0%': { boxShadow: '0 0 0 0 rgba(242,185,27,.55)' }, '100%': { boxShadow: '0 0 0 18px rgba(242,185,27,0)' } },
        drift:    { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(30px,-24px) scale(1.08)' } },
        sweep:    { '0%': { backgroundPosition: '160% 0' }, '100%': { backgroundPosition: '-60% 0' } },
        bodyIn:   { '0%': { opacity: 0 } },
        revealUp:   { '0%': { opacity: 0, transform: 'translateY(28px)' } },
        revealLeft: { '0%': { opacity: 0, transform: 'translateX(-40px)' } },
        revealRight:{ '0%': { opacity: 0, transform: 'translateX(40px)' } },
        revealZoom: { '0%': { opacity: 0, transform: 'scale(.88)' } },
        ptIn:     { '0%': { opacity: 0, transform: 'translateX(-14px)' } },
        sheen:    { '0%': { transform: 'translateX(-130%) skewX(-20deg)' }, '60%,100%': { transform: 'translateX(330%) skewX(-20deg)' } },
        wiggle:   { '0%,100%': { transform: 'rotate(0)' }, '25%': { transform: 'rotate(-12deg) scale(1.1)' }, '75%': { transform: 'rotate(10deg) scale(1.1)' } },
        morph:    { '0%,100%': { borderRadius: '2.4rem 2.4rem .5rem .5rem' }, '50%': { borderRadius: '.5rem .5rem 2.4rem 2.4rem' } },
        headerIn: { '0%': { opacity: 0, transform: 'translateY(-30px)' } },
        lineGrow: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } }
      },
      animation: {
        kenburns: 'kenburns 22s ease-in-out infinite alternate',
        float:    'float 7s ease-in-out infinite',
        fadeUp:   'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
        pulseRing:'pulseRing 2.4s ease-out infinite',
        drift:    'drift 18s ease-in-out infinite',
        morph:    'morph 7s ease-in-out infinite',
        headerIn: 'headerIn .8s cubic-bezier(.2,.7,.2,1) both'
      }
    }
  },
  plugins: [
    function ({ addBase, addComponents, theme }) {
      const ff = (key) => { const v = theme('fontFamily.' + key); return Array.isArray(v) ? v.join(',') : String(v); };
      const EASE = 'cubic-bezier(.2,.7,.2,1)';
      const GOLD_D = '#946500';
      const RF = '.\\!rounded-full';
      /* gold gradient hairline drawn by a pseudo-element, so the card itself stays free to overflow (floating icons) */
      const borderFrame = {
        '&::before': {
          content: '""', position: 'absolute', inset: 0, borderRadius: 'inherit', padding: 'var(--ew)', pointerEvents: 'none', zIndex: 3,
          background: 'linear-gradient(135deg,var(--e1),var(--e2) 45%,var(--e1) 70%,var(--e2))',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)'
        }
      };
      /* soft light sweep that stays inside the card */
      const sheenPseudo = {
        content: '""', position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: 2,
        background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,.7) 50%,transparent 60%) no-repeat', backgroundSize: '250% 100%', backgroundPosition: '160% 0'
      };
      const stagger = {};
      for (let i = 1; i <= 8; i++) stagger[`.rv-in .pt:nth-child(${i})`] = { animation: `ptIn .55s ${EASE} backwards`, animationDelay: `${.2 + i * .07}s` };

      addBase({
        'html': { scrollBehavior: 'smooth' },
        'body': {
          fontFamily: ff('sans'),
          color: theme('colors.charcoal.DEFAULT'),
          backgroundColor: theme('colors.cream.DEFAULT'),
          '-webkit-font-smoothing': 'antialiased',
          animation: 'bodyIn .6s ease both'
        },
        '::selection': { backgroundColor: theme('colors.gold.DEFAULT'), color: '#fff' },
        'h1,h2,h3,h4': { fontFamily: ff('display'), letterSpacing: '-0.01em' },
        '@media (prefers-reduced-motion: reduce)': { '*,*::before,*::after': { animation: 'none !important', transition: 'none !important' } }
      });

      addComponents({
        /* ---------- scroll reveal (JS adds .rv, then .rv-in) ---------- */
        '.rv': { opacity: 0 },
        '.rv-in': { animation: `revealUp .75s ${EASE} backwards` },
        '.rv-in[data-reveal="left"]':  { animationName: 'revealLeft' },
        '.rv-in[data-reveal="right"]': { animationName: 'revealRight' },
        '.rv-in[data-reveal="zoom"]':  { animationName: 'revealZoom' },
        ...stagger,

        /* ---------- shapes: big soft-rounded cards ---------- */
        /* diagonal "petal" corners: two big curves + two tight ones; they swap on hover (cards are NOT used in the hero carousel) */
        '.shape-leaf': { borderRadius: '2.5rem .5rem 2.5rem .5rem' },
        '.shape-leaf-alt': { borderRadius: '.5rem 2.5rem .5rem 2.5rem' },
        '.shape-leaf-sm': { borderRadius: '1.5rem .4rem 1.5rem .4rem' },
        '.shape-leaf, .shape-leaf-alt, .shape-leaf-sm': { transition: `border-radius .6s ${EASE}, transform .5s ${EASE}, box-shadow .5s` },
        '.shape-leaf.group:hover, .group:hover > .shape-leaf': { borderRadius: '.5rem 2.5rem .5rem 2.5rem' },
        '.shape-leaf-alt.group:hover, .group:hover > .shape-leaf-alt': { borderRadius: '2.5rem .5rem 2.5rem .5rem' },
        '.shape-leaf-sm.group:hover, .group:hover > .shape-leaf-sm': { borderRadius: '.4rem 1.5rem .4rem 1.5rem' },
        /* photo cards lift, glow with a soft yellow ring and the photo zooms (zoom is set on the img in the markup) */
        '.shape-leaf.group:hover, .shape-leaf-alt.group:hover': {
          transform: 'translateY(-8px) scale(1.02)', boxShadow: '0 30px 55px -20px rgba(148,101,0,.65), 0 0 0 3px rgba(242,185,27,.4)'
        },
        /* every shaped block gets the gold gradient hairline (images get a real border instead) */
        '.shape-leaf:not(img), .shape-leaf-alt:not(img), .shape-leaf-sm:not(img)': { '--ew': '1.5px', '--e1': '#F2B91B', '--e2': '#FFF0BF', ...borderFrame },
        '.shape-leaf:not(img):not(.absolute):not(.fixed), .shape-leaf-alt:not(img):not(.absolute):not(.fixed), .shape-leaf-sm:not(img):not(.absolute):not(.fixed)': { position: 'relative' },
        'img.shape-leaf, img.shape-leaf-alt, img.shape-leaf-sm': { border: '2px solid rgba(242,185,27,.9)' },
        /* round pills / header bar / icon circles also get a gold edge */
        [`.glass${RF}, .glass-dark${RF}`]: { borderColor: 'rgba(242,185,27,.55)' },

        /* photo hover: coloured light rises from the bottom to half the photo, caption appears on it */
        '.rise-fx': {
          position: 'absolute', left: 0, right: 0, bottom: 0, height: 0, pointerEvents: 'none', zIndex: 1,
          background: 'linear-gradient(to top,rgba(58,36,6,.9) 0%,rgba(148,101,0,.6) 55%,rgba(227,207,163,0) 100%)',
          transition: `height .65s ${EASE}`
        },
        '.group:hover .rise-fx': { height: '58%' },
        '.rise-cap': {
          position: 'absolute', left: 0, right: 0, bottom: 0, padding: '.85rem 1rem', zIndex: 2, color: '#fff', textAlign: 'left',
          opacity: 0, transform: 'translateY(18px)', transition: `opacity .5s ease .12s, transform .6s ${EASE} .1s`
        },
        '.group:hover .rise-cap': { opacity: 1, transform: 'translateY(0)' },

        /* active filter / tab buttons always keep readable text, even while hovered */
        '.filter-btn[aria-pressed="true"], .menu-tab[aria-selected="true"]': {
          backgroundColor: theme('colors.forest.DEFAULT') + ' !important', color: '#fff !important', borderColor: theme('colors.forest.DEFAULT') + ' !important'
        },

        /* ---------- glass surfaces ---------- */
        '.glass': {
          backgroundColor: 'rgba(255,255,255,.58)',
          backdropFilter: 'blur(16px) saturate(140%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(140%)',
          border: '1px solid rgba(255,255,255,.75)',
          borderRadius: '1rem',
          boxShadow: theme('boxShadow.glass')
        },
        '.glass-dark': {
          backgroundColor: 'rgba(58,36,6,.55)',
          backdropFilter: 'blur(16px) saturate(140%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(140%)',
          border: '1px solid rgba(255,255,255,.14)',
          borderRadius: '1rem',
          color: '#fff',
          boxShadow: theme('boxShadow.glass-lg')
        },
        /* premium version (not applied to round pills / icons) */
        [`.glass:not(${RF})`]: {
          '--ew': '1px', '--e1': '#F2B91B', '--e2': '#FFF0BF',
          border: 'none', borderRadius: '2.25rem .6rem 2.25rem .6rem',
          backgroundImage: 'linear-gradient(160deg,rgba(255,255,255,.55),rgba(255,255,255,.1) 60%)',
          boxShadow: '0 14px 34px -16px rgba(58,36,6,.35)',
          transition: `border-radius .6s ${EASE}, transform .5s ${EASE}, box-shadow .5s, background-color .5s`,
          ...borderFrame
        },
        [`.glass-dark:not(${RF})`]: {
          '--ew': '1px', '--e1': '#F2B91B', '--e2': '#FFF0BF',
          border: 'none', borderRadius: '1.75rem',
          ...borderFrame
        },
        /* image frames / group cards: lift, flip the corners and glow */
        [`.glass.group:not(${RF}):hover`]: {
          borderRadius: '.6rem 2.25rem .6rem 2.25rem', transform: 'translateY(-8px)', boxShadow: '0 28px 50px -20px rgba(148,101,0,.6)'
        },
        [`.glass-dark.dark-hover:not(${RF})`]: { borderRadius: '.6rem 2.25rem .6rem 2.25rem', transition: `border-radius .6s ${EASE}, transform .5s ${EASE}, box-shadow .5s, background-color .5s` },
        [`.glass-dark.dark-hover:not(${RF}):hover`]: { borderRadius: '2.25rem .6rem 2.25rem .6rem' },
        [`.glass:not(${RF}):not(.absolute):not(.fixed), .glass-dark:not(${RF}):not(.absolute):not(.fixed)`]: { position: 'relative' },
        '.frame-strong': { '--ew': '2px !important', '--e1': '#946500 !important', '--e2': '#FFD866 !important' },

        /* ---------- floating icon badge (sits half outside the card's top edge) ---------- */
        '.ic': { transition: `transform .5s ${EASE}, background-color .4s, color .4s, box-shadow .4s` },
        '.float-ic': {
          position: 'absolute', top: '-1.5rem', left: '50%', marginLeft: '-1.5rem', width: '3rem', height: '3rem', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px',
          backgroundImage: 'linear-gradient(135deg,#FFE9A8,#F2B91B)', color: theme('colors.forest.deep'),
          border: '3px solid ' + theme('colors.cream.DEFAULT'), boxShadow: '0 10px 22px -8px rgba(148,101,0,.75)'
        },

        /* ---------- hover card: lifts, gold glow, light sweep, badge flips to forest ---------- */
        '.glass-hover': {
          transition: `border-radius .6s ${EASE}, transform .5s ${EASE}, box-shadow .5s, background-color .5s`,
          '&::after': { ...sheenPseudo },
          '&:hover': {
            transform: 'translateY(-10px) scale(1.02)', backgroundColor: 'rgba(255,255,255,.94)', '--e1': '#946500', '--e2': '#FFE9A8',
            borderRadius: '.6rem 2.25rem .6rem 2.25rem',
            backgroundImage: 'linear-gradient(160deg,rgba(255,255,255,.85),rgba(255,233,168,.45) 100%)',
            boxShadow: '0 30px 55px -20px rgba(148,101,0,.65), 0 0 0 4px rgba(242,185,27,.22)'
          },
          '&:hover::after': { animation: 'sweep 1.1s ease' },
          '&:hover .ic': { backgroundImage: 'none', backgroundColor: theme('colors.forest.DEFAULT'), color: theme('colors.gold.light'), transform: 'translateY(-4px) rotate(360deg) scale(1.1)', boxShadow: '0 14px 26px -8px rgba(58,36,6,.6)' },
          '& h3': { transition: 'color .4s' },
          '&:hover h3': { color: theme('colors.gold.dark') }
        },
        '.dark-hover': {
          transition: `transform .5s ${EASE}, box-shadow .5s, background-color .5s`,
          '&::after': { ...sheenPseudo },
          '&:hover': { transform: 'translateY(-8px)', backgroundColor: 'rgba(58,36,6,.82)', '--e2': '#fff', boxShadow: '0 28px 50px -20px rgba(0,0,0,.6)' },
          '&:hover::after': { animation: 'sweep 1.1s ease' }
        },

        /* ---------- small points (list items, highlights): gold fill sweeps in ---------- */
        '.pt': {
          borderRadius: '.7rem', padding: '.2rem .45rem', margin: '0 -.45rem',
          backgroundImage: 'linear-gradient(90deg,rgba(242,185,27,.32),rgba(242,185,27,.06))', backgroundRepeat: 'no-repeat', backgroundSize: '0% 100%',
          transition: `background-size .5s ${EASE}, color .3s, transform .4s ${EASE}, box-shadow .4s`,
          '& .pt-dot': { transition: 'background-color .3s, color .3s, transform .4s, box-shadow .4s' },
          '&:hover': { backgroundSize: '100% 100%', color: theme('colors.forest.deep'), transform: 'translateX(6px)', boxShadow: 'inset 3px 0 0 #F2B91B' },
          '&:hover .pt-dot': { backgroundImage: 'linear-gradient(135deg,#FFE9A8,#F2B91B)', color: theme('colors.forest.deep'), transform: 'scale(1.25)', boxShadow: '0 0 0 4px rgba(242,185,27,.28)' }
        },
        '.chip': {
          transition: `transform .35s ${EASE}, background-color .3s, color .3s, border-color .3s, box-shadow .35s`,
          '&:hover': { transform: 'translateY(-3px)', backgroundColor: theme('colors.forest.DEFAULT') + ' !important', color: '#fff !important', borderColor: theme('colors.gold.DEFAULT') + ' !important', boxShadow: '0 12px 22px -10px rgba(148,101,0,.8)' },
          '&:hover svg': { color: theme('colors.gold.light') + ' !important' }
        },

        /* ---------- buttons ---------- */
        '.btn': {
          position: 'relative', overflow: 'hidden',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
          padding: '.65rem 1.35rem', borderRadius: '9999px', fontWeight: 500, fontSize: '.88rem',
          letterSpacing: '.02em', cursor: 'pointer', whiteSpace: 'nowrap',
          transition: 'transform .3s, box-shadow .3s, background-color .3s, color .3s, border-color .3s',
          '&::after': {
            content: '""', position: 'absolute', top: 0, bottom: 0, left: 0, width: '35%',
            background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)', transform: 'translateX(-130%) skewX(-20deg)', pointerEvents: 'none'
          },
          '&:hover::after': { animation: 'sheen .9s ease' },
          '&:hover': { transform: 'translateY(-3px) scale(1.03)' },
          '&:active': { transform: 'translateY(0) scale(.98)' }
        },
        '.btn-gold': {
          backgroundImage: 'linear-gradient(135deg,#FFD866,#F2B91B 55%,#D9A200)', color: '#3A2406',
          boxShadow: '0 6px 20px -6px rgba(242,185,27,.7)',
          '&:hover': { boxShadow: theme('boxShadow.glow'), filter: 'brightness(1.06)' }
        },
        '.btn-glass': {
          backgroundColor: 'rgba(255,255,255,.14)', color: '#fff', border: '1px solid rgba(255,255,255,.45)',
          backdropFilter: 'blur(10px)', '-webkit-backdrop-filter': 'blur(10px)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,.28)', borderColor: '#fff' }
        },
        '.btn-sage': {
          backgroundColor: theme('colors.sage.DEFAULT'), color: '#fff',
          '&:hover': { backgroundColor: theme('colors.forest.DEFAULT'), boxShadow: theme('boxShadow.glass') }
        },
        '.btn-outline': {
          border: '1px solid ' + theme('colors.sage.DEFAULT'), color: theme('colors.sage.700'), backgroundColor: 'rgba(255,255,255,.35)',
          '&:hover': { backgroundColor: theme('colors.sage.DEFAULT'), color: '#fff' }
        },

        /* ---------- typography helpers ---------- */
        '.eyebrow': {
          display: 'inline-flex', alignItems: 'center', gap: '.6rem', fontSize: '.7rem', fontWeight: 500,
          letterSpacing: '.26em', textTransform: 'uppercase', color: theme('colors.gold.dark'),
          '&::before': { content: '""', width: '2rem', height: '1px', backgroundColor: 'currentColor', transformOrigin: 'left', animation: `lineGrow 1s ${EASE} .2s backwards` }
        },
        '.section-title': { fontFamily: ff('display'), fontSize: 'clamp(1.7rem,3vw,2.4rem)', lineHeight: 1.1, fontWeight: 500, color: theme('colors.forest.deep') },

        /* ---------- form fields ---------- */
        '.field': {
          width: '100%', padding: '.5rem .85rem', borderRadius: '.7rem', fontSize: '.88rem',
          backgroundColor: 'rgba(255,255,255,.65)', border: '1px solid rgba(148,101,0,.3)', color: theme('colors.charcoal.DEFAULT'),
          transition: 'border-color .3s, box-shadow .3s, background-color .3s, border-radius .4s',
          '&::placeholder': { color: 'rgba(43,33,24,.45)' },
          '&:hover': { borderColor: theme('colors.gold.DEFAULT'), borderRadius: '.7rem' },
          '&:focus': { outline: 'none', borderColor: theme('colors.gold.DEFAULT'), backgroundColor: '#fff', boxShadow: '0 0 0 4px rgba(242,185,27,.22)', borderRadius: '.7rem' }
        },

        /* ---------- scroll progress bar ---------- */
        '#scroll-bar': {
          position: 'fixed', top: 0, left: 0, height: '3px', width: '100%', zIndex: 70, transformOrigin: 'left', transform: 'scaleX(0)',
          background: 'linear-gradient(90deg,#946500,#FFE9A8,#946500)', pointerEvents: 'none'
        }
      });
    }
  ]
};
