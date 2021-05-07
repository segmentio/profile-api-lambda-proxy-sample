'use strict';
const axios = require('axios');
const BASE_URL = 'https://profiles.segment.com/v1/spaces';
const TOKEN = `${process.env.PROFILE_API_TOKEN}:`;

module.exports.traits = async (event) => {
  let { email, include="", limit=100 } = event;

  let url = `${BASE_URL}/${process.env.SPACE_ID}/collections/users/profiles/email:${email}/traits`;
  let profileApiResponse = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(TOKEN).toString('base64')}`
    },
    params: {
      include,
      limit
    }
  });
  let body = JSON.stringify(profileApiResponse.data, null, 2);

  return {
    statusCode: 200,
    body
  };
};


module.exports.events = async (event) => {
  let { email, exclude="", include="", limit=100 } = event;

  let url = `${BASE_URL}/${process.env.SPACE_ID}/collections/users/profiles/email:${email}/events`;
  let profileApiResponse = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(TOKEN).toString('base64')}`
    },
    params: {
      exclude,
      include,
      limit
    }
  });
  let body = JSON.stringify(profileApiResponse.data, null, 2);

  return {
    statusCode: 200,
    body
  };
};

module.exports.external_ids = async (event) => {
  let { email, include="user_id", limit=100 } = event;

  let url = `${BASE_URL}/${process.env.SPACE_ID}/collections/users/profiles/email:${email}/external_ids`;
  let profileApiResponse = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(TOKEN).toString('base64')}`
    },
    params: {
      include,
      limit
    }
  });
  let body = JSON.stringify(profileApiResponse.data, null, 2);

  return {
    statusCode: 200,
    body
  };
};