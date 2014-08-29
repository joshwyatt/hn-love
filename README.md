hn-love
=======

hn-love will open that HN article you wanted to vote on when you get to a location that is not HR.

##Installation

    npm install -g hn-love


##Usage

    hn-love "Name of the Article You Want to Vote On"

When you run `hn-love`, it will quietly run in the terminal. When you are connected to the internet somewhere that is not HR, Chrome will open Google with a search query for the so you're one click away from upvoting the article you want, with a populated document.refferer value, so HN doesn't think you're a robot.

When hn-love opens the browser for you, it will add your current location to the list of places you are not allowed to vote from. As long as you keep hn-love running, it will reopen the browser, one click away from your article, every time you connect to a location you haven't voted from already. Vote to your heart's content!

Try connecting your computer to your mobile hotspot to test it out.