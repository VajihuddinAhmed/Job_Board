const url = 'https://my-json-server.typicode.com/VajihuddinAhmed/Job_Board_API/Available-Jobs';

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
    const jobList = document.querySelector('#job-list')

    data.forEach((item, i) => {
        const jobTitle = document.createElement('h2')
        jobTitle.setAttribute("id", "jobTitle")

        const company = document.createElement('p')
        company.setAttribute("id", "company")
        company.setAttribute("class", "jobs")

        const location = document.createElement('p')
        location.setAttribute("id", "location")
        location.setAttribute("class", "jobs")

        const jobType = document.createElement('p')
        jobType.setAttribute("id", "jobType")
        jobType.setAttribute("class", "jobs")

        const applyJob = document.createElement('button')
        applyJob.setAttribute("id", "applyJob")

        const row = document.createElement('hr')
        row.setAttribute("id", "row")

        const emptydiv = document.createElement('div')
        emptydiv.setAttribute("id", "emptydiv")

        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute("id", "buttonDiv")

        company.textContent = item.Company
        jobTitle.textContent = item.JobTitle
        location.textContent = item.Location
        jobType.textContent = item.JobType
        applyJob.textContent = 'Apply Job'
        

        jobList.appendChild(jobTitle)
        emptydiv.appendChild(company)
        emptydiv.appendChild(location)
        emptydiv.appendChild(jobType)
        jobList.appendChild(emptydiv)
        buttonDiv.appendChild(applyJob)
        jobList.appendChild(buttonDiv)
        jobList.appendChild(row)
    })

})
.catch((error) => {
    console.log(error)
})


