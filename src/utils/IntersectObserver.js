/*
* Faz animação dinamicamente de com a classe
*   by Tauan Almeida @2020
*/
const config = {
    threshold: [0, 0.25, 0.75, 1]
};
  
export const io = new IntersectionObserver(entries => {
    var progressLoaded = false
    entries.forEach((entry) => {
        let { animate } = entry.target.dataset
       
        if (entry.intersectionRatio !== 0 || entry.isIntersecting){
            entry.target.style.opacity = "1"
            entry.target.classList.add(`${animate}`)
        } else {
            entry.target.style.opacity = "0"
            entry.target.classList.remove(`${animate}`)
        }
                                    
    })
 }, config)

export const startAnimate = () => {
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((element) =>{
       io.observe(element)
    })
}