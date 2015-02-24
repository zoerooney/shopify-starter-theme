Shopify Starter Theme
============================

This is a Sass- and Gulp-ready starter theme for Shopify theme development. It is meant to be heavily edited and modified for each custom theme project.

## Dependencies

This theme requires that you have Node, Sass, and Gulp installed on your computer.

You may also want to use the [Shopify Theme gem](https://github.com/Shopify/shopify_theme), and a template `config.yml` file is included for that purpose.

## Installation

* Clone this repo locally and change the name
* Zip the folder and import the zip to your Shopify store, then delete the local zip file
* Click to customize the theme and grab the theme ID from the URL
* Create a private app and enter the theme ID, store URL and API credentials into `config.yml`
* Run `npm install` to get the Gulp packages installed
* Open the theme via command line and run `gulp watch & theme watch` so that your Sass is auto-processed and updated theme files are automatically loaded to the site

## CAUTION!

The theme gem auto-updates your theme as you save files when it is running. Use caution when working with the active theme on a live site.

There is a `.gitignore` file included in the repo if you want to also use a Git workflow of some sort.