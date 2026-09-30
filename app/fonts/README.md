# Fonts

`Geist-latin.woff2` is [Geist Sans](https://github.com/vercel/geist-font) (SIL Open Font License 1.1, see
`LICENSE.txt`), reduced from the 70 KB variable font to 17 KB:

- **Weights 400 to 600 only.** The site uses regular, `font-medium` and `font-semibold`. Nothing is bold.
- **Latin glyphs only:** Basic Latin, all of Latin-1 (covers French and Spanish accents, `¿ ¡ « »`), `Œ œ Ÿ`,
  dashes, quotes, bullet, ellipsis, `€`, `→` and the minus sign.
- **Layout features kept:** kerning, ligatures, contextual alternates, `tnum`/`pnum`/`lnum` (the numbered
  steps use tabular figures) and case-sensitive forms.

A character outside that set falls back to the system font for that one glyph.

## Regenerating

Do this if the site starts using a new character or a weight outside 400 to 600. Requires Python with
`fonttools` and `brotli` (`pip install fonttools brotli`); the source font is in `node_modules/geist` until
that package is removed, or download `Geist-Variable.ttf` from the Geist repository.

```bash
SRC=Geist-Variable.ttf
fonttools varLib.instancer "$SRC" wght=400:600 -o instance.ttf
pyftsubset instance.ttf \
  --unicodes="U+0020-007E,U+00A0-00FF,U+0152-0153,U+0178,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+202F,U+20AC,U+2192,U+2212" \
  --layout-features="kern,liga,calt,ccmp,locl,mark,mkmk,tnum,lnum,pnum,case" \
  --flavor=woff2 --no-hinting --desubroutinize \
  --output-file=Geist-latin.woff2
```
