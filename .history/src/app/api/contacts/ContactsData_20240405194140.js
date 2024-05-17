import mock from "../mock";
import user1 from "public/images/users/user1.jpg";
import user2 from "public/images/users/user2.jpg";
import user3 from "public/images/users/user3.jpg";
import user4 from "public/images/users/user4.jpg";
import user5 from "public/images/users/user5.jpg";
import axios from "axios";

async function uploadClients() {
  try {
    console.log(await axios.get("http://awtapi.softwarehouseparma.net/api/clientss"));
  } catch (error) {
    console.log(error);
  }
}
export const ContactList = []
/*
export const ContactList = [
  {
    id: 1,
    firstname: "Georgeanna",
    lastname: "Ramero",
    image: user2,
    department: "Sales",
    company: "Muller Inc",
    phone: "456-485-5623",
    email: "qq739v47ggn@claimab.com",
    address: "19214 110th Rd, Saint Albans, NY, 1141",
    notes: "Devolved Tangible Projection",
    frequentlycontacted: true,
    starred: true,
    deleted: true,
  },
  {
    id: 2,
    firstname: "Cami",
    lastname: "Macha",
    image: user3,
    department: "Support",
    company: "Zboncak LLC",
    phone: "999-895-9652",
    email: "Camisad@claimab.com",
    address: "76 Hamilton Ave, Yonkers, NY, 10705",
    notes: "Horizontal Bi-Directional Capability",
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 3,
    firstname: "Alda",
    lastname: "Ziemer",
    image: user4,
    department: "Engineering",
    company: "Lehner-Jacobson",
    phone: "789-854-8950",
    email: "Ziemer234@claimab.com",
    address: "930 Fruit Ave, Farrell, PA, 16121",
    notes: "Switchable Multimedia Hub",
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },
  {
    id: 4,
    firstname: "Luciano",
    lastname: "Macpherson",
    image: user5,
    department: "Support",
    company: "Champlin",
    phone: "452-652-5230",
    email: "Macpherson34@claimab.com",
    address: "19103 Stefani Ave, Cerritos, CA, 90703",
    notes: "Versatile Web-Enabled Groupware",
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
  {
    id: 5,
    firstname: "Dalton",
    lastname: "Paden",
    image: user1,
    department: "Engineering",
    company: "Balistreri",
    phone: "985-985-7850",
    email: "Dalton321@claimab.com",
    address: "3059 Edgewood Park Ct, Commerce Township",
    notes: "Cloned 6Thgeneration Access",
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 6,
    firstname: "Juan",
    lastname: "Granado",
    image: user2,
    department: "Support",
    company: "Bernier-Ankunding",
    phone: "230-541-5231",
    email: "Granado567@claimab.com",
    address: "1330 N Douglas Ave, Arlington Heights",
    notes: "Multi-Tiered Coherent Workforce",
    frequentlycontacted: true,
    starred: false,
    deleted: true,
  },
  {
    id: 7,
    firstname: "Reva",
    lastname: "Allen",
    image: user3,
    department: "Support",
    company: "Rosenbaum Inc",
    phone: "478-582-6520",
    email: "Allen326@claimab.com",
    address: "180 Topp Ln, Tupelo, MS",
    notes: "Upgradable 6Thgeneration Pricingstructure",
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 8,
    firstname: "Jule",
    lastname: "Huseman",
    image: user4,
    department: "Sales",
    company: "Smith-Romaguera",
    phone: "123-652-2301",
    email: "Huseman458@claimab.com",
    address: "33 Caraway Rd, Reisterstown, MD",
    notes: "Optimized Dedicated Toolset",
    frequentlycontacted: true,
    starred: true,
    deleted: true,
  },
  {
    id: 9,
    firstname: "Bridgette",
    lastname: "Phung",
    image: user5,
    department: "Engineering",
    company: "Corwin-Kassulke",
    phone: "652-452-6521",
    email: "Bridgette890@claimab.com",
    address: "#RR, Bruceton Mills, WV",
    notes: "Right-Sized Tertiary Success",
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
  {
    id: 10,
    firstname: "Ernest",
    lastname: "Cousins",
    image: user2,
    department: "Support",
    company: "Homenick-Hartmann",
    phone: "785-985-6541",
    email: "Ernest6543@claimab.com",
    address: "Michael I. Days 3756 Preston Street Wichita",
    notes: "Progressive Systematic Application",
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 11,
    firstname: "Nicolette",
    lastname: "Trapani",
    image: user1,
    department: "Engineering",
    company: "Gleason",
    phone: "652-632-6520",
    email: "Nicoletteesdasd4@claimab.com",
    address: "Carol J. Stephens 1635 Franklin Street Montgomery",
    notes: "Vision-Oriented Nextgeneration Hardware",
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 12,
    firstname: "Virginia",
    lastname: "Bourdeau",
    image: user2,
    department: "Support",
    company: "McKenzie and Sons",
    phone: "125-985-3210",
    email: "Bourdeauerwe@claimab.com",
    address: "Donald M. Palmer 2595 Pearlman Avenue",
    notes: "Multi-Lateral Contextually-Based Collaboration",
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },
  {
    id: 13,
    firstname: "Janita",
    lastname: "Vogl",
    image: user3,
    department: "Sales",
    company: "Erdman-Moen",
    phone: "541-521-6320",
    email: "Janitafdaa@claimab.com",
    address: "Micheal R. Porterfield 508 Virginia Street",
    notes: "Optimized Reciprocal Core",
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 14,
    firstname: "Jeneva",
    lastname: "Bridgeforth",
    image: user4,
    department: "Engineering",
    company: "Fay LLC",
    phone: "975-895-5240",
    email: "Bridgeforth564@claimab.com",
    address: "Nathan K. Flores 1516 Holt Street West Palm",
    notes: "Distributed Scalable Database",
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 15,
    firstname: "Roselia",
    lastname: "Principe",
    image: user5,
    department: "Sales",
    company: "Bode-Oberbrunner",
    phone: "874-546-6521",
    email: "Principe326@claimab.com",
    address: "2915 Auburn Creek LnLeague City",
    notes: "Digitized Content-Based Hardware",
    frequentlycontacted: false,
    starred: true,
    deleted: false,
  },
  {
    id: 16,
    firstname: "Elvira",
    lastname: "Hylton",
    image: user1,
    department: "Support",
    company: "Pagac Group",
    phone: "652-542-5200",
    email: "Elviraoknsss@claimab.com",
    address: "2725 Cottage Rd Alpine",
    notes: "Reduced Intangible Challenge",
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 17,
    firstname: "Maragaret",
    lastname: "Pecor",
    image: user2,
    department: "Sales",
    company: "Predovic and Sons",
    phone: "326-984-1200",
    email: "Maragaret4352@mediafire.com",
    address: "307 Hardy St Aberdeen",
    notes: "Secured Impactful Project",
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 18,
    firstname: "Willena",
    lastname: "Sugrue",
    image: user3,
    department: "Support",
    company: "Graham Group",
    phone: "265-632-4521",
    email: "Willena75637@claimab.com",
    address: "15919 Golf Club Dr Crosby",
    notes: "Inverse Directional Throughput",
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 19,
    firstname: "Eura",
    lastname: "Solley",
    image: user4,
    department: "Sales",
    company: "Toy-Ryan",
    phone: "645-647-4800",
    email: "Solley6472@claimab.com",
    address: "Po Box 144 Rhome",
    notes: "Organized Disintermediate Budgetarymanagement",
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 20,
    firstname: "Velva",
    lastname: "Brockett",
    image: user5,
    department: "Support",
    company: "Walsh Ltd",
    phone: "654-985-6520",
    email: "Brocketterewgdb@claimab.com",
    address: "34 Fairview Ln Palm Coast",
    notes: "Seamless Object-Oriented Framework",
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
  {
    id: 21,
    firstname: "Anya",
    lastname: "Snapp",
    image: user3,
    department: "Support",
    company: "Romaguera Inc",
    phone: "456-652-3210",
    email: "Snapp76848@claimab.com",
    address: "17919 Barney Dr Accokeek",
    notes: "Realigned Attitude-Oriented Standardization",
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },
  {
    id: 22,
    firstname: "Latoria",
    lastname: "Penaloza",
    image: user1,
    department: "Engineering",
    company: "Leuschke",
    phone: "459-985-4520",
    email: "Penaloza3546@claimab.com",
    address: "14 Huntington Dr Greenbrier",
    notes: "Focused Modular Securedline",
    frequentlycontacted: true,
    starred: false,
    deleted: true,
  },
  {
    id: 23,
    firstname: "Tamika",
    lastname: "Inman",
    image: user2,
    department: "Sales",
    company: "Schumm",
    phone: "645-978-4150",
    email: "Tamikadfdf45@claimab.com",
    address: "1341 Mentionville Rd Darien",
    notes: "Visionary Executive Initiative",
    frequentlycontacted: true,
    starred: false,
    deleted: true,
  },
  {
    id: 24,
    firstname: "Erich",
    lastname: "Aragon",
    image: user3,
    department: "Business Development",
    company: "Brakus",
    phone: "450-980-6520",
    email: "Aragondfdf4567@claimab.com",
    address: "13 Pent Rd Branford",
    notes: "Multi-Tiered Hybrid Groupware",
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 25,
    firstname: "Johanna",
    lastname: "Randel",
    image: user4,
    department: "Sales",
    company: "Goyette",
    phone: "120-320-4520",
    email: "Johanna456@claimab.com",
    address: "5791 S Staghorn Cholla Ct Apache Junction",
    notes: "Reduced Tangible Project",
    frequentlycontacted: true,
    starred: true,
    deleted: true,
  },
  {
    id: 26,
    firstname: "Victorina",
    lastname: "Heinze",
    image: user4,
    department: "Business Development",
    company: "Fritsch",
    phone: "452-521-1230",
    email: "Victorina4545@claimab.com",
    address: "69 El Molino Dr Clayton",
    notes: "Enhanced Web-Enabled Info-Mediaries",
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 27,
    firstname: "Kiley",
    lastname: "Light",
    image: user5,
    department: "Sales",
    company: "Langosh",
    phone: "652-452-1230",
    email: "Kileydfdfd45@claimab.com",
    address: "215 Waterfront Ct Noblesville",
    notes: "Function-Based Systemic Localareanetwork",
    frequentlycontacted: false,
    starred: true,
    deleted: false,
  },
  {
    id: 28,
    firstname: "Sanford",
    lastname: "Delorenzo",
    image: user1,
    department: "Engineering",
    company: "Huels",
    phone: "963-652-1230",
    email: "Delorenzo3456@claimab.com",
    address: "11212 Amber Rd Manistee",
    notes: "Reactive Transitional Archive",
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 29,
    firstname: "Hans",
    lastname: "Strebel",
    image: user2,
    department: "Sales",
    company: "Kohler",
    phone: "546-654-1230",
    email: "Strebel345@claimab.com",
    address: "2009 W Azalea Ave Baker",
    notes: "Operative Mobile Portal",
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 30,
    firstname: "Roger",
    lastname: "Trinidad",
    image: user1,
    department: "Sales",
    company: "Kling-Hintz",
    phone: "123-456-7890",
    email: "3mcrz8gmymd@claimab.com",
    address: "203 Dawn Dr, Mount Holly, NC, 28120",
    notes: "Fundamental Maximized Systemengine",
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
];
mock.onGet("/api/data/contacts/ContactsData").reply(() => {
  const contacts = ContactList;
  return [200, JSON.parse(JSON.stringify(contacts))];
});*/
export default ContactList;
