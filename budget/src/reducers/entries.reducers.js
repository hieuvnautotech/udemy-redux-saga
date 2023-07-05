const reducer = (state=initialEntries, action) => {
    console.log(action)
    let newEntries
    switch (action.type){
      case 'ADD_ENTRY' : 
      newEntries = state.concat({...action.payload})
      return newEntries

      case 'REMOVE_ENTRY' :
      newEntries = state.filter(entry => entry.id !== action.payload.id)
      return newEntries

      default:
      return state
    }
    
  }
export default reducer
  var initialEntries = [
    {
      id:1,
      description: "work income",
      value: "1500",
      isExpense: false,
    },
    {
      id:2,
      description: "water bill",
      value: "100",
      isExpense: true,
    },
    {
      id:3,
      description: "Rent redux",
      value: "500",
      isExpense: true,
    },
    {
      id:4,
      description: "Powre bill",
      value: "50",
      isExpense: true,
    },
  ];