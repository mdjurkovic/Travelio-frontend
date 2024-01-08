import { useMutation } from "@apollo/client";
import useMessage from "./useMessage";

const useMutationHelper = (
  query,
  refetchQuery,
  errorMessage = "Error",
  successMessage = "Success",
  refetchVariables
) => {
  const { success, error, contextHolder } = useMessage({ key: successMessage });

  const [mutation] = useMutation(query, {
    refetchQueries: [{ query: refetchQuery, variables: refetchVariables }],
  });

  const asyncMutation = async (variables) => {
    try {
      await mutation({ variables });
      success(successMessage);
    } catch {
      error(errorMessage);
    }
  };

  return { mutation: asyncMutation, contextHolder };
};

export default useMutationHelper;
