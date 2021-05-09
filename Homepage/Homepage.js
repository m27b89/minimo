class Homepage{
    constructor(){
        this.title = ["The perfect weekend getaway", "photodiary", "Leave a comment"]
        this.titles = [ "More than just a music festival", "Life tastes better with coffee", "American dream", "A day exploring the Alps", "Top 10 song for running",
        "Cold winter days"];
        this.subtitles = ["Lifestyle", "lifestyle", "photodiary", "photodiary", "lifestyle","lifestyle"];
        this.text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris";
        this.line = {
            name: "Sign up for our newsletter!",
            link: "Enter a valid email address",
            icon: ""
        };
        this.texts = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
        this.images = ["./img/Homepage/image1.jpg", "./img/Homepage/image2.jpg", "./img/Homepage/image3.jpg", "./img/Homepage/image4.jpg", "./img/Homepage/image5.jpg", "./img/Homepage/image6.jpg"];
        this.imagesBlock = ["./img/Homepage/image7.jpg", "./img/Homepage/image8.jpg", "./img/Homepage/image9.jpg"]
        this.button = "load more";
        this.titleBlock = "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.” ";
        this.titleForm = "Sign up for our newsletter!";
        this.writeEmail = "Enter a valid email address";
        this.iconForm = ['<i class="fa fa-terminal" aria-hidden="true"></i>'];
        this.commentUser = "Write yours comment";
        this.count = 0;
        this.buttonEmail = "Submit";
        this.team = "Введите Email и комментарий!";
        this.teamEnd = "Комментарий сохраняется только у вас!";
        this.userAllComment = [];
    }
    showEmailComments(){
        let strAll = "";
        if(strAll == ""){
            (this.userAllComment).forEach(elem => {
                strAll += `<p class="comment-email">Email: ${elem.userEmail}</p><p class="comment-user">${elem.userComment}</p><br>`;
                console.log("good")
        })
        }
        else{
            strAll = `<p class="comment-email">Email: ${elem.userEmail}</p><p class="comment-user">${elem.userComment}</p><br>`;
            console.log("ho")
        }
        document.querySelector(".comment").innerHTML += strAll;
        this.count = this.userAllComment.length;
        document.querySelector(".count").textContent = `${this.count} Comments`;
    }
    removeInfo(){
        document.querySelector(".block-home").classList.add("close");
    }
    setInfoUser(){
        event.preventDefault();
        let email = document.querySelector("#text").value;
        let comment = document.querySelector("#text-comment").value;

        let answerEmail = email;
        let answerComment = comment;

        if(email === "" || comment === ""){
            document.querySelector(".block-home").classList.remove("close");
        }
        else{
            this.count++
            removeComment();
                let users = {
                    "userEmail": email,
                   "userComment": comment,
                }
                this.userAllComment.push(users);
                HOME.showEmailComments();
                localStorage.setItem("comments", JSON.stringify(this.userAllComment))
        }
            
            document.querySelector(".count").textContent = `${this.count} Comments`;
            
    }

    getlocal(){
        if(localStorage.getItem("comments")){
            this.userAllComment = JSON.parse(localStorage.getItem("comments"));
            HOME.showEmailComments();
        }
    }
    
    showMore(){
        document.querySelector(".btn-main").classList.add("active");
        document.querySelectorAll(".block-show").forEach(elem => {
            elem.classList.remove("active");
        });
    }
    render(){
        let imagesBlock = "";
        this.imagesBlock.forEach(elem => {
            imagesBlock += `<img class="img-block" src="${elem}">`
        })
        let titles = "";
        this.titles.forEach((elem, index) =>{
            this.subtitles.forEach((el, i) => {
                this.images.forEach((images, img) => {
                    if(index == i && i == img){
                        titles += `<div class="title-flex__item"><img class="title-img__flex" src="${images}"><p class="title-text">${el}</p><h2 class="title">${elem}</h2><p class="title-text__item">${this.text}</p></div>`;
                    } 
                })
            })
        })
        let html = `
            <main>

                <div class="block-home close"><p>${this.team}</p><span class="btn-close"onclick="HOME.removeInfo()">close</span></div>

                <div class="block-home__end close">${this.teamEnd}</div>

                <div class="title-main">
                    <p class="title-text__item">${this.title[1]}</p>
                    <h1 class="title">${this.title[0]}</h1>
                    <p class="texts">${this.texts}</p>
                    <p class="title-text__item title-main">${this.title[2]}</p>
                </div>

                    <div class=title-flex>${titles}</div>

                <div class="btn-flex">
                    <button class="btn-main" onclick="HOME.showMore()">${this.button}</button>
                </div>

                <div class="block-show active">
                    <p class="title-text__item">${this.title[1]}</p>
                    <h1 class="title">${this.title[0]}</h1>
                    <p class="texts">${this.texts}</p>
                    <div">${imagesBlock}</div>
                    <p class="text-block block-show active">${this.titleBlock}</p>
                    <p class="texts block-show active">${this.texts}</p>
                </div>

                    <div class="form-block">
                        <div class="form-block__item">
                            <h2 class="form-title">${this.titleForm}</h2>
                                <input class="form-block__input" id="text" type="text" placeholder="${this.writeEmail}" maxlength="15">
                        </div>
                    </div>

                <div class="form-comments">
                    <form class="form-comment">
                        <label for="text"><label>
                        <input id="text-comment" for="text" type="text" placeholder="${this.commentUser}" maxlength="30">
                        <input id="btn-comment" type="submit" onclick="HOME.setInfoUser()" value="Submit">
                            <p class="count">${this.count} Comments</p>
                        <div class="comment"></div>
                    </form>
                </div>

            </main>
        `
        HOMEPAGE.innerHTML = html;
    }    
}

const HOME = new Homepage();
HOME.render();
HOME.getlocal();