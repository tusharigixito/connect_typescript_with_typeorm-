"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
const profile_1 = require("./entities/profile");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
  const userrepo = AppDataSource.getRepository(user_1.User);
  // 00000000000000000 find the record
  // const allRecord = await userrepo.find();
  // res.json(allRecord);
  //0000000000000000000000000000000 delte
  // await userrepo.delete(1);
  // res.send("record deleted");
  //0000000000000000000 create
  // let user: User = new User();
  // user.firstName = "Vedant";
  // user.lastName = "shahi";
  // user.email = "vedants3@gmail.com";
  // const userInsert = await userrepo.save(user);
  // res.json(userInsert);
  // update
  // const updated = await userrepo.update(3, { lastName: "shahiiii" });
  // // res.json(updated);
  // res.send("record updated");
});
app.get("/rel", async (req, res) => {
  const userrepo = AppDataSource.getRepository(user_1.User);
  const profilerepo = AppDataSource.getRepository(profile_1.Profile);
  let profile = new profile_1.Profile();
  profile.gender = "male";
  profile.photo = "profile-pic";
  const profileInsert = await profilerepo.save(profile);
  let user = new user_1.User();
  user.firstName = "Arvind";
  user.lastName = "Pathak3";
  user.email = "arvindp23@gmail.com";
  user.profile = profileInsert;
  const userInsert = await userrepo.save(user);
  console.log("done");
  res.json(userInsert);
});
const AppDataSource = new typeorm_1.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "postgres",
  entities: ["entities/*{.ts,.ts}"],
  synchronize: true,
  logging: true, // used to represent the query at the end
});
AppDataSource.initialize()
  .then(() => {
    // app.get("/", (req, res) => {
    //   res.send("hiiiiiiiii");
    // });
    console.log("sucesss");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(6000, () => {
  console.log("running on port 6000");
});
