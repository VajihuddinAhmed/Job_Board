const post = document.querySelector('#post')
const postUrl = 'https://my-json-server.typicode.com/VajihuddinAhmed/Job_Board_API/postjobs';

post.addEventListener('click', () => {
    const jobTitleValue = document.querySelector('#jobTitle').value
    document.querySelector('#jobTitle').value = ''

    const company = document.querySelector('#company').value
    document.querySelector('#company').value = ''

    let jobType
    let element = document.querySelector('input[name="job"]:checked')
    if (element != null) {
        jobType = element.value;
        document.querySelector('input[name="job"]:checked').checked = false
    }
    else {
        jobType = null;
    }
    
    const location = document.querySelector('#location').value
    document.querySelector('#location').value = ''

    const jobDescription = document.querySelector('#jobDescription').value
    document.querySelector('#jobDescription').value = ''

    let postData = {
        jobTitle: jobTitleValue,
        Company: company,
        jobType: jobType,
        Location: location,
        jobDescription: jobDescription
    }

    if(jobTitleValue.length === 0 || company.length === 0 || jobType.length === 0 || location.length === 0 || jobDescription.length === 0) {
        const error = document.querySelector('#error')
        error.textContent = 'Please fill all the details'
        setTimeout(() => {
            const error = document.querySelector('#error')
            error.textContent = ''
        }, 4000)
    } else {
        fetch(postUrl, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));

        const success = document.querySelector('#success')
        success.textContent = 'Job posted successfully...'
        setTimeout(() => {
            const success = document.querySelector('#success')
            success.textContent = ''
        }, 4000)

    }    
})