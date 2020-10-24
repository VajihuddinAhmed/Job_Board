const postJob = document.querySelector('#post-job')
const postUrl = 'https://my-json-server.typicode.com/VajihuddinAhmed/Job_Board_API/postjobs';

postJob.addEventListener('click', () => {
    location.assign('../html/postjob.html')
})

const applyJob = document.querySelector('#want-job')
applyJob.addEventListener('click', () => {
    location.assign('../html/applyjob.html')
})

const subscribe = document.querySelector('#subscribe')
subscribe.addEventListener('click', () => {
    const check = document.getElementById('subscribeInput').value 
    // localStorage.setItem('Email', check)
    let data = {
        email: check
    }

    fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));

    document.getElementById('subscribeInput').value = ''

})