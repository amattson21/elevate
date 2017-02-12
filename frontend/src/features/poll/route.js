import {
  DefaultPage,
  CreatePoll
} from './index';

export default {
  path: 'poll',
  childRoutes: [
    { path: 'default-page', component: DefaultPage, isIndex: true },
    { path: 'create_poll', component: CreatePoll }
  ],
};
