//Visitor Provider
firestaff = firebase.database().ref('/employee')
getStaffDetails(phone){
    var promise = new Promise((resolve, reject)=>{
        this.firestaff.child(this.afauth.auth.currentUser.uid).orderbyChild('phone').once('value', snapshot)=> {
        let staffArray = snapshot.val()

        let data = []

        for (let k in staffArray) {
            data.push(staffArray[k])
        }
        resolve(data).then(res)=> {
            (resolve(res)).error(error => {
                resolve(error)
            })
        }
    }
    })

    return promise
 
    
}



This.visitor.getEmployeeDetails(this.data.phone).then(res => {

    If(res == null) {

        Alert(staff number doesn't exist )

}else {

        // get the email from the response 

        // and then run this.visit.create visitor and visitation 

        And after creating visitation you already have employee details and admin details then the email composer comes in


}



})

this.visitor.getEmployee(this.data.phone).then(res=>{

    if (res == null){
        Alert(Staff number does not exist!)
    }

    else{
        
    }
})

