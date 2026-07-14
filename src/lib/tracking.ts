export function getGclid(search?: string): string {
  const query =
    search ??
    (typeof window !== "undefined" ? window.location.search : "");
  if (!query) return "";
  return new URLSearchParams(query).get("gclid")?.trim() || "";
}

/**
 * Append the gclid value to the partner URL with no extra keys.
 * Equivalent to: `${partnerUrl}${gclid}`
 */
export function appendClickId(partnerUrl: string, gclid: string): string {
  if (!partnerUrl || !gclid) return partnerUrl;
  return `${partnerUrl}${gclid}`;
}

export function buildTrackedPartnerUrl(
  partnerUrl: string,
  search?: string
): string {
  return appendClickId(partnerUrl, getGclid(search));
}
