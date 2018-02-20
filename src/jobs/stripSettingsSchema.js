//takes an array of object keys and removes certain values. 
//if needArray is set to true, an array of the keys will be returned

function stripSettingsSchema(settings, needArray){
	var filtered = {}
	var keys = Object.keys(settings)
	keys.forEach(function(item){
			if(item !== "dummy" && item[0] !== "_" && !item.includes("extra")){
				filtered[item] = settings[item]
			}
		})

	if(needArray){
		return Object.keys(filtered)
	}
	else{
		filtered[]
	}filtered
}

module.exports = stripSettingsSchema

