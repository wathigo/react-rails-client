import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import { bindActionCreators } from 'redux';
import fetchData from '../services/fetch_data'

import LoadingSpinner from '../spinners/clip';
import HomeMap from './home_map';
import DropDown from './drop_down'


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
      const { dispatch } = this.props
      fetchData(dispatch);
    }

    shouldComponentRender() {
        const {categories, properties} = this.props;
        console.log(properties, categories)
        if(properties.fetching === false || categories.fetching === false) return false;
        return true;
    }

    render() {
        const {categories, properties} = this.props;

        if(this.shouldComponentRender()) return <LoadingSpinner />

        return (
          <div>
            <DropDown categories={categories.categories}/>
            <HomeMap properties={properties} />
          </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    properties: state.properties
});


export default connect(
    mapStateToProps
)(HomePage );
