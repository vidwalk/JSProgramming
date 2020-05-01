//Part 1
// save buttons to like
//prepare reacts
var Links = document.getElementsByClassName('_6a-y _3l2t  _18vj');
var event1 = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
}
);
var event2 = new MouseEvent('mouseout', {
    'view': window,
    'bubbles': true,
    'cancelable': true
}
);
for (i = 0; i < Links.length; i++) {
    Links[i].dispatchEvent(event1);
}
//Part 2
for (i = 0; i < Links.length; i++) {
    Links[i].dispatchEvent(event2);
}
//Part 3
//find good posts
var posts = document.getElementsByClassName('_5pcr userContentWrapper');
var acceptPosts = [];
for (i = 0; i < posts.length; i++) {
    var Parent = posts[i].getElementsByClassName('fwb')[0];
    if (Parent.firstChild.title == 'Stefan Harabagiu')
        acceptPosts.push(posts[i]);
};

//_iuw for care
// The longer one is for like
//var Links = document.getElementsByClassName('_6a-y _3l2t  _18vj');
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

