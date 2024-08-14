export const formatVoteAverage = (voteAverage: number): string => {
  if (voteAverage < 10) {
    return voteAverage.toFixed(1);
  }
  return voteAverage.toFixed(2).substring(0, 4);
};
