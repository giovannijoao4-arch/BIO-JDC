/**
 * UTM Tracker Utility
 * Captures query parameters from the current URL and appends them to outgoing links.
 */

// List of tracking query parameters to capture and forward
const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'src',
  'sck',
  'gclid',
  'fbclid'
];

/**
 * Gets all active tracking parameters from current window.location
 * @returns {Record<string, string>}
 */
export function getActiveTrackingParams() {
  if (typeof window === 'undefined') return {};
  
  const searchParams = new URLSearchParams(window.location.search);
  const activeParams = {};
  
  TRACKING_PARAMS.forEach(param => {
    if (searchParams.has(param)) {
      activeParams[param] = searchParams.get(param);
    }
  });

  return activeParams;
}

/**
 * Appends active UTM/tracking parameters to any outbound URL
 * @param {string} targetUrl 
 * @returns {string}
 */
export function getUtmUrl(targetUrl) {
  if (!targetUrl || targetUrl.startsWith('#')) return targetUrl;
  
  try {
    const activeParams = getActiveTrackingParams();
    if (Object.keys(activeParams).length === 0) return targetUrl;

    const urlObj = new URL(targetUrl, window.location.origin);
    
    Object.entries(activeParams).forEach(([key, value]) => {
      // Only set if not already explicitly set on the target link
      if (!urlObj.searchParams.has(key)) {
        urlObj.searchParams.set(key, value);
      }
    });

    return urlObj.toString();
  } catch (error) {
    // If invalid URL, return original
    return targetUrl;
  }
}
