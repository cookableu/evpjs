
// ------------------------------ header line slider animation ------------------------------ //

function slideLineI() {
    document.getElementById('lineII').style.left = '101px';
    document.getElementById('lineII').style.width = '162px';
    document.getElementById('lineII').style.transitionDuration = '0.3s';
}

function slideLineII() {
    document.getElementById('lineII').style.left = '262px';
    document.getElementById('lineII').style.width = '158px';
    document.getElementById('lineII').style.transitionDuration = '0.3s';
}

function slideLineIII() {
    document.getElementById('lineII').style.left = '419px';
    document.getElementById('lineII').style.width = '168px';
    document.getElementById('lineII').style.transitionDuration = '0.3s';
}

function slideLineIV() {
    document.getElementById('lineII').style.left = '586px';
    document.getElementById('lineII').style.width = '175px';
    document.getElementById('lineII').style.transitionDuration = '0.4s';
}

function slideLineV() {
    document.getElementById('lineII').style.left = '760px';
    document.getElementById('lineII').style.width = '155px';
    document.getElementById('lineII').style.transitionDuration = '0.4s';
}

function slideLineVI() {
    document.getElementById('lineII').style.left = '915px';
    document.getElementById('lineII').style.width = '119px';
    document.getElementById('lineII').style.transitionDuration = '0.4s';
}

function restoreLine() {
    document.getElementById('lineII').style.left = '0px';
    document.getElementById('lineII').style.width = '101px';
    document.getElementById('lineII').style.transitionDuration = '0.3s';
}

// ------------------------------ quote section animation ------------------------------ //

function displayQuote() {
    let quote1 = "The only way to do great work is to love what you do.";
    let quote2 = "In three words I can sum up everything I've learned about life: it goes on."
    let quote3 = "The best way to predict the future is to create it.";
    let quote4 = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    let quote5 = "The only limit to our realization of tomorrow will be our doubts of today.";
    let quote6 = "Life is what happens when you're busy making other plans.";
    let quote7 = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
    let quote8 = "The purpose of our lives is to be happy.";
    let quote9 = "The only person you are destined to become is the person you decide to be.";
    let quote10 = "Do not wait to strike till the iron is hot, but make it hot by striking.";
    let name1 = 'Steve Jobs';
    let name2 = 'Robert Frost';
    let name3 = 'Peter Drucker';
    let name4 = 'Winston Churchill';
    let name5 = 'Franklin D. Roosevelt';
    let name6 = 'Allen Saunders';
    let name7 = 'Nelson Mandela';
    let name8 = 'Dalai Lama';
    let name9 = ' Ralph Waldo Emerson';
    let name10 = 'William Butler Yeats';
    let ambiance1 = 'teal';
    let ambiance2 = 'antiquewhite';
    let ambiance3 = 'turquoise';
    let ambiance4 = 'cyan';
    let ambiance5 = 'darkgray';
    let ambiance6 = 'black';
    let ambiance7 = 'gold';
    let ambiance8 = 'steelblue';
    let ambiance9 = 'slateblue';
    let ambiance10 = 'burlywood'
    let chosen;
    let speaker;
    let ambiance;

    let numGenerator = Math.round(Math.random() * 9);
    let ambGenerator = Math.round(Math.random() * 9);

    let allQuotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];

    let allNames = [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10];

    let allAmbiance = [ambiance1, ambiance2, ambiance3, ambiance4, ambiance5, ambiance6, ambiance7, ambiance8, ambiance9, ambiance10];

    chosen = allQuotes[numGenerator];
    document.getElementById('slideQuote').innerText = chosen;

    speaker = allNames[numGenerator];
    document.getElementById('speaker').innerText = speaker;

    ambiance = allAmbiance[ambGenerator];
    document.getElementById('quoteContainer').style.backgroundColor = ambiance;

    if (ambiance == ambiance6 || ambiance == ambiance9 || ambiance == ambiance8 || ambiance == ambiance1) {
        document.getElementById('slideQuote').style.color = 'white';
        document.getElementById('speaker').style.color = 'white';
        document.getElementById('hideButton').style.border = 'none';
    } else {
        document.getElementById('slideQuote').style.color = 'black';
        document.getElementById('speaker').style.color = 'black';
        document.getElementById('hideButton').style.border = '1px solid ' + ambiance;
    }

    document.getElementById('slideQuote').style.display = 'block';
    document.getElementById('slideQuote').style.fontWeight = '400';
    document.getElementById('speaker').style.display = 'block';
    document.getElementById('speaker').style.fontWeight = '300';
    document.getElementById('hideButton').style.display = 'block';
    document.getElementById('quoteContainer').style.display = 'block';
    document.getElementById('hideButton').style.margin = 'auto';
}

