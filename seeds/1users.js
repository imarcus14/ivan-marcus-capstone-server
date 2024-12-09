/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
 
  await knex('users').del()
  await knex('users').insert([
        { 
            id: 1, 
            name: 'Alice',
            username: 'alice51', 
            email: 'alice51@example.com', 
            password: 'Pass9615!', 
            city: 'Toronto' 
        },
        { 
            id: 2, 
            name: 'Bob',
            username: 'bob57', 
            email: 'bob57@example.com', 
            password: 'Pass7845!', 
            city: 'Toronto' 
        },
        { 
            id: 3, 
            name: 'Charlie',
            username: 'charlie38', 
            email: 'charlie38@example.com', 
            password: 'Pass8465!', 
            city: 'Toronto' 
        },
        { 
            id: 4, 
            name: 'Diana',
            username: 'diana12', 
            email: 'diana12@example.com', 
            password: 'Pass6484!', 
            city: 'Toronto' 
        },
        { 
            id: 5, 
            name: 'Edward',
            username: 'edward59', 
            email: 'edward59@example.com', 
            password: 'Pass7184!', 
            city: 'Toronto' 
        },
        { 
            id: 6, 
            name: 'Fiona',
            username: 'fiona54', 
            email: 'fiona54@example.com', 
            password: 'Pass9529!', 
            city: 'Toronto' 
        },
        { 
            id: 7, 
            name: 'George',
            username: 'george98', 
            email: 'george98@example.com', 
            password: 'Pass2310!', 
            city: 'Toronto' 
        },
        { 
            id: 8, 
            name: 'Hannah',
            username: 'hannah73', 
            email: 'hannah73@example.com', 
            password: 'Pass9531!', 
            city: 'Toronto' 
        },
        { 
            id: 9, 
            name: 'Ian',
            username: 'ian29', 
            email: 'ian29@example.com', 
            password: 'Pass1238!', 
            city: 'Toronto' 
        },
        { 
            id: 10,
            name: 'Jane',
            username: 'jane13', 
            email: 'jane13@example.com', 
            password: 'Pass4719!', 
            city: 'Toronto' 
        },
        { 
            id: 11,
            name: 'Alice',
            username: 'alice51', 
            email: 'alice51@example.com', 
            password: 'Pass9615!', 
            city: 'Ottawa' 
        },
        { 
            id: 12,
            name: 'Bob',
            username: 'bob57', 
            email: 'bob57@example.com', 
            password: 'Pass7845!', 
            city: 'Toronto' 
        },
        { 
            id: 13,
            name: 'Charlie',
            username: 'charlie38', 
            email: 'charlie38@example.com', 
            password: 'Pass8465!', 
            city: 'Toronto' 
        },
        { 
            id: 14,
            name: 'Diana',
            username: 'diana12', 
            email: 'diana12@example.com', 
            password: 'Pass6484!', 
            city: 'Toronto' 
        },
        { 
            id: 15,
            name: 'Edward',
            username: 'edward59', 
            email: 'edward59@example.com', 
            password: 'Pass7184!', 
            city: 'Calgary' 
        },
        { 
            id: 16,
            name: 'Fiona',
            username: 'fiona54', 
            email: 'fiona54@example.com', 
            password: 'Pass9529!', 
            city: 'Ottawa' 
        },
        { 
            id: 17,
            name: 'George',
            username: 'george98', 
            email: 'george98@example.com', 
            password: 'Pass2310!', 
            city: 'Calgary' 
        },
        { 
            id: 18,
            name: 'Hannah',
            username: 'hannah73', 
            email: 'hannah73@example.com', 
            password: 'Pass9531!', 
            city: 'Ottawa' 
        },
        { 
            id: 19,
            name: 'Ian',
            username: 'ian29', 
            email: 'ian29@example.com', 
            password: 'Pass1238!', 
            city: 'Vancouver' 
        },
        { 
            id: 20,
            name: 'Jane',
            username: 'jane13', 
            email: 'jane13@example.com', 
            password: 'Pass4719!', 
            city: 'Toronto' 
        },
        { 
            id: 21,
            name: 'Kevin',
            username: 'kevin33', 
            email: 'kevin33@example.com', 
            password: 'Pass3244!', 
            city: 'Toronto' 
        },
        { 
            id: 22,
            name: 'Laura',
            username: 'laura65', 
            email: 'laura65@example.com', 
            password: 'Pass3087!', 
            city: 'Calgary' 
        },
        { 
            id: 23,
            name: 'Michael',
            username: 'michael39', 
            email: 'michael39@example.com', 
            password: 'Pass6622!', 
            city: 'Toronto' 
        },
        { 
            id: 24,
            name: 'Nina',
            username: 'nina32', 
            email: 'nina32@example.com', 
            password: 'Pass5150!', 
            city: 'Ottawa' 
        },
        { 
            id: 25,
            name: 'Oliver',
            username: 'oliver32', 
            email: 'oliver32@example.com', 
            password: 'Pass6260!', 
            city: 'Vancouver' 
        },
        { 
            id: 26,
            name: 'Paula',
            username: 'paula31', 
            email: 'paula31@example.com', 
            password: 'Pass8224!', 
            city: 'Calgary' 
        },
        { 
            id: 27,
            name: 'Quinn',
            username: 'quinn65', 
            email: 'quinn65@example.com', 
            password: 'Pass4741!', 
            city: 'Ottawa' 
        },
        { 
            id: 28,
            name: 'Rachel',
            username: 'rachel76', 
            email: 'rachel76@example.com', 
            password: 'Pass7683!', 
            city: 'Toronto' 
        },
        { 
            id: 29,
            name: 'Steve',
            username: 'steve23', 
            email: 'steve23@example.com', 
            password: 'Pass9482!', 
            city: 'Calgary' 
        },
        { 
            id: 30,
            name: 'Tina',
            username: 'tina82', 
            email: 'tina82@example.com', 
            password: 'Pass8013!', 
            city: 'Vancouver' 
        }
        
  ]);

};
