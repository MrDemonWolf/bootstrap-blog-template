## How to config the theme

### Config Stylings
Open "assets/sass/abstracts/_variables.scss" fle.

What obtains you may want to change
##### Footer Text
```scss
$footer-color: #ffffff;
$footer-color_link: #f2f2f2;
$footer-background: #5b599c;
$footer-link_padding: 8px;
```
##### Brand Color
```scss
$brand-color: #323149;
$brand-color-alt: #c9c8e6;
$brand-color-alt-2: #5b599c;
```

##### Navbar
```scss
$nav-bgDefault: transparent;
$nav-bgHighlight: transparent;
$nav-colDefault: #ffffff;
$nav-colHighlight: #ffffff;
$nav-dropdown: true;
$nav-bgScroll: #ffffff;
$nav-bgScroll-Hightlight: #ffffff;
$nav-colScroll: #323149;
$nav-colScroll-Hightlight: #262555;
```

##### Illustration
```scss
$illustration-bg: #015274;
```

##### Buttons
```scss
$button_background_effect_font: #ffffff;
$button_background_effect: #00709f;
```

##### Label tags
```scss
$label-tag-text: #015274;
$label-tag-text_hover: #0093ce;
```

### Site Config
All site settings are in "/_data/settings.yaml"
#### Menu

Format for the menu goes as so

```yaml
menu:
  - {title: Title of the link, url: URL of the page or outside link (If the link is in the site then put /path and or /post/year/title_of_post)}
```

If you have any issues you can look at the Jekyll Documentation

##### Default
```yaml
menu:
- {title: Home, url: '/'}
- {title: Categories, url: '/categories'}
- {title: Tags, url: '/tags'}
- {title: Contact, url: '/contact'}
```

#### Disqus Comments (If your going to use them)

1. Make sure you have a account on Disqus if you don't sign up [here](https://disqus.com/)
2. Click get started and pick "_I want to install disqus on my site_"
3. Fill in the info it asks for.
4. Make sure you copy the __unique disqus URL__ and save it for later.

In Disqus section in the settings.ymml paste the __unique disqus URL__

####  About

Fill in your basic details

```yaml
author: John Doe
about:
  text: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition
  # Limit of two links
  other-links: true`
  links:
    - {url: 'https://www.example.com/', title: Your site}
    - {url: 'http://www.example.com/', title: Your site}
```

You masy ask your self what is the other links __true__ for. It's to enable the site links next to social icons.  If you want to link your main site or any other websites you can but it is __LIMITED__ to two sites only.

####  SEO

```yaml
seo:
  twitter-creator: '@example'
  twitter-site: '@example'
  type: 'website'
  google-analytics: UA-xxxx-1
```

As its under MIT you can use this template to make other peoples blogs.  So would want to put __twitter-creator__ to your twitter but if you using it for your self you can put __@mrdemonwolf__.

Put the websites twitter under __twitter-site__

If you would like to use google analytics put the ID it gives you in the __google-analytics__.  If don't know what google analytics is vist [here](https://www.google.com/analytics/) create account and follow the steps.  Once your done you should be able to get a ID to add to this part.  Need help with google analytics check [this](https://moz.com/blog/absolute-beginners-guide-to-google-analytics) out

#### Social icons and URLs

Here is where you can put your social media links.
What is currently supported by this template is __Twitter__ , __Twitch__ , __Spotify__ , __Github__ , __YouTube__ , __Linkedin__ , __Google Plus__

Example
```yaml
social:
- {name: , icon: 'fa-twitter', color: 'twitter-color', url: 'https://www.twitter.com'}
```

#### Modified Date

This date is used for the privacy statement & terms-of-

Example of the date

```yaml
modified-date: September 25, 2017
```
#### Footer
The left of the fotoer settings

Example
```yaml
footer-left:`
  header: Sitemap
  links:
   - {title: Home, url: ''}
   - {title: Categories, url: 'categories'}
   - {title: Tags, url: 'tags'}
   - {title: Contact, url: '#contact'}
```

The right of the footer settings

Example
```yaml
footer-right:
  header: Legal
  links:
   - {url: legal/terms-of-service/ , title: Terms of Service, enabled: true}
   - {url: legal/privacy-statement/ , title: Privacy Statement, enabled: true}
```

RSS Feed settings

Example
```yaml
footer-rss:
  enabled: true
  url: feed.xml
  title: Subscribe via RSS
```

### How to create posts with the themplate

###
