export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-z6pokne7',
                  apiId: '178fc50b-6c80-4570-aa85-623ef218eca8'
                },
                {
                  buildHookId: '5f87acd54826733513d120d8',
                  title: 'Events Website',
                  name: 'sanity-test-web-qa91s6r3',
                  apiId: '6a776f58-5ed5-4c23-b16b-5261ce43cfc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alasstk/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-qa91s6r3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
