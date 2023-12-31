/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const ConceptSidebars  = {
  MathSidebar: [
    'concepts/math/introduction',
    {
      type: 'category',
      label: 'Linear Algebra',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/linearalgebra'
        }
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/statistics'
        }
      ]
    },
    {
      type: 'category',
      label: 'Information Theory',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/information'
        }
      ]
    }, 
    {
      type: 'category',
      label: 'Calculus',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/calculus'
        }
      ]
    },
  ],

  MLConceptSidebar: [
    'concepts/mlconcept/introduction',
    {
      type: 'category',
      label: 'Data',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/mlconcept/data'
        }
      ]
    },
    {
      type: 'category',
      label: 'Taxonomy',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/mlconcept/taxonomy'
        }
      ]
    }
  ],

  DeepLearningSidebar: [
    'concepts/deeplearning/introduction',
    {
      type: 'category',
      label: 'Taxonomy',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/deeplearning/taxonomy'
        }
      ]
    }
  ],

  ProgrammingSidebar: [
    {
      type: 'autogenerated',
      dirName: 'concepts/programming'
    }
  ]
}

const DataSidebars = {
  DataImageSidebar: [
    {
      type: 'autogenerated',
      dirName: 'data/image',
    }
  ],
  DataTextSidebar: [
    {
      type: 'autogenerated',
      dirName: 'data/text',
    }
  ],
}

const ModelsSidebars = {
  MLModelSidebar: [
    {
      type: 'autogenerated',
      dirName: 'models/mlmodel'
    }
  ],
  AIModelSidebar: [
    {
      type: 'autogenerated',
      dirName: 'models/aimodel',
    }
  ],
  LargeModelSidebar: [
    {
      type: 'autogenerated',
      dirName: 'models/largemodel',
    },
  ],
}

const PracticeSidebars = {
  TorchSidebar: [
    {
      type: 'autogenerated',
      dirName: 'practice/torch'
    }
  ],
  EfficienttrainSidebar: [
    {
      type: 'autogenerated',
      dirName: 'practice/efficienttrain'
    }
  ],
  MLOPsSidebar: [
    {
        type: 'autogenerated',
        dirName: 'practice/mlops'
    }
  ],
}

const TaskSidebars = {
  RecommendationSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tasks/recommendation'
    }
  ],
  InformationextractionSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tasks/informationextraction'
    }
  ],
  RetrievalSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tasks/retrieval'
    }
  ],
  KnowledgegraphSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tasks/knowledgegraph'
    }
  ],
  LLMSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tasks/llm&prompt'
    }
  ],
}

const CommunitySidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  CommunitySidebar: [
    {
      type: 'autogenerated',
      dirName: 'community'
    }
  ],
};

const sidebars = {
  ...ConceptSidebars,
  ...DataSidebars,
  ...ModelsSidebars,
  ...PracticeSidebars,
  ...TaskSidebars,
  ...CommunitySidebars,
}

module.exports = sidebars;
