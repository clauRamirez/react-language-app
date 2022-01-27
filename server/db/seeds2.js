use users_hub;
db.dropDatabase();

db.users.insertMany([
    {
        name:"Peter Williams",
        age:23,
        high_score:0,
        how_cool:"very",
        high_score:{spanish:{quiz1:0,quiz2:0},german:{quiz:1,quiz:2},slovakian:{quiz:1,quiz2:0}}
    },
    {
        name:"Clau Ramirez",
        age:2,
        how_cool:"moderately",
        high_score:{spanish:{quiz1:0,quiz2:0},german:{quiz:1,quiz:2},slovakian:{quiz:1,quiz2:0}}
    },
    {
        name:"Miroslava Zacharova",
        age:undefined,
        high_score:0,
        how_cool:"too",
        high_score:{spanish:{quiz1:0,quiz2:0},german:{quiz:1,quiz:2},slovakian:{quiz:1,quiz2:0}}
    }
])