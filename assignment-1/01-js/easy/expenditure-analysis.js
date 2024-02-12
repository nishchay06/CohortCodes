/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let n = transactions.length;
  let ans = [];
  const mp = new Map();
  for(let i = 0; i < n; i++){
    let crcat = transactions[i].category;
    let crprice = transactions[i].price;
    if(mp.has(crcat)) mp.set(crcat,mp.get(crcat)+crprice);
    else mp.set(crcat,crprice);
  }
  mp.forEach (function(pri, cat) {
    ans.push({
      category: cat,
      totalSpent: pri
    })
  })
  return ans;
}

module.exports = calculateTotalSpentByCategory;
