/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus = 'family', knowsProgramming = true, config = {family: 4}) {
    let countOfHoursPerWeek = config[focus];
    getAmountOfHoursFromScratch(knowsProgramming);
    getAmountOfWeeksToComleteTheCourse(countOfHours, countOfHoursPerWeek);
    return amount;
    
    function getAmountOfHoursFromScratch(statusOfKnowProgramming){
        if(statusOfKnowProgramming){
            return countOfHours = 800;
        }
            return countOfHours = 1300;
    }

    function getAmountOfWeeksToComleteTheCourse(spendTime, spendTimePerWeek){
        if(spendTime % spendTimePerWeek == 0){
            amount = spendTime / spendTimePerWeek;
        } else {
            amount = Math.trunc(spendTime / spendTimePerWeek);
            amount++;
        }
    }
};
