function filteringPosts(title) {
    var posts = document.getElementsByClassName('_5pcr userContentWrapper')
    var acceptPosts = []
    for (i = 0; i < posts.length; i++) {
        var Parent = posts[i].getElementsByClassName('fwb')[0];
        if (Parent.firstChild.title == title)
            acceptPosts.push(posts[i]);
    }
    return acceptPosts
}
function findLikablePosts(acceptPosts) {
    //_iuw for care
    // The longer one is for like
    //var Links = document.getElementsByClassName('_6a-y _3l2t  _18vj');
    var goodLinks = [];
    var LikeButtons = [];
    for (i = 0; i < acceptPosts.length; i++) {
        goodLinks = acceptPosts[i].getElementsByClassName('_iuw');
        // for performance this for loop can be replaced with the desired positions first in array is love, second in array is care, etc.
        for (j = 0; j < goodLinks.length; j++)
            if (goodLinks[j].ariaPressed == 'false' && goodLinks[j].ariaLabel == 'Care')
                LikeButtons.push(goodLinks[j]);
    }
    return LikeButtons
}
function likePosts(numPosts, LikeButtons) {
    var event = new MouseEvent('mouseout', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    for (j = 0; j < Math.min(numPosts, LikeButtons.length); j++)
        LikeButtons[j].click();
    for (i = 0; i < Links.length; i++) {
        Links[i].dispatchEvent(event);
    }
}
function prepare(acceptPosts) {
    var Links = acceptPosts.getElementsByClassName('_6a-y _3l2t  _18vj');
    var event = new MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    for (i = 0; i < Links.length; i++)
        Links[i].dispatchEvent(event);
};
acceptedPosts = filteringPosts('title here')
prepare(acceptedPosts);
likePosts(5, findLikablePosts(acceptedPosts));
