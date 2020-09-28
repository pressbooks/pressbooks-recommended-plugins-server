const getPluginList = require('../plugins.js');
const fetchPluginData = require('../fetch-plugin-data.js');

module.exports = async (request, response) => {
	const plugins = getPluginList();
	const data = await fetchPluginData(plugins);
	const results = {
		info: {
			page: 1,
			pages: 1,
			results: data.length
		},
		plugins: data
	};
	response.status(200).send(results);
};
