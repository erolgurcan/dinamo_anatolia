export const TotalGoal =  ( {data } ) => {

console.log(data);

let total_score = 0;

data.forEach(element => {
    total_score +=  parseInt(element.dinamo_score) ;
});

console.log(total_score);

return total_score;
};

export const ConceededGoal = ( {data} ) => {

    let conceededGoal = 0;
    data.forEach(element => {
        conceededGoal +=  parseInt(element.opponent_score) ;
    });
    
    console.log(conceededGoal);
    
    return conceededGoal;
}