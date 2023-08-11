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
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@images': 'src/images',
          '@components': 'src/components',
          '@compositions': 'src/compositions',
          '@context': 'src/context',
          '@hoc': 'src/hoc',
          '@modules': 'src/modules',
          '@assets': 'assets',
          '@styles': 'src/styles'
        },
        extensions: [
          "js",
        ],
      },
    },
  `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carlos-zuniga-me`,
        short_name: `CarlosZuniga`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cz-icon.png` // This path is relative to the root of the site.
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
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_S3_BUCKET_NAME || 'develop',
        region: process.env.GATSBY_S3_REGION || 'us-east-2',
        enableS3StaticWebsiteHosting: true
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID,
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    }
]

if(processGatsbySiteUrlEnv == 'prod') {
  gatsbyConfigPlugins.push({
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        process.env.GATSBY_GA_TRACKING_ID, // Google Analytics / GA
        // process.env.GATSBY_AW_CONVERSION_ID, // Google Ads / Adwords / AW
        // process.env.GATSBY_DC_FLOODIGHT_ID // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      // gtagConfig: {
      //   optimize_id: process.env.OPT_CONTAINER_ID,
      //   anonymize_ip: true,
      //   cookie_expires: 0,
      // },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Defaults to https://www.googletagmanager.com
        // origin: "carloszuniga.me",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  })
}
module.exports = {
  siteMetadata: {
    title: 'Carlos Zúñiga',
    aka: 'Charlie',
    role: 'Full stack Developer',
    social: [
      {
        icon: 'linkedin-in',
        title: 'Linked In',
        url: 'https://www.linkedin.com/in/czuniga22'
      },
      {
        icon: 'x-twitter',
        title: 'X',
        url: 'https://www.x.com/krlos2290'
      },
      {
        icon: 'github',
        title: 'Github',
        url: 'https://github.com/cazuba'
      },
      {
        icon: 'threads',
        title: 'Threads',
        url: 'https://www.threads.com/@carzuba'
      },
      {
        icon: 'instagram',
        title: 'Instagram',
        url: 'https://www.instagram.com/carzuba'
      },
    ],
    github: 'https://github.com/cazuba',
    linkedin: 'https://www.linkedin.com/in/czuniga22/',
    twitter: 'https://twitter.com/krlos2290',
    email: "mailto:krlos2290@gmail.com?subject=Hi Charlie | I've a job for you",
    emailDisplay: 'krlos2290@gmail.com',
    phone: '+50670818299',
    phoneDisplay: '(+506) 7081 8299',
    location: 'https://goo.gl/maps/75c4FbQK6ou9Vxjc9',
    locationDisplay: 'Find me',
    bio: [
      "One of my key strengths lies in creating innovative and robust applications from scratch." +
      "I am also well-versed in the art of supporting existing client applications. Through" +
      "effective communication and problem-solving skills, I ensure that the software remains" +
      "functional and optimized, providing a seamless experience for users.",
      "In addition to my technical abilities, I have experience managing development teams as" +
      "a Technology Lead. I believe in fostering a collaborative environment where every team" +
      "member can thrive and contribute their best. By effectively coordinating efforts, setting" +
      "clear goals, and providing guidance, I've been able to lead successful projects and" +
      "achieve remarkable results.",
      "I am passionate about what I do, and I believe that my technical expertise, excellent" +
      "communication skills, and experience in managing development teams make me a" +
      "valuable asset to any project or organization."
    ],
    hashtags: [
      'Git',
      'Javascript',
      'Typescript',
      'React.js',
      'Node.js',
      'MongoDB',
      'GraphQL',
      'ApolloServer',
      'ApolloClient',
      'PHP',
      'Wordpress',
      'HTML/HTML5',
      'CSS/CSS3',
      'Express.js',
      'Fastify.js',
      'Next.js',
      'Meteor+React.js',
      'MySQL',
      'Laravel',
      'JQuery'
    ],
    siteUrl: processGatsbySiteUrl,
    description: `Hello, I'm Carlos Zúñiga, a passionate Full stack Developer, if you want to contact me please send me an email to: krlos2290@gmail.com`,
    author: `@krlos2290`
  },
  plugins: gatsbyConfigPlugins
}
