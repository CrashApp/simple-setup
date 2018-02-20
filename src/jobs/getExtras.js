//returns an object of extras in propper format


function getExtras(settings, whatToUpdate){
	var keys = Object.keys(settings)

	keys.forEach(function(item){
		if(item.includes('extra')){
			let newKey = settings[item][0] 
			let newValue = settings[item][1]
			let prefix = /(?:(?!\.).)*/.exec(item)[0]
			console.log("$$$$$$$$$$$")
			console.log(newKey)
			console.log(newValue)
			console.log(prefix)
			console.log(whatToUpdate[prefix])
			if(!whatToUpdate[prefix+ ".extra"]){
				whatToUpdate[prefix+ ".extra"] = {}
			}
			whatToUpdate[prefix+ ".extra"][newKey] = newValue
			//whatToUpdate[prefix].extra[newKey] = newValue
		}
	})

	return whatToUpdate
}

module.exports = getExtras


// everything before the dot
// /(?:(?!\.).)*/.exec(item)[0]