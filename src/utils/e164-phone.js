/**
 * Should match ^\+[1-9]\d{1,14}$
 * https://www.twilio.com/docs/glossary/what-e164
 */
// Note: Number.MAX_SAFE_INTEGER is 16 characters long, so we're safe to use normal numbers here.
export function generateE164Phone() {
  const randomHeadSizeCharLength = Math.floor(Math.random() * 3) + 1;
  const randomHeadSize = Math.pow(10, randomHeadSizeCharLength);
  const randomTailSize = Math.pow(10, 14 - randomHeadSizeCharLength);

  return `+${Math.floor(
    Math.random() * randomHeadSize + 1 * randomHeadSize
  )}${Math.floor(Math.random() * randomTailSize)}`;
}
