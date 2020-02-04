#  brandifAI
[Live: www.brandifai.net](http://www.brandifai.net) 

Brandifai is an web app providing a brand-suggestion for your Instagram profile.
It utilizes web scraping to derive the posted images of a choosen profile and uses image recognition and natural language procession apis to suggest the most common themes.

![Image of Landing Page](https://imgur.com/uztSDIT.png)


## Key Features

1. Choose any public Instagram profile for analisys by supplying the Instagram profile name. The app will check if the profile exists and is public (only public profiles can be analysed)
2. Application creates and presents image tags (including display of confidence interval) for posted images
3. Application displays most common tags as a barchart and all derived image tags as a word cloud for quick reference
4. Application uses the results of the image analysis (> type of tags and number of occurances) to derive and present a brand suggestion (theme) for the profile.

![Image of Word Cloud](https://i.imgur.com/fGiQIjY.png)

![Image of Brand Suggestion](https://i.imgur.com/Vh685nr.png)

## Motivation
- We wanted to build a web app that is relevant to the user.
- We were interested in exploring the utilizating of existing image recognition and natural language processing apis to provide but to provide a service with added value.
- We aimed to incorporate and practise continous integeration and delivery methods during the creation of the app to bridge the gap between development of deployment.

## Tech Stack
- Front-end in React
- Ruby on Rails API for the Back-end
- Postgres as database

## Notes on used 3rd Party Libraries and APIs
- The app utilizes the third-party api Clarifai for content analysis of the image posts (image tags)
- Additionally, the app utilizes the third-party api paralleldots to identify the theme of the loaded images (profile brand suggestion)
- Both services require registration and retrival of an api-key. In order to install the app the respective keys need to be requested and saved in the credential files in Rails.
- Instagram profile pictures are scrape utilizing cheerio (front-end, profile search verification) and Nokogiri and Instrammer (back-end, retrival of posted Instagram images)

## Deployment
- Front-end deployed to AWS S3 with Continous Deployment Pipeline from Github using CircleCi
- Back-end deployed to Heruko with Heroku's Continous Deployment to Heroku from Github

## Addtional Deployment Notes (Heroku)
- Do to the use of credentials to store the secret API keys (Paralleldots and Clarifai) the Rails app master key needs to be provided as an environmental variable in the Heruko admin panel.
!! Never store any keys in plain text in a git repo !!
- Use of Instagrammer gem requires the additional installation of the following buildpacks via the Heruko admin panel:
   - heruko-buildpack-chromedriver.git
   - heruko-buildpack-google-chrome.git

## Comments and Outlook
- The current version of the app is a prove of concept and set to scrape the first 20 images of the profile to demonstrate the capabilities, this setting can be adjusted in the code base for personal use cases
- Saved Instagram image urls are set to expire after certain time period, consequently older saved profiles might need to be refreshed (deleted and reloaded into the app), if images are fail to display.
- The accuracy of the theme sugegstions is based on the capabilities of the Paralleldots api, and currently included all images tags regardless of their confidence interval.

## License
MIT © @alexsh / @flow1981
