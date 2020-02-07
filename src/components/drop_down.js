import React from 'react';

class DropDown extends React.Component{
  render(){
    console.log(this.props)
    const { categories } = this.props;
    const options = categories.map(category => <option value={category.name}>{category.name}</option>)
    return (
      <select className='categories-dp'>
        {options}
      </select>
    );
  }
}

export default DropDown;
