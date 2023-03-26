const { Blog } = require('../models');

const blogData = [
    ({
      post_title: 'Why MVC is so important',
      contents:
        'Model-View-Controller (or MVC) is an architectural structure for software development that divides program logic into three parts. The method is often used for user interface. The ‘model’, in this architecture, offers direct management of the data, logic, and rules of the application. The ‘view’ is any visual representation of data that the user sees. This can be charts or tables representing information in the model, or a full-on user interface on the landing page of a website. The ‘controller’ is the interface between the user and the view or model. This component accepts input and directs the model or view in action.',
      date_id: '03/26/2023',
      user_id: 1,
    },
    {
      post_title: 'Architectural Patterns',
      contents:
        'Architectural patterns, in software development, represent a number of architectural design ideas as archetypal and reusable. These designs offer pre-established abstractions for the engineering of web applications in software and web applications. The level of abstraction and utilization can vary, but generally following established patterning allows for reduced complexity, and an easier conveyance of information to other developers or engineers.',
      date_id: '04/20/2019',
      user_id: 1,
    })
  ];

const seedBlogPost = () => Blog.bulkCreate(blogData);

module.exports = seedBlogPost;
