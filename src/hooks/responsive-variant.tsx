import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

const BREAKPOINT_COUNT = 4;

export type VariantStyleMap<TVariant extends string> = Record<TVariant, Record<string, unknown>>;

/**
 * Resolves a responsive variant prop into a plain sx compatible object
 *
 * @returns sx compatible per-breakpoint style arrays
 */
export const resolveResponsiveVariant = <TVariant extends string>(
  variants: VariantStyleMap<TVariant>,
  value: ResponsiveStyleValue<TVariant>,
): ThemeUIStyleObject => {
  const values = Array.isArray(value) ? value : [value];

  // mobile-first fill: a breakpoint with no explicit value inherits the previous one
  const resolved: (TVariant | undefined)[] = [];
  for (let index = 0; index < BREAKPOINT_COUNT; index++) {
    const current = values[index] || resolved[index - 1];
    resolved.push(current || undefined);
  }

  const styleKeys = new Set<string>();
  resolved.forEach((name) => {
    if (name && variants[name]) {
      Object.keys(variants[name]).forEach(key => styleKeys.add(key));
    }
  });

  const sx: Record<string, unknown[]> = {};
  styleKeys.forEach((key) => {
    sx[key] = resolved.map(name => (name && variants[name] ? variants[name][key] : undefined));
  });

  return sx as ThemeUIStyleObject;
};

/**
 * Picks the variant used to derive static, breakpoint-independent values
 *
 * @returns the base variant name
 */
export const getBaseVariant = <TVariant extends string>(value: ResponsiveStyleValue<TVariant>): TVariant | undefined => {
  if (!Array.isArray(value)) return value || undefined;

  return value.find((item): item is TVariant => item !== undefined && item !== null && item !== false);
};
