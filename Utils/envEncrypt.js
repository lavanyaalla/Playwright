export function encrypt(text, key) {
  return Buffer.from(
    text
      .split('')
      .map((char, i) =>
        String.fromCharCode(
          char.charCodeAt(0) ^ key.charCodeAt(i % key.length)
        )
      )
      .join('')
  ).toString('base64');
}

export function decrypt(encodedText, key) {
  if (!encodedText || !key) {
    throw new Error('encodedText or key is undefined');
  }

  const decoded = Buffer.from(encodedText, 'base64').toString('utf8');

  return decoded
    .split('')
    .map((char, i) =>
      String.fromCharCode(
        char.charCodeAt(0) ^ key.charCodeAt(i % key.length)
      )
    )
    .join('');
}