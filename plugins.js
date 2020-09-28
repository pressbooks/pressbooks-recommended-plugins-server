const JFile = require('jfile');
const {filter} = require('lodash');
const path = require('path');

module.exports = () => {
	const pluginFile = new JFile(path.join(__dirname, '/plugins.txt'));
	return filter(pluginFile.lines);
};
