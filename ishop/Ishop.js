var IshopComponent = React.createClass({

    displayName:'IshopComponent',

    render: function(){

//props.title- название
//props.goods- товары

// { code: 1, nameGoods: 'TV', cost: 1000, urlFoto: 'foto/tv.webp', balance: 5},

        var storage = this.props.goods.map(element => 
            React.DOM.div({key:element.code,className:'goods'},
                React.DOM.img({src:element.urlFoto, alt:element.urlFoto}),
                React.DOM.div({className:'Name'},'product: '+element.nameGoods),
                React.DOM.div({className:'Cost'},'cost: '+element.cost),
                React.DOM.div({className:'balance'},'balance: '+element.balance),
            )          
        );


        return React.DOM.div({className:'IshopComponentFrame'},
            React.DOM.h1({className:'IshopHead'},this.props.title),
            React.DOM.div({className:'IshopComponentText'}, storage),
        );
    },

});