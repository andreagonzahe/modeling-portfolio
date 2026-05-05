export type Categorized = { category: string }

/**
 * Reorders items so consecutive entries rarely share the same category.
 * Greedy: always pick a remaining item whose category differs from the last placed.
 */
export function spreadByCategory<T extends Categorized>(items: T[]): T[] {
  const remaining = [...items]
  const result: T[] = []
  let last: string | null = null

  while (remaining.length > 0) {
    const idx = remaining.findIndex((item) => item.category !== last)
    const pick = idx >= 0 ? idx : 0
    const [next] = remaining.splice(pick, 1)
    result.push(next)
    last = next.category
  }

  return result
}
