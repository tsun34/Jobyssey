// 5f5036a0000b37d8b7965ae4
const Job = require('../models/Job');

const seedJob = () => {
    Job.collection.deleteMany({});
    let jobs = [
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "tesla",
            position_name: "CEO",
            stage: "wishlist",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-12-12")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "instacart",
            position_name: "junior engineer",
            stage: "wishlist",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-10-22")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "kickstarter",
            position_name: "staff engineer",
            stage: "wishlist",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-9-21")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "splitwise",
            position_name: "engineer ii",
            stage: "wishlist",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-10-28")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "genuis",
            position_name: "vp of engineering",
            stage: "applied",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-12-13")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "github",
            position_name: "director of engineering",
            stage: "applied",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-9-01")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "eventbrite",
            position_name: "principal engineer",
            stage: "applied",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-10-07")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "uber",
            position_name: "software engineer",
            stage: "applied",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-9-05")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "tiktok",
            position_name: "engineer iii",
            stage: "applied",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-9-19")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "app academy",
            position_name: "TA",
            stage: "interviewing",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-9-20>")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "postman",
            position_name: "TA",
            stage: "interviewing",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-12-23")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "heroku",
            position_name: "senior staff engineer",
            stage: "interviewing",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-12-12")
        }),
        new Job ({
            user: "5f5036a0000b37d8b7965ae4",
            company_name: "apple",
            position_name: "cto",
            stage: "decision",
            application_link: "¯\_(ツ)_/¯",
            deadline: new Date("2020-12-09")
        }),
    ]
    
    for (let i = 0; i < jobs.length; i++) {
        jobs[i].save()
    }
}

module.exports = seedJob;