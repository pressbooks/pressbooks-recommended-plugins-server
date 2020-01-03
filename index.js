const Hapi = require('@hapi/hapi');
const JFile = require('jfile');
const async = require('async');
const filter = require('lodash').filter;
const fetchPluginData = require('./fetch-plugin-data');

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (request, h) {
        return h.redirect('https://github.com/pressbooks/pressbooks-recommended-plugins-server/');
    }
});

server.route({
    method: 'GET',
    path:'/api/plugin-recommendations',
    handler: function (request, h) {
        const pluginsFile = new JFile( __dirname + '/plugins.txt' );
        const pluginsToFetch = filter( pluginsFile.lines );
        return new Promise(( resolve, reject ) => {
            async.map(
                pluginsToFetch,
                fetchPluginData,
                ( err, results ) => {
                    const plugins = filter(results);
                    resolve({
                            info: {
                                page: 1,
                                pages: 1,
                                results: plugins.length,
                            },
                            plugins
                    });
                }
            );
        });
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
