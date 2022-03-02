import data from './document-data.json'

data.forEach((obj, i) => {
	obj.id = i
})

export default data