function copyLink() {
  const link = document.querySelector('#finalLink').innerText
  return navigator.clipboard.writeText(link)
}