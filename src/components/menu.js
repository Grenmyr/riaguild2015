var React = require('react'),
    MenuItem = require('./menuItem'),
    _ = require('lodash')
    NavBar = require('react-bootstrap').Navbar,
    NavBrand = require('react-bootstrap').NavBrand,
    Nav = require('react-bootstrap').Nav;

var Menu = React.createClass({
    
    getDefaultProps: function(){
        return {
            menuItems: [
                {
                    key: 'home',
                    path: '/',
                    linkText: 'Home',
                    isIndexLink: true
                },
                {
                    key: 'members',
                    path: '/members/',
                    linkText: 'Roster',
                    isIndexLink: false
                },
                {
                    key: 'actions',
                    path: '/actions/',
                    linkText: 'Deeds',
                    isIndexLink: false
                },
                {
                    key: 'advice',
                    path: '/advice/',
                    linkText: 'Advice',
                    isIndexLink: false
                },
                {
                    key: 'projects',
                    path: '/projects/',
                    linkText: 'Projects',
                    isIndexLink: false
                },
                {
                    key: 'gallery',
                    path: '/gallery/all',
                    linkText: 'Gallery',
                    isIndexLink: false
                }
            ]
        }
    },
    
	render: function(){
        
    var self = this,
        pathRoot,
        url = './src/images/guild-logo.svg',
        menuItems = this.props.menuItems.map(function(menuItem){
            pathRoot = (/^(\/{1}(\w+)?)\/?/i).exec(menuItem.path)[0];
            return React.createElement(MenuItem, _.merge({isIndexLink: menuItem.isIndexLink}, menuItem))
        });
        
    return (
            <NavBar>    
                <Nav>
                    {menuItems}
                </Nav>
                <NavBrand><a className="navbar-brand" href="#"><img src={url} alt='guild-logo' /></a></NavBrand>
            </NavBar>
        );
	}
});

module.exports = Menu;