import { useMutation } from "@apollo/client";

const useMutationHelper = (
  query,
  refetchQuery,
  refetchVariables,
  refetchQueryName
) => {
  try {
    const [mutation] = useMutation(query, {
      refetchQueries: [
        { query: refetchQuery, variables: refetchVariables },
        refetchQueryName,
      ],
    });

    return { mutation };
  } catch (e) {
    alert("Failed mutation: ", e);
  }
};

export default useMutationHelper;
