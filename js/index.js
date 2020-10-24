const postJob = document.querySelector('#post-job')
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
    localStorage.setItem('Email', check)
    document.getElementById('subscribeInput').value = ''
})