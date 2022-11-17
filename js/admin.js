import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');


// fetch a paginated records list
const resultList = await client.records.getList('news', 1, 50, {
    filter: 'created >= "2022-01-01 00:00:00"',
});

// alternatively you can also fetch all records at once via getFullList:
const records = await client.records.getFullList('news', 200 /* batch size */, {
    sort: '-created',
});
