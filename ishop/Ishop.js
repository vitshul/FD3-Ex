var IshopComponent = React.createClass({

    displayName='IshopComponent',

    render: function(){

        return React.DOM.div(
            {className:'IshopComponentFrame'},
            React.DOM.h1(null,'HELLO!!!!'),
            React.DOM.div({className:'IshopComponentText'},
            'Start learn!'),
        );
    },

});