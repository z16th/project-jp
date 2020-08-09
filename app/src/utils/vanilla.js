export const scrollTo = (elementId) => {
  const element = document.getElementById(`jump-to-${elementId}`)
  if (element !== null) {
    window.scrollTo({
      top: element.offsetTop - 60,
    })
  }
}

export const noOp = () => {}
