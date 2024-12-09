/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
 
  await knex('dogs').del()
  await knex('dogs').insert([
    { id: 1, user_id: 1, name: 'Buddy', age: '2 years', breed: 'Labrador Retriever', personality: 'Calm/Agreeable', photo: 'http://localhost:8080/uploads/labrador/lab1.jpg' },
    { id: 2, user_id: 2, name: 'Max', age: '3 years', breed: 'German Shepherd', personality: 'Anxious/Fearful', photo: 'http://localhost:8080/uploads/german/german1.jpg' },
    { id: 3, user_id: 3, name: 'Bella', age: '1 year', breed: 'Poodle', personality: 'Excitable/Hyperattached', photo: 'http://localhost:8080/uploads/poodle/poodle1.jpg' },
    { id: 4, user_id: 4, name: 'Charlie', age: '18 months', breed: 'Bulldog', personality: 'Aloof/Predatory', photo: 'http://localhost:8080/uploads/bulldog/bulldog1.jpeg' },
    { id: 5, user_id: 5, name: 'Rocky', age: '4 years', breed: 'Beagle', personality: 'Reactive/Assertive', photo: 'http://localhost:8080/uploads/beagle/beagle1.jpg' },
    { id: 6, user_id: 6, name: 'Luna', age: '20 months', breed: 'French Bulldog', personality: 'Calm/Agreeable', photo: 'http://localhost:8080/uploads/frenchie/frenchie1.jpg' },
    { id: 7, user_id: 7, name: 'Cooper', age: '3 years', breed: 'Boxer', personality: 'Excitable/Hyperattached', photo: 'http://localhost:8080/uploads/boxer/boxer1.jpeg' },
    { id: 8, user_id: 8, name: 'Molly', age: '2 years', breed: 'Golden Retriever', personality: 'Anxious/Fearful', photo: 'http://localhost:8080/uploads/golden/golden1.jpg' },
    { id: 9, user_id: 9, name: 'Bailey', age: '15 months', breed: 'Yorkshire Terrier', personality: 'Aloof/Predatory', photo: 'http://localhost:8080/uploads/yorkie/yorkie1.jpg' },
    { id: 10, user_id: 10, name: 'Sadie', age: '2 years', breed: 'Poodle', personality: 'Reactive/Assertive', photo: 'http://localhost:8080/uploads/poodle/poodle2.jpg' },
    { id: 11, user_id: 11, name: 'Teddy', age: '3 years', breed: 'Labrador Retriever', personality: 'Calm/Agreeable', photo: 'http://localhost:8080/uploads/labrador/lab2.jpg' },
    { id: 12, user_id: 12, name: 'Oliver', age: '16 months', breed: 'German Shepherd', personality: 'Excitable/Hyperattached', photo: 'http://localhost:8080/uploads/german/german2.jpg' },
    { id: 13, user_id: 13, name: 'Zoey', age: '14 months', breed: 'Bulldog', personality: 'Anxious/Fearful', photo: 'http://localhost:8080/uploads/bulldog/bulldog2.jpg' },
    { id: 14, user_id: 14, name: 'Ruby', age: '2 years', breed: 'Beagle', personality: 'Aloof/Predatory', photo: 'http://localhost:8080/uploads/beagle/beagle2.jpg' },
    { id: 15, user_id: 15, name: 'Penny', age: '3 years', breed: 'French Bulldog', personality: 'Reactive/Assertive', photo: 'http://localhost:8080/uploads/frenchie/frenchie2.jpg' },
    { id: 16, user_id: 16, name: 'Riley', age: '20 months', breed: 'Boxer', personality: 'Calm/Agreeable', photo: 'http://localhost:8080/uploads/boxer/boxer2.jpg' },
    { id: 17, user_id: 17, name: 'Oscar', age: '17 months', breed: 'Golden Retriever', personality: 'Excitable/Hyperattached', photo: 'http://localhost:8080/uploads/golden/golden2.jpeg' },
    { id: 18, user_id: 18, name: 'Jake', age: '2 years', breed: 'Yorkshire Terrier', personality: 'Anxious/Fearful', photo: 'http://localhost:8080/uploads/yorkie/yorkie2.jpg' },
    { id: 19, user_id: 19, name: 'Maggie', age: '3 years', breed: 'Poodle', personality: 'Aloof/Predatory', photo: 'http://localhost:8080/uploads/poodle/poodle3.jpg' },
    { id: 20, user_id: 20, name: 'Leo', age: '15 months', breed: 'Labrador Retriever', personality: 'Reactive/Assertive', photo: 'http://localhost:8080/uploads/labrador/lab3.jpeg' },
    { id: 21, user_id: 21, name: 'Finn', age: '2 years', breed: 'German Shepherd', personality: 'Calm/Agreeable', photo: 'http://localhost:8080/uploads/german/german3.jpg' },
    { id: 22, user_id: 22, name: 'Daisy', age: '19 months', breed: 'Bulldog', personality: 'Excitable/Hyperattached', photo: 'http://localhost:8080/uploads/bulldog/bulldog3.jpg' },
    { id: 23, user_id: 23, name: 'Lola', age: '3 years', breed: 'Beagle', personality: 'Anxious/Fearful', photo: 'http://localhost:8080/uploads/beagle/beagle3.jpg' },
    { id: 24, user_id: 24, name: 'Chloe', age: '22 months', breed: 'French Bulldog', personality: 'Aloof/Predatory', photo: 'http://localhost:8080/uploads/frenchie/frenchie3.jpeg' },
    { id: 25, user_id: 25, name: 'Zoey', age: '3 years', breed: 'Boxer', personality: 'Reactive/Assertive', photo: 'http://localhost:8080/uploads/boxer/boxer3.jpg' },
    { id: 26, user_id: 26, name: 'Ellie', age: '16 months', breed: 'Golden Retriever', personality: 'Calm/Agreeable', photo: 'http://localhost:8080/uploads/golden/golden3.jpg' },
    { id: 27, user_id: 27, name: 'Marley', age: '2 years', breed: 'Yorkshire Terrier', personality: 'Excitable/Hyperattached', photo: 'http://localhost:8080/uploads/yorkie/yorkie3.jpg' },
    { id: 28, user_id: 28, name: 'Sophie', age: '3 years', breed: 'Poodle', personality: 'Anxious/Fearful', photo: 'http://localhost:8080/uploads/poodle/poodle4.jpg' },
    { id: 29, user_id: 29, name: 'Milo', age: '18 months', breed: 'Labrador Retriever', personality: 'Aloof/Predatory', photo: 'http://localhost:8080/uploads/labrador/lab4.jpg' },
    { id: 30, user_id: 30, name: 'Jack', age: '2 years', breed: 'German Shepherd', personality: 'Reactive/Assertive', photo: 'http://localhost:8080/uploads/german/german4.jpg' }
  ]);
};
