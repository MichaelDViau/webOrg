/** Fills `{placeholders}` in a translated string: format("Step {number}", { number: 2 }) → "Step 2". */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
