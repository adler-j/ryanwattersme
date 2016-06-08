## Web Development

The following websites demonstrate my skills in front-end development (HTML5, CSS3, JavaScript), performance best practices, 508 compliance and accessibility, user experience, author experience, responsive and mobile-first design, content typing, content management strategy, social media integration, metadata strategy, content standardization, and content-first publishing.

Effectively managing large amounts of digital content requires an understanding of the way computers work. Every content management system has its idiosyncrasies, but concepts borrowed from object-oriented programming (eg, inheritance, object properties and prototypes), structured data (eg, XML or HTML), and dynamically generated content (eg, templating filters, DBMS, CMS relationships) lend themselves exceptionally well to repurposing content, publishing on the web, and maintaining the integrity of intellectual property.

[Ryanwatters.me](http://www.ryanwatters.me) is an exercise in building a website with an empty CMS. [Ryansportfol.io](https://ryansportfol.io) is the home of my future portfolio site. As of November 2015, the content for both sites is just dummy text. This is why they are *not* showcases for web design&mdash;content should dictate form. That said, articles are currently being drafted for [ryansportfol.io](https://ryansportfol.io). First publishing is scheduled for December 2015. Content will focus on web content strategy, front-end web development, asset management, open standards and metadata, and STM publishing.

### [ryanwatters.me](http://www.ryanwatters.me)

#### Content Management Strategy

* Content Management System: [Webhook](http://www.webhook.com)
* Content typing and modeling (including complex relationships in the CMS)
    - Site IA allowed for the CMS to index article tagging and other metadata
    - All content types were developed from scratch and contain 1-to-1 and 1-to-many relationships in a simple author-centric writing environment
    ![First screenshot of content types in the Webhook CMS](/assets/images/samples/webhookcms-1.png)
    ![Secont screenshot of content types in the Webhook CMS](/assets/images/samples/webhookcms-2.png)
* Social media and sharing:
    - [Open Graph Protocol](http://ogp.me/) (Facebook)
    - [Twitter Cards](https://dev.twitter.com/cards/)
    - [Pinterest](https://developers.pinterest.com)
    - [LinkedIn](https://developer.linkedin.com)
    - [Google+](https://developers.google.com/+/?hl=en)
* Content-first publishing:
    - Third-party webhook services ([Zapier](https://zapier.com/)) for Twitter and Facebook integration
    - Relatively defined, article-specific social media metadata (for sharing)
    - Content written in [markdown](https://daringfireball.net/projects/markdown/) files (ie, the format used by Ghost CMS, O'Reilly Atlas, and many others) for conversion to multiple file formats using [Pandoc](http://pandoc.org/)
    - `Variables.scss`, including SASS functions, maps, and mixins for better long-term management and single, declarative source for design customizations
* Search engine optimization:
    - [Schema.org](http://schema.org/) microdata ("rich snippets") for structured content and Google's Knowledge Graph
    - [PageSpeed scores > 90/100](https://developers.google.com/speed/pagespeed/insights/?url=ryanwatters.me)
    - XML Sitemap
    - RSS Feed
    - Responsive, mobile-first design
    - Simple, logical navigation structure (never break the back button)
* Accessibility
    - Aria roles
    - Pagination (ie, in place of infinite scroll) for users who have JavaScript disabled
    - Alt text for images (all optimized)
* Mobile-first Design
    - Site is fully responsive and tested on both Android and iOS
* Search: [Swiftype](https://swiftype.com/), including Swiftype-specific meta tags in the `<head>` element for faceted search
* [Google Analytics](https://www.google.com/analytics/) and [Webmaster Tools](https://www.google.com/webmasters/tools/)

#### Technical Specs

* [Google Pagespeed Scores: 92-97/100](https://developers.google.com/speed/pagespeed/insights/?url=ryanwatters.me)
* Templating Engine: [Swig.js](http://paularmstrong.github.io/swig/) (a javascript implementation of the Twig [PHP] templating engine)
* Performance improvements: critical render path (embedded styles at the layout level), minification and uglification of static assets, image optimizations
* Authentication: Firebase Simple Auth
* Cloud Infrastructure: [Google App Engine](https://appengine.google.com)
* Image resizing: Google App Engine
* Persistence/database: [Firebase](https://www.firebase.com/)
* Build system: Grunt (including [node-sass for CSS preprocessing](https://github.com/sass/node-sass),  )
* Cross-browser testing: [Browserstack](https://www.browserstack.com/)
* DR/backup: Nightly backups for the last 7 days
* Commenting: [Disqus](https://disqus.com/)
* Total monthly costs: $9

### [ryansportfol.io](https://ryansportfolio)

#### Content Management Strategy

* Content management system (site generation): [Jekyll](https://jekyllrb.com) running on GitHub application servers
* Content management system (GUI): [Prose.io](http://www.prose.io)
* Content typing and modeling (including complex relationships in the CMS)
    - All content types were developed from scratch using the built-in `collections` feature of the static-site generator
    - Content type metadata is included in a `config.yml` for configuration of the [Prose.io GUI](http://www.prose.io)
* Social media and sharing:
    - [Open Graph Protocol](http://ogp.me/)(Facebook)
* Content-first publishing:
    - Content written in [markdown](https://daringfireball.net/projects/markdown/) files (ie, the format used by Ghost CMS, O'Reilly Atlas, and many others) for conversion to multiple file formats using [Pandoc](http://pandoc.org/)
    - `Variables.scss`, including SASS functions, maps, and mixins for better long-term management and single, declarative source for design customizations
* Search engine optimization:
    - [Schema.org](http://schema.org/) microdata ("rich snippets") for structured content and Google's Knowledge Graph
    - [PageSpeed scores > 97](https://developers.google.com/speed/pagespeed/insights/?url=ryansportfol.io)
    - Secure delivery (SSL)
    - XML Sitemap
    - RSS Feed
    - Responsive, mobile-first design
    - Simple, logical navigation structure
* Accessibility
    - Aria roles (including `aria-hidden` and `role` attributes for this professional samples page)
    - Alt text for images (all optimized)
* Search: [Tipue](http://www.tipue.com/search/), a jQuery, client-side, JSON-based full-text search engine; the release version of the site will include [lunr.js] to remove the jQuery dependency and improve loading time
* [Google Analytics](https://www.google.com/analytics/) and [Webmaster Tools](https://www.google.com/webmasters/tools/)

#### Technical Specs

* [Google Pagespeed Scores: 97+/100](https://developers.google.com/speed/pagespeed/insights/?url=ryanwatters.me)
* Templating Engine: [Liquid 3](http://liquidmarkup.org/)
* Performance improvements: critical render path (embedded styles at the layout level), minification and uglification of static assets (JavaScript and CSS), image optimizations and caching
* Caching: [CloudFlare](https://www.cloudflare.com)
* Infrastructure: [GitHub](https://pages.github.com/)
* Persistence/database: [GitHub repository](https://www.github.com/rdwatters) and cloud storage (Google Drive)
* Build tools:
    - Grunt (including [node-sass for CSS preprocessing](https://github.com/sass/node-sass), [Babel](https://babeljs.io/) for ES6 transpilation, and uglification/minification for reduced network requests)
    - AppleScript for single command development environment
    - Bash scripting for shortened aliases and faster startup from the command line for local development
* Cross-browser testing: [Browserstack](https://www.browserstack.com/)
* DR/backup: Nightly backups for the last 7 days
* Commenting: [Disqus](https://disqus.com/)(set as article-level metadata and as a global/site variable)
* Total monthly costs: $0
