/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $('#tweetsContainer').prepend(createTweetElement(tweet));
    }
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`
    <article class="tweet">
    <header>
      <div class="user">
        <img
          src="${safe(tweet.user.avatars)}"
          alt="">
        <p>${safe(tweet.user.name)}</p>
      </div>
      <h4>${safe(tweet.user.handle)}</h4>
    </header>
    <p>${safe(tweet.content.text)}</p>
    <footer>
    <span>${safe(timeSincePostedTweet(data))}</span>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
    `);
    return $tweet;
  };

renderTweets(data);