function hideQuote() {
    document.getElementById('slideQuote').style.display = 'none';
    document.getElementById('speaker').style.display = 'block';
    document.getElementById('hideButton').style.display = 'none';
    document.getElementById('quoteContainer').style.display = 'none';
}

// ------------------------------ optionColumns animation ------------------------------ //

function switchContentsI() {
    document.getElementsByClassName('optionColumns')[0].style.position = 'absolute';
    document.getElementsByClassName('optionColumns')[0].style.top = '802px';
    document.getElementsByClassName('optionColumns')[0].style.backgroundColor = 'dodgerblue';
    document.getElementsByClassName('optionColumns')[0].style.boxShadow = '0px 12px 22px #0000004f';
    document.getElementsByClassName('optionColumns')[0].style.width = '100px';
    document.getElementsByClassName('optionColumns')[0].style.borderTopRightRadius = '6px';
    document.getElementsByClassName('optionColumns')[0].style.borderBottomRightRadius = '6px';
    document.getElementsByClassName('optionColumns')[1].style.marginLeft = '183px';
    document.getElementsByClassName('optionColumns')[1].style.padding = '30px 40px 41px 40px';
    document.getElementById('cargoPLANE').style.fill = '#ffffff';
    document.getElementById('cargoTRUCK').style.marginLeft = '0.1px';
    document.getElementById('cargoSHIP').style.marginLeft = '0.1px';
    document.getElementById('freightI').style.color = '#ffffff';
    document.getElementById('freightII').style.marginLeft = '0.1px';
    document.getElementById('freightIII').style.marginLeft = '0.02px';
    document.getElementById('freightIV').style.marginLeft = '0.05px';
    document.getElementById('FS-I').style.color = '#ffffff';
    document.getElementById('FS-II').style.marginLeft = '0.1px';
    document.getElementById('FS-III').style.marginLeft = '0.05px';
    document.getElementById('FS-IV').style.marginLeft = '0.1px';
    document.getElementById('right-arrow1').style.display = 'inline';
    document.getElementById('arrow-svg1').style.fill = '#ffffff';
    document.getElementsByClassName('dividers2-0')[0].style.display = 'none';
}

function originalContentI() {
    document.getElementsByClassName('optionColumns')[0].style.position = '';
    document.getElementsByClassName('optionColumns')[0].style.top = '';
    document.getElementsByClassName('optionColumns')[0].style.backgroundColor = '';
    document.getElementsByClassName('optionColumns')[0].style.boxShadow = '';
    document.getElementsByClassName('optionColumns')[0].style.width = '';
    document.getElementsByClassName('optionColumns')[0].style.borderTopRightRadius = '';
    document.getElementsByClassName('optionColumns')[0].style.borderBottomRightRadius = '';
    document.getElementsByClassName('optionColumns')[1].style.marginLeft = '';
    document.getElementsByClassName('optionColumns')[1].style.padding = '';
    document.getElementById('cargoPLANE').style.fill = '';
    document.getElementById('cargoTRUCK').style.marginLeft = '';
    document.getElementById('cargoSHIP').style.marginLeft = '';
    document.getElementById('freightI').style.color = '';
    document.getElementById('freightII').style.marginLeft = '';
    document.getElementById('freightIII').style.marginLeft = '';
    document.getElementById('freightIV').style.marginLeft = '';
    document.getElementById('FS-I').style.color = '';
    document.getElementById('FS-II').style.marginLeft = '';
    document.getElementById('FS-III').style.marginLeft = '';
    document.getElementById('FS-IV').style.marginLeft = '';
    document.getElementById('right-arrow1').style.display = 'none';
    document.getElementById('arrow-svg1').style.fill = '';
    document.getElementsByClassName('dividers2-0')[0].style.display = '';
}

