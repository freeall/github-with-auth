var GH = require('github');
var ghauth = require('ghauth');
var path = require('path');

var pkg = {};
try { pkg = require(path.resolve('package.json')); }
catch(err) {}

var github = new GH({
	version: '3.0.0',
	headers: {
		'User-Agent': pkg.name || 'github-with-auth'
	}
});

module.exports = function(scopes, callback) {
	ghauth({
		configName: pkg.name || 'github-with-auth',
		scopes: scopes
	}, function(err, auth) {
		if (err) return callback(err);

		github.authenticate({
			type: 'oauth',
			token: auth.token
		});

		process.nextTick(function() {
			callback(null, github);
		});
	});
};