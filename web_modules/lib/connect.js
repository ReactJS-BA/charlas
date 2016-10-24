import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

export default (storeMapping = store => ({}), actionMapping = {}) =>
  connect(
    storeMapping,
    (dispatch) => ({
       actions : bindActionCreators(actionMapping, dispatch)
   })
 )