function switchContentsII() {
    document.getElementsByClassName('optionColumns')[1].style.position = 'absolute';
    document.getElementsByClassName('optionColumns')[1].style.top = '804px';
    document.getElementsByClassName('optionColumns')[1].style.backgroundColor = 'dodgerblue';
    document.getElementsByClassName('optionColumns')[1].style.boxShadow = '0px 12px 22px #0000004f';
    document.getElementsByClassName('optionColumns')[1].style.borderRadius = '6px';
    document.getElementsByClassName('optionColumns')[1].style.width = '100px';
    document.getElementsByClassName('optionColumns')[1].style.marginLeft = '183px';
    document.getElementsByClassName('optionColumns')[2].style.marginLeft = '183px';
    document.getElementById('cargoTRUCK').style.fill = '#ffffff';
    document.getElementById('cargoSHIP').style.marginLeft = '0.8px';
    document.getElementById('forkLIFT').style.marginLeft = '0.8px';
    document.getElementById('freightI').style.marginLeft = '0.05px';
    document.getElementById('freightII').style.color = '#ffffff';
    document.getElementById('freightIII').style.marginLeft = '0.8px';
    document.getElementById('freightIV').style.marginLeft = '0.85px';
    document.getElementById('freightV').style.marginLeft = '-0.1px';
    document.getElementById('FS-II').style.color = '#ffffff';
    document.getElementById('FS-III').style.marginLeft = '0.8px';
    document.getElementById('FS-IV').style.marginLeft = '0.85px';
    document.getElementById('FS-V').style.marginLeft = '-0.1px';
    document.getElementById('right-arrow2').style.display = 'inline';
    document.getElementById('arrow-svg2').style.fill = '#ffffff';
    document.getElementsByClassName('dividers2-0')[0].style.display = 'none';
    document.getElementsByClassName('dividers2-0')[1].style.display = 'none';
    document.getElementsByClassName('dividers2-0')[3].style.marginLeft = '0.5px';
}

function originalContentII() {
    document.getElementsByClassName('optionColumns')[1].style.position = '';
    document.getElementsByClassName('optionColumns')[1].style.top = '';
    document.getElementsByClassName('optionColumns')[1].style.backgroundColor = '';
    document.getElementsByClassName('optionColumns')[1].style.boxShadow = '';
    document.getElementsByClassName('optionColumns')[1].style.borderRadius = '';
    document.getElementsByClassName('optionColumns')[1].style.width = '';
    document.getElementsByClassName('optionColumns')[1].style.marginLeft = '';
    document.getElementsByClassName('optionColumns')[2].style.marginLeft = '';
    document.getElementById('cargoTRUCK').style.fill = '';
    document.getElementById('cargoSHIP').style.marginLeft = '';
    document.getElementById('forkLIFT').style.marginLeft = '';
    document.getElementById('freightI').style.marginLeft = '';
    document.getElementById('freightII').style.color = '';
    document.getElementById('freightIII').style.marginLeft = '';
    document.getElementById('freightIV').style.marginLeft = '';
    document.getElementById('freightV').style.marginLeft = '';
    document.getElementById('FS-II').style.color = '';
    document.getElementById('FS-III').style.marginLeft = '';
    document.getElementById('FS-IV').style.marginLeft = '';
    document.getElementById('FS-V').style.marginLeft = '';
    document.getElementById('right-arrow2').style.display = 'none';
    document.getElementById('arrow-svg2').style.fill = '';
    document.getElementsByClassName('dividers2-0')[0].style.display = '';
    document.getElementsByClassName('dividers2-0')[1].style.display = '';
    document.getElementsByClassName('dividers2-0')[3].style.marginLeft = '';
}

function switchContentsIII() {
    document.getElementsByClassName('optionColumns')[2].style.position = 'absolute';
    document.getElementsByClassName('optionColumns')[2].style.top = '806px';
    document.getElementsByClassName('optionColumns')[2].style.backgroundColor = 'dodgerblue';
    document.getElementsByClassName('optionColumns')[2].style.boxShadow = '0px 12px 22px #0000004f';
    document.getElementsByClassName('optionColumns')[2].style.borderRadius = '6px';
    document.getElementsByClassName('optionColumns')[2].style.width = '100px';
    document.getElementsByClassName('optionColumns')[2].style.marginLeft = '366px';
    document.getElementsByClassName('optionColumns')[3].style.marginLeft = '183px';
    document.getElementById('cargoSHIP').style.fill = '#ffffff';
    document.getElementById('freightI').style.marginRight = '0.09px';
    document.getElementById('freightII').style.marginRight = '0.25px';
    document.getElementById('freightIII').style.color = '#ffffff';
    document.getElementById('freightIV').style.marginLeft = '0.22px';
    document.getElementById('FS-I').style.marginRight = '0.1px';
    document.getElementById('FS-II').style.marginRight = '0.3px';
    document.getElementById('FS-III').style.color = '#ffffff';
    document.getElementById('FS-IV').style.marginLeft = '0.22px';
    document.getElementById('right-arrow3').style.display = 'inline';
    document.getElementById('arrow-svg3').style.fill = '#ffffff';
    document.getElementsByClassName('dividers2-0')[2].style.display = 'none';
    document.getElementsByClassName('dividers2-0')[1].style.display = 'none';
}

function originalContentIII() {
    document.getElementsByClassName('optionColumns')[2].style.position = '';
    document.getElementsByClassName('optionColumns')[2].style.top = '';
    document.getElementsByClassName('optionColumns')[2].style.backgroundColor = '';
    document.getElementsByClassName('optionColumns')[2].style.boxShadow = '';
    document.getElementsByClassName('optionColumns')[2].style.borderRadius = '';
    document.getElementsByClassName('optionColumns')[2].style.width = '';
    document.getElementsByClassName('optionColumns')[2].style.marginLeft = '';
    document.getElementsByClassName('optionColumns')[3].style.marginLeft = '';
    document.getElementById('cargoSHIP').style.fill = '';
    document.getElementById('freightI').style.marginRight = '';
    document.getElementById('freightII').style.marginRight = '';
    document.getElementById('freightIII').style.color = '';
    document.getElementById('freightIV').style.marginLeft = '';
    document.getElementById('FS-I').style.marginRight = '';
    document.getElementById('FS-II').style.marginRight = '';
    document.getElementById('FS-III').style.color = '';
    document.getElementById('FS-IV').style.marginLeft = '';
    document.getElementById('right-arrow3').style.display = 'none';
    document.getElementById('arrow-svg3').style.fill = '';
    document.getElementsByClassName('dividers2-0')[1].style.display = '';
    document.getElementsByClassName('dividers2-0')[2].style.display = '';
}

function switchContentsIV() {
    document.getElementsByClassName('optionColumns')[2].style.padding = '30px 40.4px 40px 40px';
    document.getElementsByClassName('optionColumns')[2].style.width = '183px';
    document.getElementsByClassName('optionColumns')[3].style.position = 'absolute';
    document.getElementsByClassName('optionColumns')[3].style.top = '805px';
    document.getElementsByClassName('optionColumns')[3].style.backgroundColor = 'dodgerblue';
    document.getElementsByClassName('optionColumns')[3].style.boxShadow = '0px 12px 22px #0000004f';
    document.getElementsByClassName('optionColumns')[3].style.borderRadius = '6px';
    document.getElementsByClassName('optionColumns')[3].style.width = '100px';
    document.getElementsByClassName('optionColumns')[3].style.marginLeft = '549px';
    document.getElementsByClassName('optionColumns')[4].style.marginLeft = '183px';
    document.getElementById('forkLIFT').style.fill = '#ffffff';
    document.getElementById('freightII').style.marginLeft = '0.06px';
    document.getElementById('freightIV').style.color = '#ffffff';
    document.getElementById('freightV').style.marginRight = '0.06px';
    document.getElementById('FS-IV').style.color = '#ffffff';
    document.getElementById('FS-V').style.marginRight = '0.08px';
    document.getElementById('right-arrow4').style.display = 'inline';
    document.getElementById('arrow-svg4').style.fill = '#ffffff';
    document.getElementsByClassName('dividers2-0')[2].style.display = 'none';
    document.getElementsByClassName('dividers2-0')[3].style.display = 'none';
}

function originalContentIV() {
    document.getElementsByClassName('optionColumns')[2].style.padding = '';
    document.getElementsByClassName('optionColumns')[3].style.position = '';
    document.getElementsByClassName('optionColumns')[3].style.top = '';
    document.getElementsByClassName('optionColumns')[3].style.backgroundColor = '';
    document.getElementsByClassName('optionColumns')[3].style.boxShadow = '';
    document.getElementsByClassName('optionColumns')[3].style.borderRadius = '';
    document.getElementsByClassName('optionColumns')[3].style.width = '';
    document.getElementsByClassName('optionColumns')[3].style.marginLeft = '';
    document.getElementsByClassName('optionColumns')[4].style.marginLeft = '';
    document.getElementById('forkLIFT').style.fill = '';
    document.getElementById('freightII').style.marginLeft = '';
    document.getElementById('freightIV').style.color = '';
    document.getElementById('freightV').style.marginRight = '';
    document.getElementById('FS-IV').style.color = '';
    document.getElementById('FS-V').style.marginRight = '';
    document.getElementById('right-arrow4').style.display = 'none';
    document.getElementById('arrow-svg4').style.fill = '';
    document.getElementsByClassName('dividers2-0')[2].style.display = '';
    document.getElementsByClassName('dividers2-0')[3].style.display = '';
}

function switchContentsV() {
    document.getElementsByClassName('optionColumns')[3].style.width = '183.5px';
    document.getElementsByClassName('optionColumns')[3].style.marginRight = '183px';
    document.getElementsByClassName('optionColumns')[4].style.position = 'absolute';
    document.getElementsByClassName('optionColumns')[4].style.top = '804px';
    document.getElementsByClassName('optionColumns')[4].style.backgroundColor = 'dodgerblue';
    document.getElementsByClassName('optionColumns')[4].style.boxShadow = '0px 12px 22px #0000004f';
    document.getElementsByClassName('optionColumns')[4].style.borderTopLeftRadius = '6px';
    document.getElementsByClassName('optionColumns')[4].style.borderBottomLeftRadius = '6px';
    document.getElementsByClassName('optionColumns')[4].style.width = '100px';
    document.getElementsByClassName('optionColumns')[4].style.marginLeft = '735px';
    document.getElementById('cargoBOXES').style.fill = '#ffffff';
    document.getElementById('freightII').style.marginLeft = '0.18px';
    document.getElementById('freightIII').style.marginLeft = '0.2px';
    document.getElementById('freightIV').style.marginLeft = '0.4px';
    document.getElementById('freightV').style.color = '#ffffff';
    document.getElementById('FS-II').style.marginLeft = '0.18px';
    document.getElementById('FS-III').style.marginLeft = '0.26px';
    document.getElementById('FS-IV').style.marginLeft = '0.14px';
    document.getElementById('FS-V').style.color = '#ffffff';
    document.getElementById('right-arrow5').style.display = 'inline';
    document.getElementById('arrow-svg5').style.fill = '#ffffff';
    document.getElementsByClassName('dividers2-0')[3].style.display = 'none';
}

function originalContentV() {
    document.getElementsByClassName('optionColumns')[3].style.width = '';
    document.getElementsByClassName('optionColumns')[3].style.marginRight = '';
    document.getElementsByClassName('optionColumns')[4].style.position = '';
    document.getElementsByClassName('optionColumns')[4].style.top = '';
    document.getElementsByClassName('optionColumns')[4].style.backgroundColor = '';
    document.getElementsByClassName('optionColumns')[4].style.boxShadow = '';
    document.getElementsByClassName('optionColumns')[4].style.borderTopLeftRadius = '';
    document.getElementsByClassName('optionColumns')[4].style.borderBottomLeftRadius = '';
    document.getElementsByClassName('optionColumns')[4].style.width = '';
    document.getElementsByClassName('optionColumns')[4].style.marginLeft = '';
    document.getElementById('cargoBOXES').style.fill = '';
    document.getElementById('freightII').style.marginLeft = '';
    document.getElementById('freightIII').style.marginLeft = '';
    document.getElementById('freightV').style.color = '';
    document.getElementById('FS-II').style.marginLeft = '';
    document.getElementById('FS-III').style.marginLeft = '';
    document.getElementById('FS-IV').style.marginLeft = '';
    document.getElementById('FS-V').style.color = '';
    document.getElementById('right-arrow5').style.display = 'none';
    document.getElementById('arrow-svg5').style.fill = '';
    document.getElementsByClassName('dividers2-0')[3].style.display = '';
}

// ------------------------------ fill animation ------------------------------ //

