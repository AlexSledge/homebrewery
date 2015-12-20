var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var CreateRouter = require('pico-router').createRouter;

var HomePage = require('./homePage/homePage.jsx');
var EditPage = require('./editPage/editPage.jsx');
var SharePage = require('./sharePage/sharePage.jsx');

var Router;
var Homebrew = React.createClass({
	getDefaultProps: function() {
		return {
			url : "",
			text : "",
			entry : {
				text : "",
				shareId : null,
				editId : null,
				createdAt : null,
				updatedAt : null,
			}
		};
	},
	componentWillMount: function() {
		Router = CreateRouter({
			'/homebrew/edit/:id' : (args) => {
				return <EditPage id={args.id} entry={this.props.entry} />
			},
			'/homebrew/share/:id' : (args) => {
				return <SharePage id={args.id} entry={this.props.entry} />
			},
			'/homebrew*' : <HomePage />,
		});
	},
	render : function(){
		return(
			<div className='homebrew'>
				<Router initialUrl={this.props.url}/>
			</div>
		);
	}
});

module.exports = Homebrew;
