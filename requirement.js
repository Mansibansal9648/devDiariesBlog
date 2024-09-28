const website = {
  pages: {
    login: {


    },
    logout: {
      home: {
        navBar: {
          log: 'image/logout.png',
          /*
            gap
          */
          ourStory: {},
          blogs: {},
          signIn: {
            ifClick: {
              redirect: '/login',
            }
          },
          getStated: {
            ifClick: {
              redirect: '/register',
            }
          }, // reference: https://medium.com/ home page
        },
      },
      carousel: {},
      featuresPost: {
        title: "featured Posts",
        posts: [Object],
      },
      aboutSite: {
        screen: "using iframe, will add video of website"
      },
      footer: {
        col: '1',
        col: '2',
        col: '3'
        // https://www.techsuperiors.com/
      },
    },
  }
}