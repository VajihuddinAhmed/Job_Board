const post = document.querySelector('#post')

post.addEventListener('click', () => {
    const jobTitleValue = document.querySelector('#jobTitle').value
    localStorage.setItem('Job Title', jobTitleValue)
    document.querySelector('#jobTitle').value = ''

    const company = document.querySelector('#company').value
    localStorage.setItem('Company', company)
    document.querySelector('#company').value = ''

    if(jobTitleValue.length === 0 || company.length === 0 || jobType.length === 0 || location.length === 0 || jobDescription.length === 0) {
        const error = document.querySelector('#error')
        error.textContent = 'Please fill all the details'
        setTimeout(() => {
            const error = document.querySelector('#error')
            error.textContent = ''
        }, 4000)
    } 
    
    const jobType = document.querySelector('input[name="job"]:checked').value;
    localStorage.setItem('Job Type', jobType)
    document.querySelector('input[name="job"]:checked').checked = false

    const location = document.querySelector('#location').value
    localStorage.setItem('Location', location)
    document.querySelector('#location').value = ''

    const jobDescription = document.querySelector('#jobDescription').value
    localStorage.setItem('Job Description', jobDescription)
    document.querySelector('#jobDescription').value = ''

    const success = document.querySelector('#success')
    success.textContent = 'Job posted successfully...'
    setTimeout(() => {
        const success = document.querySelector('#success')
        success.textContent = ''
    }, 4000)
    
    
})