/** Two-letter initials, ignoring academic titles: "Prof. Alemayehu Lemma" -> "AL". */
export function initials(name: string): string {
  const parts = name.replace(/^(Dr|Prof)\.\s+/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
