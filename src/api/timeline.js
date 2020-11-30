import ajax from '../utils/ajax';

export function getHomeTimeline(params) {
  return ajax.get('https://mock.don.red/weibo/2/statuses/home_timeline.json', { params });
}

export function getPost(params) {
  return ajax.get('https://mock.don.red/weibo/2/statuses/show.json', { params });
}
