import { allAxies, basicInfo } from "./graphqlQueries";

export const fetchOwnerAxies = async (ownerId) => {
  const body = {
    operationName: "GetAxieBriefList",
    variables: {
      from: 0,
      size: 24,
      sort: "IdDesc",
      auctionType: "All",
      owner: ownerId,
      criteria: {
        region: null,
        parts: null,
        bodyShapes: null,
        classes: null,
        stages: null,
        numMystic: null,
        pureness: null,
        title: null,
        breedable: null,
        breedCount: null,
        hp: [],
        skill: [],
        speed: [],
        morale: [],
      },
    },
    query: allAxies,
  };

  const result = await fetch(
    "https://graphql-gateway.axieinfinity.com/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const data = await result.json();
  return data.data.axies.results;
};

export const fetchAxieInfo = async (id) => {
  const body = {
    operationName: "GetAxieDetail",
    variables: { axieId: id },
    query: basicInfo,
  };

  const result = await fetch(
    "https://graphql-gateway.axieinfinity.com/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const data = await result.json();
  return data.data.axie;
};
