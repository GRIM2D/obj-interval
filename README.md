# obj-interval
Object wrapper for setInterval()

# Why
It may be useful if you're creating web applications using React.js
```javascript
let objInterval = require('obj-interval');

let App = React.createClass({
	fetcher: null,
	componentDidMount: function() {
		this.fetcher = new objInterval(() => {
			console.log('Fetching started')
			// AJAX queries
			...
		}, 10000);
	},
	componentWillUnmount: function() {
		this.fetcher.destroy();
	}
})
```