function fillAnimationI() {
    document.getElementById('IDK').style.color = 'dodgerblue';
    document.getElementById('IDK').style.transitionDuration = '2s';
    document.getElementsByClassName('round-svgs')[0].style.fill = 'dodgerblue';
    document.getElementsByClassName('round-svgs')[0].style.transitionDuration = '2s';
    document.getElementsByClassName('rounds')[0].style.cursor = 'pointer';
    document.getElementsByClassName('rounds')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('rounds')[0].style.boxShadow = '0px 12px 22px #0000004f';

    document.getElementById('EnL').style.color = 'silver';
    document.getElementById('EnL').style.transitionDuration = '1s';
    document.getElementsByClassName('round-svgs')[1].style.fill = 'silver';
    document.getElementsByClassName('round-svgs')[1].style.transitionDuration = '1s';
    document.getElementsByClassName('rounds')[1].style.backgroundColor = 'gainsboro';
    document.getElementsByClassName('rounds')[1].style.boxShadow = '0px 0px 0px 0px';

    document.getElementById('blue-slider').style.width = '229px';
    document.getElementById('blue-slider').style.right = '125.9px';
    document.getElementById('blue-slider').style.transitionDuration = '0.3s';
}

function withdrawFillI() {
    document.getElementById('IDK').style.color = 'silver';
    document.getElementById('IDK').style.transitionDuration = '1s';
    document.getElementsByClassName('round-svgs')[0].style.fill = 'silver';
    document.getElementsByClassName('round-svgs')[0].style.transitionDuration = '1s';
    document.getElementsByClassName('rounds')[0].style.backgroundColor = 'gainsboro';
    document.getElementsByClassName('rounds')[0].style.boxShadow = '';

    document.getElementById('EnL').style.color = 'dodgerblue';
    document.getElementById('EnL').style.transitionDuration = '2s';
    document.getElementsByClassName('round-svgs')[1].style.fill = '';
    document.getElementsByClassName('round-svgs')[1].style.transitionDuration = '2s';
    document.getElementsByClassName('rounds')[1].style.backgroundColor = 'white';
    document.getElementsByClassName('rounds')[1].style.boxShadow = '0px 12px 22px #0000004f';

    document.getElementById('blue-slider').style.width = '0px';
    document.getElementById('blue-slider').style.right = '11.5px';
    document.getElementById('blue-slider').style.transitionDuration = '0.3s';
}

function fillAnimationII() {
    document.getElementById('CP').style.color = 'dodgerblue';
    document.getElementById('CP').style.transitionDuration = '2s';
    document.getElementsByClassName('round-svgs')[2].style.fill = 'dodgerblue';
    document.getElementsByClassName('round-svgs')[2].style.transitionDuration = '2s';
    document.getElementsByClassName('rounds')[2].style.cursor = 'pointer';
    document.getElementsByClassName('rounds')[2].style.backgroundColor = 'white';
    document.getElementsByClassName('rounds')[2].style.boxShadow = '0px 12px 22px #0000004f';

    document.getElementById('EnL').style.color = 'silver';
    document.getElementById('EnL').style.transitionDuration = '1s';
    document.getElementsByClassName('round-svgs')[1].style.fill = 'silver';
    document.getElementsByClassName('round-svgs')[1].style.transitionDuration = '1s';
    document.getElementsByClassName('rounds')[1].style.backgroundColor = 'gainsboro';
    document.getElementsByClassName('rounds')[1].style.boxShadow = '0px 0px 0px 0px';

    document.getElementById('blue-sliderII').style.width = '229px';
    document.getElementById('blue-sliderII').style.left = '125.9px';
    document.getElementById('blue-sliderII').style.transitionDuration = '0.3s';
}

function withdrawFillII() {
    document.getElementById('CP').style.color = 'silver';
    document.getElementById('CP').style.transitionDuration = '1s';
    document.getElementsByClassName('round-svgs')[2].style.fill = 'silver';
    document.getElementsByClassName('round-svgs')[2].style.transitionDuration = '1s';
    document.getElementsByClassName('rounds')[2].style.backgroundColor = 'gainsboro';
    document.getElementsByClassName('rounds')[2].style.boxShadow = '';

    document.getElementById('EnL').style.color = 'dodgerblue';
    document.getElementById('EnL').style.transitionDuration = '2s';
    document.getElementsByClassName('round-svgs')[1].style.fill = '';
    document.getElementsByClassName('round-svgs')[1].style.transitionDuration = '2s';
    document.getElementsByClassName('rounds')[1].style.backgroundColor = 'white';
    document.getElementsByClassName('rounds')[1].style.boxShadow = '0px 12px 22px #0000004f';

    document.getElementById('blue-sliderII').style.width = '0px';
    document.getElementById('blue-sliderII').style.left = '11.5px';
    document.getElementById('blue-sliderII').style.transitionDuration = '0.3s';
}