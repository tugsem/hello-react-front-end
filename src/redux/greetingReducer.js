export const GET_MESSAGE = 'hello-react-front-end\app\javascript\redux\GET_MESSAGE';

export const getMessage = (payload) => ({
  type: GET_MESSAGE,
  payload
});

export const displayMessages = () =>  dispatch => {
  const apiCall = (link) => fetch(link).then(res => res.json());
  apiCall('http://localhost:3000/api/v1/messages')
  .then(data => dispatch({type: GET_MESSAGE, payload: data}))
}

export const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload
    default:
        return state
  }
};

export default messageReducer;