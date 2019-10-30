import React from "react";

const positionPage = props => {
  console.log("First render", props);
  const positionFetchedData = props.fetchedData.map(data => {
    console.log(data);
    if (props.match.params.id === data.poseId) {
      return (
        <div key={data.poseId}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          {data.content.map(innerK => {
            return (
              <>
                <h5>{innerK.title}</h5>
                {innerK.body.map(k => {
                  return (
                    <ul key={k.id}>
                      <li>{k.description}</li>
                    </ul>
                  );
                })}
              </>
            );
          })}
        </div>
      );
    }
  });
  return <>{positionFetchedData}</>;
};

export default positionPage;
