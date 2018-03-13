import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as actions from '../../actions';
import './doggos-list.css';

class DoggosListComponent extends Component {

		render() {
				const {doggos, fetchDoggo} = this.props;

				const doggosList = doggos.map(doggo => (
						<div key={doggo.message}>
								<img style={{maxWidth: '300px', margin: '20px auto'}} src={doggo.message} alt={doggo.message}/>
						</div>
				));

				return (
						<div className='doggosList'>
								<div>
										<button onClick={() => fetchDoggo()}>fetch doggos</button>
								</div>
								<div className='doggosList__list'>
										{doggosList}
								</div>
						</div>
				)
		}
}

function mapStateToProps(state) {
		return {
				doggos: state.doggos
		}
}

export default connect(mapStateToProps, actions)(DoggosListComponent);
