var config = {};

// Session Configuration
config.session = {
  key: 'webconsole',
  secret: '2asd7f4d6s15s74d',
};

// Proxy Configuration
// config.proxy_pass_prefix = '/someprefix'

// User authentication function
config.authFn = function(req, username, password, cb) {
  if (username == "kali" && password == "kali") {
    var resource_id = req.body.resource_id || 'default';
    return cb(null, { id: username, resource_id: resource_id });
  } else {
    return cb(null, false, { message: 'Invalid credentials' });
  }
}

// Shell Entrypoint
// req: socket.io request object
config.shellEntrypoint = function(req) {
  console.log("CIAOOO")
  return {
    //script: __dirname + '/bin/entrypoint',
    //args: ''
  };
}

module.exports = config;
