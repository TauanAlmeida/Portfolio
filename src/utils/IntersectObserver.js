export const io = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
    let { animate } = entry.target.dataset

    if (entry.intersectionRatio !== 0){
        entry.target.style.opacity = "1"
        entry.target.classList.add(`${animate}`)
    } else {
        entry.target.style.opacity = "0"
        entry.target.classList.remove(`${animate}`)
    }
    })
 })

export const startAnimate = () => {
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((element) =>{
       io.observe(element)
    })
}