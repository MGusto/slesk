function sizeChoice(size) {
    storysize = size;
    updateView();
}

function protagChoice(protag) {
    storyprotag = protag;
    updateView();
    if (storyprotag == 'mann') {
        storypronoun = 'han';
        updateView();
    } else {
        storypronoun = 'hun';
        updateView();
    };
}

function verbChoice(verb) {
    storyverb = verb;
    updateView();
}

function objChoice(objective) {
    storyobj = objective;
    updateView();
}