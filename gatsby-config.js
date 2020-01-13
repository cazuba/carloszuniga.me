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

module.exports = {
  siteMetadata: {
    title: 'Carlos Zúñiga',
    role: 'Web Developer',
    hashtags: '#MTB #Soccer #Family',
    github: 'cazuba',
    linkedin: 'czuniga22',
    email: 'hi@carloszuniga.me',
    siteUrl: processGatsbySiteUrl,
    description: `Hello, this is Carlos Zúñiga. I'm a passionate Web Developer, if you want to contact me please send me an email to: krlos2290@gmail.com`,
    author: `@cazuba`
  },
  plugins: [
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
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles/']
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_S3_BUCKET_NAME || 'develop',
        region: process.env.GATSBY_S3_REGION  || 'develop',
        enableS3StaticWebsiteHosting: true
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap'
  ]
}
