//READ total no of participants
//RETURNS number
export const getTotalParticipants = async () => {
  return await airdropContract.methods
    .getTotalPaticipants()
    .call((err, response) => {
      return response;
    });
};
