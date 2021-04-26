export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio',
      },
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607ff4ef39dd56cbf79106da',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9o6iipha',
                  apiId: 'e93c177d-a736-41d4-8c08-cb558f21f6e4',
                },
                {
                  buildHookId: '607ff4efcf83ccec0cec0ec7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rnacpvxg',
                  apiId: 'a60f6633-3e77-4da7-9bf9-a5392f154978',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryasan86/sanity-gatsby-portfolio',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rnacpvxg.netlify.app',
            category: 'apps',
          },
        ],
      },
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'},
    },
  ],
};
