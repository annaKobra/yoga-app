import React from "react";

const aboutPage = props => {
  const data = props.aboutPage.map(pageK => {
    if (props.match.params.id === pageK.id) {
      return (
        <div key={pageK.id}>
          <h1>{pageK.title}</h1>
          <p>{pageK.description}</p>
          {pageK.content ? (
            <>
              {pageK.content.map(innerK => (
                <div key={innerK.id}>
                  <h3>{innerK.title}</h3>
                  <p>{innerK.body}</p>
                </div>
              ))}
            </>
          ) : null}
        </div>
      );
    }
  });
  return <>{data}</>;
};

export default aboutPage;
