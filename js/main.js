class Details{
	constructor (name,batch){
		this.Name=name
		this.Age=batch
	}
	getDetails(){
		return (`${this.Name},${this.Age}`)
	}
}
let trainee=new Details("Angel","6")
let trainee1=new Details("David","4")
let f=trainee1.getDetails()

console.log(f)
console.log(trainee)
console.log(trainee1)

