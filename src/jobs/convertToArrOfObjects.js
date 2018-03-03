//takes a 
//if needArray is set to true, an array of the keys will be returned

function convertToArrOfObjects(settings){
	var newObj = {};
	var keys = Object.keys(settings);

	keys.forEach(function(key){
		var properties = settings[key];
		var propArr = Object.entries(properties);
		
		for(i=0; i < propArr.length; i++){
		  tempObj = {}
		  tempObj[propArr[i][0]] = propArr[i][1]
			propArr[i] = tempObj;
		}

		newObj[key] = propArr;
	});

	return newObj;
}

module.exports = convertToArrOfObjects

