// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


/*
  The template widget class. Wrap every widget in this so that
  Any sweeping widget changes and methods can be accessed on a specific
  widget. Ex: "WeatherWidget.hide()"
*/

const SortableItem = SortableElement(({value}) =>
  <li className="settingsItem">{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default class SettingsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.widgets,
    };
  }

  componentWillMount() {

  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    return (
      <FadeIn style={{marginTop: '10%'}}>
        <h1>Settings wew</h1>
        <div style={{margin: 20}}>
          <h3>Current Widget Order</h3>
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        </div>
      </FadeIn>
    );
  }
}
