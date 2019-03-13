import React, {Component} from 'react';
import $ from 'jquery';

export default class Product extends Component {

  // Constructor de class basique
  constructor (props) {
    super(props);
    this.state = {
      legume : this.props.legume,
      peoples: []
    }
  }

  // Premiere methode appelée avant de charger le JSX ds HTML
  // Donc avant le render
  componentWillMount () {
    $.get('https://swapi.co/api/people')
      .then((response) => {
        this.setState({peoples : response.results})
      })
  }


  // Troisieme
  componentDidMount () {
    console.log('methode componentDidMount a ete appele')
    //this.setState({legume : 'tomate'})
  }

  // 4e eventuellement appelé apres un setState
  componentWillUpdate () {
  }

  // 6e apres le render
  componentDidUpdate () {
    console.log('methode componentDidUpdate a ete appele')
  }


  // Deuxieme et 5e methode appelée au moment de charger JSX dans HTML
  render () {
    console.log(this);
    return (
      <div>
        Ceci est mon produit
        {
          this.state.peoples.map((people) => {
            return (
              <div>
                {people.name}
              </div>
            )
          })
        }
        { false ? <div> true </div> : <div> false </div> }
      </div>
    )
  }
}