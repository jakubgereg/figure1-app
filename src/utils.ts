/**
 * Trims string to given amount of characters and appends "..." in the end
 * @param text
 * @param maxLen
 */
export function trimExcess(text: string, maxLen: number): string {
  var result = text.substr(0, maxLen);
  result = result.substr(0, Math.min(result.length, result.lastIndexOf(" ")));

  return `${result}...`;
}
