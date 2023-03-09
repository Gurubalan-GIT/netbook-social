export const gqlFetch = async (query: any, variables = {}) => {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT!, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("Error in populating data.");
  }

  const { data } = await response.json();

  return data;
};
