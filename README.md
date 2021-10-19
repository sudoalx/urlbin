# URLBIN

[https://url-bin.herokuapp.com/about](https://url-bin.herokuapp.com/about)

## About

- Type what you want others to see
- Share the generated url instantaneously
- Shared bins will never stop working and ~cannot be taken down~ function as
  long as this site is trusted and extant
- No dependencies
- No signups
- No tracking
- No hosting
- No cost
- No commitment


## How it works

As hinted by its name, URLBIN works by storing the entire contents of a web
page in the URL.

Thus, as long as the URL exists, so does the page it points to. The rest of the
URLBIN program is responsible for translating between bin text and an "encoded" URL.

- The `/new` page encodes user-created bin texts as a link that can be
  shared

When the shared bin is visited, the data is encoded in the URL using base 64
encoding via JavaScript's `atob` and `btoa` functions in conjunction with its
`encodeURIComponent` and `decodeURIComponent` functions. The encoded data is
stored in the
[hash](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash#Examples)
portion of the URL.

In the `/new` page, data is similarly encoded, except that the text is stored in one object that is converted to a
JSON string before being base 64 encoded.

The obvious downside of URLBIN is that the links get very long very quickly.
Luckily, some URL shorteners are able to accommodate fairly long URLs (shoutout
to [TinyUrl](http://tinyurl.com)). In a strange way, this effectively means the
link shortener is acting as the web host since it is responsible for storing
the record of the bin's text.


## Disclaimer

Storing so much data in URLs are definitely not how things on the web were meant to be
done, so don't be surprised if trying to use URLBIN causes unexpected
issues. For example, sharing these links may cause chat programs, email
clients, and unsuspecting individuals to get confused, raise exceptions, or
complain. Likewise, copy-pasting these links may take a long time, if it works
at all.

## Credits

Based on a project by [@jstrieb](https://github.com/jstrieb), called [URL Pages](https://jstrieb.github.io/urlpages) ([Source code](https://github.com/jstrieb/urlpages)). The core components of this project: api, b64 and editor are based on his work.

Even though I didn't copy any of their code the interface is highly inspired from [Hastebin](https://hastebin.com)