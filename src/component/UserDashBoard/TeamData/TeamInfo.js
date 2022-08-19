export const TotalGoal = ({ data }) => {
  let total_score = 0;

  data.forEach((element) => {
    total_score += parseInt(element.team_score);
  });

  return total_score;
};

export const ConceededGoal = ({ data }) => {
  let conceededGoal = 0;
  data.forEach((element) => {
    conceededGoal += parseInt(element.opponent_score);
  });

  return conceededGoal;
};

export const Standing = ({ data }) => {
  let standingNum = 0;

  data.forEach((element) => {
    if (element.team_name === "Dinamo Anatolia") {
      standingNum = element.standing;
    }
  });

  return standingNum;
};
