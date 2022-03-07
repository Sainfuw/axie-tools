export const getOwnerAxies = async (owner) => {
  const body = {
    operationName: "GetAxieBriefList",
    variables: {
      sort: "IdDesc",
      owner: owner,
    },
    query: `query GetAxieBriefList($sort: SortBy, $owner: String) {
      axies(sort: $sort, owner: $owner) { results { ...AxieBrief } }
    } fragment AxieBrief on Axie {
      id,
      image,
    }`,
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
