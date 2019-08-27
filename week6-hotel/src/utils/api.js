import axios from 'axios';

export default axios.create({
  baseURL: `https://challenge.thef2e.com/api/thef2e2019/stage6`,
  headers: {'Authorization': 'Bearer UbaTjfDCT8PCundsuT1XnKyuc6ym0XM4rSb1NgZttXVkt4tRLkV2lLiTJcbz'},
});