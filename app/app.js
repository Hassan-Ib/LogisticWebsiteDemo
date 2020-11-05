
const comments = [
    {
        name: 'John smith',
        picture: `img/assel-askhatova-zlLqW8YTX84-unsplash.jpg`,
        comment: `lorem to all the world and beyound all that is and all that is earned , we were born we live and we shall die to the dirt be belong
        try to deniel that there is a beyound but it will unravel before our eyes in the end and we shall screem like hell because we'd be going to hell anyways` 
    },
    {
        name: 'hassan Ibrahim',
        picture: `img/albert-dera-ILip77SbmOE-unsplash.jpg`,
        comment: `i sure can come up with alot of bullshit.. beyound all that is and all that is earned , we were born we live and we shall die to the dirt be belong
        try to deniel that there is a beyound but it will unravel before our eyes in the end and we shall screem like hell because we'd be going to hell anyways` 

    },
    {
        name: 'Jonas schemedelles',
        picture: `img/ali-morshedlou-WMD64tMfc4k-unsplash.jpg`,
        comment: `thought me alot about how javascript works behind the scene beyound all that is and all that is earned , we were born we live and we shall die to the dirt be belong
        try to deniel that there is a beyound but it will unravel before our eyes in the end and we shall screem like hell because we'd be going to hell anyways` 

   
    }
]


let form, closeBtn, toForm, image, customerValue, next__btn, prev__btn

const domStrings = {
    closeBtn : document.querySelector('.close__btn'),
    form : document.querySelector('.form'),
    toForm : document.querySelectorAll('.btn__toForm'),
    prevBtn : document.querySelector('.prev__btn'),
    nextBtn : document.querySelector('.next__btn'),
    customerValue : Array.from(document.querySelectorAll('.customer__image,.customer__name, .customer__review'))
}

//  on docload add the first comment in the array
window.addEventListener('DOMContentLoaded', function(){
    commentSet(comments[0], domStrings.customerValue)
})


//  pagenation btn

// array position to move to 

var position = 0


domStrings.nextBtn.addEventListener('click', function(){
    // position equal position if comment position commets length 
    if(position < comments.length -1) position = btnPress(position)

})

domStrings.prevBtn.addEventListener('click', function(){
    //  if position is greeter than zero reduce array position by 1
    if(position > 0) position = btnPress(position, -1)
})

function btnPress(num, state = 1){
    commentSet(comments[num + (state)], domStrings.customerValue);
    console.log(state)
    return num + (state)
}


function commentSet(obj, elements){
    let [customerImage, customersName, customersReview] =  elements
    customerImage.src = obj.picture;
    customersName.textContent = obj?.name
    customersReview.textContent = obj?.comment;
}

// close btn for form 
domStrings.closeBtn.addEventListener('click', function(){
    styles( domStrings.form,'-22', 'hidden', 'none');
})

Array.from(domStrings.toForm).forEach(el => el.addEventListener('click', function(){
    styles(domStrings.form,'200', 'visible', 'block');

}))

function styles(element,...values){
    element.style.zIndex = values[0]
    element.style.visibilty = values[1]
    element.style.display = values[2]
}