/*

The following is the acceptance criteria for this project. 
-------------------------------------------------------------------

You have been given a dataset composed of arrays with two fields, Date and Profit/Losses.

Your task is to write JavaScript code that analyzes the records to calculate each of the following:

The total number of months included in the dataset.

The net total amount of Profit/Losses over the entire period.

The average of the changes in Profit/Losses over the entire period.

     - You will need to track what the total change in profits are from month to month and then find the average. (Total/Number of months -1)


     The greatest increase in profits (date and amount) over the entire period.
     
The greatest decrease in losses (date and amount) over the entire period.

When you open your code in the browser your resulting analysis should look similar to the following:

Financial Analysis
----------------------------
Total Months: 25
Total: $2561231
Average  Change: $-2315.12
Greatest Increase in Profits: Feb-2012 ($1926159)
Greatest Decrease in Profits: Sep-2013 ($-2196167)


Your final code should print the analysis to the console.

*/

/*


The following is the pseudocode for this project.. 


Lets first list out all the variables we will need. 


totalMonths
netTotal
totalChanges
averageChange
greatestIncrease
greatestDecrease 


- Work out how to access an array within an array.
    - to get access to a multidimensional array e.g an array within an array:  we can use two double brackets
    - i.e finances[0][1] = 867884

    - to do all the following: loop through the first array and then the second inner array.

  - validatation: check if there is any data within the inner array, use Array.prototype.length with a strict equality operator to check if the length returns 0, if the inner array is empty of data return a
  message to the console advising no data to produce a financial report.
  
  - Work out how many months there are in the array of arrays - using Array.prototype.length property. 
  
  - Work out the *netTotal* amount of profit/loss on the entire array: we can use the Array.prototype.reduce method. Which will return the sum of all the elements in the array and because there are negative values this will provide us with a net total amount. 

  - Work out the total change - the difference from month to month:  totalChanges variable should initially be an empty array so that we can keep track of the month to month changes. 

  - Work out from the above result of the *totalChanges* array and return the result to *averageChange*: calculated by - using the Array.prototype.reduce method on the *totalChanges* array and deviding it by the *totalMonths*, remember to round to two decimal places. 
  
  - Work out the greatest increase in profits: using the *totalChanges* array, we can find the greatest value using Math.max() static method. 
  
  
  - Work out the greatest decrease in profits: using *totalChanges* array, we can find the least value using Math.min() static method. 
  
  
  - print all the above results to the console using console.log(). 
  
  -- - - - - -- -- - - - -- - -  - -- - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - -- - 
  
  */

// dataset as an array of arrays

var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

// dataset to test

// var finances = [
//   ["Jan-2010", 884],
//   ["Feb-2010", 655],
//   ["Mar-2010", 1013],
//   ["Apr-2010", 417],
//   ["May-2010", -7503],
//   ["Jun-2010", 857],
//   ["Jul-2010", 3096],
//   ["Aug-2010", 885],
//   ["Sep-2010", -6386],
//   ["Oct-2010", 532],
//   ["Nov-2010", 3810],
// ];

// we need a function to calculate the total length of the array:  returning the total number of months in the array

const totalMonths = function (financeData) {
  const totalMths = financeData.length - 1; // minus one because the array is zero indexed

  return totalMths;
};

// we need a function to calculate the netTotal of the data: returning the netTotal amount

const netTotal = function (financeData) {
  // lets map through the array and return an array with only the totals

  const totalsArray = financeData.map((totals) => {
    return totals[1];
  });

  // lets calculate the netTotal from the new array of totals using reduce method

  const net = totalsArray.reduce((prev, curr) => {
    return prev + curr;
  });

  return net;
};

// we need a function to keep track of the difference between amounts in the totalsArray

