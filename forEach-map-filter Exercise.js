


//                 forEACH


//  doublesValues

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
}
  

//  onlyEvenValues


  function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }
  

//  showFirstAndLast


  function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }
  

//  addKeyAndValue


  function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }


//  vowelCount
  

  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  
//               MAP

//  doubleValuesWithMap
  

  function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  

//  valTimesIndex (returns an array w/ where each value is multiplied by its index number)


  function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
      return val * idx;
    });
  }
  


//  extractKey


  function extractKey(arr, key) {
    return arr.map(function(val) {
      return val[key];
    });
  }



//  extractFullName (returns an array with key-value pairs concatenated together w/ a space 'tween them)
// Example:[{first: 'Elie', last: 'Schoppik}, {first: 'Tim', last:'Lane'}]  => ['Elie Schoppik', 'Tim Lane']

  function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  
//              Filter

//  filterByValue
  
  function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] !== undefined;
    });
  }
  


//  find


  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }




//  findInIbj

  
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }


//  removeVowels
  

  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }


//  doubleOddNumbers

  
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }