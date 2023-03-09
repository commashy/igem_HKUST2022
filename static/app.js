const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('rotateshow');
        } else {
            entry.target.classList.remove('rotateshow');
        }
    });
});


const hiddenElements2 = document.querySelectorAll('.rotatehidden');
hiddenElements2.forEach((el) => observer2.observe(el));




const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showleft');
        } else {
            entry.target.classList.remove('showleft');
        }
    });
});


const hiddenElements3 = document.querySelectorAll('.hiddenleft');
hiddenElements3.forEach((el) => observer3.observe(el));


const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showright');
        }
        else {
            entry.target.classList.remove('showright');
        }
    });
});


const hiddenElements4 = document.querySelectorAll('.hiddenright');
hiddenElements4.forEach((el) => observer4.observe(el));


// const observer6 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('showrighttruck');
//         } 
//     });
// });


// const hiddenElements6 = document.querySelectorAll('.hiddenrighttruck');
// hiddenElements6.forEach((el) => observer6.observe(el));


const trucks = document.querySelectorAll('.hiddenrighttruck');

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            trucks.forEach(truck => {
                if (entry.isIntersecting) {
                    truck.classList.add('showrighttruck');
                }
            });
        }
    });
});

const hiddenElements6 = document.querySelectorAll('.andis');
hiddenElements6.forEach((el) => observer6.observe(el));


const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showup');
        }
        else {
            entry.target.classList.remove('showup');
        }
    });
});


const hiddenElements5 = document.querySelectorAll('.hiddenup');
hiddenElements5.forEach((el) => observer5.observe(el));


const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showchemicals');
        }
        else {
            entry.target.classList.remove('showchemicals');
        }
    });
});


const hiddenElements7 = document.querySelectorAll('.hiddenchemicals');
hiddenElements7.forEach((el) => observer7.observe(el));


const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showright2');
        }
        else {
            entry.target.classList.remove('showright2');
        }
    });
});


const hiddenElements8 = document.querySelectorAll('.hiddenright2');
hiddenElements8.forEach((el) => observer8.observe(el));


const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showhowever');
        }
        else {
            entry.target.classList.remove('showhowever');
        }
    });
});


const hiddenElements9 = document.querySelectorAll('.hiddenhowever');
hiddenElements9.forEach((el) => observer9.observe(el));


const counters = document.querySelectorAll('.counter');
var speed = 1000;

const observer10 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    if (target == 112000){
                        var speed = 400;
                    }
                    else {
                        var speed = 300;
                    }

                    const inc = target / speed;
            
                    if (count < target){
                        counter.innerText = count + inc;
                        setTimeout(updateCount, 1)
                    } else {
                        counter.innerText = target;
                    }
                }
            
                updateCount();
            });
        }
        else {
            counters.forEach(counter => {
                const updateCount = () => {
                    counter.innerText = +0;
                }
            
                updateCount();
            });
        }
    });
});


const hiddenElements10 = document.querySelectorAll('.arrow');
hiddenElements10.forEach((el) => observer10.observe(el));


const testkits = document.querySelectorAll('.hiddentestkit');

const observer11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            testkits.forEach(testkit => {
                if (entry.isIntersecting) {
                    testkit.classList.remove('td-0');
                    testkit.classList.add('showtestkit');
                }
            });
        }
        else {
            testkits.forEach(testkit => {
                testkit.classList.add('td-0');
                testkit.classList.remove('showtestkit');
            });
        }
    });
});


const hiddenElements11 = document.querySelectorAll('.detector');
hiddenElements11.forEach((el) => observer11.observe(el));


const results = document.querySelectorAll('.hiddenresult');

const observer12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            results.forEach(result => {
                if (entry.isIntersecting) {
                    result.classList.remove('td-0');
                    result.classList.add('showresult');
                }
            });
        }
        else {
            results.forEach(result => {
                result.classList.add('td-0');
                result.classList.remove('showresult');
            });
        }
    });
});


const hiddenElements12 = document.querySelectorAll('.withthis');
hiddenElements12.forEach((el) => observer12.observe(el));


const newss = document.querySelectorAll('.hiddennews');

const observer13 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            newss.forEach(news => {
                if (entry.isIntersecting) {
                    news.classList.add('shownews');
                }
            });
        }
    });
});


const hiddenElements13 = document.querySelectorAll('.seafood');
hiddenElements13.forEach((el) => observer13.observe(el));


const axiss = document.querySelectorAll('.axis');

const observer14 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            axiss.forEach(axis => {
                if (entry.isIntersecting) {
                    axis.classList.remove('td-0');
                    axis.classList.add('showgraph');
                }
            });
        }
    });
});


const hiddenElements14 = document.querySelectorAll('.graphdect');
hiddenElements14.forEach((el) => observer14.observe(el));


const texts = document.querySelectorAll('.textgraph');

const observer15 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            texts.forEach(text => {
                if (entry.isIntersecting) {
                    text.classList.remove('td-0');
                    text.classList.add('showgraph');
                }
            });
        }
    });
});


const hiddenElements15 = document.querySelectorAll('.graphdect');
hiddenElements15.forEach((el) => observer15.observe(el));


const spoileds = document.querySelectorAll('.spoiled');

const observer16 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            spoileds.forEach(spoiled => {
                if (entry.isIntersecting) {
                    spoiled.classList.remove('td-0');
                    spoiled.classList.add('showgraph');
                }
            });
        }
    });
});


const hiddenElements16 = document.querySelectorAll('.graphdect');
hiddenElements16.forEach((el) => observer16.observe(el));


const consumings = document.querySelectorAll('.consuming');

const observer17 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            consumings.forEach(consuming => {
                if (entry.isIntersecting) {
                    consuming.classList.remove('td-0');
                    consuming.classList.add('showgraph');
                }
            });
        }
    });
});


const hiddenElements17 = document.querySelectorAll('.graphdect');
hiddenElements17.forEach((el) => observer17.observe(el));


const wastes = document.querySelectorAll('.waste');

const observer18 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            wastes.forEach(waste => {
                if (entry.isIntersecting) {
                    waste.classList.remove('td-0');
                    waste.classList.add('showgraph');
                }
            });
        }
    });
});


const hiddenElements18 = document.querySelectorAll('.graphdect');
hiddenElements18.forEach((el) => observer18.observe(el));


const mistakenlys = document.querySelectorAll('.mistakenly');

const observer19 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            mistakenlys.forEach(mistakenly => {
                if (entry.isIntersecting) {
                    mistakenly.classList.remove('td-0');
                    mistakenly.classList.add('showgraph');
                }
            });
        }
    });
});


const hiddenElements19 = document.querySelectorAll('.graphdect');
hiddenElements19.forEach((el) => observer19.observe(el));


const hongkongmakrs = document.querySelectorAll('.hongkongmark');

const observer20 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            hongkongmakrs.forEach(hongkongmark => {
                if (entry.isIntersecting) {
                    hongkongmark.classList.remove('td-0');
                    hongkongmark.classList.add('showhongkongmark');
                }
            });
        }
    });
});

const hiddenElements20 = document.querySelectorAll('.therewere');
hiddenElements20.forEach((el) => observer20.observe(el));


// navbar hiding animation
const navs = document.querySelectorAll('.bnav__menu');

const observer21 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            navs.forEach(nav => {
                if (entry.isIntersecting) {
                    nav.classList.add('hidenav');
                }
            });
        }
        else {
            navs.forEach(nav => {
                nav.classList.remove('hidenav')
            });

        }
    });
});

const hiddenElements21 = document.querySelectorAll('.footer');
hiddenElements21.forEach((el) => observer21.observe(el));
// navbar hiding animation end


function togglePopup1() {
    document.getElementById("popup-1").classList.toggle("active2");
}

function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active2");
}

function togglePopup3() {
    document.getElementById("popup-3").classList.toggle("active2");
}

function togglePopup4() {
    document.getElementById("popup-4").classList.toggle("active2");
}

function togglePopup5() {
    document.getElementById("popup-5").classList.toggle("active2");
}

function togglePopup6() {
    document.getElementById("popup-6").classList.toggle("active2");
}

function togglePopup7() {
    document.getElementById("popup-7").classList.toggle("active2");
}
