class Details{
	constructor (name,batch){
		this.Name=name
		this.Age=batch
	}
	getDetails(){
		
		console.log("muthuraj")
	}
}

class Result extends Details{
	constructor (name,batch) {
		super(name,batch)
	}
	getDetails(){
		super.getDetails()
		
		console.log("david")
	}
	}
	
	var de = new Details("isaac","5")
	console.log(de)
	de.getDetails()

	var dd= new Result("Angel","8")
	console.log(dd)
	dd.getDetails()