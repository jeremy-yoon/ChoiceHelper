const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

var ADDRESS = 'https://api.smaxh.com';

if (development) {
  ADDRESS = 'http://192.168.219.110:8005';
  // ADDRESS = 'https://api.smaxh.com';
}

const ROOT_URL = ADDRESS;

export {ROOT_URL};
