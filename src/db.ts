export interface CustomerType {
  id: number
  firstName: string
  lastName: string
  company: string
  status: 'user' | 'administrator'
  email: string
  password: string
  avatar: string
}
export const customers: CustomerType[] = [
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "company": "Acme Inc.",
    "status": "user",
    "email": "john.smith@acme.com",
    "password": "password123",
    "avatar": "icons/3.png"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Doe",
    "company": "Globex Corporation",
    "status": "administrator",
    "email": "jane.doe@globex.com",
    "password": "admin123",
    "avatar": "icons/6.png"
  },
  {
    "id": 3,
    "firstName": "David",
    "lastName": "Lee",
    "company": "Stark Industries",
    "status": "user",
    "email": "david.lee@stark.com",
    "password": "ironman123",
    "avatar": "icons/2.png"
  },
  {
    "id": 4,
    "firstName": "Emily",
    "lastName": "Wilson",
    "company": "Wayne Enterprises",
    "status": "user",
    "email": "emily.wilson@wayne.com",
    "password": "batgirl123",
    "avatar": "icons/5.png"
  },
  {
    "id": 5,
    "firstName": "Michael",
    "lastName": "Brown",
    "company": "Oscorp Industries",
    "status": "administrator",
    "email": "michael.brown@oscorp.com",
    "password": "spiderman123",
    "avatar": "icons/1.png"
  },
  {
    "id": 6,
    "firstName": "Sarah",
    "lastName": "Jones",
    "company": "LexCorp",
    "status": "user",
    "email": "sarah.jones@lexcorp.com",
    "password": "superman123",
    "avatar": "icons/7.png"
  },
  {
    "id": 7,
    "firstName": "Daniel",
    "lastName": "Davis",
    "company": "Queen Consolidated",
    "status": "user",
    "email": "daniel.davis@queen.com",
    "password": "arrow123",
    "avatar": "icons/4.png"
  },
  {
    "id": 8,
    "firstName": "Jessica",
    "lastName": "Garcia",
    "company": "Pym Technologies",
    "status": "administrator",
    "email": "jessica.garcia@pym.com",
    "password": "antman123",
    "avatar": "icons/2.png"
  },
  {
    "id": 9,
    "firstName": "Matthew",
    "lastName": "Rodriguez",
    "company": "Rand Enterprises",
    "status": "user",
    "email": "matthew.rodriguez@rand.com",
    "password": "ironfist123",
    "avatar": "icons/6.png"
  },
  {
    "id": 10,
    "firstName": "Ashley",
    "lastName": "Williams",
    "company": "Umbrella Corporation",
    "status": "user",
    "email": "ashley.williams@umbrella.com",
    "password": "zombie123",
    "avatar": "icons/1.png"
  },
  {
    "id": 11,
    "firstName": "Christopher",
    "lastName": "Miller",
    "company": "Cyberdyne Systems",
    "status": "administrator",
    "email": "christopher.miller@cyberdyne.com",
    "password": "terminator123",
    "avatar": "icons/5.png"
  },
  {
    "id": 12,
    "firstName": "Brittany",
    "lastName": "Moore",
    "company": "Tyrell Corporation",
    "status": "user",
    "email": "brittany.moore@tyrell.com",
    "password": "replicant123",
    "avatar": "icons/3.png"
  },
  {
    "id": 13,
    "firstName": "Joshua",
    "lastName": "Anderson",
    "company": "Aperture Science",
    "status": "user",
    "email": "joshua.anderson@aperture.com",
    "password": "portal123",
    "avatar": "icons/7.png"
  },
  {
    "id": 14,
    "firstName": "Amanda",
    "lastName": "Thompson",
    "company": "Buy n Large",
    "status": "administrator",
    "email": "amanda.thompson@buynlarge.com",
    "password": "walle123",
    "avatar": "icons/4.png"
  },
  {
    "id": 15,
    "firstName": "Justin",
    "lastName": "Clark",
    "company": "Initech",
    "status": "user",
    "email": "justin.clark@initech.com",
    "password": "tpsreport123",
    "avatar": "icons/2.png"
  },
  {
    "id": 16,
    "firstName": "Jennifer",
    "lastName": "Lewis",
    "company": "Hooli",
    "status": "user",
    "email": "jennifer.lewis@hooli.com",
    "password": "piedpiper123",
    "avatar": "icons/6.png"
  },
  {
    "id": 17,
    "firstName": "Brian",
    "lastName": "Walker",
    "company": "Dunder Mifflin",
    "status": "administrator",
    "email": "brian.walker@dundermifflin.com",
    "password": "bearsbeets123",
    "avatar": "icons/1.png"
  },
  {
    "id": 18,
    "firstName": "Olivia",
    "lastName": "Perez",
    "company": "Sterling Cooper",
    "status": "user",
    "email": "olivia.perez@sterlingcooper.com",
    "password": "madmen123",
    "avatar": "icons/5.png"
  },
  {
    "id": 19,
    "firstName": "Nicholas",
    "lastName": "Robinson",
    "company": "Wonka Industries",
    "status": "user",
    "email": "nicholas.robinson@wonka.com",
    "password": "chocolate123",
    "avatar": "icons/3.png"
  },
  {
    "id": 20,
    "firstName": "Megan",
    "lastName": "Wright",
    "company": "Gekko & Co.",
    "status": "administrator",
    "email": "megan.wright@gekko.com",
    "password": "greedisgood123",
    "avatar": "icons/7.png"
  },
  {
    "id": 21,
    "firstName": "Benjamin",
    "lastName": "Nelson",
    "company": "Massive Dynamic",
    "status": "user",
    "email": "benjamin.nelson@massivedynamic.com",
    "password": "fringe123",
    "avatar": "icons/4.png"
  },
  {
    "id": 22,
    "firstName": "Katherine",
    "lastName": "Young",
    "company": "Oceanic Airlines",
    "status": "user",
    "email": "katherine.young@oceanic.com",
    "password": "lost123",
    "avatar": "icons/2.png"
  },
  {
    "id": 23,
    "firstName": "Samuel",
    "lastName": "Hill",
    "company": "Weyland-Yutani Corp",
    "status": "administrator",
    "email": "samuel.hill@weylandyutani.com",
    "password": "alien123",
    "avatar": "icons/1.png"
  },
  {
    "id": 24,
    "firstName": "Evelyn",
    "lastName": "Scott",
    "company": "Jurassic Park",
    "status": "user",
    "email": "evelyn.scott@jurassicpark.com",
    "password": "dinosaur123",
    "avatar": "icons/6.png"
  },
  {
    "id": 25,
    "firstName": "Joseph",
    "lastName": "Green",
    "company": "Springfield Nuclear Power Plant",
    "status": "user",
    "email": "joseph.green@springfieldnuclear.com",
    "password": "doh123",
    "avatar": "icons/5.png"
  },
  {
    "id": 26,
    "firstName": "Lauren",
    "lastName": "Adams",
    "company": "Pawnee Parks and Recreation",
    "status": "administrator",
    "email": "lauren.adams@pawnee.com",
    "password": "parksandrec123",
    "avatar": "icons/3.png"
  }
]