const processGatsbySiteUrl =
  process.env.GATSBY_SITE_URL || 'https://carloszuniga.me'
const processGatsbySiteUrlEnv = process.env.GATSBY_ENV || 'dev'

const genRobotsPolicy = env => {
  const policy = { userAgent: '*' }
  if (env === 'prod') {
    policy.allow = '/'
  } else {
    policy.disallow = '/'
  }

  return policy
}
const gatsbyConfigPlugins = [
  `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carlos-zuniga-me`,
        short_name: `CarlosZuniga`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: processGatsbySiteUrl,
        sitemap: `${processGatsbySiteUrl}/sitemap.xml`,
        policy: [genRobotsPolicy(processGatsbySiteUrlEnv)]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_S3_BUCKET_NAME || 'develop',
        region: process.env.GATSBY_S3_REGION || 'develop',
        enableS3StaticWebsiteHosting: true
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap'
]

if(processGatsbySiteUrlEnv == 'prod') {
  gatsbyConfigPlugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GATSBY_GA_TRACKING_ID,
      head: true
    }
  })
}
module.exports = {
  siteMetadata: {
    title: 'Carlos Zúñiga',
    aka: 'Charlie',
    role: 'Senior Web Developer',
    github: 'https://github.com/cazuba',
    linkedin: 'https://www.linkedin.com/in/czuniga22/',
    twitter: 'https://twitter.com/krlos2290',
    email: "mailto:krlos2290@gmail.com?subject=Hi Charlie | I've a job for you",
    emailDisplay: 'krlos2290@gmail.com',
    phone: '+50670818299',
    phoneDisplay: '(+506) 7081 8299',
    location: 'https://goo.gl/maps/75c4FbQK6ou9Vxjc9',
    locationDisplay: 'Heredia, Costa Rica',
    bio:
      "Hello, I'm Carlos Zúñiga, a passionate Senior Web Developer from Costa Rica. I've been in the digital world from more than 6 years working with different techologies, some of them are:",
    hashtags: [
      'Git',
      'Javascript',
      'ReactJS',
      'NodeJS',
      'MongoDB',
      'GraphQL',
      'ApolloServer',
      'ApolloClient',
      'PHP',
      'Wordpress',
      'HTML/HTML5',
      'CSS/CSS3',
      'ExpressJS',
      'Meteor+ReactJS',
      'MySQL',
      'Laravel',
      'JQuery'
    ],
    siteUrl: processGatsbySiteUrl,
    description: `Hello, I'm Carlos Zúñiga, a passionate Senior Web Developer, if you want to contact me please send me an email to: krlos2290@gmail.com`,
    author: `@krlos2290`
  },
  plugins: gatsbyConfigPlugins
}
