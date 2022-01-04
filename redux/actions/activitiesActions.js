import axios from "axios"

const activitiesAction = {
  getActivities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("https://mytinerary-sagario.herokuapp.com/api/activities")
      dispatch({
        type: "GET_ACTIVITIES",
        payload: response.data.response,
      })
    }
  },
}

export default activitiesAction
