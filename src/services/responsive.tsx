import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

export const BREAKPOINT_COUNT = 4;

export type VariantStyleMap<T extends string> = Record<T, Record<string, unknown>>;

export const getResponsiveSx = <T extends string>(
  variants: VariantStyleMap<T>,
  variant: ResponsiveStyleValue<T>,
): ThemeUIStyleObject => {
  const variantArray = Array.isArray(variant) ? variant : [variant];

  // mobile-first fill; a breakpoint with no explicit variant inherits the previous one
  const variantNames: (T | undefined)[] = [];
  for (let index = 0; index < BREAKPOINT_COUNT; index++) {
    const current = variantArray[index] || variantNames[index - 1];
    variantNames.push(current || undefined);
  }

  // collect every property name defined by any resolved variant
  const propertyNames = new Set<string>();
  variantNames.forEach((variantName) => {
    if (variantName && variants[variantName]) {
      Object.keys(variants[variantName]).forEach(propertyName => propertyNames.add(propertyName));
    }
  });

  // build one sx entry per property
  const sx: Record<string, unknown> = {};
  propertyNames.forEach((propertyName) => {
    const valuesByBreakpoint = variantNames.map(variantName => (variantName && variants[variantName] ? variants[variantName][propertyName] : undefined));

    const isConstant = valuesByBreakpoint.every(breakpointValue => breakpointValue === valuesByBreakpoint[0]);

    sx[propertyName] = isConstant ? valuesByBreakpoint[0] : valuesByBreakpoint;
  });

  return sx as ThemeUIStyleObject;
};
