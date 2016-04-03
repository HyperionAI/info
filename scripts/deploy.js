import ghpages from 'gh-pages';
import path from 'path';

ghpages.publish(path.join(__dirname, '..', 'dist'), {
  user: {
    name: 'npm gh-pages',
    email: 'gh-pages@localhost',
  },
}, () => console.log('deploy complete!'));
