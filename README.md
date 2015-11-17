# gizoogle-slack

This is a [Gizoogle](http://gizoogle.net) integration for Slack. It will translate your english sentences into Snoop Dogg english using [gizoogle](https://github.com/janjakubnanista/gizoogle) NPM module.

<div style="text-align: center">
	<img src="http://www.rapbasement.com/wp-content/uploads/2014/10/snoop-dogg-4ddc3edb2d557.jpg" style="max-width: 100%"/>
</div>

## Usage

### Service setup

You'll need a running instance of this service to be able to integrate it with Slack. You basically have two options - using my hosted version or running the service yourself. The important things is that **this service has to be running on publicly accessible URL**.

#### My hosted version

You can use the service running at [gizoogleslack-tbjjn.rhcloud.com/translate](http://gizoogleslack-tbjjn.rhcloud.com/translate). I cannot guarantee the service availability though.

#### Self hosted version

This integration is built using Node.js. To run it please do the following:

- Have Node.js and NPM installed on your system
- Clone this repository
- Run `npm install` to install all required dependencies (there are not many, don't worry)
- Run `npm start` to start the service. By default it will listen on port `8080` on your localhost.

### Slack setup

After having the service up & running you'll need to setup your Slack. This service is intended to be used as a [slash command](https://api.slack.com/slash-commands). Please follow instructions on [slack website](https://api.slack.com/slash-commands) to set up a slack command for this.

You'll need to enter the URL of your service into the command **URL** input box. For example when using my hosted version the URL you need to use is:

	http://gizoogleslack-tbjjn.rhcloud.com/translate
	
**Don't forget** the `/translate` URL path!

## Notes

This service uses awesome [Gizoogle](http://gizoogle.net) website, go check it out. To use the translator as a NPM module please see [gizoogle](https://github.com/janjakubnanista/gizoogle).

