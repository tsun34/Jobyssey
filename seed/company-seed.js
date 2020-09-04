const Company = require('../models/Company');
const db = require("../config/keys").mongoURI;
let mongoose = require('mongoose');

const seed = () => {
    Company.collection.deleteMany({});

    let companies = [
        new Company ({
            name: 'wikipedia',
            description: 'a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation',
        }), 
        new Company({
            name: 'twitter',
            description: 'a microblogging system that allows you to send and receive short posts called tweets.', 
        }), 
        new Company({
            name: 'facebook',
            description: 'facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don’t know, online.',
        }), 
        new Company({
            name: 'amazon',
            description: 'e-commerce, cloud computing, digital streaming, and artificial intelligence.',
        }), 
        new Company({
            name: 'imdb',
            description: 'the worlds most popular and authoritative source for movie, TV and celebrity content', 
        }), 
        new Company({
            name: 'merriam-webster',
            description: 'Americas most trusted online dictionary for English word definitions, meanings, and pronunciation.', 
        }), 
        new Company({
            name: 'instagram',
            description: 'a free photo and video sharing app available on Apple iOS, Android and Windows Phone.',  
        }), 
        new Company({
            name: 'dictionary.com',
            description: 'the worlds leading digital dictionary', 
        }), 
        new Company({
            name: 'tripadvisor',
            description: 'Worlds largest travel platform. Browse hundreds of millions of traveler reviews and opinions.',
        }), 
        new Company({
            name: 'pintrest',
            description: 'a visual discovery engine for finding ideas like recipes, home and style inspiration',
        }), 
        new Company({
            name: 'wikitionary',
            description: 'a multilingual, web-based project to create a free content dictionary of terms in all natural languages and in a number of artificial languages.', 
        }),
        new Company ({
            name: 'fandom',
            description: 'is a wiki hosting service',
        }), 
        new Company ({
            name: 'yahoo',
            description: 'a web services provider',
        }), 
        new Company({
            name: 'yelp',
            description: 'User Reviews and Recommendations of Best Restaurants, Shopping, Nightlife, Food, etc', 
        }), 
        new Company({
            name: 'urbandictionary',
            description: 'Urban Dictionary is a crowdsourced online dictionary for slang words and phrases',
        }), 
        new Company({
            name: 'craigslist',
            description: 'classified advertisements website with sections devoted to jobs, housing, for sale, items wanted',
        }), 
        new Company({
            name: 'roblox',
            description: 'a global platform where millions of people gather together every day to imagine, create, and share experiences with each other in immersive, user-generated 3D worlds', 
        }), 
        new Company({
            name: 'linkedin',
            description: 'an online platform that connects the worlds professionals.', 
        }), 
        new Company({
            name: 'espn',
            description: 'multinational basic cable sports channel',  
        }), 
        new Company({
            name: 'healthline',
            description: 'provider of health information', 
        }), 
        new Company({
            name: 'webmd',
            description: 'online publisher of news and information pertaining to human health and well-being.',
        }), 
        new Company({
            name: 'walmart',
            description: 'multinational retail corporation',
        }), 
        new Company({
            name: 'livescore',
            description: 'real-time delivery of live sport scores and data', 
        }),
        new Company ({
            name: 'whatsapp',
            description: 'multifunction, multiplatform messaging app',
        }), 
        new Company ({
            name: 'rotten Tomatoes',
            description: ' review-aggregation website for film and television',
        }), 
        new Company({
            name: 'netflix',
            description: 'technology and media services provider and production company', 
        }), 
        new Company({
            name: 'steam',
            description: 'a video game digital distribution service',
        }), 
        new Company({
            name: 'skyscanner',
            description: 'metasearch engine and travel agency',
        }), 
        new Company({
            name: 'spotify',
            description: ' a Swedish music streaming and media services provider', 
        }), 
        new Company({
            name: 'cnet',
            description: 'an American media website that publishes reviews, news, articles, blogs, podcast, etc', 
        }), 
        new Company({
            name: 'reddit',
            description: 'social news aggregation, web content rating, and discussion website.',  
        }), 
        new Company({
            name: 'investopedia',
            description: 'provides investing and finance education along with reviews, ratings,', 
        }), 
        new Company({
            name: 'ebay',
            description: 'multinational e-commerce corporation',
        }), 
        new Company({
            name: 'indeed',
            description: ' employment-related search engine',
        }), 
        new Company({
            name: 'dailymail',
            description: ' daily middle-market newspaper published ', 
        }),
        new Company ({
            name: 'expedia',
            description: 'online travel shopping company for consumer and small business travel',
        }), 
        new Company ({
            name: 'adobe',
            description: 'software company',
        }), 
        new Company({
            name: 'paypal',
            description: 'online payments system that supports online money transfers', 
        }), 
        new Company({
            name: 'hulu',
            description: ' subscription video on demand service',
        }), 
        new Company({
            name: 'benchling',
            description: 'focusing on life science collaboration, both private and public, through creating cloud based software tools for digital DNA sequence editing, designing and running experiments, analyzing data, and sharing research',
        }), 
        new Company({
            name: 'sensor tower',
            description: 'provides enterprise-level data on mobile apps and publishers', 
        }), 
        new Company({
            name: 'circleCI',
            description: 'continuous integration and delivery platform for Linux, macOS, and Android, in the cloud or self-hosted', 
        }), 
        new Company({
            name: 'brex',
            description: 'financial service and technology ',  
        }), 
        new Company({
            name: 'plaid',
            description: 'financial services company', 
        }), 
        new Company({
            name: 'chorus.ai',
            description: 'a video calling and call management software solution',
        }), 
        new Company({
            name: 'lattic',
            description: ' a people management platform that empowers leaders to build engaged, high-performing teams that inspire winning cultures',
        }), 
        new Company({
            name: 'nuna',
            description: 'healthcare data and analytics solutions', 
        }),
        new Company ({
            name: 'snap-docs',
            description: 'digital mortgage closing solution',
        }), 
        new Company ({
            name: 'standard cognition',
            description: 'AI-Powered Autonomous Checkout',
        }), 
        new Company({
            name: 'tray.io',
            description: 'cloud data integration platform', 
        }), 
        new Company({
            name: 'volansi',
            description: 'unmanned aerial vehicle logistics company',
        }), 
        new Company({
            name: 'webflow',
            description: 'provides software as a service for website building and hosting',
        }), 
        new Company({
            name: 'digit',
            description: 'personal finance', 
        }), 
        new Company({
            name: 'harness.io',
            description: 'machine learning', 
        }), 
        new Company({
            name: 'n3twork',
            description: 'gaming company',  
        }), 
        new Company({
            name: 'common networks',
            description: 'home internet provider', 
        }), 
        new Company({
            name: 'skillz',
            description: 'an online mobile multiplayer competition platform',
        }), 
        new Company({
            name: 'niantic',
            description: 'software development company',
        }), 
        new Company({
            name: 'rescale',
            description: 'develops a cloud computing simulation platform', 
        }),
        new Company ({
            name: 'embark trucks',
            description: 'building self-driving truck technology ',
        }), 
        new Company ({
            name: 'shippo',
            description: 'software company that helps e-commerce businesses',
        }), 
        new Company({
            name: 'clever',
            description: 'a single sign-on portal for all of the edtech software', 
        }), 
        new Company({
            name: 'swift navigation',
            description: 'precise positioning solutions for automotive, autonomous vehicle, mobile and mass market applications.',
        }), 
        new Company({
            name: 'airtable',
            description: 'a cloud collaboration service',
        }), 
        new Company({
            name: 'ouster',
            description: 'a lidar technology company', 
        }), 
        new Company({
            name: 'qordoba',
            description: 'an artificial intelligence company ', 
        }), 
        new Company({
            name: 'advanced microgrid solutions',
            description: 'artificial intelligence-powered software',  
        }), 
        new Company({
            name: 'atomwise',
            description: 'convolutional neural networks', 
        }), 
        new Company({
            name: 'blueshift',
            description: 'marketing software company',
        }), 
        new Company({
            name: 'cheetah',
            description: ' restaurant supply app',
        }), 
        new Company({
            name: 'google',
            description: 'technology company that specializes in Internet-related services', 
        }),
        new Company ({
            name: 'microsoft',
            description: 'technology company',
        }), 
        new Company ({
            name: 'youtube',
            description: 'video distribution site',
        }), 
        new Company({
            name: 'apple',
            description: 'technology company', 
        }), 
        new Company({
            name: 'divvy homes',
            description: 'home finance',
        }), 
        new Company({
            name: 'expanse',
            description: 'web security',
        }), 
        new Company({
            name: 'fluxx',
            description: ' cloud-based grants management software', 
        }), 
        new Company({
            name: 'fyusion',
            description: 'machine learning', 
        }), 
        new Company({
            name: 'gigster',
            description: 'its unclear what exactly they do',  
        }), 
        new Company({
            name: 'hipcamp',
            description: 'comprehensive resource for discovering and booking unique outdoor stays', 
        }), 
        new Company({
            name: 'instabase',
            description: 'software',
        }), 
        new Company({
            name: 'mindtickle',
            description: 'sales technology i guess',
        }), 
        new Company({
            name: 'avaya',
            description: 'specializes in business communications', 
        }),
        new Company ({
            name: 'broadcom',
            description: 'designs, develops and supplies semiconductor and infrastructure software solutions.',
        }), 
        new Company ({
            name: 'cisco',
            description: 'hardware, software and service offerings to create Internet solutions',
        }), 
        new Company({
            name: 'hp',
            description: 'information technology', 
        }), 
        new Company({
            name: 'intel',
            description: 'technology company',
        }), 
        new Company({
            name: 'oracle',
            description: 'computer technology corporation',
        }), 
        new Company({
            name: 'tesla',
            description: 'imagine cars but in space', 
        }), 
        new Company({
            name: 'vmware',
            description: 'cloud infrastructure & digital workspace technology', 
        }), 
        new Company({
            name: 'western digital',
            description: 'data storage company',  
        }), 
        new Company({
            name: 'postman',
            description: 'wep api', 
        }), 
        new Company({
            name: 'pilot',
            description: 'bookkeeping, tax software',
        }), 
        new Company({
            name: 'osaro',
            description: 'artificial intelligence technology',
        }), 
        new Company({
            name: 'roostify',
            description: 'seeks to connect the full mortgage ecosystem', 
        }),
        new Company({
            name: 'sentry',
            description: 'work in uncharted territory', 
        }),
        new Company({
            name: 'very good security',
            description: 'security', 
        }),
        new Company({
            name: 'tigera',
            description: 'networking and networking security', 
        }),
        new Company ({
            name: 'robinhood',
            description: 'commission-free investing',
        }),
        new Company ({
            name: '500px',
            description: 'online photography network',
        }),
        new Company ({
            name: '99 dresses',
            description: 'eCommerce platform',
        }),
        new Company ({
            name: 'airbnb',
            description: 'rentals and stuff',
        }),
        new Company ({
            name: 'app academy',
            description: 'learn to code',
        }),
        new Company ({
            name: 'discord',
            description: 'voice comunication',
        }),
        new Company ({
            name: 'doordash',
            description: 'food delivery app',
        }),
        new Company ({
            name: 'uber',
            description: 'ridesharing',
        }),
        new Company ({
            name: 'eventbrite',
            description: 'Event management company',
        }),
        new Company ({
            name: 'etsy',
            description: 'e-commerce website',
        }),
        new Company ({
            name: 'flickr',
            description: 'online photo management',
        }),
        new Company ({
            name: 'genuis',
            description: 'digital media company',
        }),
        new Company ({
            name: 'github',
            description: 'hosting for software development and version control',
        }),
        new Company ({
            name: 'heroku',
            description: 'a cloud platform',
        }),
        new Company ({
            name: 'gofundme',
            description: 'for-profit crowdfunding platform',
        }),
        new Company ({
            name: 'goodreads',
            description: 'social cataloging website',
        }),
        new Company ({
            name: 'instacart',
            description: 'grocery delivery and pick-up service',
        }),
        new Company ({
            name: 'imgur',
            description: 'online image sharing community',
        }),
        new Company ({
            name: 'kickstarter',
            description: 'public benefit corporation',
        }),
        new Company ({
            name: 'vimeo',
            description: 'a video hosting, sharing, and services platform',
        }),
        new Company ({
            name: 'venmo',
            description: 'a digital wallet',
        }),
        new Company ({
            name: 'twitch',
            description: 'a video live streaming service ',
        }),
        new Company ({
            name: 'tumblr',
            description: 'microblogging and social networking website',
        }),
        new Company ({
            name: 'trello',
            description: 'web-based Kanban-style list-making application',
        }),
        new Company ({
            name: 'tiktok',
            description: 'video-sharing social networking',
        }),
        new Company ({
            name: 'taskrabbit',
            description: 'online and mobile marketplace that matches freelance labor with local demand',
        }),
        new Company ({
            name: 'strava',
            description: 'an internet service for tracking human exercise',
        }),
        new Company ({
            name: 'stack overflow',
            description: 'a question and answer site for professional and enthusiast programmers',
        }),
        new Company ({
            name: 'splitwise',
            description: 'a tool to track shared expenses',
        }),
        new Company ({
            name: 'slack',
            description: 'a proprietary business communication platform',
        }),
        new Company ({
            name: 'skype',
            description: 'a telecommunications application',
        }),
    ]; 

    // for (let i = 0; i < companies.length; i++) {
    //     companies[i].save()
    // }
}

module.exports = seed;

    // '',
    // new Company ({
    //     name: '',
    //     description: '',
    // }),