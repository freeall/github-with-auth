# github-with-auth

Get started on creating CLI github programs in no time.

Combines github + ghauth to make it faster to get started on using the github api.

See https://github.com/mikedeboer/node-github for the instantiated object.

```
npm install github-with-auth
```

## Usage

``` js
var github = require('github-with-auth');

github(['repo'], function(err, github) {
	if (err) throw err;

	github.repos.get({user:'freeall', repo:'github-with-auth'}, function(err, repo) {
		console.log(repo);
	});
});
```

## License

MIT