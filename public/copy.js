function copyLink() {
  console.log('yes')
  const link = document.querySelector('#finalLink').innerText
  return navigator.clipboard.writeText(link)
}