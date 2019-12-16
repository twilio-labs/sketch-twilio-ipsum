/**
 * Generate real looking SIDs to populate Sketch designs
 * Format: 2 uppercase letters + 32 lowercase alpha (a-f) + numbers
 * i.e.: AC7b7e6091669bb00d9a7e64de703e914z
 */

export const SidPrefixes = {
  ACCOUNT: 'AC',
  USER: 'US',
  ORGANIZATION: 'OR'
};
const IdLength = 32;
const CharacterWhitelist = 'abcdef0123456789';
const CharactersWhitelistLength = CharacterWhitelist.length;

export function generateSid(prefix = SidPrefixes.USER) {
  let id = '';
  for (let i = 0; i < IdLength; i++) {
    id += CharacterWhitelist.charAt(
      Math.floor(Math.random() * CharactersWhitelistLength)
    );
  }

  return `${prefix}${id}`;
}
