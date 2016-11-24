import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class Menu extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      menu:[],
      loading: true,
      hasChildren: false
    };
  };

  componentWillMount(){
    var state = this;
    $.ajax('wp-json/wp-api-menus/v2/menus/2').done((data)=>{
      state.setState({menu: data, loading: false})
    }).fail(()=>{console.log('something went horribly wrong')})
  }

  render() {
    let menu = this.state.menu.items;

    let hasChildren = this.state.hasChildren;

    if (hasChildren) {
      menu = this.state.menu;
      console.log(menu);
    }

    console.log('Übergabe: ', menu);


    if (this.state.loading === false) {

      console.log('teasrasd', this.state.menu);

      var menuItem = menu.map(function(item, index){

        let subMenu;

        if (item.children) {
          item.children.map(function(el) {
            subMenu =  el.title;
          });
        }

        return <li><Link key={ item.id } to={item.url}>{item.title}</Link>{item.children && <span>{subMenu}</span>}</li>;
      });

      return  <ul className="menu">{ menuItem }</ul>

    } else {
      return (
        <ul className="menu">
          <li>Loading</li>
        </ul>
      )
    }
  }
}

class MenuLink extends React.Component {

  constructor(props, context) {
    super(props, context);
  };

  render() {
    var { id, content} = this.props.item;

    return (
      <Link key={item.id} to={item.url}>{item.title}</Link>
    );
  }
}


/*
http://cvjm-mannheim.dev/wp-json/wp-api-menus/v2/menus/2
 {item.children && <Menu menu={item.children}/>}


 {item.children && this.hasChildren(item.children)}

 class Menu extends React.Component {

 render() {
 return (
 <ul className="menu menu--main">
 <li>
 <Link to="/" activeClassName="is-active">Home</Link>
 </li>
 <li>
 <Link to="ueber-uns" activeClassName="is-active">Über Uns</Link>
 </li>
 <li>
 <Link to="angebote" activeClassName="is-active">Angebote</Link>
 </li>
 </ul>
 );
 }
 }

*/

/*

{menu.items.map((menuItem, index) => {
  return <li>{menuItem.index}</li>;
})}
*/
