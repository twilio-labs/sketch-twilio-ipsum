const ResultLength = 32;
const CharacterWhitelist = 'abcdef0123456789';
const CharactersWhitelistLength = CharacterWhitelist.length;

export function generateApiToken() {
  let id = '';
  for (let i = 0; i < ResultLength; i++) {
    id += CharacterWhitelist.charAt(
      Math.floor(Math.random() * CharactersWhitelistLength)
    );
  }

  return id;
}
