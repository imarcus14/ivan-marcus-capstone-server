/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
    {
        "id": 1,
        "user_id": 13,
        "name": "Finn",
        "age": "4 years",
        "breed": "German Shepherd",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_1.jpg"
    },
    {
        "id": 2,
        "user_id": 3,
        "name": "Max",
        "age": "25 months",
        "breed": "Yorkshire Terrier",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_2.jpg"
    },
    {
        "id": 3,
        "user_id": 20,
        "name": "Zoey",
        "age": "3 years",
        "breed": "Yorkshire Terrier",
        "personality": "Excitable/Hyperattached",
        "photo": "https://example.com/photos/dog_3.jpg"
    },
    {
        "id": 4,
        "user_id": 4,
        "name": "Jack",
        "age": "51 years",
        "breed": "German Shepherd",
        "personality": "Anxious/Fearful",
        "photo": "https://example.com/photos/dog_4.jpg"
    },
    {
        "id": 5,
        "user_id": 7,
        "name": "Milo",
        "age": "13 months",
        "breed": "Boxer",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_5.jpg"
    },
    {
        "id": 6,
        "user_id": 9,
        "name": "Sophie",
        "age": "25 months",
        "breed": "French Bulldog",
        "personality": "Calm/Agreeable",
        "photo": "https://example.com/photos/dog_6.jpg"
    },
    {
        "id": 7,
        "user_id": 16,
        "name": "Rocky",
        "age": "30 months",
        "breed": "German Shepherd",
        "personality": "Aloof/Predatory",
        "photo": "https://example.com/photos/dog_7.jpg"
    },
    {
        "id": 8,
        "user_id": 10,
        "name": "Riley",
        "age": "3 years",
        "breed": "Bulldog",
        "personality": "Anxious/Fearful",
        "photo": "https://example.com/photos/dog_8.jpg"
    },
    {
        "id": 9,
        "user_id": 2,
        "name": "Max",
        "age": "3 months",
        "breed": "French Bulldog",
        "personality": "Aloof/Predatory",
        "photo": "https://example.com/photos/dog_9.jpg"
    },
    {
        "id": 10,
        "user_id": 1,
        "name": "Penny",
        "age": "20 months",
        "breed": "Labrador Retriever",
        "personality": "Calm/Agreeable",
        "photo": "https://example.com/photos/dog_10.jpg"
    },
    {
        "id": 11,
        "user_id": 25,
        "name": "Daisy",
        "age": "9 years",
        "breed": "Beagle",
        "personality": "Anxious/Fearful",
        "photo": "https://example.com/photos/dog_11.jpg"
    },
    {
        "id": 12,
        "user_id": 21,
        "name": "Max",
        "age": "1 months",
        "breed": "Poodle",
        "personality": "Calm/Agreeable",
        "photo": "https://example.com/photos/dog_12.jpg"
    },
    {
        "id": 13,
        "user_id": 23,
        "name": "Bella",
        "age": "39 years",
        "breed": "Golden Retriever",
        "personality": "Excitable/Hyperattached",
        "photo": "https://example.com/photos/dog_13.jpg"
    },
    {
        "id": 14,
        "user_id": 18,
        "name": "Bailey",
        "age": "2 years",
        "breed": "Yorkshire Terrier",
        "personality": "Excitable/Hyperattached",
        "photo": "https://example.com/photos/dog_14.jpg"
    },
    {
        "id": 15,
        "user_id": 12,
        "name": "Sadie",
        "age": "43 years",
        "breed": "Beagle",
        "personality": "Anxious/Fearful",
        "photo": "https://example.com/photos/dog_15.jpg"
    },
    {
        "id": 16,
        "user_id": 17,
        "name": "Lucy",
        "age": "46 years",
        "breed": "German Shepherd",
        "personality": "Excitable/Hyperattached",
        "photo": "https://example.com/photos/dog_16.jpg"
    },
    {
        "id": 17,
        "user_id": 5,
        "name": "Sophie",
        "age": "38 years",
        "breed": "Poodle",
        "personality": "Anxious/Fearful",
        "photo": "https://example.com/photos/dog_17.jpg"
    },
    {
        "id": 18,
        "user_id": 19,
        "name": "Zoey",
        "age": "58 years",
        "breed": "Golden Retriever",
        "personality": "Aloof/Predatory",
        "photo": "https://example.com/photos/dog_18.jpg"
    },
    {
        "id": 19,
        "user_id": 14,
        "name": "Zoey",
        "age": "2 months",
        "breed": "Labrador Retriever",
        "personality": "Calm/Agreeable",
        "photo": "https://example.com/photos/dog_19.jpg"
    },
    {
        "id": 20,
        "user_id": 11,
        "name": "Teddy",
        "age": "1 years",
        "breed": "German Shepherd",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_20.jpg"
    },
    {
        "id": 21,
        "user_id": 26,
        "name": "Zoey",
        "age": "29 years",
        "breed": "Bulldog",
        "personality": "Aloof/Predatory",
        "photo": "https://example.com/photos/dog_21.jpg"
    },
    {
        "id": 22,
        "user_id": 15,
        "name": "Lucy",
        "age": "22 years",
        "breed": "Bulldog",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_22.jpg"
    },
    {
        "id": 23,
        "user_id": 8,
        "name": "Zoey",
        "age": "1 months",
        "breed": "French Bulldog",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_23.jpg"
    },
    {
        "id": 24,
        "user_id": 5,
        "name": "Daisy",
        "age": "4 years",
        "breed": "French Bulldog",
        "personality": "Aloof/Predatory",
        "photo": "https://example.com/photos/dog_24.jpg"
    },
    {
        "id": 25,
        "user_id": 1,
        "name": "Molly",
        "age": "4 months",
        "breed": "Beagle",
        "personality": "Calm/Agreeable",
        "photo": "https://example.com/photos/dog_25.jpg"
    },
    {
        "id": 26,
        "user_id": 2,
        "name": "Sadie",
        "age": "1 years",
        "breed": "Rottweiler",
        "personality": "Aloof/Predatory",
        "photo": "https://example.com/photos/dog_26.jpg"
    },
    {
        "id": 27,
        "user_id": 22,
        "name": "Finn",
        "age": "2 months",
        "breed": "Boxer",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_27.jpg"
    },
    {
        "id": 28,
        "user_id": 27,
        "name": "Molly",
        "age": "1 months",
        "breed": "Golden Retriever",
        "personality": "Excitable/Hyperattached",
        "photo": "https://example.com/photos/dog_28.jpg"
    },
    {
        "id": 29,
        "user_id": 24,
        "name": "Leo",
        "age": "41 years",
        "breed": "Golden Retriever",
        "personality": "Reactive/Assertive",
        "photo": "https://example.com/photos/dog_29.jpg"
    },
    {
        "id": 30,
        "user_id": 6,
        "name": "Penny",
        "age": "3 months",
        "breed": "Beagle",
        "personality": "Anxious/Fearful",
        "photo": "https://example.com/photos/dog_30.jpg"
    }
  ]);
};
