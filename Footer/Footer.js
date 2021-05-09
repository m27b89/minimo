class Footer{
    constructor(){
        this.title = "Terms and conditions";
        this.subtitle = "Privacy";
        this.icon = {
            '<i class="fa fa-facebook" aria-hidden="true"></i>': "https://www.facebook.com/",
            '<i class="fa fa-instagram" aria-hidden="true"></i>': "https://www.instagram.com/",
            '<i class="fa fa-twitter" aria-hidden="true"></i>': "https://twitter.com/",
        };
    }
    render(){
        let icons = "";
        Object.keys(this.icon).map(elem => {
            icons += `<li><a href="${this.icon[elem]}">${elem}</a></li>`;
        })
        let html = `
            <footer class="footer-flex">
                    <div class="title-footer">
                        <h3 class="subtitle-footer__item">${this.title}</h3>
                            <h3 class="subtitle-footer__item">${this.subtitle}</h3>                
                    </div>
                <div class="icons-footer"><ul class="icon-footer__item">${icons}</ul></div>
            </footer>
        `
        FOOTER.innerHTML = html;
    }
}

const FOOT = new Footer();
FOOT.render();