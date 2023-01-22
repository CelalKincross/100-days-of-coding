//Prompt

// Given an array of daily high temperatures for a city, produce a new array as output where each value is the number of days forward that has a temperature higher than this day. All of the temperature values are normal earth temperatures.


// For example, if the daily highs are [50, 55, 53, 52, 60, 65, 63], then the result should be [ 1,  3,  2,  1,  1,  0,  0]. The last two values are special cases because there are no days in the future predicted to be hotter.

function hotDays(temperatures) {
    const output = [];
    // go through array in order
    for (let i = 0; i < temperatures.length; i++) {
        //compare with each value ahead of current value
      let count = 0;
      for (let j = i + 1; j < temperatures.length; j++) {
        // if the current value is less than a future value get the difference between the indices and exit inner loop
          if (temperatures[i] < temperatures[j]) {
            count = j - i
            break;
        } 
      }
      output.push(count);
    }
    return output;
  }
  console.log(hotDays([50, 55, 53, 52, 60, 65, 63]))