//1. In the hero section change the main headline 
(function(){
    document.querySelector('.text-4xl.font-bold.mb-4.text-white.relative.z-20').textContent="Supercharge Your Brand with Stellar Marketing";
})();

//2. Change the line of text below the hero headline 
(function(){
    document.querySelector('.text-xl.mb-6.text-white.relative.z-20').innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <i><b>shine</b></i> and <i><b>succeed</b></i>.";
})();

//3. Change the image in the background of the hero 
(function(){
    const hero= document.getElementById("hero");
    hero.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720 ')";
})();

//4. Change the background color of the nav bar to the same color that is used in the footer.
(function(){
    document.querySelector('.bg-blue-600.text-white.p-4').style.backgroundColor = "rgba(31, 41, 55,1)";
})();

// 5. Remove the get started Call-to-action (CTA) from the hero.
(function(){
    document.querySelector('.relative.bg-blue-600.text-white.px-6.py-2.rounded').remove();
})();

//6. In the services section change the icons color to a light blue (#6495ed).
(function(){
    const icons = document.querySelectorAll('.material-symbols-outlined.text-6xl');
    icons.forEach( icon =>{
        console.log(icon);
        icon.style.color = "#6495ed";
    })
})();

//7. Change the digital marketing icon to use ‘Ads Click’ instead of the current icon.
(function(){
    document.querySelector('.material-symbols-outlined.text-6xl').innerHTML='ads_click';
})();

//8. In the “Specialized Marketing Solutions” section make a change to the layout of the tiles
(function(){
    const style = document.createElement('style');
    style.innerHTML = `
        @media (min-width: 1024px){
            [data-section="product_cards"]{
                display:flex;
            }
        }
    `;
    document.head.appendChild(style);
})();

//9. In the same section change the Musicians image
(function(){
    const imgList = document.querySelectorAll('img.w-full.h-auto');
    imgList[3].setAttribute('src','https://picsum.photos/id/453/400/300');
})();

//graduate requirements
(function(){
    const forms = document.getElementsByTagName('form');
    forms[0].removeAttribute('action');

    function submitForm(event){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name ==="" || email === ""){
            alert("Please provide a name and an email.");
        }else{
            alert("Thank you, " + name + "! We will be in touch with you shortly at " + email +".");
        }
    }
    forms[0].addEventListener('submit', submitForm);
})();