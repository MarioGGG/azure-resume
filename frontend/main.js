window.addEventListener('D0mContentLoaded' , (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
        let count = 30;
        fetch(functionApi).then(response => {
            return response.json()
        }).then(response =>{
            console.log("Website called function Api.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catcj(function(error){
            console.log(error);
        })
        return count;
}