function AllStudents(){
    let institute = "OneTeam";
    let students=["Sreekutty","Aarav","Drisya","Saad"]

    return(
        <div>
            <h1>All Students</h1>
            {institute}

            {students.map((std)=>(
                <p>{std}</p>
            ))}
        </div>
    )
}


export default AllStudents