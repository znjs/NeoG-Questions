import { createServer, Model, RestSerializer } from "miragejs";
import { nanoid } from "nanoid";

createServer({
  serializers: {
    application: RestSerializer,
  },
  models: {
    playList: Model,
  },

  routes() {
    // this.namespace = "api";
    this.timing = 1500;

    this.get("/api/todos", () => [
      { id: 0, text: "buy groceries", isDone: false },
      { id: 1, text: "Walk the dog", isDone: false },
      { id: 2, text: "Buy egg", isDone: false },
      { id: 3, text: "Learn Mirage", isDone: false },
    ]);
  },
});
