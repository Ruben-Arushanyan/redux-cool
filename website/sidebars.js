

module.exports = {
  // docs
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/motivation',
        'introduction/problems',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'concepts/index',
          label: 'Index',
        },
        'concepts/reducer-tree',
        'concepts/reducers-creator',
        'concepts/actions-creator',
        'concepts/global-and-local-actions'
      ],
    },
    {
      type: 'category',
      label: 'Usage Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'guide/index',
          label: 'Index',
        },
        'guide/react-redux-cool'
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'api/index',
          label: 'Index',
        },
        'api/reducersCreator',
        'api/actionsCreator',
      ],
    }
  ]
};
