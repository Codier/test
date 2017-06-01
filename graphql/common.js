// Bypass self signed cert hack.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

exports.encodedCreds =
  Buffer.from('admin:admin').toString('base64');

exports.remoteUrl =
  'https://crystal.rubrik.com/api/v1/sla_domain';
