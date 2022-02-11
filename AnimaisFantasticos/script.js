
// Transição de conteúdo sobre a descrição dos animais
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li')

  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')

    function activeTab(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

// Efeito accordion nas listas em faq
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if(accordionList.length){
    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')
    
    function activeAccordion(){
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()

function initSmoothScroll(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initSmoothScroll()

function initAnimationScroll(){
const sections = document.querySelectorAll('.js-scroll')
  if(sections.length){
    const windowMetade = window.innerHeight * 0.6

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowMetade) < 0

        if(isSectionVisible){
          section.classList.add('ativo')
        }
        else{
          section.classList.remove('ativo')
        }
      })
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}
initAnimationScroll()
