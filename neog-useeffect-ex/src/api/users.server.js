import { createServer, Model, RestSerializer } from "miragejs";
import { nanoid } from "nanoid";
import faker from "@faker-js/faker";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("users");

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
    },

    // seeds(server) {
    //   server.create("user", { id: nanoid(), name: "Ram" });
    //   server.create("user", { id: nanoid(), name: "Shyam" });
    // },

    seeds(server) {
      for (let i = 0; i < 50; i++) {
        server.create("user", {
          id: faker.datatype.uuid(),
          name: faker.name.findName(),
        });
      }
      // [...Array(50)].forEach((_) => {
      //   server.create("user", {
      //     id: faker.datatype.uuid(),
      //     name: faker.name.findName(),
      //   });
      // });
    },
  });
}
