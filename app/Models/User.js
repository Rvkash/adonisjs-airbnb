"use strict";

const Model = use("Model");
const Hash = use("Hash");

class User extends Model {
  // código existente

  properties() {
    return this.hasMany("App/Models/Property");
  }
}

module.exports = User;
