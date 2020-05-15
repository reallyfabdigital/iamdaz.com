---
path: not-in-wordpress
date: 2020-05-15T16:13:30.585Z
title: We're not in WordPress anymore
description: 'Brief precis on why this site is built in Gatsby, and not WordPress.'
---
Normally, I'd turn to [WordPress](https://wordpress.org) to build a website. It's easy to use, has a fairly simple UI and with the advent of [Gutenberg blocks](https://wordpress.org/gutenberg/) it's now becoming real easy to crank out a nice website, pretty quickly.

But.

* You still have to update plugins
* You still have to pay for hosting
* It's a lot of work to make it fast
* There's always some joker trying to hack it

I currently use AWS to host sites, and their cheapest Lightsail tier is about $3.50 per month. I know S3 and EC are cheaper, but Lightsail is easier. It's simplicity I'm after see? And speed. And security. And I don't really want to host anything myself if I can help it. 

We live in a service based economy and I want stuff that's prebuilt that I can use, not setup. So WordPress is good, but its a lot of work.

![Jamstack instead of wordpress image](/assets/jamstack_cover.jpg)

So hello to [Jamstack](https://jamstack.org/). Serving rendered static files, via a CDN, with no database... That means no server right? With a [CMS](https://www.netlifycms.org/) option that's free to host, even with my own domain? Tell me more.
