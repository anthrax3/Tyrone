module.exports = {
  masters: ['MATRIXF1NG3RS'],
  server: 'irc.rizon.net',
  nick: 'Tyrone',
  commandIdentifer: '!',
  
  /**
   * chattiness variables
   */
  minLevel: -1,
  maxLevel: 10,
  talkyMax: 6,
  talkyMin: 2,
  threshold: 8, // What must the level be on the channel before speaking
  talkyDecreaseRate: 12000,
  levelDecreaseRate: 18000,
  
  /**
   * connection variables (for irc)
   */
  connection: {
    port: 6667,
    channels: ['#8chan'],
    userName: 'tryone', // ident
    realName: 'tryone',
    debug: true,
    secure: false,
    selfSigned: true,
    certExpired: true,
    floodProtection: true,
    floodProtectionDelay: 1000,
  }
};