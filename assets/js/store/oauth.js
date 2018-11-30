import createHmac from 'create-hmac';
import OAuth from 'oauth-1.0a';

export default new OAuth({
    consumer: {
      key: 'ck_ee3f86f7ba700d436a76b671c9622cefc39aa606',
      secret: 'cs_2c3dd890da53817c4e8e2adb5824f7d69884299c',
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return createHmac('sha1', key).update(base_string).digest('base64');
    },
});