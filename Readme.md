# Pressbooks Recommended Plugins Server

Welcome!

This repository contains the very simple node server (powered by hapi.js) that returns results for the Recommended Plugins tab in Pressbooks. It's a fork of the [original](https://github.com/secretpizzaparty/better-plugin-recommendations-server) by Secret Pizza Party.

Feel free to fork this repository to power your own server.

## Instructions

* You'll need node 6+ (7.6+ ideal) to run this
* You should probably have `yarn` installed, but you can get away with just `npm`
* Install with `yarn` (or `npm install` if you prefer the old school route)
* Start the server with `yarn start` (or `npm start` I guess)
* To update the plugin list, just add/remove slugs in `plugins.txt`
* Deploy with [`now`](https://zeit.co/now) super easily if you'd like
* OPTIONAL: add a filter to the `pb_recommended_plugins_url` which returns the URL of the host where you're serving the API from.
