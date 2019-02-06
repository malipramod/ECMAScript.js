fetch('http://website.com/files')
.then(data => data.json())
.catch(err => console.error(err))
.finally(() => console.log('processed!'))