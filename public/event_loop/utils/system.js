function getSystemInfo(system) {
  return [system.platform(), system.arch(), system.totalmem(), system.freemem(), system.uptime()]
}

module.exports = { getSystemInfo };