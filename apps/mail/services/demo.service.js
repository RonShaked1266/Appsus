import { utilService } from "../../../services/util.service.js"

export const demoService = {
    loadFromDemo
}

function loadFromDemo() { 
    return [
        {
            id: utilService.makeId(),
            subject: 'Some Interesting Information',
            body: `Greece, the southernmost of the countries of the Balkan Peninsula. Geography has greatly influenced the country's development. 
            
            Mountains historically restricted internal communications, but the sea opened up wider horizons. 
            
            The total land area of Greece (one-fifth of which is made up of the Greek islands) is comparable in size to England or the U.S. state of Alabama.`,
            isRead: true,
            sentAt: new Date('August 28, 2022 01:46:30'),
            to: 'Mikey@mail.com',
            from: 'Ariel Ron'
        },
        {
            id: utilService.makeId(),
            subject: 'We noticed a new sign in to your Dropbox',
            body: `Hi ArielRon, 

            A new web browser just signed in to your Dropbox account. 
            To help keep your account secure, let us know if this is you. 
            
            Thanks, The DropBox Team.`,
            isRead: false,
            sentAt: new Date('August 27, 2022 09:46:30'),
            to: 'ArielRon@appsus.com',
            from: 'Dropbox'
        },
        {
            id: utilService.makeId(),
            subject: '50-minutes to become a Slack expert!',
            body: `New to Slack? Already a user? Slack 101 will take you through key features and give you an in-depth tour of the Slack platform.

            Join this webinar with our Customer Experience team and learn from the best. Bring all your unique questions to learn how Slack can specifically help your team. Discover:
            How Slack will bring value to your team
            How Slack will improve your team's communication
            Foundational features of Slack
            Sign up now for these webinars, taking place tomorrow, 1st September and 8th September.
            Can't make it? Register anyway and we'll send you the recording.
            
            Slack Technologies`,
            isRead: false,
            sentAt: new Date('August 24, 2022 09:46:30'),
            to: 'ArielRon@appsus.com',
            from: 'Slack'
        },
        {
            id: utilService.makeId(),
            subject: 'Whole Grain Banana Muffins',
            body: `Ingredients:
            1-1/2 Cup(s) all-purpose flour
            1 Cup(s) Quaker® Oats (quick or old fashioned, uncooked)
            1/2 Cup(s) firmly packed brown sugar
            1/2 Cup(s) chopped nuts (optional)
            1 Tablespoon(s) Baking Powder
            1/2 Teaspoon(s) Baking Soda
            1 Cup(s) mashed ripe bananas (about 3 medium)
            5 Tablespoon(s) margarine or butter, melted
            1/2 Cup(s) fat-free milk
            2 egg whites or 1 egg, lightly beaten
            
            Cooking Instructions:
            Heat oven to 400°F. Line twelve medium muffin cups with paper baking cups or spray bottoms only with cooking spray. In large bowl, combine flour, oats, sugar, nuts, if desired, baking powder and baking soda; mix well. In medium bowl, combine bananas, margarine, milk and egg whites; blend well. Add to dry Ingredients all at once; stir just until dry ingredients are moistened. (Do not overmix.) Fill muffin cups almost full. Bake 17 to 19 minutes or until golden brown. Cool muffins in pan on wire rack 5 minutes. Remove from pan. Serve warm.`,
            isRead: false,
            sentAt: new Date('August 15, 2022 15:26:22'),
            to: 'ArielRon@appsus.com',
            from: 'Naama Levy'
        },
        {
            id: utilService.makeId(),
            subject: 'Spinach and Ricotta Cannelloni',
            body: `There are two ways to make cannelloni:

            1. stuffing dry pasta tubes
            2. rolling the filling up in fresh lasagna sheets
            
            I like using the tubes. The fastest way to fill the tubes is with a piping bag.
            7 seconds per tube x 20 tubes = 2.3 minutes.
            
            Here's what's in it:

            Spinach, Ricotta, Shredded cheese, Parmesan, Garlic, Egg, Nutmeg, Salt and pepper

            This is my standard recipe that is virtually identical (if not identical) to what I use for all things spinach and ricotta, from this Spinach and Ricotta Pasta Bake, to Puff Pasty Puffs, Rotolo (it's like upright cannelloni - and it's amazing!), to Spinach Ricotta Rolls.`,
            isRead: true,
            sentAt: new Date('August 10, 2022 20:20:30'),
            to: 'ArielRon@appsus.com',
            from: 'Recipetineats'
        },
        {
            id: utilService.makeId(),
            subject: 'We noticed a new sign in to your Dropbox',
            body: `Hi ArielRon, 

            A new web browser just signed in to your Dropbox account. 
            To help keep your account secure, let us know if this is you. 

            Thanks, The DropBox Team.`,
            isRead: false,
            sentAt: new Date('July 03, 2022 14:46:30'),
            to: 'ArielRon@appsus.com',
            from: 'Dropbox'
        },
        {
            id: utilService.makeId(),
            subject: 'Final preparations for the bootcamp course - Coding Academy',
            body: `Hi the bootcamp course is coming up, 
            Course starts Sunday on Sunday, 3.7.22.

            Gathering and registration: 8:15,
            Lesson Starts at: 8:30
            In the first stage of the course there will be 2 parallel classes.

            Softwares that must be installed on the computer: 
            1. Code Editor - Visual Studio Code
            2. Files Sharing - Dropbox
            
            The lessons will be delivered via the Zoom app
            
            Administrative preparations:
            During the course the schedule will usually be:
            Lesson: 08:30 - 12:30
            Lunch Breake: 12:30 - 13:30
            Practice: 13:30 - 19:00`,
            isRead: true,
            sentAt: new Date('June 30, 2022 16:15:10'),
            to: 'ArielRon@appsus.com',
            from: 'Coding Academy'
        },
    ]
}