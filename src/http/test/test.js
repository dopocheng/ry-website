import axios from '../index.js';

export function getIndexApi() {//未下载索引
    return axios({
        url: '/rabbitmqAcquire/queue_index',
        method: 'get',
    })
}