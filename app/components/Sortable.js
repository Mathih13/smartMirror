import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li style={{listStyle: 'none', border: '1px solid white', cursor: 'pointer'}}>{value}</li>
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

export default class Sortable extends Component {
  constructor(props) {
    super(props)
  }

  // Pass the new version of the lists up
  updateLists(array) {
    if (this.props.updateLeft) {
      this.props.updateLeft(array)
    } else if (this.props.updateRight){
      this.props.updateRight(array)
    }
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.props.items, oldIndex, newIndex),
    })
    this.updateLists(this.state.items)
  };
  render() {
    return <SortableList items={this.props.items} onSortEnd={this.onSortEnd} />;
  }
}
