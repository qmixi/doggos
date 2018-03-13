import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as actions from '../../actions';

class DoggosListComponent extends Component {

		render() {
				const {doggos, fetchDoggos} = this.props;

				return (
						<div>
								<div>
										<button onClick={() => fetchDoggos()}>fetch doggos</button>
								</div>
								<div>
										{doggos.length && doggos.map(doggo => <div key={doggo.name}>{doggo.name}</div>)}
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
