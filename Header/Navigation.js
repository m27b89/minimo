class Navigation {
    constructor(){
        this.logo = "minimo";
        this.nav = {
            lifestyle: "#",
            photodiary: "#",
            music: "#",
            travel: "#"
        };
        this.img = "./img/Header/image.jpg";
        this.team = "Сайн написан в покозательных целях. ссылка без доступа!"
        this.navIcon = '<i class="fa fa-bars" aria-hidden="true"></i>';
    }
    navShow(){
        document.querySelector(".nav-header").classList.toggle("nav-active");
    }
    addInfo(){
        document.querySelector(".block-header").classList.remove("active");
    }
    removeInfo(){
        document.querySelector(".block-header").classList.add("active");
    }
    render(){
        let nav = "";
        Object.keys(this.nav).forEach(elem => {
           nav += `<li><a id="btn-header" href="${this.nav[elem]}" onclick="Nav.addInfo()">${elem}</a></li>`
        })
        let html = `
        <div class="container">
            <header>
                <div class="header-logo">${this.logo}<span class="nav-icon" onclick="Nav.navShow()">${this.navIcon}</span>

                        <div class="nav-header nav-media nav-active">
                            <ul class="nav-media__item">${nav}</ul>
                        </div> 

                        <div class="header-nav">
                            <ul class="header-nav__item">${nav}</ul>
                        </div>  
                        
                    <div><img class="header-img__nav" src="${this.img}"></div>
                    <div class="block-header active">${this.team}<span class="btn-close"onclick="Nav.removeInfo()">close</span></div>  
                    </div>   
            </header>
        </div>
        `
        HEADER.innerHTML= html;
    }
}

const Nav = new Navigation();
Nav.render();