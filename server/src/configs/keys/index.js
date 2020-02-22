module.exports =
   process.env.NODE_ENV === 'production'
      ? require('./prod.keys')
      : require('./dev.keys')
