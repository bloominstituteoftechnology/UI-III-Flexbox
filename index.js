// let hue = true;
// if (hue === true){
//     document.body.style="animation: rotate-hue 9s";
// }
// window.addEventListener("scroll",function(){

//     if(window.scrollY == 0) {
//         hue = true;
//     } else {
//         hue = false;
//     }
//     if (hue === true){
//         document.body.style="animation: rotate-hue 9s";
//     }

// })

let logoContainer = document.querySelector('#logo');
let headerImg = document.querySelector('header img[src="img/header-img.png"');

let bodyContainer = document.body;

function hueRotate() {
    if (window.scrollY <= 0) {
        bodyContainer.style = 'animation: hue-rotate 9s infinite';
        window.addEventListener("scroll", function () {
            bodyContainer.style = 'animation: none';
        })
    } else if (window.scrollY > 0) {
        bodyContainer.style = 'animation: none;';
    }
}
document.onload = hueRotate();
let home = document.querySelector('.page-container').innerHTML;
let links = document.querySelectorAll('nav ul li a');
logoContainer.addEventListener("click", function () {
    window.scrollTo(0, 0);
    hueRotate();
    document.querySelector('.page-container').innerHTML = home;
});

links[0].addEventListener("click", function() {
    window.scrollTo(0, 0);
    hueRotate();
    document.querySelector('.page-container').innerHTML =
        `
        <img class="flex flex-w-100" src="img/services-header.jpg" alt="Header Image">
        <div class="flex flex-column flex-w-100">
            <h1>Services</h1>
            <p>
                Our services provide the best digital value in nulla suscipit interdum diam at maximus. Proin vitae
                tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis
                aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh
                pellentesque eleifend. Mauris euismod facilisis iaculis.
            </p>
        </div>
        <hr>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Digital Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque asperiores nulla
                    maiores. Cumque provident quibusdam esse, omnis corrupti magnam sed, voluptates quis aut est
                    velit eum reprehenderit magni unde.</p>
                <button>
                    Learn More
                </button>
            </div>
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>UX / UI</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit adipisci soluta? A maxime
                    odio, perferendis dolorem eos architecto iusto culpa quo magni, incidunt unde, sed nostrum
                    quibusdam provident ad.</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Digital Marketing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque asperiores nulla
                    maiores. Cumque provident quibusdam esse, omnis corrupti magnam sed, voluptates quis aut est
                    velit eum reprehenderit magni unde.</p>
                <button>
                    Learn More
                </button>
            </div>
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit adipisci soluta? A maxime
                    odio, perferendis dolorem eos architecto iusto culpa quo magni, incidunt unde, sed nostrum
                    quibusdam provident ad.</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>IOS Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque asperiores nulla
                    maiores. Cumque provident quibusdam esse, omnis corrupti magnam sed, voluptates quis aut est
                    velit eum reprehenderit magni unde.</p>
                <button>
                    Learn More
                </button>
            </div>
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Android Development</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit adipisci soluta? A maxime
                    odio, perferendis dolorem eos architecto iusto culpa quo magni, incidunt unde, sed nostrum
                    quibusdam provident ad.</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <hr>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1">
                <h3>Some facts about our services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi soluta doloremque quam
                    voluptatibus ab est iusto placeat sequi quis rerum aut ipsa et, aspernatur nisi, molestiae
                    maiores fuga maxime officiis.</p>
                <ul>
                    <li>Awesome Thing</li>
                    <li>Amazing Thing</li>
                    <li>Cool Thing</li>
                    <li>Great Thing</li>
                </ul>
            </div>
            <div class="flex-w-50 flex-justify-center flex-content-center flex-items-center">
                <img src="img/services-info.png" alt="Woman Coding" class="flex-w-100">
            </div>
    `;
    


});
document.querySelector('nav img').addEventListener("click", function () {
    window.scrollTo(0, 0);
    hueRotate();
    document.querySelector('.page-container').innerHTML = home;
})