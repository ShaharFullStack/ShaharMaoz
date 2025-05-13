/**
 * Creates a URL for the specified page name
 * @param {string} pageName - The name of the page
 * @returns {string} - The URL for the page
 */
export function createPageUrl(pageName) {
  return pageName === "Home" ? "/" : `/${pageName.toLowerCase()}`;
}
