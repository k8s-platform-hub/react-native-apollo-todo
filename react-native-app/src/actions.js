const mutate = async (client, mutation, variables) => {
  try {
    const mutationResp = await client.mutate({
      mutation,
      variables
    });
    return (mutationResp.data || {"error": "Unexpected"});
  } catch(e) {
      console.log(e)
      Alert.alert("Error", "Something went wrong");
      return {"error": "exception"}
  }
}

export {mutate}
