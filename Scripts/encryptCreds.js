import { encrypt } from './utils/envEncrypt.js';

const SECRET_KEY = 'my_secret_key_123';

console.log(
  'Encrypted Username:',
  encrypt('lavanya1@gmail.com', SECRET_KEY)
);

console.log(
  'Encrypted Password:',
  encrypt('Password@99', SECRET_KEY)
);