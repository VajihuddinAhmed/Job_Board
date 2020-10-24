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
        applyJob.setAttribute("id", "applyJob" + i)

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

        const modal = document.querySelector(".modal");
        let appJob =  document.querySelector("#applyJob" + i);
        const apply = document.querySelector("#apply");
        const closeButton = document.querySelector(".close-button");
        function toggleModal() {
            modal.classList.toggle("show-modal");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }
        
        appJob.addEventListener("click", () => {
            if(apply) {
                apply.innerHTML = ''
            }
            const spanName = document.createElement('p');
            spanName.textContent = `You are applying to "${item.JobTitle}" at "${item.Company}"`
            apply.appendChild(spanName);
            modal.classList.toggle("show-modal");
            const submit = document.querySelector('#start')
            submit.addEventListener('click', () => {
                const emailValue = document.querySelector('#mail').value
                localStorage.setItem('User Email', emailValue)
                document.querySelector('#mail').value = ''
                const uploadFile = document.querySelector('#file').value
                localStorage.setItem('User Resume', uploadFile)
                document.querySelector('#file').value = '' 
                modal.classList.toggle("show-modal");
                const successJob = document.querySelector('#success-job')
                successJob.textContent = `Applied to "${item.JobTitle}" at "${item.Company}" successfully...`
            })
            
        });
        closeButton.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
    })
})
.catch((error) => {
    console.log(error)
})