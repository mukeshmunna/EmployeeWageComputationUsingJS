const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS=2;
const MAX_HRS_IN_A_MONTH =300;

//UC1
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
  console.log("Employee is Absent");
} else {
  console.log("Employee is present");
}

//UC2
let emphrs = 5;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME: emphrs = PART_TIME_HR;
        break;
    case IS_FULL_TIME: emphrs = FULL_TIME_HR
        break;
    case IS_ABSENT: emphrs = IS_ABSENT;
}
let empWage = emphrs * WAGE_PER_HR;
console.log(empWage);

//UC3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME: emphrs = PART_TIME_HR;
            break;
        case IS_FULL_TIME: emphrs = FULL_TIME_HR
            break;
        case IS_ABSENT: emphrs = IS_ABSENT;
    }
  }
  
  
let totalEmphrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
totalEmphrs = getWorkingHours(empCheck);
let totalEmpwage = emphrs * WAGE_PER_HR;
console.log(totalEmpwage);

//UC-4
totalEmphrs = 0;
for (let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    getWorkingHours(empCheck);
    totalEmphrs += emphrs;
}
totalEmpwage = totalEmphrs * WAGE_PER_HR;
console.log(totalEmpwage);

//UC4
let  hrs=0;
for(let i=0;i<NUM_OF_WORKING_DAYS;i++)
{
    empCheck=Math.floor(Math.random()*10)%3;
    hrs+=getWorkingHours(empCheck);
}
totalEmpwage=hrs*WAGE_PER_HR;
console.log(totalEmpwage);

//UC5
let totalemphr=0;
let totalWorkingDays=0;
while(totalemphr<MAX_HRS_IN_A_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empcheck=Math.floor(Math.random()*10)%3;
    totalemphr+=getWorkingHours(empcheck);
} 
let empwage1 = totalemphr*WAGE_PER_HR;
console.log("Total Days :"+totalWorkingDays+"Total hours: "+totalemphr+"Emp Wage :"+empwage1);

//UC6
function CalculateDailyWage(Hrs)
{
    return Hrs*WAGE_PER_HR;
}

let totalEmpHours = 0;
let TotalEmphrs=0;
let totalWorkingDay = 0;
const DailyWageArray = new Array();
while (totalEmpHours < MAX_HRS_IN_A_MONTH && totalWorkingDay < NUM_OF_WORKING_DAYS) {
    totalWorkingDay++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    TotalEmphrs += getWorkingHours(empCheck);
    DailyWageArray.push(CalculateDailyWage(TotalEmphrs));
}
let empWage1 = CalculateDailyWage(TotalEmphrs);
console.log("Total days :" + totalWorkingDay + " Total Hours : " + TotalEmphrs + " Emp Wages " + empWage1);
console.log(DailyWageArray)

//UC7
//A
totalEmpwage = 0;
function sum(dailyWage){
    totalEmpwage += dailyWage;
}
DailyWageArray.forEach(sum);
console.log(totalEmpwage);

//B
let dayCount = 0;
function mapDayWithWage(dailyWage){
    dayCount++;
    return dayCount+"  "+dailyWage;
}
let mapWithDayArray = DailyWageArray.map(mapDayWithWage);
console.log(DailyWageArray);

//C
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullTimeWageArr = mapWithDayArray.filter(fullTimeWage);
console.log(fullTimeWageArr);

//D
console.log(mapWithDayArray.find(fullTimeWage));

//E
console.log(fullTimeWageArr.every(fullTimeWage));

//F
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log(mapWithDayArray.some(partTimeWage));

//G
function totolDayWorked(numOfDays , dailyWage){
    if(dailyWage > 0){
        numOfDays++;
    }
    return numOfDays;
}
console.log(DailyWageArray.reduce(totolDayWorked,0));