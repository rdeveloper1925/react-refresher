import { createContext, useReducer, useContext, useState } from "react";

const RecepieContext = createContext({
  default: {
    recepies: [],
    setRecepies: () => {},
  },
});

const ReducersScreen = (props) => {
  const [recepie, setRecepie] = useState({ steps: "", ingredients: "" });
  const [recepies, dispatch] = useReducer(RecepieReducer);
  const context = useContext(RecepieContext);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch("ADD_RECEPIE", recepie);
  };

  const changeHandler = (event, field) => {
    var newRecepie = {};
    newRecepie[field] = event.target.value;
    setRecepie({
      ...recepie,
      ...newRecepie,
    });
  };
  return (
    <RecepieContext.Provider value={recepies}>
      <div className="container">
        <h3>The Recepie app</h3>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Ingredients: </label>
            <input
              type="text"
              className="fomr-control"
              value={recepie.ingredients}
              onChange={(e) => changeHandler(e, "ingredients")}
            />
          </div>
          <div className="form-group">
            <label>Steps: </label>
            <input
              type="text"
              className="fomr-control"
              value={recepie.steps}
              onChange={(e) => changeHandler(e, "steps")}
            />
          </div>
          <br />
          <br />
          <button type="submit">Save Recepie</button>
        </form>
        <hr />
        {console.log(context)}
      </div>
    </RecepieContext.Provider>
  );
};

const RecepieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECEPIE":
      console.log("reducer", state, action);
      return [
        ...state,
        {
          id: new Date().getTime(),
          ingredients: action.ingredients,
          steps: action.steps,
        },
      ];
      break;

    case "LIST_RECEPIES":
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default ReducersScreen;
