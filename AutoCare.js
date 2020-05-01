//This script runs in the Chrome console. From a lack of knowledge, this script has to be run in 3 separate instances.
//First, things first.Select a fb profile and scroll down to how many posts you would like to react to.
//For the first part run the following
//Part 1
//prepare reacts
var Links = document.getElementsByClassName('_6a-y _3l2t  _18vj');
//mouseover events enable the react toolbar
var event1 = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
}
);
//preparing the mouseout event for the next part
var event2 = new MouseEvent('mouseout', {
    'view': window,
    'bubbles': true,
    'cancelable': true
}
);
//Applying the event
for (i = 0; i < Links.length; i++) {
    Links[i].dispatchEvent(event1);
}

//Part 2 is now consisted of moving the mouse out so there is no lag. Make sure you run these 3 parts one at a time. Running it at the same time will not give the desired result
for (i = 0; i < Links.length; i++) {
    Links[i].dispatchEvent(event2);
}
//Part 3. This is the last one. Make sure to replace the name with the person you are doing this to
//find good posts. Good posts are defined as those on someone's wall that haven't been posted by others (Birthway wishes, tagged in posts, etc.)
var posts = document.getElementsByClassName('_5pcr userContentWrapper');
var acceptPosts = [];
for (i = 0; i < posts.length; i++) {
    //Check if the person that posted is the owner of the page
    var Parent = posts[i].getElementsByClassName('fwb')[0];
    if (Parent.firstChild.title == document.getElementsByClassName('_2nlw _2nlv')[0].text)
        acceptPosts.push(posts[i]);
};

//_iuw to get the reacts
var goodLinks = [];
var LikeButtons = [];
for (i = 0; i < acceptPosts.length; i++) {
    goodLinks = acceptPosts[i].getElementsByClassName('_iuw');

    for (j = 0; j < goodLinks.length; j++)
        if (goodLinks[j].ariaPressed == 'false' && goodLinks[j].ariaLabel == 'Care')
            LikeButtons.push(goodLinks[j]);
    for (j = 0; j < LikeButtons.length; j++)
        LikeButtons[j].click();
}