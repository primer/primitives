import {rgba, parseToRgba} from 'color2k'

/**
 * Mixes two colors together. Taken from sass's implementation.
 */
function mix(color1: string, color2: string, weight: number): string {
  const normalize = (n: number, index: number) =>
    // 3rd index is alpha channel which is already normalized
    index === 3 ? n : n / 255

  const [r1, g1, b1, a1] = parseToRgba(color1).map(normalize)
  const [r2, g2, b2, a2] = parseToRgba(color2).map(normalize)

  // The formula is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  const normalizedWeight = 2 * weight - 1
  const alphaDelta = a1 - a2

  const combinedWeight =
    normalizedWeight * alphaDelta === -1
      ? normalizedWeight
      : (normalizedWeight + alphaDelta) / (1 + normalizedWeight * alphaDelta)

  const weight2 = (combinedWeight + 1) / 2
  const weight1 = 1 - weight2
  const r = Math.round((r1 * weight1 + r2 * weight2) * 255)
  const g = Math.round((g1 * weight1 + g2 * weight2) * 255)
  const b = Math.round((b1 * weight1 + b2 * weight2) * 255)
  const a = a2 * weight + a1 * (1 - weight)
  return rgba(r, g, b, a)
}

export default mix
// Number* weight = ARGR("$weight", Number, 0, 100);
// double p = weight->value()/100;
// double w = 2*p - 1;
// double a = color1->a() - color2->a();
// double nW = ((w * a == -1) ? w : (w + a)/(1 + w*a))
// double w1 = (nW + 1)/2.0;
// double w2 = 1 - w1;

// return new (ctx.mem) Color(pstate,
//                            std::round(w1*color1->r() + w2*color2->r()),
//                            std::round(w1*color1->g() + w2*color2->g()),
//                            std::round(w1*color1->b() + w2*color2->b()),
//                            color1->a()*p + color2->a()*(1-p));
