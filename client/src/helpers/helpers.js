// Calculates average rating
export const averageRating = (data) => {
  let total = 0;

  data.forEach((el) => {
    total += el.rating;
  });

  return (total / data.length).toFixed(1);
};

// Calculate percentage of users that recommend the product
export const recommendedPercentage = (data) => {
  let totalRecommends = 0;
  let percent = 0;

  data.forEach((el) => {
    if (el.recommend === 1) {
      totalRecommends += 1;
    }
  });

  // Calculate percentage
  percent = Math.floor((totalRecommends / data.length) * 100);
  return percent;
};

// Calculates the width of the inner bar to fill the rating bars
export const calculateRatingBars = (ratingNum, data) => {
  // if (data !== undefined) {
  let sortedData = [];
  let totalSame = 0;
  let totalReviews = 0;
  let percent = 0;

  // iterate over data and push each reviews rating to a new array
  if (data !== undefined) {
    data.forEach((el) => {
      sortedData.push(el.rating);
    });

    // sort and reverse the array so the data will line up
    // with the order the bars are rendered in
    sortedData = sortedData.sort().reverse();
  }

  // iterate the data array, add up total reviews and total of the matching ratings
  for (let i = 0; i < sortedData.length; i += 1) {
    totalReviews += 1;
    if (sortedData[i] === ratingNum) {
      totalSame += 1;
    }
  }

  // if no reviews of a number exist return 0
  if (totalSame === 0) {
    return 0;
  }

  // calculate percent
  percent = totalSame / totalReviews;
  return percent.toFixed(1) * 100;
};

// Calculates the margin that moves the triangle indicator
export const charRatingCalc = (metaVal, featureVal, fn) => {
  if (metaVal !== null && featureVal !== undefined) {
    let { value } = metaVal[featureVal];
    value = Number(value).toFixed(1);
    fn(value * 20);
  }
};
