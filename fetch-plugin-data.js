const fetch = require('node-fetch');

const asyncFetchSinglePlugin = async plugin => {
	const data = await fetch(`https://api.wordpress.org/plugins/info/1.0/${plugin}.json?fields=banners,icons,active_installs,short_description`);
	const json = await data.json();
	return json;
};

module.exports = async plugins => {
	return Promise.all(plugins.map(plugin => asyncFetchSinglePlugin(plugin)));
};
