const user = {
	name: "Arivarsan",
	updateName: name => {
		this.name = name
        console.log("new value", this.name);
	}
}

user.updateName("calibraint")
console.log("old value", user.name)