const difference = function (totals) {
  let totalChanges = [];

  // lets loop through the array and store the results in to an empty array - we start the loop at 1 because we need the 2nd element in the array and substract it with the 1st

  for (var i = 1; i < totals.length; i++) {
    var diff = totals[i][1] - totals[i - 1][1]; // totals[i -1] will give us the 1st element in the array

    totalChanges.push(totals[i - 1].concat(diff)); // using the Array.prototype.concat() method will append the diff result to the end of the array
  }

  return totalChanges;
};

// we need a function to calculate the average change from the totalChanges array. This totalChanges argument of the function will recieve the mutated array
// we created in the difference function

const averageChange = function (totalChanges) {
  let diffTotals = [];
  let average;

  for (var i = 0; i < totalChanges.length; i++) {
    const differenceEl = totalChanges[i][2];

    diffTotals.push(differenceEl); // we have extracted the difference total results from the array so we can calculate the average change on this array

    average = diffTotals.reduce((prev, curr) => prev + curr);
  }

  return average / totalMonths(finances); // average is returned by dividing by the total months - we do this by simply invoking the function and passing in the original array
};

// we need a function to return the greatest increase in profits over the entire period including the date

const greatestIncrease = function (financeData) {
  let greatestIncrease = [];
  let diffEl = [];
  let max;

  // lets first extract the complete array that includes the difference values concatanated to our array

  let concatArr = difference(financeData);

  // lets first loop through this concatanated array: including difference values

  for (var i = 0; i < concatArr.length; i++) {
    // lets create a condition here to find the greatest increase in profits by checking if it is a positive number
    // and then checking if it is the highest value using the Math.max() method

    if (concatArr[i][2] > 0) {
      // lets push the 2nd element of the array in to an empty array so we can compare using the Math.max() method

      diffEl.push(concatArr[i][2]);

      // we can now pass this array using the spread operator to our Math.max() method and pass this result to another variable to use later
      max = Math.max(...diffEl);

      // lets create another array so we can compare the max value against the original array and also return the array that matches

      greatestIncrease.push([
        concatArr[i][0],
        concatArr[i][1],
        concatArr[i][2],
      ]);
    }
  }

  // lets loop through this array and return only the array that matches the condition

  for (let i = 0; i < greatestIncrease.length; i++) {
    if (max === greatestIncrease[i][2]) {
      return greatestIncrease[i];
    }
  }
};

// we need a function to return the greatest decrease in profits over the entire period including the date

const greatestDecrease = function (financeData) {
  let greatestDecrease = [];
  let diffEl = [];
  let min;

  // lets first extract the complete array that includes the difference values concatanated to our array

  let concatArr = difference(financeData);

  // lets first loop through this concatanated array: including difference values

  for (var i = 0; i < concatArr.length; i++) {
    // lets create a condition here to find the greatest decrease in profits by checking if it is a negative number
    // and then checking if it is the lowest value using the Math.min() method

    if (concatArr[i][2] < 0) {
      // lets create an array here to pass in to Math.min() nethod

      diffEl.push(concatArr[i][2]);

      min = Math.min(...diffEl);

      // lets create another array so we can compare the min value against the original array and also return the array that matches

      greatestDecrease.push([
        concatArr[i][0],
        concatArr[i][1],
        concatArr[i][2],
      ]);
    }
  }

  // lets loop through this array and return only the array that matches the condition

  for (var i = 0; i < greatestDecrease.length; i++) {
    if (min === greatestDecrease[i][2]) {
      return greatestDecrease[i];
    }
  }
};

// we need a function to print all the financial data to the console

const printToConsole = function () {
  return `
  
    Financial Analysis
    -----------------------------------------------------------
    
    Total Months: ${totalMonths(finances)}
    Total: £${netTotal(finances)}
    Average Change: £${averageChange(difference(finances)).toFixed(2)}
    Greatest increase in profits: ${greatestIncrease(finances)[0]} (£${
    greatestIncrease(finances)[1]
  })
    Greatest decrease in profits: ${greatestDecrease(finances)[0]} (£${
    greatestDecrease(finances)[1]
  }) 
  
    -----------------------------------------------------------
    
  `;
};

console.info(printToConsole());
