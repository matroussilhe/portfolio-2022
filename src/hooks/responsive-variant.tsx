import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

const BREAKPOINT_COUNT = 4;

export type VariantStyleMap<T extends string> = Record<T, Record<string, unknown>>;

/**
 * Picks the variant used to derive static, breakpoint-independent values
 *
 * @returns the base variant name
 */
export const getBaseVariant = <T extends string>(value: ResponsiveStyleValue<T>): T | undefined => {
  if (!Array.isArray(value)) return value || undefined;

  return value.find((item): item is T => item !== undefined && item !== null && item !== false);
};

/**
 * Resolves a responsive variant prop into a plain sx compatible object
 *
 * @returns sx compatible per-breakpoint style arrays
 */
export const resolveResponsiveVariant = <T extends string>(
  variants: VariantStyleMap<T>,
  value: ResponsiveStyleValue<T>,
): ThemeUIStyleObject => {
  const values = Array.isArray(value) ? value : [value];

  // mobile-first fill; a breakpoint with no explicit value inherits the previous one
  const resolvedValues: (T | undefined)[] = [];
  for (let index = 0; index < BREAKPOINT_COUNT; index++) {
    const current = values[index] || resolvedValues[index - 1];
    resolvedValues.push(current || undefined);
  }
  console.log("resolvedValues: ", resolvedValues);

  const styleKeys = new Set<string>();
  resolvedValues.forEach((name) => {
    if (name && variants[name]) {
      Object.keys(variants[name]).forEach(key => styleKeys.add(key));
    }
  });
  console.log("styleKeys: ", styleKeys);

  const sx: Record<string, unknown> = {};
  styleKeys.forEach((key) => {
    const perBreakpoint = resolvedValues.map(name => (name && variants[name] ? variants[name][key] : undefined));

    const isConstant = perBreakpoint.every((value) => {
      return value === perBreakpoint[0];
    });

    // collapse to a plain value when the value doesn't actually vary by breakpoint
    sx[key] = isConstant ? perBreakpoint[0] : perBreakpoint;
  });
  console.log("sx: ", sx);

  return sx as ThemeUIStyleObject;
};
