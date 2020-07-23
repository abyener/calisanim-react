import React from "react";

import SearchContext from "../context/SearchContext";

function ContextProvider(props) {
  const contextList = [
    {
      context: SearchContext,
      props: {}
    }
  ];
  return contextList.reduce((current, context) => {
    const ContextComponent = context.context;
    return (
      <ContextComponent.Provider {...context.props}>
        {current}
      </ContextComponent.Provider>
    );
  }, props.children);
}

export default ContextProvider;
