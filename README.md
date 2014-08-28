hn-love
=======

hn-love will open that HN article you wanted to vote on when you get to a location that is not HR.

##Installation

    npm install -g hn-love


##Usage

    hn-love [url-of-the-comments-page-for-the-article-you're-following]

When you run `hn-love`, it will quietly run in the terminal. When you are connected to the internet somewhere that is not HR, Chrome will open HN so you can upvote the article you want.

If you pass in the optional argument, which should be a url of the comments page for the article you would love to upvote, Chrome will open that page for you instead of the HN main page.

When hn-love opens HN for you, it will add your current location to the list of places you are not allowed to vote from. As long as you keep hn-love running, it will reopen HN or the url you passed in, every time you connect to a location you haven't voted from already. Vote to your heart's content!

Try using connecting your computer to your mobile hotspot to test it out.